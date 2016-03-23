(function(){
  'use strict';

  app
    .controller('homeCtrl',[function(){
      /**
       * @param {string} s
       * @param {string} t
       * @return {boolean}
       */
      /**
       *一个词或短句的字母重新排列顺序，
       * 原文中所有字母的每次出现都被使用一次，
       * 这样构造出另外一些新的词或短句
       */
      //循环比较s中每个字符在t中出现
      var isAnagram = function(s, t) {
        var firstChar = '',
          index = 0;
        if(s.length !== t.length) return false;
        while(s.length > 0){
          firstChar = s.charAt(0);
          index = t.indexOf(firstChar);
          s = s.substr(1);
          if(index > -1){
            t = t.substr(0,index) + t.substr(index+1);
          }else{
            return false
          }
        }
        return true;
      };//success beats 3.59%

      console.log(isAnagram("aacc","ccac"));
    //获取每个字符在字符串中出现的次数，比较出现的次数
      var isAnagram = function(s, t) {
        if (s.length !== t.length) {
          return false;
        }
        var map = {};
        for (var i = 0; i < s.length; i++) {
          if (map[s[i]] === undefined) {
            map[s[i]] = 1;
          } else {
            map[s[i]] += 1;
          }
        }

        for (var j = 0; j < t.length; j++) {
          //if map[t[j]] === undefined or zero
          if (!map[t[j]]) {
            return false;
          }
          map[t[j]]--;
        }
        return true;
      };
    }]);
}());
