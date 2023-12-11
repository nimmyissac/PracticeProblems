

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let result = [];


    let helper = function (node, partialSn, sum) {
        if (node.left === null && node.right === null) {
            if (sum - node.val === 0) {
                partialSn.push(node.val);
                result.push(partialSn.slice());
                pathSum.pop();
            }
            return;
        }
        partialSn.push(node.val);

        if (node.left !== null) {
            helper(node.left, partialSn, sum - node.val);
        }
        if (node.right !== null) {
            helper(node.right, partialSn, sum - node.val);
        }
        partialSn.pop();

    }

    helper(root, [], targetSum);
    return result;

}