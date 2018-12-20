# Termination

## Exercise: Total Correctness of Loops

Write a program in your programming language that contains a while loop and show termination by exhibiting a measure function.
In the following, a is an array of integers.
```
while (i < N) 
{										
	j += j+a[i];										
	i++;
  }
  
``` 
* The states of the sytem can be defined as consisting of tuples (j, i) as they are the data that changes during the execution of the loop.  We define a function:
```
ϕ(j,i)=N−i

```
* To show this is a measure funcion we establish 
	* that each time we execute the body of the loop, the value N - i decreases and
	* that the value N - i can never be negative ensured by the condition that i < N guarding the entry of the loop.
	


