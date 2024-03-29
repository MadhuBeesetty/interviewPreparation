// linked list
// every linked list has a node - we have a value and a reference to the next point in a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length = this.length + 1;
  };

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    };
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  };
};

let newList = new SingleLinkedList();
newList.push('madhu');
newList.push('sudhan');
newList.push('cookie');

console.log(newList);
console.log(newList.head);
console.log(newList.head.next);
console.log(newList.tail);
// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.pop();
// console.log(newList);

// newList.push('madhu');
// newList.push('sudhan');
// newList.push('cookie');

// console.log(newList);
