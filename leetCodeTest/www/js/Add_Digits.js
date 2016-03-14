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
        currentNum += num;
        if(currentNum >= 10){
          addDigits(currentNum);
        }else{
          return currentNum;
        }
      };

      //var addDigits = function(num){
      //  return ( num %9 === 0 && num !== 0) ? 9 :(num % 9);
      //};

      addDigits(19);
    }])
}());
