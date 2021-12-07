#!/usr/bin/perl

use CGI ':standard';
use CGI::Carp qw(warningsToBrowser fatalsToBrowser); 
print "Content-type: text/html\n\n";

$name = param ('name');
print "Your name is: $name";