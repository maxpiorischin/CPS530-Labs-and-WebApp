<?php include ('dbconnect.php'); ?>

<?php

$sql = "SELECT * FROM Pictures";
$result = mysqli_query($connect, $sql);

if (mysqli_num_rows($result) > 0) {

  while($row = mysqli_fetch_assoc($result)) {
    echo $row["picture_number"] . " " . $row["subject"] . " " . $row["location"] . " " . $row["date_taken"] . " " . $row["picture_url"] . "<br>";
  }
} else {
  echo "No results.";
}

mysqli_close($connect);
?>
