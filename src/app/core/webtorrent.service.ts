import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class WebtorrentService {
  public webtorrent;

  constructor() {
    const Webtorrent = nodeRequire('webtorrent');

    this.webtorrent = new Webtorrent();
  }

  seedFile(file, callback) {
    return this.webtorrent.seed(file, callback);
  }
}
