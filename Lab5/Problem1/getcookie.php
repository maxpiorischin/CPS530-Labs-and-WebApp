<?php
if(isset($_COOKIE['lastVisit'])) {
    $visit = $_COOKIE['lastVisit'];
    echo "Your last visit was - ". $visit;

}
else
    echo "Cookie not Found!";

?>

