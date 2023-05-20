const { createBinarySearchTree } = require('../index');

const searchBST = function (root, val) {
    while (root) {
        if (root.val > val) {
            root = root.left;
        } else if (root.val < val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
};

console.log(searchBST(createBinarySearchTree(), 6));