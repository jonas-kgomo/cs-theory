
// remove duplicate

var removeDuplicates = function(nums) {
    sortednums = nums.sort();
    
    for (var i; i <= nums.length; i++) {
        if(sortednums[i] === sortednums[i+1]){
            sortednums.splice(i+1, 1) 
            /*splice(start, deleteCount) 
            splice(s, d) deletes starting at s, d items
            delete sortednums[i+1]; 
            deletes next elemtent and leaves a undefined element
            pop removes the last element */
        }
    }
    
};




function Spiral(n) {
    // x^2 +y^2 =r^2 each point has a pair on a circle


    // 1, 2, 3, ... distance increase 1,1, 2, 2, 3, 3, 4, 4, ...
    //[0], [1,2], [3,4,5,6], [7,8,9,10,11,12],[13,14,15,16,17,18,19,20]
    // 1-> (1,0) 2-> (1,1) 3-> (0,3), 5-> (5,0) 6-> (-1,-1)
    
    for(var x = n ; x > 0 ; x++){
       
        var distance = x + 1; 
        for(var y = n ; y < n; y++ ){
          
        }
    }


    return (x,y);
}


// (x,y) : x -> 1-2+3-4+5-6  y -> 1-2+3-4
// n = 10: 10= 1+1+(1+1)+(1+1)+(1+1+1)+1= 1+1+2+2+3=9 : 9+1=10

// :  sum n*(-1)^n from 0 to n


/* move y with 1 unit (up or down) 
   check if y= y+1< n , if true (y go to next step) else return y
   move x  with 1 unit (left or right ), 
   check if x_new= x+1< n , if true (go to next )
   if total= x+y< n continue loop
   n - 1
   (0,0)-> y= 0 + 1  < n false , return y = 1  -> (0,1)
   n - 3
   (0,0) -> y= 0+1< 3  true, 
   total = x + y = 2 <3 
   x= 0+1< 3  true,
   y= 2+1<3  false , return y = 2 (second iteration)

*/

var x = 0, y= 0;

total = x+y;
  
while(total< n){
  y= y+1;
  if(total< n){
      x= x+1;
  }
  else return x, y;
  total= x+y;

}

  
