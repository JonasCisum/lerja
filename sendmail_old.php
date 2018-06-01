<?php

    $fra="lerja_web_kontakt_form@jonascisum.dk";
    $til="lerja@jonascisum.dk";

    $fornavn=$_REQUEST['fornavn'];
    $efternavn=$_REQUEST['efternavn'];
    $email=$_REQUEST['email'];
    $virksomhed=$_REQUEST['virksomhed'];
    $besked="<p style='font-family: sans-serif; font-size: 16px; color: blue'>".$_REQUEST['besked']."</p>";

    mail($til, "Besked fra $fornavn, $efternavn, ved $virksomhed, $email", $besked, "content-type:text/html; charset=utf-8\r\nfrom: $fra");
    header("location: takfordinbesked.html");
?>
