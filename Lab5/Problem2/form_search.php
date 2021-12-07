<?php include('dbconnect.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Picture Search</title>
</head>
<body>
    <h1 class="nicegreen"> Input location and time: </h1>
    <form method="POST">
    <?php
    $locations = [];
    $times = [];   
    $sql = "SELECT * FROM Pictures";
        $result = mysqli_query($connect, $sql);
        
        if (mysqli_num_rows($result) > 0) {
        
          while($row = mysqli_fetch_assoc($result)) {
              if (! in_array($row["location"], $locations)){
                array_push($locations, $row['location']);
              }
              if (! in_array($row["date_taken"], $times)){
                array_push($times, $row['date_taken']);
              }
          }
          foreach($locations as $value) {
            echo "<input type=\"radio\" name = \"location\" value = \"$value\"> \"$value\" ";
          }
          echo "<br><br>";
          foreach($times as $time) {
            echo "<input type=\"radio\" style=\"query\" name = \"times\" value = \"$time\"> $time";
          }

          echo "<br><br><input type=\"submit\" value=\"Submit\">";
  } else {
          echo "No results.";
        }

        $location = $_POST['location'];
        $time = $_POST['times'];
        $found = 1;
        $sql = "SELECT * FROM Pictures";
        $result = mysqli_query($connect, $sql);
        
        if (mysqli_num_rows($result) > 0) {
        
          while($row = mysqli_fetch_assoc($result)) {
            // echo $row['location'];
            // echo $location;
            // echo $row['date_taken'];
            // echo $time;
            if (($row['location'] == $location) && ($row['date_taken'] == $time)){
              echo "<br><img src = " . $row['picture_url'] . "><br> <br> <a class = query>" . $row['subject'] . ", " . $row["location"] . "<br><br>";
              $found = 0;
            }
          }
          
  } else {
          echo "No results.";
        }    
        
    if ($found == 1){
      echo "<br> <br> No results, Try Again";
    }
        
    ?>
    </form>
</body>
</html>