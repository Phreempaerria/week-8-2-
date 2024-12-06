function ClickButton() {
    let header = document.getElementById('header')
    console.log('Header :', header.textContent)//แสดงข้อมูลที่week8ที่เขียนไว้//
    console.log('Header :', header.innerText)//innerText คือแสดงข้อความที่ต้องการแสดง//
    console.log('Header :', header.innerHTML)
    
    let content = document.getElementById('content')
    let firstName = document.querySelector('input[name=firstName]').value
    content.innerText = firstName
    content.innerHTML = `<b>${firstName}</b>`
}
function ClickButton2(event){
    let button = event.target
    console.log('Button Name :', button.innerText)

}
function Color(event){
    let button = event.target
    console.log('Button Color :', button.style.bla)
    button.style.backgroundColor= 'pink'

}
function Cal(){
    let  price = parseFloat(document.querySelector('input[name=Price]').value)
    let vat = parseFloat(document.querySelector('input[name=Vat]').value)
    let result = document.getElementById('Result')
    let b_totalprice = (price *100/(100+vat)).toFixed(2)
    let b_totalvat = (price-b_totalprice).toFixed(2)
    console.log(b_totalprice,b_totalvat)
    let htmlResult = `
    before Vat : ${b_totalprice} <br>
    VAT ${vat}% :${b_totalvat} <br>
    <hr>
    TOTAL : ${price.toFixed(2)}
    `
   result.innerHTML = htmlResult
   
}