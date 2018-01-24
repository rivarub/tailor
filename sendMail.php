<?php
$debug = true;
$name = $_POST['name'];
$subject = "New Email from your site";
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"]."\n".$name."\n".$phone."\n".$email;
$headers = "From: $email\n";
if($debug) {
    $to = 'pryshlyak@gmail.com';
} else {
    $to = 'Volodymyrako@gmail.com';
    $headers .=  "Cc: pryshlyak@gmail.com, rivarubg@gmail.com";
}

$backMessage = 'Your message has been sent. Thank you! '
. '<a href="index.html">Return to site </a>';

if($_POST["lang"] == "Ukrainian") {
    $backMessage = 'Ваш лист успішно пішов. Дякуємо! <a href="index_ua.html">Повернутися </a>';
} 

mail($to,$subject,$message,$headers);
echo $backMessage;