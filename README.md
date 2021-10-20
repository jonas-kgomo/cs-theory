# Computer Science Theory
## Algorithms and Data Structure 

## Topological Sorts

In computer science, a topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge $uv$  from vertex u to vertex $v, u$ comes before v in the ordering.

Possible orderings, top down, down right, smallest to large, number of edges, arbitrary 

```
$5,7,3,11,8,2,9,10  
5,11,2,7,8,9,3,10  
2,3,5,7,8,9,10,11 
5,2,9,7,3,10,11,8 $
```

Contains Leetcode and Hacker Rank questions and answers. 

To test locally, make sure you have Node.js installed 
For example to run the solution for sorting problem, run `node javascript/sortList.js` to test the solution for the sorting problem.

To run from the file with all the solution, for example to run `sortList` solution , use the following command:

```javascript 
node --eval "require('./javascript/arrays.js').sortList()"
```

## Problems 

1. Remove Duplicates from Sorted Array [sort-list.js](/javascript/sort-list.js)
  Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. (Do not    allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.)


2. Write a code that can convert intergers to Roman numerals (20 min)
  I = 1, X= 10, IX= 9, XI= 11, L =50, C= 100, D= 500, M= 1000 

3. The mall management is trying to figure out what was the busiest moment in the mall in the last year. Each data entry includes a timestamp (seconds in Unix Epoch format), an amount of people and whether they entered or exited. [reference](https://www.pramp.com/challenge/2WBx3Axln1t7JQ2jQq96)

4. Find the number!Given an unsorted array of n elements, find if the element k is present in the array or not.Complete the findNumber function in the editor below. It has 2 parameters:An array of integers, arr, denoting the elements in the array.An integer, k, denoting the element to be searched in the array.The function must return a string "YES" or "NO" denoting if the element is present in the array or not.
