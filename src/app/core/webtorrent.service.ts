import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class WebtorrentService {
  public webtorrent;

  constructor() {
    const Webtorrent = nodeRequire('webtorrent');

    this.webtorrent = new Webtorrent();
  }

  seedFile(file, options, callback) {
    return this.webtorrent.seed(file, options, callback);
  }

  onAddTorrent(callback) {
    return this.webtorrent.on('torrent', callback);
  }

  getTorrents() {
    return this.webtorrent.torrents;
  }
}
