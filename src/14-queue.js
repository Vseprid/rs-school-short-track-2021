const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(element) {
    const newQueue = new ListNode(element);
    if (!this.first) {
      this.first = newQueue;
      this.last = newQueue;
    } else {
      this.last.next = newQueue;
      this.last = newQueue;
    }
    this.len++;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first.value;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.len--;

    return temp;
  }
}

module.exports = Queue;
