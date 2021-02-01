# IronHack Array Helpers

### npm package to help with complete your ironhack web-dev course with minimal code. 

## Usage.

#### import the package into your file

in the root of your project in terminal run command: 

`npm i ironarrays`

require it in your files you want to use:

`const ironarrays = require("ironarrays")`

<hr>

### Examples of usage :

`const myArray = [1,2,3,4,5]`

`const myStr = "the quick brown fox jumped over the lazy dog"`

<hr>

### functions:

<hr>

- **sum**

for use with arrays of numbers, it sums every element and returns a single value 

`ironarrays.sum(myArray);`

`// returns 15`

<hr>

- **square**

for use with arrays of numbers, it squares every value and returns an array

`ironarrays.square(myArray);`

`// returns [1,4,9,16,25]`

<hr>

- **cube**

for use with arrays of numbers, it cubes every value and returns an array

`ironarrays.cube(myArray);`

`// returns [1, 8, 27, 64, 125]`

<hr>

- **longestWord**

accepts a string and returns the longest word and the amount of charachters it contains

`ironarrays.longestWord(myStr);`

`// returns "The longest word is "jumped" with 6 characters"`

<hr>







 





