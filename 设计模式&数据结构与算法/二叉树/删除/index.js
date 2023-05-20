const { createBinarySearchTree } = require('../index');

const deleteNode = function(root, key) {
    let dfs = function(root, key) {
        if(!root) return null;
        if(root.val > key) {
            root.left = dfs(root.left, key);
        } else if(root.val < key) {
            root.right = dfs(root.right, key);
        } else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            }
            if(!root.right) {
                return root.left;
            }
            let node = root.left;
            while(node.right) {
                node = node.right;
            }
            node.right = root.right;
            return root.left;
        }
        return root;
    }
    
    return dfs(root, key);
};

console.log(deleteNode(createBinarySearchTree(), 24));