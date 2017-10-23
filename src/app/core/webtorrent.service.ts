import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class WebtorrentService {
  public webtorrent;
  public fs;
  public dht;
  public bittorrent;
  public discovery;

  constructor() {
    const Webtorrent = nodeRequire('webtorrent');

    this.webtorrent = new Webtorrent();
    this.fs = nodeRequire('fs');
  }

  downloadFileFromWriteStream(id, stream, callback) {
    const file = `torrents/${id}.torrent`;
    const writeStream = this.fs.createWriteStream(file);

    stream.pipe(writeStream);

    writeStream.on('finish', () => {
      return this.webtorrent.add(file, callback);
    });
  }

  seedFile(file, options, callback) {
    return this.webtorrent.seed(file, options, callback);
  }

  onAddTorrent(callback) {
    return this.webtorrent.on('torrent', callback);
  }

  onTorrentError(callback) {
    return this.webtorrent.on('error', callback);
  }

  getTorrents() {
    return this.webtorrent.torrents;
  }

  getPeers(options) {
    const Bittorrent = nodeRequire('bittorrent-tracker');
    const Discovery = nodeRequire('torrent-discovery');
    const DHT = nodeRequire('bittorrent-dht');

    this.dht = new DHT();
    this.dht.listen(20000);

    this.bittorrent = new Bittorrent(options);
    this.bittorrent.start();

    this.discovery = new Discovery(options);
  }
}
