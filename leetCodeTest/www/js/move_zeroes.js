/**
 * Created by C5226508 on 3/21/2016.
 */
app
  .controller('homeCtrl',[function(){
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    //1、循环数组中的每个元素，循环次数为数组长度
    // 删除数组中为零的元素，在末尾加上0
    var moveZeroes = function(nums) {
      var length = nums.length;

      for(var i = 0; i< length; i++){
        if(nums[i] === 0){
          nums.splice(i,1);
          nums.push(0);
          i--;
          length--;
        }
      }
    };//success 70%

    //2、去除数组中不为零的数赋给数组前面的数，例如第一个元素不为零则给nums[0],
    //第二个不为零，给第二个，第三个为零忽略，第四个不为零给第三个值，最后在数组后面添加0

    console.log(moveZeroes([0,1,0,3,0,0,0,0,0,12,0,0]));
  }]);


