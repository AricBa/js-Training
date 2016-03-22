/**
 * Created by C5226508 on 3/22/2016.
 */
(function(){
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
       * @param {TreeNode} p
       * @param {TreeNode} q
       * @return {boolean}
       */
      var isSameTree = function(p, q) {
        if(p&&q){
          if(p.val === q.val){
            if(isSameTree(p.left,q.left) && isSameTree(p.right,q.right)){
              return true
            }else{
              return false
            }
          }else{
            return false
          }
        }else if(!p && !q){
          return true
        }else{
          return false
        }
      };//success 64%
    }]);
}());
