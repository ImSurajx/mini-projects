const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
// const getButton = document.querySelectorAll("form button");

for(let i = 0; i < dropList.length; i++){
    for(currency_code in country_code){
        

        // selecting USD by default as FROM currency and INR as TO currency
        let selected;
        if(i == 0){
            selected = currency_code == "USD"? "selected": "";
        } else if(i == 1){
            selected = currency_code == "INR"? "selected": "";
        }
        // createing option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () =>{
    let tempCode = fromCurrency.value; // temporaru currency code of FROM drop list
    fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
    toCurrency.value = tempCode; // passing temporary currency code TO currency code
    loadFlag(fromCurrency); // calliing loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate();
})
function loadFlag(element){
    for(code in country_code){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`
        }
    }
}

window.addEventListener("load", () =>{
    getExchangeRate();
});
getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    const exchangeRateTxt = document.querySelector(".exchange-rate");
    // if the user don't enter any value or enter 0 then we'll put 1 value by default in the input field.
    if(amountVal == " " || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "getting exchange rate. . . .";
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    // fetching api response and returning it wirh parsing into js obj and in another method then method receiving object.
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        console.log(exchangeRate);
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        console.log(totalExchangeRate);
        const exchangeRateTxt = document.querySelector(".exchange-rate");
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value}  = ${totalExchangeRate} ${toCurrency.value}`
    }).catch(()=>{ // if user is offline or any other occured while fetching data then catch function will return
        exchangeRateTxt.innerText = "Something went wrong"
    })
}