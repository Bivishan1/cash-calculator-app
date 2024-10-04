document.addEventListener('DOMContentLoaded', ()=> {

	//get reference of input amount fields
	const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2= document.getElementById('et2');
    const et1 = document.getElementById('et1');
    // Get references to other input fields
  
    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');
    // Get references to other result elements


    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtCashWord = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');

    const cashInputs = [et500,et100, et50, et20, et10, et5, et2, et1];
    const cashTexts = [txt500,txt100, txt50, txt20, txt10, txt5, txt2, txt1];
// console.log(cashInputs);
    cashInputs.forEach((input,index)=> {
    	input.addEventListener('input', ()=> {
    		cashCalculate(index);
    	});
    });


    function cashCalculate(index) {
    	const denotions = [500,100,50,20,10,5,2,1];
    	cashTexts[index].textContent = cashInputs[index].value * denotions[index];
    	totalCash();
    }

    function totalCash() {
    	let totalCashValue = 0;
        //taking cashtext value to calculae totalValues
    	cashTexts.forEach((text)=> {
    		totalCashValue += parseInt(text.textContent);//converting string value to number integer.
    	});
        txtFinalCash.textContent = 'Total Cash: ' + totalCashValue;
        txtCashWord.textContent = 'In words: ' +numberToWords(totalCashValue);

    }

    function numberToWords(num) {
    if (num === 0) return 'zero';

    const belowTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const thousands = [
        '', 'thousand', 'million', 'billion'
    ];

    function helper(n) {
        console.log('n:'+n);
        if (n < 20) return belowTwenty[n];
        if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + belowTwenty[n % 10] : '');
        if (n < 1000) return belowTwenty[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' ' + helper(n % 100) : '');

        for (let i = 0; i < thousands.length; i++) {
            const unit = Math.pow(1000, i);
            if (n < unit * 1000) {
                return helper(Math.floor(n / unit)) + ' ' + thousands[i] + (n % unit !== 0 ? ' ' + helper(n % unit) : '');
            };
        };
    };

    return helper(num).trim() +  ` only/-`;
}

btnReset.addEventListener('click', resetValue);

function resetValue() {
    cashInputs.forEach((input)=> {
        input.value ='';// can't access textContent property in input field.
    });

    cashTexts.forEach((txt)=> {
        txt.textContent = 0;//text label property will not access value property.
    });

    txtFinalCash.textContent = 'Total Cash: 0';
    txtFinalCashInWords.textContent = 'In Words: Zero';

}




})