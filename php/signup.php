<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/**
* Start the session.
*/
session_start();

/**
* Include ircmaxell's password_compat library.
*/
require 'lib/password.php';

/**
* Include our MySQL connection.
*/
//PDO
//PDO
$dbh = new PDO('mysql:host=localhost; port=8889; dbname=rent_mail; charset=utf8','root','root');
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


//Retrieve the field values from our registration form.
if( isset($_POST) && isset($_POST["email"])) {
    $email  = $_POST["email"];
}
if( isset($_POST) && isset($_POST["password"])) {
    $pass = $_POST["password"];
}
if( isset($_POST) && isset($_POST["first_name"])) {
    $fname = $_POST["first_name"];
}
if( isset($_POST) && isset($_POST["last_name"])) {
    $lname = $_POST["last_name"];
}

// Now, we need to check if the supplied username already exists.
//
// Construct the SQL statement and prepare it.
$sql = "SELECT COUNT(email) AS num FROM `user_info` WHERE `email` = :email";
$stmt = $dbh->prepare($sql);

//Bind the provided username to our prepared statement.
$stmt->bindValue('email', $email);

//Execute.
$stmt->execute();
//
// //Fetch the row.
$row = $stmt->fetch(PDO::FETCH_ASSOC);
//
//If the provided username already exists - display error.
//TO ADD - Your own method of handling this error. For example purposes,
//I'm just going to kill the script completely, as error handling is outside
//the scope of this tutorial.
if($row['num'] > 0){
     echo 'Email has been taken';
 }
else{
    //
    // //Hash the password as we do NOT want to store our passwords in plain text.
    $passwordHash = password_hash($pass, PASSWORD_BCRYPT, array("cost" => 12));

    // //Prepare our INSERT statement.
    // //Remember: We are inserting a new row into our users table.
    $sql = "INSERT INTO `user_info` (`email`, `password`, `first_name`, `last_name`) VALUES (:email, :password, :firstname, :lastname)";
    $stmt = $dbh->prepare($sql);

    // //Bind our variables.
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':password', $passwordHash);
    $stmt->bindValue(':firstname', $fname);
    $stmt->bindValue(':lastname', $lname);

    //
    // //Execute the statement and insert the new account.
    $result = $stmt->execute();
    //
    // //If the signup process is successful.
    if($result){
        //What you do here is up to you!
         header( 'Location: select.html' );
        }

    // when creating a new user record, the db returns the id of the newly created record
    // http://php.net/manual/en/pdo.lastinsertid.php
    // eg: $uid = $dbh->lastInsertId();
}

?>
