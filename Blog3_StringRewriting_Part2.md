# Abstract Reduction Systems Exercises
# Exercise: String Rewriting Part 2

Example 2: 
- Consider the schema of rules:

```
  ba -> bbaa											
  aa ->												
  ba -> ab													
  ab -> ba												
```

- Here we attempt to reduce example strings:

```
ab -> aabb
ba -> abbaababbab
ba -> baabbaababbaba
```

```
ab->ba
->bbaa
->baba
->abba
->abab
->aabb
```
```
ba->bbaa
->bbbaaa
->bbbbaaaa
->bbbbbaaaaa
->bbbbbbaaaaaa
->bbbbbabaaaaa
->bbbbabbaaaaa
->…………
-> abbaababbaba
```

- We see that we are unable to rewrite ba->abbaababbab because the system is not terminating.
- There are four equivalence classes:
	1. (b-a) mod 2 = 0 where b≥1 (both a,b odd or even).
	2. Words that have even number of a’s only.
	3. (b-a) mod 2 = 1 where b≥1 (a or b is odd only).
	4. Words that have an odd number of a’s only.
	

Modifying the rules of the ARS to:
```
 bbaa->ab												
 aa->													
 ba->ab
 
 ```
 creates a system that becomes terminating without changing its original equivalence classes.  We use the same measure function as example 1, by counting the number of letters.  We see with the relation of that this modified system the number of letters is always reducing and the string always gets smaller proving that it is terminating.
													
