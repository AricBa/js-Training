/**
 * Created by C5226508 on 1/25/2016.
 */
/**
 * Created by C5226508 on 1/22/2016.
 */
app
  .controller('homeCtrl',[function(){
    var addTwoNumbers = function(l1, l2) {

      var carry = 0,
        result = new ListNode(-1),
        resHead = result;
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

    var addTwoNumbers = function(l1, l2) {
      var headList = new ListNode('header'),
        currentNum = 0,
        nextNum = 0,
        currentList = headList;

      while(l1 && l2){
        currentNum = l1.val + l2.val + nextNum;
        if(currentNum >= 10){
          currentNum = currentNum - 10;
          nextNum = 1;
        }else{
          nextNum = 0;
        }

        currentList.next = new ListNode(currentNum);
        currentList = currentList.next;
        l1 = l1.next;
        l2 = l2.next;
      }

      while(l1){
        currentNum = l1.val + nextNum;
        if(currentNum >= 10){
          currentNum = currentNum - 10;
          nextNum = 1;
        }else{
          nextNum = 0;
        }

        currentList.next = new ListNode(currentNum);
        currentList = currentList.next;
        l1 = l1.next;
      }

      while(l2){
        currentNum = l2.val + nextNum;
        if(currentNum >= 10){
          currentNum = currentNum - 10;
          nextNum = 1;
        }else{
          nextNum = 0;
        }

        currentList.next = new ListNode(currentNum);
        currentList = currentList.next;
        l2 = l2.next;
      }

      if(nextNum > 0 ){
        currentList.next = new ListNode(1);
      }

      return headList.next;
    }
  }]);