const arr = [1, 2, 14, 12, 3, 7];


const sortTrue =  (a,b) => {
    return a - b;
};

const sortarr = arr.sort(sortTrue);


console.log(sortarr);

