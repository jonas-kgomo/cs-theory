#write a program that asks user for ten integers and returns their sum
sum = 0;
for i in range(10):
    k = int(input("Enter Digit: "))
    sum = k + sum;
print(sum)