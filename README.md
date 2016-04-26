# changepath.js

`changePath` is a simple function for changing the value at the end of a path through 
a javascript data structure.

It does not mututate the source object
It respects the source object's prototype chain

Usage:

```
import {changePath} from 'changepathjs'

const x = {a: { b: [99]}}

const y = changePath(['a','b',0], 66, x)

// {a: { b: [66]}}


