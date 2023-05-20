const { createBinarySearchTree } = require('../index');

// 后序遍历
function inorderTraversal(root) {
    const results = [];
    // 递归方案
    function inorder(root) {
        if (root !== null) {
            inorder(root.right);
            inorder(root.left);
            results.push(root.val);
        }
    }
    inorder(root);
    return results;
}

console.log(' 后序遍历 : ', inorderTraversal(createBinarySearchTree()));