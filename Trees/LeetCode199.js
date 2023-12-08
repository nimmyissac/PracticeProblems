/* BINARY TREE RIGHT SIDE VIEW */
/* Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom. */
/*  
  Input: root = [1,2,3,null,5,null,4]
  Output: [1,3,4]
*/


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (root === null || root.length === 0) {
        return [];
    }

    let result = [];
    let queue = [root];
    while (queue.length !== 0) {

        let count = queue.length;
        for (let i = 1; i <= count; i++) {
            let node = queue.shift();

            if (i === count) {
                result.push(node.val);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

    }

    return result;

};
