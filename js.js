//for each

let num = [11, 52 , 64 , 75 , 74 , 88 , 35]
num.forEach(function(i){
    console.log(++i)
})

//map 

let nums = [11, 52 , 64 , 75 , 74 , 88 , 35]

// let result = nums.map(function(n){
//     return n * 2
// })
// console.log(result)

let result = nums.map( num => num*2 )
console.log(result)

// filter 

let filters = [11, 52 , 64 , 75 , 74 , 88 , 35]

// let r = filters.filter(function(e){
//     if(e%2==0){
//         return e
//     }
// })
// console.log(r)

let r = filters.filter(e => e>=50 )
console.log(r)

//reduce

let no = [11, 52 , 64 , 75 , 74 , 88 , 35]
let res = no.reduce(function(total,sum){
    return total+sum
})
console.log(res)

//sort 

let number = [11, 52 , 64 , 75 , 74 , 88 , 35]

let order = number.sort((a,b)=>a + b)
console.log(order)