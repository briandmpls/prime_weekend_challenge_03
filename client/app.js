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

            var $message = $("<li><p>" + response[i].Name + "</p><p>" + response[i].Description + "</p></p>" + response[i].ShoutOuts + "</p></li>");
            $(".epsilonites").append($message);

            $('.jcarousel').jcarousel();

            $('.jcarousel-control-prev')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

            $('.jcarousel-control-next')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });

            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
        }


    });
});