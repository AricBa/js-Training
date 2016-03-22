/**
 * Created by C5226508 on 3/22/2016.
 */
app
  .controller('homeCtrl',[function(){
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
     */
    /**
     * @param {ListNode} node
     * @return {void} Do not return anything, modify node in-place instead.
     */
    var deleteNode = function(node) {
      while(head.next.next){
        if(head.val === node.val){
          head = head.next;
          return;
        }else{
          head = head.next
        }
      }

      if(!head.next.next && head.next.val === node.val){
        head.next = null;
      }

    };



    //这道题让我们删除链表的一个节点，更通常不同的是，没有给我们链表的起点，
    // 只给我们了一个要删的节点，跟我们以前遇到的情况不太一样，我们之前要删除一个节点的方法是
    // 要有其前一个节点的位置，然后将其前一个节点的next连向要删节点的下一个，
    // 然后delete掉要删的节点即可。这道题的处理方法是先把当前节点的值用下一个节点的值覆盖了，
    // 然后我们删除下一个节点即可

    var deleteNode = function(node) {
      node.val = node.next.val;
      node.next = node.next.next;
    };
    //一种是给了一个链表，给了一个值，而这里是给了一个节点，要删除的节点
  }]);
