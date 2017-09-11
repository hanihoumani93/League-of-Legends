<?php 
require('dbConn.php');
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$text = $_POST['text'];

$query = "INSERT INTO `contact` VALUES ('', '".mysqli_real_escape_string($conn, $name)."', '".mysqli_real_escape_string($conn, $mobile)."', '".mysqli_real_escape_string($conn, $email)."', '".mysqli_real_escape_string($conn, $text)."')";
      if ($query_run = mysqli_query($conn, $query)) {
      echo "Data Submitted!";
      }else{
      	echo "Error! SQL";
      }


 ?>