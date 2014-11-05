;(function() {
$(document).ready(function() {
    var showPlayerInfo = (function() {
        var $list = $('.squad-list'),
            $squad = $('.squad-info');


        var init = function() {
            setEventHandlers();
            showInfo("Gerrard");
        };

        function setEventHandlers() {
            $list.on('click', 'a', onPlayerNameClickhandler);
        };

        function onPlayerNameClickhandler(e) {
            e.preventDefault();

            var $this = $(this);
            var data = "";
            var $magicLine = $('#magic-line');

            $list.find('li').removeClass('current_page_item');
            $this.closest('li').addClass('current_page_item');

            data = $this.data('info');
            showInfo(data);
        };


        function showInfo(keyValue) {
            $.getJSON('players.json', function(data) {

                    $.each(data, function(index, value) {

                        if (value["surname"] === keyValue) {

                            var content = value,
                                source   = $("#players-template").html(),
                                template = Handlebars.compile(source),
                                html    = template(content);
                                //clear up and append content   

                                $squad
                                    .empty()
                                    .append(html);

                        };
                    });
            });
        };



        return {
            init: init
        }

    })();

    showPlayerInfo.init();







});
})();