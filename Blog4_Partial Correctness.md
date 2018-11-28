# Partial Correctness of While-Loops

- Some background learned in class:
A program is called partially correct if, when preconditions hold before the program executes and terminates, postconditions hold after the program has executed. A program is fully correct if we can also prove that it terminates. A loop invariant is a condition that is true at the beginning and end of every iteration of the loop. 

1. What do the following two programs compute? What pre and postconditions can be used to formalize this? Find a loop invariant and use it to prove the partial correctness of this program.

```

while (i < 100 ) do									
        	y := y+x										
        	i := i+1 										 
    	done	
      
```
This program computes the incrementation of the variable y by variable x.  Preconditions would be the initialization of variables i, x, and y.  Postconditions after execution of the loop would be i=99, x would remain the same as its initialization value, and the value of y could be returned at the termination of the loop with a print statement.  The loop invariant is variable x because its value remains the same at the precondition and postcondition at every iteration of the loop.

2.  What does the following program compute? What pre and postconditions can be used to formalise this? Find a loop invariant and use it to prove the partial correctness of this program.

```

 while  (i < k ) do										
        i := i+1 										
        y := y*i											
    done 
    
```
This program computes the multiple of variable y by variable i.  The preconditions are the initialization values of variables i, k, and y.  The postconditions after execution of the loop is k=initialization value, i=k-1, and the value of y could be returned at the termination of the loop with a print statement.  The loop invariant is variable k since its value holds at the precondition and postcondition at every iteration of the loop.

3.  Discuss the partial correctness from the point of the loop. (Javascript)

```
while (i < 5) 
{										
	k = i+j;										
	i++;		
}

```
The program computes k by summing the values of variable j and variable i.  The preconditions are the initialization variables i, j, and k.  The postconditions after the execution of the loop is j=initialization value, i=4, and the value of variable k can be returned at the termination of the loop with a print statement.  The loop invariant is variable j because its value holds at the precondition and postcondition at every iteration of the loop.
