/*
BINARY TREE LEVEL ORDER TRAVERSAL
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/* @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }

    let queue = [root];
    let result = [];
    while (queue.length !== 0) {
        let count = queue.length;
        let children = [];
        for (let i = 1; i <= count; i++) {
            let node = queue.shift();
            children.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(children);
    }

    return result;
}

let level0 = new TreeNode(3);
level0.left = new TreeNode(9);
let level1_1 = new TreeNode(20);
let level2_3 = new TreeNode(15);
let level2_4 = new TreeNode(7);
level0.right = level1_1;
level1_1.left = level2_3;
level1_1.right = level2_4;

console.log(levelOrder(level0));