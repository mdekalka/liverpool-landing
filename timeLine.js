;(function() {
$(document).ready(function() {
    var timeLine = (function() {

        var $timeLine = $('.timeline-list'),
            $timeWindow = $('.timeline-window'),
            $timeLineHeader = $timeWindow.find('h3'),
            $timeLineText = $timeWindow.find('p'),
            $timeLeft = $('.left'),
            $timeRight = $('.right');

        function init() {
            setEventListeners();
            getData("1892", "left");
        };

        function setEventListeners() {
            $timeLine.on('click', 'span', onDateClickHandler);
        };


        function onDateClickHandler(e) {
            var $this = $(this),
                yearKey = "",
                dataKey = "";

            $timeLine.find('li').removeClass('active');
            $this.closest('li').addClass('active');
            yearKey = $this.text();
            dateKey = $this.data('pos')

            getData(yearKey, dateKey);
        };

        function getData(yearKey, dateKey) {
            $.getJSON('history.json', function(data) {

                $.each(data, function(index, value) {

                    if (value["year"] === yearKey && value["flag"] === dateKey) {
                        var title = value.title;
                        var text = value.text;


                        if (value["flag"] === "left") {
                            $timeWindow.removeClass('flipInX');
                            $timeLeft.addClass('flipInX');
                            $timeLineHeader.text(title);
                            $timeLineText.text(text);

                        } else  {
                            $timeWindow.removeClass('flipInX');
                            $timeRight.addClass('flipInX');
                            $timeLineHeader.text(title);
                            $timeLineText.text(text);
                        } 

                    };

                    if (yearKey === "...") {
                        $timeWindow.removeClass('flipInX');
                        $timeLeft.addClass('flipInX');
                        $timeLineHeader.text("Sorry, no information yet");
                        $timeLineText.text("Sorry, no information yet");
                    }

                });

            });

        };



        return {
            init: init
        }
    })();

    timeLine.init();



});
})();