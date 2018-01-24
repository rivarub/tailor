<?php
$debug = false;
$name = $_POST['name'];
$subject = "New Email from your site";
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = "$name wrote: ". $_POST["message"];
$headers = "From: $email\n";
if($debug) {
    $to = 'pryshlyak@gmail.com';
} else {
    $to = 'Volodymyrako@gmail.com';
    $headers .=  "Cc: pryshlyak@gmail.com, rivarubg@gmail.com";
}


mail($to,$subject,$message,$headers);
echo 'Your message has been sent. Thank you! '
. '<a href="index.html">Return to site </a>';