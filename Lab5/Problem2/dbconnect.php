<?php
$connect = mysqli_connect("localhost", "mpiorisc", "Lodjokku", "mpiorisc");
if ($connect){
    echo "Connected to SQL!!";
}
else {
    echo "Not Connected :(";
}

// $sql = "CREATE TABLE TEST (sku INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY)";
// if (mysqli_query($connect, $sql)) {
//     echo "Test Table Created!";
// }
// else  {
//     echo "Test Table Not Created :(";
// }
?>