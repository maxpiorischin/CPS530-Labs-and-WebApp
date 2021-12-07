<?php include('dbconnect.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>problem 2</title>
</head>
<body>
    <h1 class = nicegreen> Sql Picture Database! </h1>
    <h2 class = nicegreen> A. All picture descriptions descending:</h2>
    <?php
        $sql = "SELECT * FROM Pictures ORDER BY date_taken DESC;";
        $result = mysqli_query($connect, $sql);
        
        if (mysqli_num_rows($result) > 0) {
        
          while($row = mysqli_fetch_assoc($result)) {
            echo "<p class = query>". $row["subject"] . " , " . $row["location"] . " , " . $row["date_taken"] . "</p>";
          }
  } else {
          echo "No results.";
        }
    ?>

    <h2 class = nicegreen> B. Ontario Pictures: </h2>

    <?php
        $sql = "SELECT * FROM Pictures WHERE location='Ontario';";
        $result = mysqli_query($connect, $sql);
        
        if (mysqli_num_rows($result) > 0) {
        
          while($row = mysqli_fetch_assoc($result)) {
            echo "<img src = " . $row['picture_url'] . "><br> <br> <a class = query>" . $row['subject'] . ", " . $row["location"] . "<br><br>";
          }
  } else {
          echo "No results.";
        }
    ?>

    <h2 class = nicegreen> C. Random Pic: </h2>
    <?php
      $sql = "SELECT * FROM Pictures ORDER BY RAND() LIMIT 1";
      $result = mysqli_query($connect, $sql);

      if (mysqli_num_rows($result) == 1) {
        
        while($row = mysqli_fetch_assoc($result)) {
          echo "<img src = " . $row['picture_url'] . "><br> <br> <a class = query>" . $row['subject'] . ", " . $row["location"] . "<br><br>";

        }
} else {
        echo "Error getting randum";
      }

    ?>

    <h2 class = nicegreen> Total </h2>

    <?php
    $sql = "SELECT * FROM Pictures";
    $result = mysqli_query($connect, $sql);
    $rows = mysqli_num_rows($result);
    echo "Total pics: " . $rows;
    ?>

    

    
</body>
</html>