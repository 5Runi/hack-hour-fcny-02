/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The reversed linked list should look like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * and the function should return a node with the value of 5
 *
 * Extension:
 * Do it in place
 *
 */

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const reverseLinkedList = <T>(head: ListNode<T> | null): ListNode<T> | null => {
  //to create a reversed linked list you need 3 pointers- the current to point to where you are, the prev to point to the previous and the next so that you don't drop the rest of the list (to hold the rest of the list when you break the connection)
  let curr = head;
  let prev: ListNode<T> | null = null;
  let next: ListNode<T> | null = null;
  //create a while loop to traverse the link (as long as there a node at the current pointer)
  while(curr !== null) {
    //1.save the next node
    next = curr.next
    //2. reverse the link (the pointer flip)
    curr.next = prev;
    //3. move the pointers forward
    prev = curr;
    curr = next;
  }
  //if had linkedList wrapper would just return null;
  //return 'prev' because its the new head of the reversed list
  return prev;
};

export { ListNode, reverseLinkedList };
