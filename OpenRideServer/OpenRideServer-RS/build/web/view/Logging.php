<?php

	  // connection parameters
	
	$db_name = "openrideschema";
	// connection variables + connection to mysql and db
	$db_con = mysqli_connect("168.144.202.152","rideShare","ride",$db_name) or die("connection failed");
	$userID=mysqli_real_escape_string($db_con,$_GET['userID']);
	$userRole=mysqli_real_escape_string($db_con,$_GET['userRole']);
	$opCode=mysqli_real_escape_string($db_con,$_GET['opCode']);
	$opID=mysqli_real_escape_string($db_con,$_GET['opID']);
	$additionalFields=mysqli_real_escape_string($db_con,$_GET['addField']);
	$urlUsed=mysqli_real_escape_string($db_con,$_GET['urlUsed']);
	$query="INSERT INTO log (UserId, UserRole, OperationCode, OperationId, urlUsed, additionalFields) VALUES ('$userID','$userRole','$opCode','$opID','$urlUsed','$additionalFields')";
	echo $query;
	$result = mysqli_query($db_con,$query );
	// successful result
 	if(!$result){
	echo "Error";
}
	

?>