# Abstract Reduction System Exercises
# Exercise: ORK

In this exercise we are given an ARS that will look unfamiliar.  
Find the interpretation, or maybe just an invariant and use it to show that the string `OK` cannot be reached from `OR`.

```

If the last letter is R you may add a K at the end 
A string of the form Ox may be rewritten to Oxx
You may replace any occurrence of RRR by K
You may erase any occurrence of KK

```
Above, `x` is a variable that may be replaced by any string.

* Describe an ARS (A, →) that is given by the 4 rules above.
  * xR → xRK
  * Ox → Oxx
  * RRR → K
  * KK → 

* Give some sample reductions.  Can you reduce `OK` to `OR`?
  ```
  OK → OKK
     → O 
  ```
  * It is not possible to reduce `OK` to `OR` with the given system.

* Is it possible to reduce `OR` to `OK`?
  ```
  OR → ORR
     → O 
     
  or 
  
  OR → ORK
  ```
  * It is not possible to reduce `OR` to `OK` with the given system.
  * Rule 3 is the only rule that reduces words containing `R` to contain `K`.
  * Modifying rule 3 to be `Ox → Oxxx` would allow `OR` to be reduced to `OK`
  by `OR → ORRR → OK` , and the system would be terminating.
  


