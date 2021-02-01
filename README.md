# IronHack Array Helpers

### npm package to help with complete your ironhack web-dev course with minimal code.

## Usage.

#### import the package into your file

in the root of your project in terminal run command:

`npm i ironarrays`

require it in your files you want to use:

`const ironarrays = require("ironarrays")`

### example of usage :

`const myArray = [1,2,3,4,5]`

### Current functions:

- **sum**

for use with arrays of numbers, it sums every element and returns a single value

`ironarrays.sum(myArray);`

`// returns 15`

- **square**

for use with arrays of numbers, it squares every value and returns an array

`ironarrays.square(myArray);`

`// returns [1,4,9,16,25]`

- **cube**

for use with arrays of numbers, it cubes every value and returns an array
