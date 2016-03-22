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
     * @return {number}
     */
    /**  左子树最大深度，右子树最大深度，递归到最后，
     * 每个节点的最大深度等于他的左子树最大深度与右子树最大深度的最大值加一
     */
    var maxDepth = function(root){
      if(!root){
        return 0;
      }else if(!root.left && !root.right){
        return  1;
      }else{
        if(maxDepth(root.right) > maxDepth(root.left)){
          return maxDepth(root.right) + 1;
        }else{
          return maxDepth(root.left) + 1;
        }
      }
    };//Time Limit Exceeded

    var maxDepth = function(root){
      var leftDepth = 0,
          rightDepth = 0;
      if(!root){
        return 0;
      }else if(!root.left && !root.right){
        return  1;
      }else{
        leftDepth = maxDepth(root.left);
        rightDepth = maxDepth(root.right);
      }
      return leftDepth > rightDepth ? leftDepth +1 : rightDepth +1 ;
    };//success
  }]);