# Array
 1. 2 loại array
 - fixed length
 - Indexable
 - IO buffer
 
|        | Static Array | Dynamic Array                 |
| ------ | ------------ | ----------------------------- |
| Access | 0(1)         | 0(1)                          |
|        |              |                               |
| Search | 0(n)         | O(n)                          |
|        |              |                               |
| Insert | O(n)         | N/A (because of fixed length) |
|        |              |                               |
| Append | O(1)         | N/A (because of fixed length) |
|        |              |                               |
| Del    | O(n)         | N/A (because of fixed length) |