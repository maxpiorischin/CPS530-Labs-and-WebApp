<% 
colour = request.querystring("colour") 'Get strings from form
imglink = request.querystring("imglink")
' file = request.querystring("file")
error = ""

sub setstyle(colour,imglink)
    If Len(imglink) > 0 then 'Check if image link exists
        if Right(imglink, 3) = "png" OR Right(imglink, 3) = "jpg" then 'check if ends with png or jpg
            response.write("style= ""background-image: url('" & imglink & "');""") 'change to background image
        ELSE
            error = "Incorrect File Type!"
        End if

    ElseIf Len(colour) > 0 then
        response.write("style= ""background-color: " & colour & ";""") 'Change to background colour
    End if

end sub

sub setstyle(colour,imglink)
    If Len(imglink) > 0 then 'Check if image link exists
        response.write("style= ""background-image: url('" & imglink & "');""") 'change to background image

    ElseIf Len(colour) > 0 then
        response.write("style= ""background-color: " & colour & ";""") 'Change to background colour
    End if

end sub

%>

<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 6 Part 1 Colour Page</title>
</head>
<body <% call setstyle(colour,imglink) %>> <!--Call the subroutine to change the background-->
    <h1> This Page should now be in your requested background!</h1>

</body>
</html>