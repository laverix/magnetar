import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class RutrackerService {
  public rutracker;

  constructor() {
    const RutrackerApi = nodeRequire('rutracker-api');
    const credentials = {
      username: 'mrmagnetapp',
      password: 'mrmagnetapp'
    };

    this.rutracker = new RutrackerApi(credentials);
  }

  searchByTitle(query, callback) {
    return this.rutracker.search(query, callback);
  }
}
