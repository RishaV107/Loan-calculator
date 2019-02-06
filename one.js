document.querySelector("#loan-form").addEventListener("submit",function(e){
document.querySelector("#results").style.display = "none";
document.querySelector("#loading").style.display = "block";
setTimeout(calculateResult,1500);
e.preventDefault();
});


function calculateResult(){
    console.log("Yes it is working");
    //UI variables
    const amount = document.querySelector("#amount");
    const interest = document.querySelector("#interest");
    const years = document.querySelector("#years");
    const monthlyPayment = document.querySelector("#monthly-payment");
    const totalPayment = document.querySelector("#total-payment");
    const totalInterest = document.querySelector("#total-interest");

    const principle = parseFloat(amount.value);
    const calculatedIneterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12; 
    // console.log(principle);
    // console.log(calculatedIneterest);
    // console.log(calculatedPayments);
    //Monthly payment
    const x = Math.pow(1+calculatedIneterest,calculatedPayments);
    const monthly = (principle*x*calculatedIneterest)/(x-1);
    if(isFinite(monthly)){
       //show loader and hide result
       
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly * calculatedPayments).toFixed(2);
       totalInterest.value = ((monthly * calculatedPayments)-principle).toFixed(2);
       document.querySelector("#loading").style.display = "none";
       document.querySelector("#results").style.display = "block";    
    }
    else{
        showError("Please check the variable");
    }
    function showError(error){
        document.querySelector("#loading").style.display = "none";
        const errDiv = document.createElement("div");
        errDiv.className = 'alert alert-danger';
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");
        errDiv.appendChild(document.createTextNode(error));
        card.insertBefore(errDiv,heading);
        setTimeout(clrErr,3000);

    }
    function clrErr()
    {
        
        document.querySelector(".alert").remove();
    }
}