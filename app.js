let p1=document.getElementById('para')
function changepara(){
    p1.textContent='clicked';
    console.log(p1)
   
}
p1.addEventListener("click",changepara)
let inputElement=document.querySelector('input');
function Inputvalue(){
    let text=inputElement.value;
    console.log(text);

}
inputElement.addEventListener('input',Inputvalue);