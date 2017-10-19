import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class WebtorrentService {
  constructor() {
    const Webtorrent = nodeRequire('webtorrent');

    const webtorrent = new Webtorrent();
  }
}
