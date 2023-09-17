<?php 
$email = $_POST["email"];
$senha = $_POST["password"];

define("emailCorreto", "kadu@gmail.com");
define("senhaCorreta", "123");

if($email == emailCorreto && $senha == senhaCorreta){


    session_start();
    $_SESSION['user'] = $email;
    header('Location: acesso.php');
}
else{
    echo "Email ou senha incorretos!";
}

?>
