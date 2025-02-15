class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 5;
    this.bucket = Array(this.capacity);
  }

  _hash(key) {
    let hashCode = 0;
    const PRIMENUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hashCode = (PRIMENUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.bucket[index]) {
      this.bucket[index] = [];
    }
    this.bucket[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.bucket[index]) {
      return `No data`;
    } else if (this.bucket[index]) {
      for (let keys of this.bucket[index]) {
        let [k, v] = keys;
        if (key == k) {
          return { [k]: v };
        }
      }
    }
  }
}

const ht = new HashMap();

ht.set('manga', 'data');
ht.set('ahmed', ['design', 'data', 'web']);
ht.set('mazen', 'data');
console.log(ht.get('fathy'));
console.log(ht.get('manga'));
console.log(ht.get('ahmed'));
