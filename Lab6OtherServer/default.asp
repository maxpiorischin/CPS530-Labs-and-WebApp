<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title>Lab 6 Problem 1</title>
</head>
<body>

<h1 class = "text-center"> Lab 6 Problem 1 - Background Generator </h1>

<h2 class = "text-center"> <% if NOT CBool(Len(Request.Cookies("date")) > 0) then 'Check if no cookie exists, meaning first visit
response.write("This is your First Day!")
Response.Cookies("date") = Now() 'set cookie if didnt exist
ELSE response.write("Your last visit Date is:" & Request.Cookies("date")) 'if cookie exists, display it
Response.Cookies("date") = Now() 'update cookie
End if
%> </h2>


<form method = "GET" action="colourpage.asp" class="col-md-2"> <!--Form to submit information-->
    <input type="text" placeholder="Input Hex, rgba, or Colour name" name="colour">
    <input type="submit">
</form>

<form method = "GET" action="colourpage.asp" class="col-md-3">
    <label> Provide link to image </label>
    <input type="text" placeholder="Input link to image" name="imglink">
    <!-- 
    <input type="file" placeholder="Input a File here" name="file">
    <label> If file is provided, it will be used instead of the link.</label>
    -->
    <input type="submit">
</form>
   
</body>
</html>