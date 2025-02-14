class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.bucket = Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const PRIMENUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIMENUMBER * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let hashed = this.hash(key);
    if (this.bucket[hashed] === undefined) {
      return (this.bucket[hashed] = { [key]: value });
    } else if (this.bucket[hashed] != undefined && key in this.bucket[hashed]) {
      return (this.bucket[hashed].key = value);
    } else {
      // linked list here
      return 'doing nothing';
    }
  }
}

const hashMap = new HashMap();

const hashMap2 = new HashMap();

console.log('First hash:', hashMap.set('manga', 'data'));

console.log('Sedond hash:', hashMap2.set('fathy', 'math'));
