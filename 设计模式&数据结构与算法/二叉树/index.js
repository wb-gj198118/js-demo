// 节点
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}

const defaultArr = [5, 6, 24, 8, 12, 3, 17, 1, 9];

// 创建二叉树
function createBinarySearchTree(arr = defaultArr) {
    let tree = null;
    function createTree(root, val) {
        let node = new TreeNode(val);
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

    arr.forEach((n) => {
        tree = createTree(tree, n);
    });

    console.log(arr, "生成二叉树: ", JSON.stringify(tree, null, 2), '\n');
    return tree;
}

module.exports = {
    createBinarySearchTree,
    TreeNode,
}