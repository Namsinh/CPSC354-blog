# Abstract Reduction Systems Exercises
# Exercise: String Rewriting

Example 1:

This string rewriting exercise is a basic example of an abstract reduction system in which we treat strings as terms composed of letters a,b that can be rewritten or reduced based on a set of rewrite rules or pattern.

Consider the schemas of rules:
```

  ab -> ba
  ba -> ab
  aa ->
  b ->

```
Here we reduce example strings abba and bababa by applying above rules:

```
abba->baba
    ->bbaa
    ->bb
    ->b
    ->bababa
    ->babaab
    ->babb
    ->abbb
    ->abb
    ->ab
    ->a

```

- This ARS does not terminate because the first two rules ab->ba and ba->ab are circular and redundant.
- This ARS has two equivalence classes; first where there is an even number of a, and the second where there is an odd number of a.
- The relation does not terminate therefore have no initial normal forms.  
- If we eliminate the first two rules leaving us only with aa-> and b-> , then our relation would terminate without changing any of its equivalence classes.
- The normal form of this modified system for the equivalence class with an even number of a is ‘’(nothing)
- The normal form for the equivalence class with an odd number of a is a.
- The measure function for this ARS is just counting the number of letters (a, b) in the string.  We see that with the relation of this modified system the number of letters is always being reduced, proving that the relation is terminating.
- An invariant is a rule that will always hold to be true despite any modification of the schema of our ARS.
- In this case the invariant is P(w) = number of a’s is even.
