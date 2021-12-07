#!/usr/bin/ruby
puts "Content-type: text/html\n\n";
require 'cgi'
cgi = CGI.new # Enable CGI
country = cgi['Country'] # Get post vars
province = cgi['Province']
city = cgi['city']
population = cgi['population']
img = cgi['img']
puts %q[<!DOCTYPE html> # HTML structure
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../genstyles.css">
    <title>Lab6 part 2 Ruby</title>
</head>
<body>
    <div> ];
puts "<h1 style='text-align: center; color: orange;'> #{city.capitalize}, #{country.capitalize} </h1>" # Put capitalized variables into html code
puts "<h2 style='text-align: center; color: teal;'> Province/State: #{province.capitalize} </h2>"
puts "<h2 style='text-align: center; color: teal;'> Population: #{population} </h2>"
if img.end_with?(".png", ".jpg") #Check for link extension, if png or jpg, set the image
    puts "<img src='#{img}' style = 'width: 100%; height: auto'>"
else
    puts "<br> <h2 style = 'text-align: center; color: yellow;'> Invalid Image Link! Please input a link that ends with png or jpg! </h2>"
end
puts %q[
</div>
</body>
</html>];