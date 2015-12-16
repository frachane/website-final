<?php

    //error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    session_start();
    // $uid = $_SESSION['uid'];

    //Connecting to page
    if( isset($_POST) && isset($_POST["amount"])) {
        $price = $_POST["amount"];
        var_dump($price);
        // replace "$" with ""
         $price = str_replace("$"," ", $price);
        // split string using " - "
         $price = explode(" - ", $price);
         $price = array_map('trim',$price);
        // now we have an array with two items
        // [0] - min range
        $min = $price[0];
        // [1] - max range
        $max = $price[1];
        var_dump($min);
        var_dump($max);
    }

    if( isset($_POST) && isset($_POST["location"])) {
        $location = $_POST["location"];

    }

    if( isset($_POST) && isset($_POST["month"])) {
        $month = $_POST["month"];
    }

    if( isset($_POST) && isset($_POST["year"])) {
        $year = $_POST["year"];
    }
    if( isset($_POST) && isset($_POST["bathrooms"])) {
        $bathrooms = $_POST["bathrooms"];
    }
    if( isset($_POST) && isset($_POST["bedrooms"])) {
        $bedrooms = $_POST["bedrooms"];
    }
    if( isset($_POST) && isset($_POST["pets"])) {
        $pets = $_POST["pets"];
    }
    if( isset($_POST) && isset($_POST["smoking"])) {
        $smoking = $_POST["smoking"];
    }
    $comment = "";
    if( isset($_POST) && isset($_POST["comment"])) {
        $comment = $_POST["comment"];
    }

    //PDO
    $dbh = new PDO('mysql:host=localhost; port=8889; dbname=rent_mail; charset=utf8','root','root');
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    // //Inserting data into table `uid`,
    $sql = "INSERT INTO `renter` ( `min`, `max`, `location`, `month`, `year`, `bedrooms`, `bathrooms`, `pets`, `smoking`, `comment`)
    VALUES ( :min, :max, :location, :month, :year, :bedrooms, :bathrooms, :pets, :smoking, :comment)";

    // //and sanitive :uid,
    $stmt = $dbh->prepare($sql);
    //Bind paramters
    // $stmt->bindParam(':uid', $uid);
    $stmt->bindParam(':min', $min);
    $stmt->bindParam(':max', $max);
    $stmt->bindParam(':location', $location);
    $stmt->bindParam(':month', $month);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':bedrooms', $bedrooms);
    $stmt->bindParam(':bathrooms', $bathrooms);
    $stmt->bindParam(':pets', $pets);
    $stmt->bindParam(':smoking', $smoking);
    $stmt->bindParam(':comment', $comment);

    //execute SQL
    $stmt->execute();




 ?>
