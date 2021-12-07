#!/usr/bin/perl
print "Content-type: text/html\n\n";
use CGI ':standard';

$first = param('first');
$last = param ('last');
$address = param ('address');
$city = param ('city');
$province = param ('province');
$postal = param('postal');
$gender = param('gender');
$phone = param('phone');
$email = param('email');
$password = param('Password');
$terms = param('terms');


sub LettersOnly {
    $var = $_[0];
    if ($var =~ /^[a-zA-Z]+$/ & (length $var) < 30) {
        return true;
    }
}

sub PhoneCheck {
    $var = $_[0];
    if ((length $var) == 10) {
        return true;
    }
}

sub AddressCheck {
    $var = $_[0];
    if ($var =~ /\d+\s.+/ & (length $var) < 30) {
        return true;
    }
}

sub AnyCheck {
    $var = $_[0];
    if ((length $var) < 30) {
        return true;
    }
}

sub PostalCheck {
    $var = $_[0];
    if ($var =~ /[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]/ & (length $var) == 6) {
        return true;
    }
}

sub EmailCheck {
    $var = $_[0];
    if ($var =~ /([a-zA-Z0-9]+)\@([a-zA-Z]+)\.(com|ca)/ & (length $var) < 30){
        return true;
    }

}

$is_error = 0;

if (not(LettersOnly("$first") & LettersOnly("$last"))) {
    print "Your name must contain only letters!\n";
    $is_error = 1;
}

if (not(EmailCheck($email))) {
    print "Your email is not in proper format!\n";
    $is_error = 1;
}

if (not(AddressCheck($address))) {
    print "Your address is not in proper format!\n";
    $is_error = 1;
}

if (not(LettersOnly($city))){
    print "Your city must only be in letters\n";
    $is_error = 1;
}

if (not(PostalCheck($postal))) {
    print "Your Postal Code is not in proper format!\n";
    $is_error = 1;
}

if (not(PhoneCheck($phone))) {
    print "Phone number is not in proper format\n";
    $is_error = 1;
}

if (not($is_error)) {
    print "User Registered!\n";
}
