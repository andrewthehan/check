export interface Serializer<T> {
  serialize(value: T): string;
  deserialize(item: string): T;
}

export class JSONSerializer<T> implements Serializer<T> {
  serialize(value: T): string {
    return JSON.stringify(value);
  }

  deserialize(item: string): T {
    return JSON.parse(item, (key, value) => {
      if (key.endsWith('Date') && value != null) {
        return new Date(value);
      }
      return value;
    });
  }
}
