const initialPrice = document.querySelector("#initialPrice");
const quantityStocks = document.querySelector("#quantityStocks");
const currentPrice = document.querySelector("#currentPrice");
const outputBox = document.querySelector("#outputBox");

const checkButton = document.querySelector(".btn");

checkButton.addEventListener("click", () => {
  let initialP = Number(initialPrice.value);
  let stonks = Number(quantityStocks.value);
  let currentP = Number(currentPrice.value);
  
  
  if(initialP && stonks && currentP){
      calculateProfitOrLoss(initialP, stonks, currentP);
  }else{
  let  status='Error'
showResult("Please enter all required inputs",status)
  }
});
const calculateProfitOrLoss = (initialP, stonks, currentP) => {
  if (initialP > currentP) {
    //losss
    let loss = (initialP - currentP) * stonks;
    let lossPercentage = (loss / initialP) * 100;
    let status='Loss'
    showResult(`The loss is ${loss} and the loss percent is ${lossPercentage}`,status);
  } else if (initialP < currentP) {
    //profit
    let status='Profit'
    let profit = (currentP - initialP) * stonks;
    let profitPercentage = (profit / initialP) * 100;
    showResult(`The profit is ${profit} and the profit percent is ${profitPercentage}`,status);
  } else {
    let status='Neutral'
    showResult("No profit No loss",status);
  }
};
const showResult = (msg,status)=>{
outputBox.value= msg
console.log(status)
switch(status){
    case 'Profit':
        outputBox.style.backgroundColor="#1f6521"
        break;
    case 'Loss':
        outputBox.style.backgroundColor="red"
    case 'Neutral':
        outputBox.style.backgroundColor="yellow"
    case 'Error':
        outputBox.style.color='red'
    }
}
