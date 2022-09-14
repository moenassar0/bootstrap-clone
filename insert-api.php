<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include("connection.php");
    
    if(isset($_POST['full_name']) && isset($_POST['email']) && isset($_POST['phone_number']) && isset($_POST['message'])){
        $full_name = $_POST['full_name'];
        $email = $_POST['email'];
        $phone_number = $_POST['phone_number'];
        $message = $_POST['message'];
    
        echo $full_name . " " . $message;
    }
?>