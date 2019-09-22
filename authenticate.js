$(document).ready(function(){
    //This file first authenticate the user when the upload button(#id = upload) is clicked. It is done by redirecting the user to google accounts and clientId 
     var clientId = "99144732663-r534vpahpe82kd9p92q0kedqet6faj5p.apps.googleusercontent.com";

     var redirect_uri = "http://localhost/SSD/upload_files.html";

     var dev_url = "https://www.googleapis.com/auth/drive";

     var url = "";

     $("#login_to_account").click(function(){


        login_to_google(clientId,redirect_uri,dev_url,url);

     });

     function login_to_google(clientId,redirect_uri,dev_url,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+dev_url +"&access_type=offline";

        window.location = url;

     }

});

