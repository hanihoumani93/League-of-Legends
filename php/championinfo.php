<?php 
require('dbConn.php');
if (isset($_POST['name'])) {
	$name = $_POST['name'];
	
	$query ="SELECT * FROM `champions` WHERE `name` =  '$name'";
		    $query_run = mysqli_query($conn,$query);
		    $query_num_rows = 	mysqli_num_rows($query_run);
			if ($query_num_rows>=1) {
				
				while ($query_row = mysqli_fetch_assoc($query_run)) {
					echo 'Name : ' .$query_row['name']. ' <br> ';
					echo 'Role : ' . $query_row['role']. ' <br> ';
					echo 'Secondary Role : ' . $query_row['srole']. ' <br> ';
					echo 'Attack : ' . $query_row['attack']. ' %<br> ';
					echo 'Health : ' . $query_row['health']. ' %<br> ';
					echo 'Ability : ' . $query_row['ability']. ' %<br> ';
					echo 'Difficulty : ' . $query_row['def']. ' %<br> ';
					
				}
}
}
 ?>
