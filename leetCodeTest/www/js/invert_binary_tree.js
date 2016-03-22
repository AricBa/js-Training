/**
 * Created by C5226508 on 3/15/2016.
 */
app
  .controller('homeCtrl',[function(){
    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    //递归翻转当前节点的左子树与右子树
    var invertTree = function(root) {
      var tree;
      if(!root){
        return root;
      }
      tree = root.left;
      root.left = root.right;
      root.right = tree;
      invertTree(root.left);
      invertTree(root.right);
      return root
    };//success 60%

    //利用堆栈来实现翻转，binary tree原本就是由堆栈实现的
  }]);


