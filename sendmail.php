<?php
    if (isset($_POST['submit'])){
        $firstName = $_POST['fornavn'];
        $lastName = $_POST['efternavn'];
        $emailFrom = $_POST['email'];
        $company = $_POST['virksomhed'];
        $message = $_POST['besked'];

        $emailTo = "lerja@jonascisum.dk";
        $headers = "Fra: ".$emailFrom."\r\n Reply-To:".$emailFrom;
        $txt = "Du har modtaget en besked fra ".$firstName." ".$lastName.". E-mail: ".$emailFrom.".\n\n".$message;

        mail($emailTo, "Besked fra $firstName $lastName", $txt, $headers);
        header("Location: takfordinbesked.html");
    }
?>
