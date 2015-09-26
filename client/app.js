/**
 * Created by briandaves on 9/26/15.
 */
$(function(){
    $.ajax({
        url:"/getStudents"
    }).done(function(response){
        console.log(response);
        for (var i =0; i< response.length;i++){
            console.log(response[i]);




            var $content = $("<p>" +  response[i].Name + "</p><p>" + response[i].Description + "</p></p>" + response[i].ShoutOuts + "</p>");
            $(".placeholder").append($content);
        }

    })
});