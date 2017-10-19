import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class RutrackerService {

  constructor() {
    const RutrackerApi = nodeRequire('rutracker-api');
    const credentials = {
      username: 'mrmagnetapp',
      password: 'mrmagnetapp'
    };
    const rutracker = new RutrackerApi(credentials);
    const query = 'Человек';
    const callback = console.log.bind(console);

    rutracker.on('login', () => {
      rutracker.search(query, callback);
    });
  }
}
