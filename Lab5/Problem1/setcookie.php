<?php 
$inTwoMonths = 60*60*24*60 + time();

setcookie('lastVisit', date("G:i - m/d/y", $inTwoMonths));
echo "Wooo!";
?>