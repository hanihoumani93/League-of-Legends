<?php 

require('dbConn.php');
$keyword = $_POST['search'];


$query ="SELECT * FROM `la` WHERE `keyword` LIKE '%".$keyword."%'";
		    $query_run = mysqli_query($conn,$query);
		    $query_num_rows = 	mysqli_num_rows($query_run);
		   if ($query_num_rows>=1) {
		   	$numb = 1; 
		   while ($query_row = mysqli_fetch_assoc($query_run)) {
		       
		       
					$id =  $query_row['id'];
					$title =  $query_row['title'];
					$desc =  $query_row['description'];
					$keywords =  $query_row['keyword'];
					$date =  $query_row['date'];

					echo $numb.'- <b><i> '.$title. ' </i></b><br>' .$desc. '<br><i>' .$date.'</i><br><br>';

					$numb++;
				}
}else{
	echo "No results found...";
}

 ?>
