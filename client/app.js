/**
 * Created by briandaves on 9/26/15.
 */
$(function() {
    $.ajax({
        url: "/getStudents"
    }).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);

            var $message = $("<p>" + response[i].Name + "</p><p>" + response[i].Description + "</p></p>" + response[i].ShoutOuts + "</p>");
            $(".num" + (i+"1")).append($message);


           $('.jcarousel').jcarousel();

            $('.jcarouselControlPrev')
                .on('jcarouselControl:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselControl:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

            $('.jcarouselControlNext')
                .on('jcarouselControl:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselControl:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });

            $('.jcarouselPagination')
                .on('jcarouselPagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselPagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
        }

    });
});