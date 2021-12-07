#!/usr/bin/perl
print "Content-type: text/html\n\n";

print "<!DOCTYPE html>";
print "<html><head>";
print "<title>Perl Demo </title></head>";
print "<body>";
print qq(<div style="color:red;font-size:5em;">);
print "My first Perl program\n<br>";
$a = 100;
@b = (10,20,30);
%c = (length=>200, width=>100, colour=>'blue');

$d = $b[1] / $a;
print $d;

print "</div></body></html>";
