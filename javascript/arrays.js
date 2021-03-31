// sort an array 
function sortList(){
    const arr = [1, 2, 14, 12, 3, 7];
    const sortTrue =  (a,b) => {
        return a - b;
    };

    const sortarr = arr.sort(sortTrue);
    console.log(sortarr);
}



// remove duplicate

async function removeDuplicates() {
    let nums = [];
    const readNums = require("readline-sync");
    const n = readNums.question("What is the length of the array? \n"); 

    var r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
    });

    r1.on('line', function(line) {
    // Put the number in an array
    nums.push(parseInt(line));
   // Stop when the array is 5 numbers long
   if (nums.length == n) {
       r1.close();
       console.log("array: ", nums, "size: " + n)
   }

})};



function findBusiest(data) {
    var data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0], 
                 [1487799425, 2,  0], 
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]
  // your code goes here
   var flux = 0; // 14-4-2, 10-18+18,
  for(var j = 0; j < data.length; j++){
    
    if(data[j][1] == data[j-1][1]){
        if(data[j][2] == 1 )
           flux = flux + data[j][2];
        else
          flux = flux - data[j][2] ;
    console.log(flux) 
    }        
   else 
    console.log(flux)
     
     
  }
 
}


function fetchSpiral() {
    // x^2 +y^2 =r^2 each point has a pair on a circle
    // 1, 2, 3, ... distance increase 1,1, 2, 2, 3, 3, 4, 4, ...
    // [0], [1,2], [3,4,5,6], [7,8,9,10,11,12],[13,14,15,16,17,18,19,20]
    // 1-> (1,0) 2-> (1,1) 3-> (0,3), 5-> (5,0) 6-> (-1,-1)
    
    for(var x = n ; x > 0 ; x++){
       
        var distance = x + 1; 
        for(var y = n ; y < n; y++ ){
          console.log(n)
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


  
module.exports = {
    sortList,
    removeDuplicates,
    findBusiest
}