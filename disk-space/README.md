## Disk Space 
A company is performing an analysis on the computers at its main office. The computers are spaced along a single row. For each group of contiguous computers of a certain lenght, that is, for each segment, determine the minimum amount of disk space available on a computer. Retunr the maximum of these values as your answer.

### Example 1
```
space = [8,2,4,6]
x = 2, the segment length

The free disk space of computers in each of the segments is [8,2],[2,4],[4,6].
The minima of the three segments are [2,2,4]. 
The maximum of these is 4. -> This is your answer.
```

### Example 2
```
space = [1,1,1]
x = 2
Answer: 1
```

### Example 3
```
space = [2,5,4,6,8]
x = 3
Answer: 4
```

### Example 4
```
space = [1,2,3,1,2]
x = 1
Answer: 3
```