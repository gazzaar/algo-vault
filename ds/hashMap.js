class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    // Initialize Array
    this.bucket = Array(capacity);
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
    // console.log(this.bucket[hashed]);
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

// const hashMap = new HashMap(1, 16);
// const hashMap2 = new HashMap(1, 16);
// //
// // console.log('First hash:', hashMap.hash('manga'));
// //
// console.log('Setting value:', hashMap.set('manga', 22));
// //
// // console.log('Direct bucket access:', hashMap.bucket[4]['manga']);
// //
// // console.log('Another set call:', hashMap.set('manga', 29));
// //
// // console.log('Another set call:', hashMap.set('manga', 9));
// // console.log('Direct bucket access:', hashMap.bucket[4]);
// //
// // console.log('Another set call:', hashMap.set('manga', 89));
//
// console.log('Another set call:', hashMap2.set('fathy', 13));
//
// console.log('Direct bucket access:', hashMap.bucket);
// console.log('Direct bucket access:', hashMap2.bucket);
