const btncredit = document.getElementById(`btncredit`);
const credits = document.getElementById(`credits`);
const btnx = document.getElementById(`x`)
credits.style.display = `none`;
console.log(btncredit);
btncredit.addEventListener(`click`, function(){
   credits.style.display = `block`; 
});
btnx.addEventListener(`click`,function(){
    credits.style.display = `none`;
})