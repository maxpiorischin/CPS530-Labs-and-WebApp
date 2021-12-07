<?php
$connect = mysqli_connect("localhost", "mpiorisc", "Lodjokku", "mpiorisc");
if ($connect){
    echo "Connected!!";
}
else {
    echo "Not Connected :(";
}
$sql = "INSERT INTO Pictures (subject, location, picture_url) VALUES ('Toronto Buildings', 'Ontario', 'https://www.immigration.ca/wp-content/uploads/2018/01/Ontario-13.jpg'); ";
$sql .= "INSERT INTO Pictures (subject, location, picture_url) VALUES ('Paris, Ontario City', 'Ontario', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/8BBA/production/_119107753_gettyimages-165224294.jpg');";
$sql .= "INSERT INTO Pictures (subject, location, picture_url) VALUES ('Montreal City', 'Quebec', 'https://www.fodors.com/wp-content/uploads/2019/02/FavouriteEuropeanCityMightbeinNA__HERO_shutterstock_1205629267.jpg');";
if (mysqli_multi_query($connect, $sql)) {
    echo "Multiple Pictures added successfully.<br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}
?>