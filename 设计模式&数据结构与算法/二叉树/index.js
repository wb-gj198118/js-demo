// 节点
class Node {
    constructor() {
        this.val = 0;
        this.left = null;
        this.right = null;
    }
}

// 创建二叉树
function createTree(root, val) {
    let node = new Node();
    node.val = val;
    node.left = null;
    node.right = null;
    if (root === null) {
        root = node;
        return root;
    }
    let curr = root;
    let backup = curr;
    while (curr !== null) {
        backup = curr;
        if (curr.val > val) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    if (backup.val > val) {
        backup.left = node;
    } else {
        backup.right = node;
    }
    return root;
}

const arr = [5, 6, 24, 8, 12, 3, 17, 1, 9];
let tree = null;
arr.forEach((n, i) => {
    tree = createTree(tree, n);
});

console.log(" tree: ", JSON.stringify(tree, null, 2));

// 中序遍历
function inorderTraversalAtMid(root) {
    const results = [];
    // // 递归方案
    // function inorder(root) {
    //     if (root !== null) {
    //         inorder(root.left);
    //         results.push(root.val);
    //         inorder(root.right);
    //     }
    // }
    // inorder(root);
    // 循环方案
    const stack = [];
    let head = root;
    while (stack.length > 0 || head !== null) {
        if (head !== null) {
            stack.push(head);
            head = head.left;
        } else {
            const node = stack.pop();
            results.push(node.val);
            head = node.right;
        }
    }
    return results;
}

// 前序遍历
function inorderTraversalAtBefore(root) {
    const results = [];
    // // 递归方案
    // function inorder(root) {
    //     if (root !== null) {
    //         results.push(root.val);
    //         inorder(root.left);
    //         inorder(root.right);
    //     }
    // }
    // inorder(root);
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

// 后序遍历
function inorderTraversalAtAfter(root) {
    const results = [];
    // // 递归方案
    // function inorder(root) {
    //     if (root !== null) {
    //         inorder(root.right);
    //         inorder(root.left);
    //         results.push(root.val);
    //     }
    // }
    // inorder(root);
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

console.log(" 后序遍历: ", inorderTraversalAtAfter(tree));