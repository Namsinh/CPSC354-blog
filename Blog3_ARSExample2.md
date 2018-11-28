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


													
