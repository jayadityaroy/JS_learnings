const conveter = {
    mToFt: (meter) => meter * 3.28084,
    kgToLb: (kg) => kg * 2.20462,
    cToF: (celsius) => (celsius * 9/5) + 32,
};

document.getElementById('convertButton').onclick = () => {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversionType').value;
    let outputValue = (conversionType === 'mToFt') ? conveter.mToFt(inputValue) :
                     (conversionType === 'kgToLb') ? conveter.kgToLb(inputValue) :
                     conveter.cToF(inputValue);
    document.getElementById('outputValue').textContent = outputValue.toFixed(2);
}