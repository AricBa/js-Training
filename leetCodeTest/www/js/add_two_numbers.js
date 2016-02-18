/**
 * Created by C5226508 on 1/25/2016.
 */
/**
 * Created by C5226508 on 1/22/2016.
 */
app
  .controller('homeCtrl',[function(){
    var addTwoNumbers = function(l1, l2) {

      var carry = 0;
      var result = new ListNode(-1);
      var resHead = result;
      while(l1 !== null || l2 !== null){
        var sum = carry;
        if(l1 !== null){
          sum += l1.val;
          l1 = l1.next;
        }
        if(l2 !== null){
          sum += l2.val;
          l2 = l2.next;
        }
        var node = null;
        if(sum >= 10){
          node = new ListNode(sum - 10);
          carry = 1;
        }else{
          node = new ListNode(sum);
          carry = 0;
        }
        result.next = node;
        result = result.next;
      }
      if(carry === 1){
        result.next = new ListNode(1);
      }
      return resHead.next;
    };
  }]);