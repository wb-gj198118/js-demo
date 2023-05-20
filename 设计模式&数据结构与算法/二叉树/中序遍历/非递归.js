const { createBinarySearchTree } = require('../index');

// 中序遍历
function inorderTraversal(root) {
    const results = [];
    // 循环方案
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            if (node.right) stack.push(node.right);
            results.push(node.val);
            if (node.left) stack.push(node.left);
        }
    }
    return results;
}

console.log(' 中序遍历 : ', inorderTraversal(createBinarySearchTree()));