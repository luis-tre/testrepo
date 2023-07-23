function compute()
{
    var P = document.getElementById("principal").value;
    var R = document.getElementById('rate').value;
    var Y = document.getElementById('years').value;
    var interest = P * Y * R / 100; 
    var amount = parseInt(P) + parseFloat(interest);
    var result = document.getElementById('result');
    var year = new Date().getFullYear() + parseInt(Y);

    if (P <= 0){
        alert('please enter a positive number');
        document.getElementById('principal').focus();
    }
    
    else{
        result.innerHTML = "if you deposit $" + "<mark>" + P + "</mark>" + ",\<br\>at an intrest rate of " + "<mark>" + R + "</mark>" + "% \<br\> you will recive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\>in the year" + "<mark> " + year + "</mark>" + "\<br\>" ;
    }
}

function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;

}