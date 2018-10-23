//github api
var apiURL = 'https://api.github.com/users/Jyotirmayam2';
/*By fetch method */
// fetch(apiURL).then(function(res){
//     return res.json();
// }).then(function(objJson){
//     console.log("User Data from GitHub")
//     console.log(objJson);
// })

/* By ajax call*/
//XMLHttpRequest object creation
var XMLHttpRequest = new XMLHttpRequest();

//creating a ajax request to the github api
XMLHttpRequest.open('GET',apiURL);
//sending the request
XMLHttpRequest.send();

XMLHttpRequest.onreadystatechange = function() {
    //upon successful request load the user details from api
    if (XMLHttpRequest.readyState === 4 && XMLHttpRequest.status === 200){
        var userDetails = [];
        userDetails = JSON.parse(XMLHttpRequest.responseText);
        console.log("User Data from GitHub")
        console.log(userDetails)
    }
}