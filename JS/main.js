"use strict"
let amount = document.getElementById('amout')
let result = document.querySelector('.result')
let min = document.querySelector('.min')
let max = document.querySelector('.max')

let minNum = min.value
let maxNum = max.value
let amountNum = amount.value

function clean(){
    result.innerHTML = ''
}

function generate(){
    clean()
    amountNum = amount.value
    minNum = min.value
    maxNum = max.value
    for(let i =0; i < amountNum; i++){
        let random = Math.floor( Math.random() * (maxNum - minNum) + minNum) ; 
        result.innerHTML += random + "  "; 
    } 

}






