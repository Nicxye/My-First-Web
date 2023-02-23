function SayHi()
{
    let user = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;

    if (user != "")
        alert("Hi, " + user + "!");
    else
        alert("I can't say hello to you if you don't have a name.");

    if (password != "")
        console.log("Psssst. Your password is not actually secret. Look: " + password + " :O");
    else
        console.log("You value password security so much you don't even have a password. Good one!");
}
function Addition()
{
    let n1 = parseInt(document.getElementById("txtNumberOne").value);
    let n2 = parseInt(document.getElementById("txtNumberTwo").value);
    
    if (!(n1 + n2) != NaN)
    {
        console.log("Fine. Don't input any number. See if I care.");
        return;
    }
        
    console.log("By the way, your addition is equal to " + (n1 + n2));
}