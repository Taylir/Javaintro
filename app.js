// let count = 0;

// while (count < 100) {
//     count += 1
//     console.log(count)
// }

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else if (i % 3 === 0 ) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if ( i % 5 == 0 ) {
//         console.log(`${i} -> Simplified`)
//     }
//     else {
//         console.log(i)
//     }
// }

// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// Fuctions 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// function welcomePersonToFES(name) {
//     console.log(`Welcome to FES, ${name}`)
// }

// welcomePersonToFES(`Taylor`);

// function welcome(firstname, lastname) {
//     console.log(`Welcome to my website ${firstname} ${lastname}`)
// }

// welcome(`Taylor`, `Lirot`)

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(50,5));

// function celToFah(temp) {
//    return temp * 1.8 + 32
// }

// const celToFah = (temp) => {
//     return temp * 1.8 + 32
// }

// console.log(celToFah(30))

// Arrays 8888888888888888888888888888888888888888888888888888888888888888888888888888888

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100  below is the array version of this.

// let arr = [20, 30, 40, 50, 100]

// arr.push(200)

//.filter goes through each of the arrays and looks at them
// let newArr =  arr.filter(element => {
//     if (element < 50) {
//         return true
//     }
// })
//let newArr = arr.filter(element => {
// return element < 50
// })

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)
// console.log(arr)

// let class1 = [`A+`, `A`, `FAIL`]

// let passed = class1.filter(i => {
//     if (i !== `FAIL`) {
//         return true;
//     }
// })

// let passed = class1.filter(i => {
//     return i !== `FAIL`
// })

// let passed = class1.filter(i => i !== `FAIL`)

// console.log(passed);
// let passed = []

// for (let i = 0; i < class1.length; i++) {
//     console.log(class1[i])
//     if (class1[i] !== `FAIL`) {
//         passed.push(class1[i])
//     }
// }

// console.log(passed)

// let arr = [1, 4, 9, 16]

//MAP CONVERTS EVERY ELEMENT IN AN ARRAY TO YOUR SELECTED OPTION USING array.map(element/index => element *x)
// OR WHAT EVER YOU WANT SUCH AS => 'dog'   or   =>   * 5  also right of the arrow (=> *return*_____) has an invisable return
// AND IF USING => {XYZ}  THE INVISABLE RETURN IS NOW GONE AND MUST BE TYPED WITHING THE CURLIES ex. {return xyz}

// let newArr = arr.map((i) => {
//     console.log(i)
//     return `dog`;
// })

// console.log(newArr)

// let dollars1 = [1, 5, 10, 3]

// let cents1 = dollars1.map(i => i * 100)

// console.log(cents1)

// let dollars2 = [0, 10, 20]

// let cents2 = dollars2.map((i) => {
//     return i * 100
// })

// console.log(cents2)

// let cents = [];

// for (let i = 0; i < dollars1.length; i++) {
//     console.log(dollars1[i])
//     cents.push(dollars1[i] * 100)
// }

// console.log(cents)

// OBJECTS *****************************************************************************************

// let userFirstName = `Taylor`
// let userLastName = `Lirot`
// let userDiscordID ='Taylorlirotdisc'
// let userSubscriptionStatus = `VIP`

// let users = [
//   {
//     username: `Taylor`,
//     password: `test123`,
//     email: `TaylorLirot@gmail.com`,
//     subscriptionStatus: `VIP`,
//     discordId: `taylorlirot#000`,
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: `Mitri`,
//     password: `mitri123`,
//     email: `Mitrimitch@gmail.com`,
//     subscriptionStatus: `Normal`,
//     discordId: `MitriMitch#001`,
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: `Zen`,
//     password: `Zen123`,
//     email: `ZenKen@gmail.com`,
//     subscriptionStatus: `VIP`,
//     discordId: `ZenKen#001`,
//     lessonsCompleted: [0, 1, 2, 3, 4, 5, 6],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     console.log(`this Rans@@@`)
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log(`log the user in- the details are corrects`);
//       }
//       else {
//         console.log(`Password is incorrect, try again`);
//       }
//       return;
//     }
//   }
//   console.log(`This email does not exist`)
// }

// login(`Mitrimitch@gmail.com`, `hfdnkiogdfjnk`);

// function register (user) {
//     users.push(user)
// }

// register({
//     username: `Mike`,
//     password: `miKe1@3$`,
//     email: `mike@mike.com`,
//     subscriptionStatus: `Normal`,
//     discordId: `Mikedisc#003`,
//     lessonsCompleted: [0]
// })

// console.log(users)

// DOM 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

//first way of accessing an element and most common .innerHTML is what allows you to change the HTML
// document.querySelector('.title').innerHTML = 'Frontend Simplified'

//And you can add on words just like changing a variable
// document.querySelector('.title').innerHTML += 'Frontend Simplified'

//second way of accecing anm element
// console.log(document.getElementById('title'))

//change CSS using .style.x, x being any type of css you want allows changing of everything css
// document.querySelector('.title').style.color = 'red'

// function red () {
//     document.querySelector(".title").style.color = "red"
// }

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle("dark-theme")
// }

// BEGGINER QUESTIONS BEGGINER QUESTIONS BEGGINER QUESTIONS BEGGINER QUESTIONS BEGGINER QUESTIONS

// Question 1 888888888888888888888888888888888888888888  Function that returns the sum of two numbers

/* function sumOfTwoNumbers(x,y) {
    return x + y;
}

console.log(sumOfTwoNumbers(-4,4)); */

// function sum(x, y) {
//     return x+y;
// }

// console.log(sum(7,3))

// const sum = (x, y) => {return x+y}

// console.log(sum(3,5))

// Question 2 888888888888888 Function that converts hours to seconds

/* function hoursToSeconds(num) {
    return num * 60 * 60;
}

console.log(hoursToSeconds(5)); */

/* const hoursToSeconds = num => num * 60 * 60;

console.log(hoursToSeconds(5));
 */

// function hToS (h) {
//     return h * 60 * 60;
// }

// console.log(hToS(24))

// const hToS = h => {return h * 60 * 60}

// console.log(hToS(24))

//Question 3 Make a function that calculates the perimeter of a rectangle 88888888888888888888888

/* function rectanglePerimeter( width, height) {
    return (width + height) * 2 ;
}

console.log(rectanglePerimeter(3,2)); */

/* const rectanglePerimeter = (width, height) => (width + height) *2;

console.log(rectanglePerimeter(5,2)); */

// function perimeter (w, h) {
//     return (w + h) * 2
// }

// console.log(perimeter(2,9))

// const perimeter2 = (w, h) => {return (w + h) * 2}

// console.log(perimeter2(2,9))

//question 4 function to calculate the area of a triangle888888888888888888888888888888

/* function triArea( w, h) {
    return w * h / 2
}

console.log(triArea(4,5)); */

/* const triArea = (w, h) => w*h/2;

console.log(triArea(4,5)); */

// function traingleArea (h,w) {
//     return (h * w) / 2;
// }

// console.log(traingleArea(20,20))

// const traingleArea = (w, h) => {return (w * h) / 2}

// console.log(traingleArea(10,10));

//question 5 add frontened to the end of a string

/* function addFront(elem) {
    return elem + "Frontend"
}

console.log(addFront("heello ")); */

/* const addEnd = elem => elem + "Frontend"

console.log(addEnd("I like pie ")); */

// function stringAddon(str) {
//     return str + `Frontend`;
// }

// for number situations

// function strAddon (number) {
//     return 4 + (+number);  the plus infront oif the number will convert the inout to a number
// }

// console.log(stringAddon(`Orange`));

// const strAddon = str => {return str + `Frontend`}

// console.log(strAddon(`apple`));

// question 6 return true if the sum of the two numbers is above 100 888888888888888888888888888888

/* function ifAbove100( num1, num2) {
    return num1 + num2 > 100
}

console.log(ifAbove100(0,0));
 */
/* const ifAbove100 = (x,y) => (x + y) > 100;

console.log(ifAbove100(45,56)); */

// function over100(num1, num2) {
//     if (num1 + num2 > 100) {
//         return true
//     }
//     return false
// }

// console.log(over100(100,-50));

// const over100 = (x, y) => x + y > 100 ? true : false;

// console.log(over100(100,-50));

// question 7 less than or equal to 0 88888888888888888888888888888888888888888888888888888888

// function lessThanOrEqual0 (number) {
//     return (+number) <= 0
// }

// console.log(lessThanOrEqual0(-2));

// const lessThanOrEqual0 = number => (+number) <= 0 ? true : false;

// console.log(lessThanOrEqual0(50));

// question 8 return the oppisite boolean 888888888888888888888888888888888888888888888888888

// function oppistie(boolean) {
//     return !boolean;
// }

// console.log(oppistie(false));

//question 9 is not 0, function that returns true to all elements except 0 888888888888888888

// function not0 (x) {
//     return x !== 0;
// }

// console.log(not0(1));

// const not0 = x => x !== 0 ? true : false;

// console.log(not0(0));

// question 10 calculate the remainder after dividing 8888888888888888888888888888888888

// function remainder (x, y) {
//     return x % y;
// }

// console.log(remainder(9,8));

// question 11 is the number odd 888888888888888888888888888888888888888888888888888

// function isOdd(num) {
//     return (+num) % 2 !== 0;
// }

// console.log(isOdd(4));

// const isOdd = num => (+num) % 2 !== 0 ? true : false;

// console.log(isOdd(4));

// question 12 even number return 1 odd numer return -1 888888888888888888888888888888888888

// function evenOrOdd (num) {
//     if ((+num) % 2 === 0) {
//         return 1
//     }
//     return -1
// }

// console.log(evenOrOdd(789));

// const evenOrOdd = num => num % 2 === 0 ? 1 : -1;

// console.log(evenOrOdd(8));

//question 13 check to see if a user is subscribed ANDDDD logged in 888888888888888888888888888888

// let subscribed = true;
// let loggedIn = false;

// function subAndLog () {
//     return subscribed && loggedIn;
// }

// console.log(subAndLog());

// const subAndLog = () => subscribed && loggedIn ? true : false;

// console.log(subAndLog());

//question 14 Check to see if the user is subbed OR logged in

// let subscribed = false;
// let loggedIn = false;

// function subOrLog () {
//     return subscribed || loggedIn;
// }

// console.log(subOrLog());

// const subOrLog = () => subscribed || loggedIn ? true : false ;

// console.log(subOrLog());

// MEDIUM QUESTIONS MEDIUM QUESTIONS MEDIUM QUESTIONS MEDIUM QUESTIONS MEDIUM QUESTIONS MEDIUM QUESTIONS

// Question 1 Filter ouit falsey, if the first values is falsey return the second value.

/* unction filterFalsey(elem1, elem2) {
    if (!!elem1 === false) {
        return elem2
    } else {
        return elem1
    }
}

console.log(filterFalsey( 0 , 500)); */

// function falseyFilter (elem1, elem2) {
//     if(!elem1) {
//         return elem1
//     }
//         return elem2
// }

// console.log(falseyFilter(true , `Dog`));

// const falseyFilter = (elem1, elem2) => !elem1 ? elem1 : elem2;

// console.log(falseyFilter(true, `gdog`));

// Question 2 Return the length of any givven array 88888888888888888888888888888888888888888888888888

/* function arrayLength(arr) {
    return arr.length;
}

console.log(arrayLength([1,3,5,6])); */

// let arr = [5,1,7,6]

// function indexCounter(array) {
//     return array.length;
// }

// console.log(indexCounter(arr));

// question 3 Given an array return the last element 88888888888888888888888888888888888888888888888888

/* function lastElemArray(arr) {
    return arr[arr.length - 1]
}

console.log(lastElemArray([1,4,2,"yolo"])); */

// let arr = [2,`dog`, 4, 2]

// function lastArrIndex (array) {
//     return array[array.length - 1];
// }

// console.log(lastArrIndex(arr));

// question 4 Given an array return the sum of every element 888888888888888888888888888888888888888

/* let array = [1,2,3,4]

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumOfArray(array)); */

// let array = [2,2,2,2]

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(arrSum(array));

// question 5 add up the numbers from a given single number if 4 you will add 1+2+3+4 up to that number.

/* function subsequentAddition(num) {
    let sum = 0
    for (let i = 1; i <= num; i++){
        sum += i
    }
    return sum
} 

console.log(subsequentAddition(13)); */

// function progressiveSum (num) {
//     let sum = 0;
//     for ( let i = 1; i <= num; i++) {
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(progressiveSum(5));

//question 6 given a number in seconds return this number in mm:ss format 8888888888888888888888888

/* function decimalToClock(num) {
    let seconds = num % 60
    let minuets = Math.floor(num / 60)

    if( minuets.toString().length >= 2) {
        return `${minuets}:${seconds}`
    } else if ( minuets.toString().length === 1){
        return `0${minuets}:${seconds}`
    } else {
        return `00:${seconds}`
    }
}

console.log(decimalToClock(8000)); */

// function calcTime (num) {
//     let timerMinuets = Math.floor(num / 60)
//     let timerSeconds = num % 60
//     if (timerMinuets.toString().length === 0) {
//         return`00:${timerSeconds}`
//     }
//     else if (timerMinuets.toString().length === 1) {
//         return `0${timerMinuets}:${timerSeconds}`
//     }
//     else {
//         return `${timerMinuets}:${timerSeconds}`
//     }
// }

// console.log(calcTime(50));

// question 7 find the largest number in a given array 888888888888888888888888888888888888888888888

/* let array = [5,2,4]

function arrayMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(arrayMax(array)); */

// let array = [12,10,-20,50,600,1,87,1,2,400]

// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMax(array));

// question 8 reverse a given string  3 different methods, incrementing for, decrementing for, array reverse  8888888888888888888888888888888888888888888888888888888888888888

// let string = 'abc';

/* function reverseString(str) {
    let reversed = ""
    for(let i = 0; i < str.length;i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(reverseString(string)); */

/* function reverseString(str) {
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
}

console.log(reverseString(string)); */

/* function reverseString(str) {
    return str.split(``).reverse().join(``)
}

console.log(reverseString(string)); */

// let string1 = `abc`;

// function reverseString (str) {
//     let string = ``;
//     for (let i = 0; i < str.length; i++) {
//        string += str[str.length-(i+1)]
//     }
//     return string;
// }

/* let string = `abc`

function reverseString (str) {
    let string = ``
    for (let i = 0; i < str.length; i++){
        string = str[i] + string
    }
    return string;
}

console.log(reverseString(string)); */

// console.log(reverseString(string1));

// let string1 = `this is cool`;

// function reverseString (str) {
//     let string = ``
//     for (let i = str.length - 1; i >= 0; i--) {
//         string += str[i]
//     }
//     return string
// }

// console.log(reverseString(string1));
/* 
let string1 = `This is cool`

function reverseString (str) {
    return str.split(``).reverse().join(``);
}

console.log(reverseString(string1));
 */

// question 9 turn ever element of an array to 0 using for loop, array 'fill', and array 'map'. 888888888888888888888888888888888888888888888888888888888

// let array = [4,5,8,2,7,3]

/* function arrayZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}

console.log(arrayZero(array)); */

/* function arrayZero(arr) {
    return arr.map(i => i = 0)
}

console.log(arrayZero(array)); */

/* function arrayZero(arr) {
    return arr.fill(0)
}

console.log(arrayZero(array)) */

/* let array = [5,4,7,8,0,1,7]

function convertToZeros (arr) {
    return arr.map(elem => 0);
}

console.log(convertToZeros(array));  */

/* let array = [5,5,7,1,2,6,98,1]

function convertToZeros (arr) {
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        zeros.push(arr[i] = 0)
    }
    return zeros;
}

console.log(convertToZeros(array)); */

/* let array = [1,2,3,4,5,6,7,8,9]

function convertToZeros (arr) {
    return arr.fill(0)
    
}

console.log(convertToZeros(array)); */

//question 10 Filter out all apples using a for loop and the .filter method of the arrays 8888888888888

//let fruit = [`Orange`, `Apple`, `Pineapple`, `Apple`]

/* function filterApples(arr) {
    let notApples = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() !== `apple`) {
            notApples.push(arr[i])
        }
    }
    return notApples;
}

console.log(filterApples(fruit)); */

/* function filterApples(arr) {
    return arr.filter(i => i.toLowerCase() !== `apple`)
}

console.log(filterApples(fruit)); */

/* let array = [`Banana`, `Tomato`, `Orange`,]

function removeApples (arr) {
    let noApples = [];
    let lowerArr = arr.map (i => i.toLowerCase())
    for (let i = 0; i < arr.length; i++) {
        if (lowerArr[i] !==`apple`) {
            noApples.push(arr[i])
        }
    }
    return noApples
}

console.log(removeApples(array)); */

/* let array = [`Banana`, `Tomato`, `Orange`,`Apple`]

function removeApples (arr) {;
    return arr.filter(i => i.toLowerCase() !== `apple`)
}

console.log(removeApples(array)); */

// question 11 Filter out all the falsey values in an array using a for loop and array .filter 8888888888888

/* let falsey = [ false, , `Turtles`, undefined, 500, "", []]; */

/* function removeFalsey(arr) {
    let notFalse = []
    for(let i = 0; i < arr.length; i++) {
        if(!!arr[i] !== false) {
            notFalse.push(arr[i])
        }
    }
    return notFalse;
}

console.log(removeFalsey(falsey)); */

/* function removeFalsey(arr) {
    return arr.filter(i => !!i !== false)
}

console.log(removeFalsey(falsey)); */

/* let array = ["",[], undefined, "0"]

function filterOutFalsey(arr) {
    let notFalsey = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] !== true ){
            notFalsey.push(arr[i])
        }
    }
    return notFalsey;
}

console.log(filterOutFalsey(array)); */

/* let array = ["",[], undefined, "0"]

function filterOutFalsey(arr) {
    return arr.filter(i => !i !== true)
}

console.log(filterOutFalsey(array)); */

// question 12 console log truthy values as "true" and Falsey values as "false" 888888888888888888888888888888

// let falsey = [ false, `Turtles`, undefined, 500, "", []];

/* function truthyTrueFalseyFalse(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!!arr[i] === true){
            arr[i] = true
        } else {
            arr[i] = false
        }
    }
    return arr
}

console.log(truthyTrueFalseyFalse(falsey)); */

/* function truthyTrueFalseyFalse(arr) {
    return arr.map(i => !!i)
}

console.log(truthyTrueFalseyFalse(falsey)); */

/* let array = [null, undefined, "David", "f", []];

function converToBoolean(arr) {
    return arr.map(i => !!i)
}

console.log(converToBoolean(array)); */

// HARD QUEESTIONS HARD QUEESTIONSHARD QUEESTIONSHARD QUEESTIONSHARD QUEESTIONSHARD QUEESTIONS

// Question 1 Given a rating out of 5 max display * for each full rating and a . for each half rating

// function starRating(num) {
//     let stars = ``
//     for (let i = 0; i < Math.floor(num); i++) {
//         if ( i !== Math.floor(num) - 1) {
//             stars += `* ` 
//         } else {
//             stars += `*`
//         }
//     }
//     if (!Number.isInteger(num)) {
//         stars += ` .`
//     }
//     console.log(stars);
// }

// starRating(2.5)


/* function showRating(num) {
    let stars = "";
    for (let i = 0; i < Math.floor(num); i++){
        stars += "*";
        if (i !== Math.floor(num) - 1){
            stars += " ";
        }
    }
    if (!Number.isInteger(num)) {
        stars += " .";
    }
    return stars;
}

console.log(showRating(.5)); */

/* function showRating(num) {
    let stars = "";
    for (let i = 0; i < Math.floor(num); i++) {
        stars += `*`;
        if( i !== Math.floor(num) - 1) {
            stars += ` `;
        }
    }
    if (!Number.isInteger(num)) {
        if (stars.length === 0){
            stars += `.`    
        } else {
            stars += ` .`
        }
    }
    return stars;
}

console.log(showRating(4)); */

// question 2 Arrange an array from low to high 88888888888888888888888888

// function arraySort(arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(arraySort([20,10,40,50,10,30,4,7,8,2,5,5,5,4,7,1,5,6,87,5,2,4,7,5,5458]));


/* let numArray = [20,10,40,50,10,30,4,7,8,2,5,5,5,4,7,1,5,6,87,5,2,4,7,5,5458];

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a-b)
}



console.log(sortLowToHigh(numArray)); */
//and for high to low just do .sort((b - a) => b-a)

/* 
function sortLowToHigh(arr) {
    let tempArr = [];
    for(let j = 0; j < arr.length; j++){
        for(let i = j + 1;i < arr.length; i++){
            if(arr[j] > arr[i]) {
                tempArr = arr[j]
                arr[j] = arr[i]
                arr[i] = tempArr
            }
        }
    }
    return arr;
}

console.log(sortLowToHigh(numArray)); */

/* 
function sortLowToHigh(arr) {
    let placeHolder = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                placeHolder = arr[i]
                arr[i] = arr[j]
                arr[j] = placeHolder
            }
        }
    }
    return arr;
}

console.log(sortLowToHigh(numArray)); */

// question 3 sort by highest lowest given an array of objects sorting prices high to low

//  let sortHighToLow = ([
//     {id:1, price: 50},
//     {id:2, price: 30},
//     {id:3, price: 60},
//     {id:4, price: 10},
// ])

// function priceSort(obj) {
//     return obj.sort((a, b) => a.price - b.price)
// }

// console.log(priceSort(sortHighToLow));




/* let sortHighToLow = ([
    {id:1, price: 50},
    {id:2, price: 30},
    {id:3, price: 60},
    {id:4, price: 10},
])

function sortPrice(number) {
    return number.sort((a, b) => a.price - b.price);

}

console.log(sortPrice(sortHighToLow));
 */

// quextion / section 4 Promises 88888888888888888888888888888888888888888888888888888888888888888

/* fetch: This is what is used to ping the url or back end we are trying to get
  
    console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
    Initially fetching will create the first promise not really unlocking any of 
    the fetched data
https://jsonplaceholder.typicode.com/users/1 

ways to unlock

note: good practice is starting with a response when fetching, then data when opening the promise the
second time

1. Then

2.Async/Await
*/

/* 1 then */

const emailRef = document.querySelector(".email");
const nameRef = document.querySelector(".name");
const subStatus = document.querySelector(".subStatus")
const videoRef = document.querySelector(".video")
// Fetching is basically getting the data from the back end/data getting a "promise"
/* fetch("https://jsonplaceholder.typicode.com/users/1") 
  .then(response => { //we use a .then() => {} with a call back to open a promise BUT since it
    return response.json();// is the first .then and we added the .json() we need to .then it again
})//the json above here ^ turns the whole fetch into another promise but makes it readable to front end
  .then(data => {     // because the .json() makes it a promise again we need to .then it again
    console.log(data);  //and of course being best practice to do it outside the other .then()
    emailRef.innerHTML = data.email;
    nameRef.innerHTML = data.name  // and with it now unlocked this allows you to connect it 
  });                   //to your website with the earlier created variable
 */

  /* 2. Async/Await */ // Await needs to be inside an async function like below

// async function user1() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json();
//     console.log(data);
//     emailRef.innerHTML = data.email;
// }

// user1();


// creating promises -------

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve("");
//       }, 2000); 
//     })
// }

// // 1. Then
// getSubscriptionStatus().then(response => console.log(response));



//2. Async/Await
// async function main() {
//     const status = await getSubscriptionStatus();
//     subStatus.innerHTML = status;
// }

// main();


// Challange 
/* 1. Create a fucntion called `getVideo`
   2. Accept a parameter called `subscriptionStatus`
   3. Return a new promise inside of the function that:
            -if `VIP` resolve (`Show Video`)
            -if `FREE` resolve (`Show Trailer`)
            -otherwise reject (`No Video`)
   4. console.log the result of getVideo() in main()
   */ 

//    function getVideo(subStatus) {
//         return new Promise ((resolve, reject) => {
//             if(subStatus === `VIP`) {
//                 resolve(`Show Video`);
//             } else if( subStatus === `FREE`){
//                 resolve(`Show Trailor`);
//             } else {
//                 reject (`No Video`);
//             }
//         })
//    }

// async function main() {
//     const status = await getSubscriptionStatus();
//     try {
//         console.log(await getVideo(status))
//         videoRef.innerHTML = await getVideo(status)
//     } 
//     catch (error) {
//         console.log(error)
//         videoRef.innerHTML = error
//     }
// }

// main();



// question 5 Find all the posts of a given user ex. 4 using promise language is good here 88888

// async function getUserPosts(user) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     const wantedPosts = data.filter(elem => elem.userId === user)
//     return wantedPosts
// }

// console.log(getUserPosts(4));

// async function pGetPosts () {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json();
//     console.log(data);
// }

// console.log(pGetPosts());

// function pGetPosts () {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
// }

// pGetPosts();

// async function pGetPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
//     nameRef.innerHTML = data.id
// }

// pGetPosts();

// async function pGetPosts (userId) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     const userPosts = data.filter(obj => obj.userId === userId)
//     console.log(userPosts);
// }


// pGetPosts(4);

// function pGetPosts (userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         const results = data.filter(obj => obj.userId === userId)
//         console.log(results);
//     })
// }

// pGetPosts(4);


// question 6 call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 not complete

async function nonComplete(num) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let falses =  data.filter(elem => !elem.completed).splice(0,num)
    return falses;
}

console.log(nonComplete(6));


// async function pIncompleteTasks(num) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     let falses = data.filter(obj => !obj.completed).slice(0,num);
//     // let numRequested = [];
//     // for(let i = 0; i < num; i++){
//     //     numRequested.push(falses[i])
//     // }
//     console.log(falses)
// }
        


// pIncompleteTasks(9);