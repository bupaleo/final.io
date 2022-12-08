let basket = (window.localStorage.getItem("elem"))? JSON.parse(window.localStorage.getItem("elem")) : [];

console.log(basket);

basket.forEach(element => {
    if (element) {
        let div = document.createElement('div');
        div.classList.add('elem');
        div.innerHTML = `
            <img src="${element.source}" alt="" class="elem-image">
            <div class="elem-info">
                <h3 class="elem-head">${element.name}</h3>
                <p class="elem-description">${element.description}</p>
                <p>Price : <span class="price">${element.cost}</span>$</p>
                <button class="counter" onclick="add(this)">+</button>
                <span class="elem-num">${element.count}</span>
                <button class="counter"  onclick="minus(this)">-</button>
            </div>
        `;
        document.querySelector('.elems').append(div);
    }
});
function total(){
let sum = 0;
let prices = document.querySelectorAll(".price");
let amounts = document.querySelectorAll(".emaunt");
for (let i = 0; i < prices.length; i++) {
    sum = sum + parseInt(prices[i].innerHTML) * parseInt(amounts[i].innerHTML);
}
document.getElementById("total").innerHTML = sum;

}
function add(element){
    let num=element.closest(".tours_name");
    num.querySelector('.emaunt').innerHTML=
    parseInt(num.querySelector('.emaunt').innerHTML)+1;
    total();
}
function minus(element){
    let num=element.closest(".tours_name");
    num.querySelector('.emaunt').innerHTML=
    parseInt(num.querySelector('.emaunt').innerHTML)-1;
    total();
}