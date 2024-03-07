
const MAP_SIZE = 100;

class HashMap {
  constructor(buckets = new Array(MAP_SIZE)) {
    this.buckets = buckets;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) 
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    this.buckets[this.hash(key)] = {key: key, value: value};
  }

  get(key) {
    return this.buckets[this.hash(key)].value;
  }

  has(key) {
    return (this.get(key)) ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.buckets[this.hash(key)];
      return true;
    } else {
      return false;
    }
  }

  get length() {
    let counter = 0;
    this.buckets.forEach(item => counter += (!!item));
    return counter;
  }

  clear() {
    let index = 0;
    this.buckets = new Array(MAP_SIZE);
  }

  keys() {
    let arr = [];
    this.buckets.forEach(item => {
      if (item) arr.push(item.key); 
    });
    return arr;
  }

  values() {
    let arr = [];
    this.buckets.forEach(item => {
      if (item) arr.push(item.value);
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.buckets.forEach(item => {
      if (item) arr.push([item.key, item.value])
    });
    return arr;
  }
};

let myMap = new HashMap();
myMap.set('Peter', 'Spiderman');
myMap.set('Steve', 'Captain America');
myMap.set('David', 'A man');
console.log(myMap.get('Steve'));
//console.log(myMap.keys());
//console.log(myMap.values());
console.log(myMap.entries());
