#!/usr/bin/python
import cgi, cgitb
form = cgi.FieldStorage() # Get post values
country = form.getvalue('Country')
province = form.getvalue('Province')
city = form.getvalue('city')
population = form.getvalue('population')
img = form.getvalue('img')
print 'Content-type:text/html\n\n' # Create HTML page

print '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="../genstyles.css"> <title>Lab6 part 2 Python</title> </head> <body style = "background-color: grey;"> <div> '
print "<h1 style='text-align: center; color: orange;'> %s, %s </h1>" % (city.upper(), country.upper()) # Set to full uppercase, put in html
print "<h2 style='text-align: center; color: teal;'> Province/State: %s </h2>" % (province.upper())
print "<h2 style='text-align: center; color: teal;'> Population: %s </h2> </div>" % (population)
if img.endswith(".png") or img.endswith(".jpg"): #Check link image ending
    print "<img src='%s' class= 'pytimg'>" % (img)
else:
    print "<br> <h2 style = 'text-align: center; color: yellow;'> Invalid Image Link! Please input a link that ends with png or jpg! </h2>"
print "</body></html>"