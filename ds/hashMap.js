class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 17;
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
}

const ht = new HashMap();

ht.set('manga', 'data');
console.log(ht.bucket);
