const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
        }, null);
}

const getValues = (list, array) => {
    for (let item in list) {
        const current = list[item];

        if (typeof current !== "object") {
            array.push(current);
        } else {
            getValues(list.next, array)
        }
    }
}

function removeKFromList(l, k) {
    const array = [];

    getValues(l, array);

    const removed = array.filter((el) => el !== k);

    return convertArrayToList(removed);
}

module.exports = {
  removeKFromList
};
