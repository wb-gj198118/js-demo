const { createBinarySearchTree } = require('../index');

// 后序遍历
function inorderTraversal(root) {
    const results = [];
    // 循环方案
    const stack = [{ node: root, flag: false }];
    while (stack.length > 0) {
        const { node, flag } = stack.pop();
        if (flag) {
            results.push(node.val);
        } else {
            stack.push({ node, flag: true });
            if (node.left) stack.push({ node: node.left, flag: false });
            if (node.right) stack.push({ node: node.right, flag: false });
        }
    }
    return results;
}

console.log(' 后序遍历 : ', inorderTraversal(createBinarySearchTree()));