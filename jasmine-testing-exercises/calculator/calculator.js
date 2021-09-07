window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// let current = getCurrentUIValues();


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // if (current === undefined){
  
  // } 
  let value = {amount: 11150, years: 2, rate: 4.5}
  let amountUI = document.getElementById('loan-amount');
  amountUI.value = value.amount;
  let uiYears = document.getElementById('loan-years');
  uiYears.value = value.years;
  let uiRate = document.getElementById('loan-rate');
  uiRate.value = value.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 let presentUIvalues = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(presentUIvalues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
//does the value here means it came from the value of the previous function
function calculateMonthlyPayment(value) {
let monthlyRate = (value.rate/100) / 12;
let n = Math.floor(value.years * 12);
return ((monthlyRate * value.amount)/(1- Math.pow((1 + monthlyRate), -n))).toFixed(2); 

// update();
//  return loanAmount.value *= loanRate.value/ 1 - (1 + loanRate.value)**loanYear.value
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
//ask how functions know the values of monthly as the answer of the calculateMonthlyPayment does that mean returned values of functions before becomes the argument of the next functions?
function updateMonthly(monthly) {
    let uiMonthly = document.getElementById("monthly-payment");
    uiMonthly.innerText = "$" + monthly;

}
