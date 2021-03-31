# Computer Science Theory
## Algorithms and Data Structure 

Contains Leetcode and Hacker Rank questions and answers. 

To test locally, make sure you have Node.js installed 
For example to run the solution for sorting problem, run `node javascript/sortList.js` to test the solution for the sorting problem.

To run from the file with all the solution, use the following command:

```javascript 
node --eval "require('./javascript/arrays.js').sortList()"
```

## Algorithms 

1. Remove Duplicates from Sorted Array [sort-list.js](/javascript/sort-list.js)

> Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. (Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.)


2. Write a code that can convert intergers to Roman numerals (20 min)

>I = 1, X= 10, IX= 9, XI= 11, L =50, C= 100, D= 500, M= 1000 

3. The mall management is trying to figure out what was the busiest moment in the mall in the last year. Each data entry includes a timestamp (seconds in Unix Epoch format), an amount of people and whether they entered or exited. [ref](https://www.pramp.com/challenge/2WBx3Axln1t7JQ2jQq96)

┌───────┬─────────────┬───────┐
│ (exit)  │      time        visitors │
├───────┼─────────────┼───────┤
│    0    │  1487799425     |   9     │
│    1    │  1487799425     │   1     │
│    0    │  1487801478     │   2     │
│    1    │  1487901013     │   1     │
│    1    │  1487901211     │   7     │
└─────────┴───────────┴───────┘