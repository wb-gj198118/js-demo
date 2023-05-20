const { createBinarySearchTree } = require('../index');

// 前序遍历
function inorderTraversal(root) {
    const results = [];
    // 递归方案
    function inorder(root) {
        if (root !== null) {
            results.push(root.val);
            inorder(root.left);
            inorder(root.right);
        }
    }
    inorder(root);
    return results;
}

console.log(' 前序遍历 : ', inorderTraversal(createBinarySearchTree()));