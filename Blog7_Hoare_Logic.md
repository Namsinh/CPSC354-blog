# Exercise: Hoare Rules

Suggest a rule to add in Hoare Logic for the statement:

```
repeat S until B
```

The repeat statement first executes the statement S 
and then checks for the condition B.

* Hoare's rule for a loop can be written in symbolic 
notation as follows:

```
   {I∧𝙱} 𝚂 {I}{I} / 𝚠𝚑𝚒𝚕𝚎 B 𝚍𝚘 S 𝚍𝚘𝚗𝚎{¬B∧I}
```

