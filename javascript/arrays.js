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

// 

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
   var flux = 0; // 14-4-2= 8, 10-18+18=10,-1, 7-7=0
   var flux_arr = [];
   for(var j = 0; j < data.length-1; j++){
    
    if(data[j+1][0] == data[j][0]){
        if(data[j][2] == 1 )
           flux = flux + data[j][1];
        else
          flux = flux - data[j][1];
    var fluxes = flux_arr.push(flux);
    console.log("visitors " + flux, "total " + fluxes) 
    }        
   else 
    console.log(flux)
     
     
  }
 
}


// find a number in an array


function findNumber(arr, k) {
    if( arr.includes(k) ){
        return 'YES'
    }    
    else  
        return 'NO'  
 // }
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


 


  
module.exports = {
    sortList,
    removeDuplicates,
    findBusiest
}

/*concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array