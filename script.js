//validar formulario do imput antes de preenchido
function validateform()
{
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var endereco = document.getElementById("endereco").value;
    var email = document.getElementById("email").value;


    if (nome =""){
    alert("requer o nome");
    return false;
    }

    if (idade =""){
    alert("requer a idade");
    return false;
    }

    else if (idade > 1){
    alert("a idade nao pode ser zero ou menor que zero.");
    return false;
    }

    if (endereco ==""){
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
    return true;
}

//funçao para mostras informaçoes do local storage
function showData(){
    var listaPessoas;
    if (localStorage.getItem("listaPessoas") == null){
        listaPessoas = [];
    }
    else {
        listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
    }
   var html = "";


   listaPessoas.forEach(function (element, index)  {
    html += "<tr>";
    html += "<td>" + element.nome + "</td>";
    html += "<td>" + element.idade + "</td>";
    html += "<td>" + element.endereco + "</td>";
    html += "<td>" + element.email + "</td>";
    html += 
    '<td><button onclick="deletarinfo('+index+')"class="btn btn-danger">deletar</button> <button onclick="atualizar('+index+')"class="btn btn-warning m-2">editar</button></td>';
    html +=  "</tr>";
   });
   document.querySelector("#crudTable tbody").innerHTML = html;
   
}

//carrega todos os documentos registrados no local storage
document.onload = showData();

//funçao para adicionar informaçoes no local storage

function AddData(){
    if (validateform() == true){


        var nome = document.getElementById("nome").value;
        var idade = document.getElementById("idade").value;
        var endereco = document.getElementById("endereco").value;
        var email = document.getElementById("email").value;



        var listaPessoas;
        if (localStorage.getItem("listaPessoas") == null){
            listaPessoas = [];
        }
        else {
            listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
        }

        listaPessoas.push({
            nome : nome,
            idade : idade,
            endereco : endereco,
            email : email,
        });
 
        localStorage.setItem("listaPessoas", JSON.stringify(listaPessoas));
        showData();
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("email").value = "";
    }
}

//funçao para deletar do local storage

function deleteData(index){

    var listaPessoas;
    if (localStorage.getItem("listaPessoas") == null){
        listaPessoas = [];
    }
    else
    {
        listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
    }

    listaPessoas.splice(index, 1);
    localStorage.setItem("listaPessoas", JSON.stringify(listaPessoas));
    showData();
        
}

//funçao para atualizar e editar no local storage

function UpdateData(index){
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    var listaPessoas;
    if (localStorage.getItem("listaPessoas") == null){
        listaPessoas = [];}
        else {
            listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
        }
        document.getElementById("nome").value = listaPessoas[index].nome;
        document.getElementById("idade").value = listaPessoas[index].idade;
        document.getElementById("endereco").value = listaPessoas[index].endereco;
        document.getElementById("email").value = listaPessoas[index].email;

        document.querySelector("#update").onclick = function(){
        if (validateform() == true){
            listaPessoas[index].nome = document.getElementById("nome").value;
            listaPessoas[index].idade = document.getElementById("idade").value;
            listaPessoas[index].endereco = document.getElementById("endereco").value;
            listaPessoas[index].email = document.getElementById("email").value;

            localStorage.setItem("listaPessoas" , JSON.stringify(listaPessoas));

            showData();

            document.getElementById("nome").value = "";
            document.getElementById("idade").value = "";
            document.getElementById("endereco").value = "";
            document.getElementById("email").value = "";

            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }
    }
}