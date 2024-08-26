<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        [nome="segundoh1"]{
            color:blue;
        }
        a{
            color:chartreuse;
        }

        a[href^="https"]{
            color:red;

        }

       div[nome*="paulo"]{
            color:deeppink;
        }

        [nome^="sao"]{
            color:goldenrod;
        }

        [nome$="paulo"]{
            color:aqua;
        }

        div[nome~="paulo"]{
            color:green;
        }




    </style>
</head>
<body>


    <h1 nome="primeiroh1">olá mundo1</h1>
     <h1 nome="segundoh1">olá mundo2</h1>

     <h1>olá mundo3</h1>



     <a href="https://www.uol.com.br">site uol</a>
     <a href="http://www.uol.com.br">site uol</a>

     <div nome="sao paulo">sao paulo</div>
     <div nome="sao bernardo">sao bernardo</div>
     <div nome="sao joaquim">sao joaquim</div>
     <div nome="pe sao paulo">pe sao paulo</div>
     <div nome="pedro paulo">pedro paulo</div>
     <div nome="pedro_paulo">pedro_paulo</div>
     <div nome="pedro paulo joao">pedro paulo joao</div>
     <div nome="paulo"> paulo </div>
     <div nome="pedropaulo">pedropaulo</div>

<style>
    [cor|="rosa"]{
        color:pink;
    }

    [cor|="verde"]{
        color:green;
    }

    [cor|="vermelho"]{
        color:red;
    }

</style>

     <div>
        <ul>
            <li cor="rosa">rosa</li>
            <li cor="verde">verde</li>
            <li cor="vermelho">vermelho</li>
            <li cor="rosa-choque">rosa-choque</li>
            <li cor="verde-oliva">verde-oliva</li>
            <li cor="rosa_choque">rosa_choque</li>
            <li cor="verde_oliva">verde_oliva</li>
        </ul>
     </div>

     <style>
        [valor|="10"]{
            color:chartreuse;
        }
     </style>

     <div valor="10">
    10
     </div>

     <div valor="10-numero">
     10-numero
     </div>

     <div valor="10_numero">
     10_numero
     </div>


</body>
</html>
