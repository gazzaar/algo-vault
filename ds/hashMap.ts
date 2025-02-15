class HashMap {
  loadFactor: number;
  capacity: number;
  bucket: Array<Array<[string, any]>>;

  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 5;
    this.bucket = Array(this.capacity);
  }

  private hash(key: string): number {
    let hashCode: number = 0;
    const PRIMENUMBER: number = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hashCode = (PRIMENUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key: string, value: any) {
    let index = this.hash(key);

    if (!this.bucket[index]) {
      this.bucket[index] = [];
    }
    this.bucket[index].push([key, value]);
  }

  get(key: string) {
    let index = this.hash(key);

    if (!this.bucket[index]) {
      return null;
    } else if (this.bucket[index]) {
      for (let keys of this.bucket[index]) {
        let [k, v] = keys;
        if (key == k) {
          return { [k]: v };
        } else {
          return null;
        }
      }
    }
  }
}

const ht: HashMap = new HashMap();

// ht.set('manga', 'data');
ht.set('ahmed', ['design', 'data', 'web']);
ht.set('mazen', 'data');
console.log(ht.get('fathy'));
console.log(ht.get('manga'));
console.log(ht.get('ahmed'));
