<?php 
require('dbConn.php');
$query ="SELECT * FROM `la` ORDER BY `date` DESC ";
		    $query_run = mysqli_query($conn,$query);
		    $query_num_rows = 	mysqli_num_rows($query_run);
			
				
				

 ?>



<div class="la">
	<div class="lahead">
		<h2>Latest News</h2>
	</div>
	<div class="labody">
	<?php 
	while ($query_row = mysqli_fetch_assoc($query_run)) {
					$title = $query_row['title'];
					$decription = $query_row['description'];
					$date = $query_row['date'];
					
					
				
?>
		
		<div class="lapost">
			<div  class="laposthead">
				<?php echo $title; ?>
			</div>
			<div  class="lapostbody">
				<?php echo $decription; ?><br><br>
				<?php echo $date; ?>
			</div>
		</div>
		<?php } ?>
	</div>
</div>