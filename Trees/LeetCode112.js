
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false;
    }

    let hasSum = false;
    let helper = function (node, targetSum) {
        if (hasSum) {
            return;
        }

        if (node.left === null && node.right === null) {
            if (node.val === targetSum) {
                hasSum = true;
            }
            return;
        }

        if (node.left !== null) {
            helper(node.left, targetSum - node.val);

        }
        if (node.right !== null) {
            helper(node.right, targetSum - node.val);
        }

    }

    helper(root, targetSum);
    return hasSum;
};

let level0 = new TreeNode(5);
let level1_0 = new TreeNode(4);
let level1_1 = new TreeNode(8);
level0.left = level1_0;
level0.right = level1_1;
let level2_0 = new TreeNode(11);
let level2_2 = new TreeNode(13);
let level2_3 = new TreeNode(14);
level1_0.left = level2_0;
level1_1.left = level2_2;
level1_1.right = level2_3;
let level3_0 = new TreeNode(7);
let level3_1 = new TreeNode(2);
let level3_5 = new TreeNode(1);
level2_0.left = level3_0;
level2_0.right = level3_1;
level2_3.right = level3_5;

console.log(hasPathSum(level0, 223));