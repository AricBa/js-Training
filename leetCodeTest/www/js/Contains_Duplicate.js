(function(){
  'use strict';

  app
    .controller('homeCtrl',[function(){
      /**
       * @param {number[]} nums
       * @return {boolean}
       */
      var containsDuplicate = function(nums) {
        var obj={};
        if(nums.length === 0){
          return false;
        }
        for(var i = 0; i < nums.length ;i++){
          console.log(obj[nums[i]]);
          if(!obj[nums[i]]){
            obj[nums[i]] = 1;
          }else{
            return true;
          }
        }

        return false;
      };//success 97%
    }]);
}());
