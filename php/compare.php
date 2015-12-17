<?php

    //error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    session_start();


    echo("testing");
    //connect to database
    $dbh = new PDO('mysql:host=localhost; port=8889; dbname=rent_mail; charset=utf8','root','root');
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    //  Select from renter table
    $sql = "SELECT * FROM `renter` INNER JOIN `lister`
ON `renter`.bedrooms=`lister`.bedrooms
AND `renter`.bathrooms=`lister`.bathrooms
AND `renter`.pets=`lister`.pets
AND `renter`.smoking=`lister`.smoking
AND `renter`.location=`lister`.region
AND `renter`.month=`lister`.month
AND `renter`.year=`lister`.year
AND `renter`.max>= `lister`.price
AND `renter`.min <= `lister`.price";
    $stmt = $dbh->prepare($sql);

    $stmt->execute();

    //$result = $stmt->fetch( PDO::FETCH_ASSOC );

    while($result = $stmt->fetch( PDO::FETCH_ASSOC )){
        echo "bedrooms: ".$result['bedrooms'].'<br>';
        echo "bathrooms: ".$result['bathrooms'].'<br>';
        echo "pets: ".$result['pets'].'<br>';
        echo "smoking: ".$result['smoking'].'<br>';
        echo "region: ".$result['region'].'<br>';
        echo "month: ".$result['month'].'<br>';
        echo "year: ".$result['year'].'<br>';
        echo "price: ".$result['price'].'<br>';
        echo "address: ".$result['address'].'<br>';
        echo "postal: ".$result['postal'].'<br>';
        echo "phone: ".$result['phone'].'<br>';

    };


$to  = "jermjoseph@gmail.com"; /*FIXME*/

// subject
$subject = "Listing's from RentMail ";

// message
$message ="
<html>
      <head>
            <title>email</title>
      </head>
      <body>
             <p>Thank you for using RentMail!  Here are the listings that matched your criteria.</p>
            <table border='1' style='width:100%'>
                  <tr>
                        <td>'price:'</td>
                        <td> 'address:'</td>
                        <td>'region:'</td>
                        <td>'postal:'</td>
                        <td>'phone:'</td>
                        <td>'month:'</td>
                        <td>'year:'</td>
                        <td>'bedrooms:' </td>
                        <td>'bathrooms:'</td>
                        <td>'pets:'</td>
                        <td> 'smoking:'</td>
                  </tr>
                  <tr>
                        <td>" . $result['price'] . "</td>
                        <td>" . $result['address'] . "</td>
                        <td>" . $result['region'] . "</td>
                        <td>" . $result['postal'] . "</td>
                        <td>" . $result['phone'] . "</td>
                        <td>" . $result['month'] . "</td>
                        <td>" . $result['year'] . "</td>
                        <td>" . $result['bedrooms'] . " </td>
                        <td>" . $result['bathrooms'] . "</td>
                        <td>" . $result['pets'] . "</td>
                        <td>" . $result['smoking'] . "</td>
                  </tr>

            </table>

      </body>
</html>

";

// To send HTML mail, the Content-type header must be set
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf8" . "\r\n";

// Additional headers
$headers .= "To: Jermain <jermjosephy@gmail.com>, ". "\r\n";
$headers .= "From: Rent Mail <notification@rentmail.com>" . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);



 ?>
