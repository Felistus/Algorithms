// Given a Queue Q containing N elements. The task is to reverse the Queue.
// Your task is to complete the function rev(),
// that reverses the N elements of the queue.

const rev = (queue) => {
  const lenOfQueue = queue.length;
  const reversedQueue = [];
  for (let i = 0; i < lenOfQueue; i++) {
    reversedQueue.unshift(queue.shift());
  }
  return reversedQueue;
};
const queue = [1, 2, 3, 4, 5];
console.log(rev(queue));
