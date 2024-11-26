import { browser } from '$app/environment';
import type { Serializer } from './serializers';

export class LocalStore<T> {
  value = $state<T>() as T;

  constructor(
    private key: string,
    defaultValue: T,
    private serializer: Serializer<T>
  ) {
    if (browser) {
      const item = localStorage.getItem(key);
      if (item) {
        this.value = this.serializer.deserialize(item);
      } else {
        this.value = defaultValue;
      }
    }

    $effect(() => {
      localStorage.setItem(this.key, this.serializer.serialize(this.value));
    });
  }
}

export function localStore<T>(
  key: string,
  defaultValue: T,
  serializer: Serializer<T>
): LocalStore<T> {
  return new LocalStore(key, defaultValue, serializer);
}
