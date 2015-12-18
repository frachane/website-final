
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


//login.php

/**
* Start the session.
*/
session_start();

/**
* Include ircmaxell's password_compat library.
*/
require 'php/lib/password.php';

//PDO
$dbh = new PDO('mysql:host=localhost; port=8889; dbname=rent_mail; charset=utf8','root','root');
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


//If the POST var "login" exists (our submit button), then we can
//assume that the user has submitted the login form.


//Retrieve the field values from our login form.
if( isset($_POST) && isset($_POST["email"])) {
    $email  = $_POST["email"];
}
if( isset($_POST) && isset($_POST["password"])) {
    $passwordAttempt = $_POST["password"];
}

//Retrieve the user account information for the given username.
$sql = "SELECT `uid`, `email`, `password` FROM `user_info` WHERE `email` = :email";
$stmt = $dbh->prepare($sql);

//Bind value.
$stmt->bindParam(':email', $email);

//Execute.
$stmt->execute();

//Fetch row.
$results = $stmt->fetch(PDO::FETCH_ASSOC);
$user = $results['uid'];
$password = $results['password'];



// $validPassword = password_verify($passwordAttempt, $password);
// echo "<BR>";
// var_dump($validPassword);
//
// if($password == $passwordAttempt){
//     echo "PASSED";
// }else{
//     echo "FAILED";
// }

//
// If $row is FALSE.
if($user == false){
    //Could not find a user with that username!
    // echo 'Incorrect username / password combination!';
    header('Location: login.html');
} else if($password != $passwordAttempt){
    header('Location: login.html');
} else if ($user == true && $password == $passwordAttempt) {
    //If $validPassword is TRUE, the login has been successful.
    //Provide the user with a login session.
    $_SESSION['uid'] = $user;
    // echo "you pass!";
    header('Location: select.html');

    }




?>
