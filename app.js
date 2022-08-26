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

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}