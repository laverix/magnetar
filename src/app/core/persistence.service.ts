import {Injectable} from '@angular/core';

declare const nodeRequire: any;

@Injectable()
export class PersistenceService {
  private store;

  constructor() {
    const Store = nodeRequire('electron-store');

    this.store = new Store();
  }

  set(key, value) {
    this.store.set(key, value);
  }

  get(key, value) {
    this.store.get(key, value);
  }

  getStore() {
    return this.store.store;
  }

  clear() {
    this.store.clear();
  }
}
