(function(){
  'use strict';

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
       * @param {ListNode} head
       * @return {ListNode}
       */
        //?????????????????????????????
      var reverseList = function(head) {
        var linkedList = [],
          newList = new ListNode('head'),
          currentNode = new ListNode();
        currentNode = newList;
        if(!head)return head;
        while(head.next){
          linkedList.push(head.val);
          head = head.next;
        }
        linkedList.push(head.val);

        for(var i = linkedList.length-1; i >= 0; i--){
          currentNode.next = new ListNode(linkedList[i]);
          currentNode = currentNode.next;
        }
        return newList.next;
      };


      //?? ???
    }]);
}());


