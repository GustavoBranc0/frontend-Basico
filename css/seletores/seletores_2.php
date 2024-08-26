<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>


        div p span[cor="amarelo"]{

            color:yellow;

        }
    </style>


</head>

<body>

<div>

<p>

<span cor="amarelo">amarelo</span>


</p>
</div>



<div>

<p>

<span cor="verde">verde</span>


</p>
</div>

<style>

div span[cor|="rosa"]{

    color:pink;

}


</style>

<div>
        <ul>
            <li >
               <span cor="rosa_pink">rosa_pink</span>
            </li>


            <li>
           <span cor="rosa-choque">rosa-choque</span>
            </li>

            <li>
               <span cor="rosa">rosa</span>
            </li>

        </ul>
     </div>



<style>

    p > span#teste > a.teste1{

        color:red;

    }

</style>


     <p>



     <span id="teste">
        <a class = "teste1" href="#"> teste</a>

     </span>



     </p>




     <style>

        a{
            color:black;
        }


        button:active{
            color:blue;
        }


        button:hover{
            color:chartreuse;
        }

     </style>


<button>button</button>



<style>
span+button{
    color:blue;
}

button+span{
    color:red;
}

/* span~button{
    color:yellow;
} */

button~span{
    color:yellow;
}

div:empty{
    background: red;
    border: 1px solid red;
}

</style>


<div>
    <div>
        <span>antes</span>
        <button>botão</button>
        <span>depois</span>
        <div><span>divSpan</span></div>
    </div>
</div>
<span>span fora</span>
<button>botao fora</button>
<span>span fora</span>
<span>span ultimo</span>




<div>
conteudo
</div>

<div></div>

</body>
</html>
