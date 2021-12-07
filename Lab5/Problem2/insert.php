<?php include ('dbconnect.php'); ?>


<?php
$sql = "INSERT INTO Pictures (subject, location, picture_url) VALUES ('Vancouver', 'BC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg');";
 
if (mysqli_query($connect, $sql)) {
    echo "New record created successfully.<br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}
?>
