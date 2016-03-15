(function(){
  'use strict';
  app
    .controller('homeCtrl',['$scope',function($scope){
      /**
       * @param {number} num
       * @return {number}
       */
      var addDigits = function(num) {
        var currentNum = 0;

        while( num >= 10 ){
          currentNum += (num % 10);
          num = (( num - num % 10 ) / 10 );
        }
        console.log(num);
        console.log(currentNum);
        currentNum += num;
        if(currentNum >= 10){
           return addDigits(currentNum);
        }else{
          return currentNum;
        }
      };
      
      var addDigits = function(num) {
        var remainder = 0;
        while(num >= 10){
          remainder += num % 10;
          num = (num - num % 10) / 10 ;
        }

        remainder += num;
        if(remainder >= 10){
          return addDigits(remainder);
        }
        else{
          return remainder;
        }
      };
//  var addDigits = function(num) {
//     return 1 + (num - 1) % 9;
// }
// var addDigits = function(num) {
      // return num === 0 ? 0 : num - 9 * Math.floor((num - 1) / 9);
// };

      //var addDigits = function(num){
      //  return ( num %9 === 0 && num !== 0) ? 9 :(num % 9);
      //};

      console.log(addDigits(11165));
    }])
}());
