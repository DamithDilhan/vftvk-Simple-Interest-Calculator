function compute()
{
    p = document.getElementById("principal").value;
    if (p == 0){
        return false;
    }
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = document.getElementById('result')
    var amount  = (p*(rate/100)*years) ;
    var today = new Date().getFullYear() + Number(years) ;
    
    result.innerHTML = "If you deposit <mark>"+ p +"</mark>,<br>";
    result.innerHTML +="at an interest rate of <mark>"+ rate +"%</mark>,<br>";
    result.innerHTML +="You will receive amount of <mark>" + Number(amount).toFixed(2) +"</mark>,<br>"
    result.innerHTML +="in the year <mark>" +today+"</mark>";

    
}
function update(value)
{
    document.getElementById("rate_label").innerHTML = value + "%";
}
        