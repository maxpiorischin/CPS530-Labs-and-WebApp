<?php 
$connect = mysqli_connect("localhost", "mpiorisc", "Lodjokku", "mpiorisc");
if ($connect){
    echo "Connected!!";
}
else {
    echo "Not Connected :(";
}

$sql = "DROP TABLE Pictures";
if (mysqli_query($connect, $sql)) {
    echo "Deleted!";
}
else{
    echo "oof";
}