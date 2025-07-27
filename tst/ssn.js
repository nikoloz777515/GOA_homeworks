let tipPercent = 0;

function setTip(percent) {
    tipPercent = percent;
    calculate();
}

function setCustomTip() {
    const custom = parseFloat(document.getElementById('customTip').value);
    tipPercent = isNaN(custom) ? 0 : custom;
    calculate();
}

function calculate() {
    const bill = parseFloat(document.getElementById('bill').value);
    const people = parseInt(document.getElementById('people').value);

    if (isNaN(bill) || isNaN(people) || people === 0) return;

    const tipTotal = bill * (tipPercent / 100);
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = (bill + tipTotal) / people;

    document.getElementById('tipPerPerson').innerText = tipPerPerson.toFixed(2);
    document.getElementById('totalPerPerson').innerText = totalPerPerson.toFixed(2);
}

function resetAll() {
    document.getElementById('bill').value = '';
    document.getElementById('people').value = '';
    document.getElementById('customTip').value = '';
    tipPercent = 0;

    document.getElementById('tipPerPerson').innerText = '0.00';
    document.getElementById('totalPerPerson').innerText = '0.00';
}

