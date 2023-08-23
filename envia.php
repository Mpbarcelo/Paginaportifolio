<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $celular = addcslashes($_POST['celular']);

    $para = "marciatrevinho@gmail.com";
    $assunto = "contato sobre portifólio";
    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Celular".$celular;

    $cabeca = "Fron: marcia-333@hotmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>