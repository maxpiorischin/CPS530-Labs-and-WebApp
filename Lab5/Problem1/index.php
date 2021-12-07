<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Lab5 Problem 1</title>
</head>
<body>
    <h1> Problem 1 </h1>
    <h2> Generate Multiplication Table </h2>
    <form method="post">
        <input type="text" name="rows" placeholder="Input Rows" size="50" required>
        <input type="text" name="cols" placeholder="Input Cols" size="50" required>
        <input type="submit" value="Submit">
    </form>
    <table class="mult-table">
    <?php
    if (isset($_POST['rows']) and isset($_POST['cols'])){
        if (isset($_SESSION['hits'])) {
            $_SESSION['hits'] += 1;
            echo "Hits: ";
            echo $_SESSION['hits'];
        }
        else{
            $_SESSION['hits'] = 1;
            echo "Hits: ";
            echo $_SESSION['hits'];
        }
        $rows = intval($_POST['rows']);
        $cols = intval($_POST['cols']);
        if ($rows > 13 or $rows < 3 or $cols > 13 or $cols < 3) {
            echo "Invalid input! Please input numbers between 3 and 12.";
        }
        else{
            for ($row = 1; $row <= $rows; $row++){
                echo '<tr>';
                for ($col = 1; $col <= $cols; $col++){
                    $val = $row * $col;
                    if ($row == 1 or $col == 1){
                        echo "<td><b> $val </b></td>";
                    }
                    else{
                        echo "<td> $val </td>";
                    }
                }
                echo '</tr>';
            }
        }
    }
    else{

    }
    ?>
    </table>
</body> 
</html>