# Partial Correctness of While-Loops

- Some background learned in class:
A program is called partially correct only if preconditions hold before the program executes and terminates, and postconditions hold after the program has executed. A program is fully correct if we can also prove that it terminates. A loop invariant is a condition that is true at the beginning and end of every iteration of the loop. 

1. What do the following two programs compute? What pre and postconditions can be used to formalize this? Find a loop invariant and use it to prove the partial correctness of this program.

```

while (i < 100 ) do									
        	y := y+x										
        	i := i+1 										 
    	done	
      
```
This program computes the sum of y and 100x `y = y + (100*x)`.  Preconditions would be the initialization of variables i, and y to zero, expressed in notation `i=0∧y=0`, and `x` would be any integer.  Postconditions after execution of the loop would be i=99, x would remain the same as its initialization value, and the value of `y` would be the summation of `y + (100 * x)`.

.  The loop invariant is variable `x` because its value remains the same at the precondition and postcondition at every iteration of the loop.

2.  What does the following program compute? What pre and postconditions can be used to formalise this? Find a loop invariant and use it to prove the partial correctness of this program.

```

 while  (i < k ) do										
        i := i+1 										
        y := y*i											
    done 
    
```
This program computes the product of `i` and `y` -> `y = y * i`.  The preconditions are the initialization values of variables i, k to zero and y to any integer value `i=0∧0≤k`.  The postconditions after execution of the loop, the value value for k remains the same, the value for `i` is `i=k-1`, and the value of y would be the summation of `y * i`.  The loop invariant is variable `k` since its value holds at the precondition and postcondition at every iteration of the loop.

3.  Discuss the partial correctness from the point of the loop. (Javascript)

```
while (i < 5) 
{										
	k += i+j;										
	i++;		
}

```
The program computes the sum of `i` and `j` -> `k = i + j`  The preconditions are the initialization variables `i=0∧0≤k`  The postconditions after the execution of the loop the value for j remains the same as its initial value, i=4, and the value of k is the summation of `i + j`. The loop invariant is variable j because its value holds at the precondition and postcondition at every iteration of the loop.
