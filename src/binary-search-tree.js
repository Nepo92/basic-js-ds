const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
    #rootObject = {};

    root() {
        const entries = Object.entries(this.#rootObject);

        return entries.length ? this.#rootObject : null;
    }

    add(data) {
        const root = this.root();

        if (!root) {
            this.#rootObject.data = data;
        } else {
            this.#addBranch(data, root);
        }
    }

    #addBranch(data, node) {
        if (data < node.data) {
            return this.#addLeftBranch(data, node);
        } else {
            return this.#addRightBranch(data, node);
        }
    }

    #addLeftBranch(data, node) {
        if (!node.left) {
            node.left = {};
            node.left.data = data;
        } else {
            return this.#addBranch(data, node.left);
        }
    }

    #addRightBranch(data, node) {
        if (!node.right) {
            node.right = {};
            node.right.data = data;
        } else {
            return this.#addBranch(data, node.right);
        }
    }

    has(data) {
        return Boolean(this.find(data));
    }

    find(data) {
        const root = this.root();

        if (data === root.data) {
            return root;
        } else if (data < root.data) {
            return this.#comparison(data, root.left);
        } else {
            return this.#comparison(data, root.right);
        }
    }

    #comparison(data, node) {
        if (!node) {
            return null;
        }

        if (data === node.data) {
            return node;
        } else if (data < node.data) {
            return this.#comparison(data, node.left);
        } else {
            return this.#comparison(data, node.right);
        }
    }

    #isChildren(data) {
        return typeof data === "object";
    }

    remove(data) {
        const root = this.root();
        const array = [];

        this.#getValues(root, array);

        const sorted = array.filter((el) => el !== data);

        this.#rootObject = {};

        sorted.forEach((item) => {
            this.add(item);
        });
    }

    #getValues(root, array) {
        for (let item in root) {
            if (typeof root[item] !== 'object') {
                array.push(root[item]);
            } else {
                this.#getValues(root[item], array);
            }
        }
    }

    min() {
        const root = this.root();
        const array = [];

        this.#getValues(root, array);

        return Math.min(...array);
    }

    max() {
        const root = this.root();
        const array = [];

        this.#getValues(root, array);

        return Math.max(...array);
    }
}


module.exports = {
  BinarySearchTree
};