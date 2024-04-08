let number=null
// console.log(typeof number)

// here we convert a number variable into a string
let stringNumber = String(number)
// console.log(typeof stringNumber)
// console.log(stringNumber)

// conversion to boolen

/* 
1--> if we pass empty string "" = false
      for "shahid"              = true

2--> if we pass 0 in number ==false
      for values greater than 0==true
  
3--> null and undefined when converted into boolen will give us ==false      
    */
   number =undefined
let bolNumber = Boolean(number)
// console.log(bolNumber)


// in the following code we converted a string datatype into a number data typye typeof datatype is changed but as we print the value so we got [nan ] as output as know that 33a is not a number

let score ="33a"
// console.log(typeof score);
let numscore = Number(score)
// console.log( numscore)






// null to number
score = null
let nulnum = Number(score)
// console.log(nulnum);
// console.log(typeof nulnum);


// undefined to number
score =undefined
let undefnum = Number(score)
// console.log(undefnum);



score = null
let stringnull = String(score)
// console.log(stringnull);



let numNull = Number(score)
// console.log(numNull);


let bolNull =Boolean(score)
// console.log(bolNull);
// console.log(typeof bolNull);



// number and string to null and undefined



score = 33;
let nullNum = (score)
// console.log(nullNum);



                             // =============  operations  ==============//

let value =10
let negValue = -value
// console.log(negValue);





// =====comparison

// console.log(2>1);



// here the string is converted into number by js itself
// console.log("2 " == 2);  //true



// now if we chec it with (===) it will give us false bcz the (===) do strict check mean it does not convert the data type means it check for datatype also if both are not same datatypes than it gives us false
// console.log("2" === 2);  //false








