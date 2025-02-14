class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;
    const PRIMENUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode += PRIMENUMBER * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
}

const hashMap = new HashMap(1, 16);
console.log(hashMap.hash('apple'));
