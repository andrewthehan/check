import { browser } from '$app/environment';

export class LocalStore<T> {
  private key = '';
  value = $state<T>() as T;

  constructor(key: string, defaultValue: T) {
    this.key = key;

    if (browser) {
      const item = localStorage.getItem(key);
      if (item) {
        this.value = this.deserialize(item);
      } else {
        this.value = defaultValue;
      }
    }

    $effect(() => {
      localStorage.setItem(this.key, this.serialize(this.value));
    });
  }

  serialize(value: T): string {
    return JSON.stringify(value);
  }

  deserialize(item: string): T {
    return JSON.parse(item);
  }
}

export function localStore<T>(key: string, defaultValue: T) {
  return new LocalStore(key, defaultValue);
}
