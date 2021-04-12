/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// function removeKFromList(l, k) {

//   if(l == null){
//     return l;
// }
// while(l.value == k){
//     l = l.next;
// }
// thisNode = l;
// nextNode = thisNode.next;
// while(nextNode != null){
//     if(nextNode.value == k){
//         thisNode.next = nextNode.next;

//         if(thisNode.next == null)
//             break;
//     }
//     thisNode = thisNode.next;
//     nextNode = thisNode.next;
// }
// return l;
// }
// function removeKFromList(l, k) {
//   if (l == null) {
//     return l;
//   }
//   const { value, next } = l;
//   if (value === k) {
//     return next ? removeKFromList(next, k) : null;
//   }
//   return {
//     next: removeKFromList(next),
//     value,
//   };
// }

// function removeKFromList(list, value) {
//   let node = list;
//   let last;

//   if (node && node.value === value) {
//     return node.next;
//   }

//   while (node && node.value !== value) {
//     last = node;
//     node = node.next;
//   }
//   if (last && node.value === value) {
//     last.next = node.next;
//   }
//   return list;
// }

function removeKFromList(l, k) {
  const node = l;
  // Проверка 1 элемента
  let count = 0;
  while (count === 0) {
    if (node.value === k) {
      return removeKFromList(node.next, k);
    }
    count++;
  }
  if (node.next.value === k) {
    node.next = node.next.next;
    return node;
  }

  if (node.next === null) return node;

  removeKFromList(node.next, k);
  return node;
}

module.exports = removeKFromList;
