const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const calculate = document.getElementById('calc_Tip')
const total = document.getElementById('total');

calculate.addEventListener('click', function(){

    const billVal = billAmount.value;
    if(billVal === '') {
        alert("Please enter the bill amount");
        return;
    }

    const tipVal = tipPercentage.value;
    if(tipVal === ''){
        alert("Please enter the tip amount");
        return;
    } 

    // clearing values
    // billAmount.value = "";
    // tipPercentage.value = "";
    total.innerHTML = "";

    // Calculate tip and total
    let tip = parseInt(Number(billVal) * (Number(tipVal) / 100));
    let amount = Number(billVal) + tip;

    // result container
    const resultContainer = document.createElement('div');
    resultContainer.className = 'results-container';

    // tip result
    const tipResult = document.createElement('div');
    tipResult.className = 'result-item tip-result'
    tipResult.innerHTML = `
                        <span class="result-label">Tip Amount: </span>
                        <span class="result-value">₹${tip}</span>
                          `

    // total amount
    const totalResult = document.createElement('div');
    totalResult.className = 'result-item total-result'
    totalResult.innerHTML = `
                                <span class="result-label">Total Amount:</span>
                                <span class="result-value">₹${amount}</span>
                            `


    // append results
    resultContainer.appendChild(tipResult);
    resultContainer.appendChild(totalResult);
    total.appendChild(resultContainer);

    
})