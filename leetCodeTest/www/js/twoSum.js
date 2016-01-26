/**
 * Created by C5226508 on 1/22/2016.
 */
app
.controller('homeCtrl',[function(){
    var twoSum = function(numbers, target) {
      var map = {},
        i,
        length = numbers.length,
        value,
        neededValue,
        result = [];

      for(i = 0; i < length; i++) {
        value = numbers[i];
        neededValue = target - value;
        if (neededValue in map) {
          result.push(map[neededValue] + 1);
          result.push(i + 1);
          break;
        } else {
          map[value] = i;
        }
      }
      return result;
    };

    var twoSum2 = function(numbers, target) {
      var map = {},
        i,
        length = numbers.length,
        value,
        neededValue,
        result = [];

      for(i = 0; i < length; i++) {
        value = numbers[i];
        neededValue = target - value;
        if (map.hasOwnProperty(neededValue)) {
          result.push(map[neededValue] + 1);
          result.push(i + 1);
          break;
        } else {
          map[value] = i;
        }
      }
      return result;
    };

    var twoSum1 = function(nums, target) {
      var index1=0;
      var index2 =0;
      var index3 = 0;

      for(var i = 0;i<nums.length;i++){
        index3 = nums.indexOf(target-nums[i]);
        if(index3 !== -1 && index3 !== i){
          index1 = i+1;
          index2 = nums.indexOf(target-nums[i])+1;
          break;
        }
      }

      if(index1< index2){
        return [index1,index2];
      }else{
        return [index2,index1];
      }
    };

    var twoSum3 = function(numbers, target) {
      var i,
        length = numbers.length,
        neededValue,
        index,
        result = [];

      for(i = 0; i < length; i++) {
        neededValue = target - numbers[0];
        numbers.splice(0,1)
        index = (numbers).indexOf(neededValue);
        if (index !== -1) {
          result.push(i + 1);
          result.push(index+ i + 2);
          break;
        }
      }
      return result;
    };

    //twoSum([0,2,3,5,0,6,7,2,3],0);
    twoSum3([3,6,7,8,9,2,11,12,143,11,11,11,1,4],6);
}])