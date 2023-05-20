const { createBinarySearchTree } = require('../index');

// 前序遍历
function inorderTraversal(root) {
    const results = [];
    // 循环方案
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            results.push(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return results;
}

console.log(' 前序遍历 : ',inorderTraversal(createBinarySearchTree()));