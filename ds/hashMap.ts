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
          return v;
        }
      }
      return null;
    }
  }

  keys() {
    let keysArr: string[] = [];
    for (let keys of this.bucket) {
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          if (!keysArr.includes(keys[i][0])) {
            keysArr.push(keys[i][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

const ht: HashMap = new HashMap();

ht.set('manga', 'data');
ht.set('ahmed', ['design', 'data', 'web']);
ht.set('mazen', 'design');
ht.set('fathy', 'CS');
// BUG: ht.set('mazen', 'mobile');
//
// console.log(ht.get('fathy'));
// console.log(ht.get('manga'));
// console.log(ht.get('ahmed'));
// console.log(ht.bucket);
