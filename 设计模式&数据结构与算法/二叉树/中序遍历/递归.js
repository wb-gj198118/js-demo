const { createBinarySearchTree } = require('../index');

// 中序遍历
function inorderTraversal(root) {
    const results = [];
    // 递归方案
    function inorder(root) {
        if (root !== null) {
            inorder(root.left);
            results.push(root.val);
            inorder(root.right);
        }
    }
    inorder(root);
    return results;
}

console.log(' 中序遍历 : ', inorderTraversal(createBinarySearchTree()));