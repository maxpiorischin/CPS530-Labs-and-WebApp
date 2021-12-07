#!/usr/bin/perl

use CGI ':standard';
print "Content-type: text/html\n\n";

@food = param ('dish');
print "Your favourite dishes are: @food";


