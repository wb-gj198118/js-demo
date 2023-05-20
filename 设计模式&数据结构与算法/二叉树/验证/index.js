const { createBinarySearchTree } = require('../index');

const isValidBST = function (root) {
    let pre = -Infinity;
    let stack = [];
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= pre) return false;
        pre = root.val;
        root = root.right;
    }
    return true;
};

console.log('验证二叉搜索树: ', isValidBST(createBinarySearchTree()), '\n');

console.log('验证二叉搜索树: ', isValidBST(createBinarySearchTree([2, 1, 3])), '\n');

console.log('验证二叉搜索树: ', isValidBST(createBinarySearchTree([5, 1, 4, 3, 6])), '\n');
