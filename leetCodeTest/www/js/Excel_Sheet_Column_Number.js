(function(){
  'use strict';

  app
    .controller('homeCtrl',[function(){
      /**
       * @param {string} s
       * @return {number}
       */
      var titleToNumber = function(s) {
        var obj = {'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23, 'X':24,'Y':25,'Z':26},
          length = s.length,
          num = 0;

        for(var i = 0; i < length;i++){
          num += Math.pow(26,length-i-1) * obj[s.charAt(i)];
          console.log(obj[s.charAt(i)]);
          console.log(num);
        }

        return num;
      };

      var titleToNumber = function(s) {
        var length = s.length,
            num = 0;

        for(var i = 0; i < length;i++){
          num += Math.pow(26,length-i-1) * (S.charCodeAt(i) - 64);
          console.log(obj[s.charAt(i)]);
          console.log(num);
        }

        return num;
      };
      console.log('B'-'A');
    }]);
}());
