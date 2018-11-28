# Abstract Reduction Systems Exercises
# Exercise: String Rewriting

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
													
