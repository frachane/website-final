<?php

    //error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    session_start();
    // $uid = $_SESSION['uid']; FIXME


    //Connecting to page
    if( isset($_POST) && isset($_POST["address"])) {
        $address = $_POST["address"];
    }

    if( isset($_POST) && isset($_POST["postal"])) {
        $postal = $_POST["postal"];
    }

    if( isset($_POST) && isset($_POST["phone"])) {
        $phone = $_POST["phone"];
    }


    if( isset($_POST) && isset($_POST["region"])) {
        $avail = serialize( $_POST["region"] );
        // foreach($_POST["region"] as $loc)

        $ary = unserialize($avail);
        var_dump($ary);
    }

    if( isset($_POST) && isset($_POST["amount"])) {
        $price = $_POST["amount"];
        var_dump($price);
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
    var_dump($comment);

    //PDO
    $dbh = new PDO('mysql:host=localhost; port=8889; dbname=rent_mail; charset=utf8','root','root');
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    // //Inserting data into table `uid`, FIXME
    $sql = "INSERT INTO `lister` ( `address`, `region`, `phone`, `postal`, `price`, `month`, `year`, `bedrooms`, `bathrooms`, `pets`, `smoking`, `comment`)
    VALUES ( :address, :region, :phone, :postal, :price, :month, :year, :bedrooms, :bathrooms, :pets, :smoking, :comment)";

    // //and sanitive :uid, FIXME
    $stmt = $dbh->prepare($sql);
    //Bind paramters

    // $stmt->bindParam(':uid', $uid);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':region', $ary);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':postal', $postal);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':month', $month);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':bedrooms', $bedrooms);
    $stmt->bindParam(':bathrooms', $bathrooms);
    $stmt->bindParam(':pets', $pets);
    $stmt->bindParam(':smoking', $smoking);
    $stmt->bindParam(':comment', $comment); /*FIXME*/

    //execute SQL
    $stmt->execute();




 ?>
