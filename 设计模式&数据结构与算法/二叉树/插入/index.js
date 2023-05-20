const { createBinarySearchTree, TreeNode } = require('../index');

const insertIntoBST = function(root, val) {
    if (root === null) return new TreeNode(val);
    let head = root;
    while(head !== null) {
        if (head.val > val) {
            if (head.left === null) {
                head.left = new TreeNode(val);
                break;
            } else {
                head = head.left;
            }
        } else {
            if (head.right === null) {
                head.right = new TreeNode(val);
                break;
            } else {
                head = head.right;
            }
        }
    }
    return root;
};

const tree = createBinarySearchTree();

const data = insertIntoBST(tree, 69);

console.log(JSON.stringify(data, null, 2));