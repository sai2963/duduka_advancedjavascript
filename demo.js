let productname=document.getElementById('Product-name')
let remainingcount=document.getElementById('remaining')
let max=productname.maxLength;

function inputdata(){
    let inputvalue=productname.value;
    let inputtext=inputvalue.length;
    let remainingchar=max-inputtext;
    remainingcount.textContent=remainingchar;
}
productname.addEventListener('input',inputdata);
