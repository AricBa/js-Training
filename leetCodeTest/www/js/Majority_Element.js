(function(){
  'use strict';

  app
    .controller('homeCtrl',[function(){
      /**Given an array of size n, find the majority element. The majority element is
        *the element that appears more than ? n/2 ? times.
        *You may assume that the array is non-empty and the majority
        *element always exist in the array.
       */
      /**
       * @param {number[]} nums
       * @return {number}
       */

      //var majorityElement = function(nums) {
      //  var obj ={},
      //    length = nums.length;
      //
      //  for(var i = 0; i < length; i++){
      //    if(obj[nums[i]]){
      //      obj[nums[i]] ++
      //    }else{
      //      obj[nums[i]] = 1;
      //    }
      //    if(obj[nums[i]] > length /2){
      //      return nums[i];
      //    }
      //  }
      //};//success

      //????????n/2?????????????len-1?/2?
      var majorityElement = function(nums) {
        var len = nums.length;
        nums.sort();
        return (len % 2 === 0) ? nums[len/2] : nums[(len-1)/2];
      };
      console.log(majorityElement([1]))
    }]);
}());
