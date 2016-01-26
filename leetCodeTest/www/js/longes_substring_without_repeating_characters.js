/**
 * Created by C5226508 on 1/25/2016.
 */
app
  .controller('homeCtrl',[function(){

    //Time Limit Exceeded
    //var lengthOfLongestSubstring = function(s) {
    //  var i=0,
    //    length = 0,
    //    subString = s,
    //    map = "",
    //    str;
    //
    //  while(i < subString.length){
    //    str = subString[i];
    //    if(map.indexOf(str) !== -1){
    //      subString = subString.substr(subString.indexOf(str) + 1);
    //      if(i > length){
    //        length = i;
    //      }
    //      i=0;
    //      map = "";
    //    }else{
    //      map = map + subString[i];
    //      if(i === subString.length-1){
    //        if(i+1 > length){
    //          length = i+1;
    //        }
    //      }
    //      i++;
    //    }
    //
    //  }
    //  return length;
    //};
    //
    //lengthOfLongestSubstring('asdyasc');

    //success 248ms  字符串循环一次过去，注意代码的时间维度
    //var lengthOfLongestSubstring = function(s) {
    //    var i,
    //      maxLength = 0,
    //      currentLength,
    //      str = "",
    //      index;
    //
    //    for(i=0;i< s.length;i++){
    //      index = str.indexOf(s[i]);
    //      if(index !== -1){
    //        currentLength = str.length;
    //        if(maxLength < currentLength){
    //          maxLength = currentLength;
    //        }
    //        str = str.slice(index + 1) + s[i];
    //      }else{
    //        if(i !== (s.length -1)){
    //          str = str + s[i];
    //        }else{
    //          str = str + s[i];
    //          currentLength = str.length;
    //          if(maxLength < currentLength){
    //            maxLength = currentLength;
    //          }
    //        }
    //
    //      }
    //    }
    //    return maxLength;
    //};
    //

    // javascript中去两者中较大的数，Math.max
    //success 232s
    var lengthOfLongestSubstring = function(s) {
      var i,
        maxLength = 0,
        currentLength,
        str = "",
        index;

      for(i=0;i< s.length;i++){
        index = str.indexOf(s[i]);
        if(index !== -1){
          currentLength = str.length;
          maxLength = maxLength < currentLength ? currentLength: maxLength;
          str = str.slice(index + 1) + s[i];
        }else{
          str = str + s[i];
        }
      }
      currentLength = str.length;
      maxLength = maxLength < currentLength ? currentLength: maxLength;
      return maxLength;
    };

    lengthOfLongestSubstring("abba");

  }])