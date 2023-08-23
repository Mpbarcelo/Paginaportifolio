<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);

    $para = "marciatrevinho@gmail.com";
    $assunto = "Contato sobre portfólio";
    $corpo = "Nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "Celular: " . $celular;

    $cabecalho = "From: marcia-333@hotmail.com" . "\n" . "Reply-To: " . $email . "\n" . "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabecalho)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Houve um erro ao enviar o email!";
    }
}
?>