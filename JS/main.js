"use strict"
let amount = document.getElementById('amout')
let result = document.querySelector('.result')
let min = document.querySelector('.min')
let max = document.querySelector('.max')

let minNum = min.value
let maxNum = max.value
function generate(){
    minNum = min.value
    maxNum = max.value
result.innerHTML = Math.floor(Math.random() * (maxNum - minNum+1)+ minNum) 

console.log (minNum)
}






