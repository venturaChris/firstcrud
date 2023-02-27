function validateform()
{
    var nome= document.getElementById("nome").value;
    var idade= document.getElementById("idade").value;
    var endereço= document.getElementById("endereço").value;
    var email= document.getElementById("email").value;

    if (nome =""){
    alert("requer o nome");
    return false;
    }

    if (idade =""){
    alert("requer a idade");
    return false;
    }

    else if (idade < 1){
    alert("a idade nao pode ser zero ou menor que zero.");
    return false;
    }

    if (endereço ==""){
    alert("requer o endereço");
    return false;
    }

    if (email ==""){
    alert("requer o email");
    return false;
    }

    else if(!email.includes("@")){
    alert("endereço de email invalido");
    return false; 
    }
}