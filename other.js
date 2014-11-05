;(function() {
$(document).ready(function() {
    var $icon = $('.fa-search');

    $icon.on('click', onIconClickHandler);

    function onIconClickHandler() {
        var $this = $(this);

        $this.next().animate({
            width: 100
        })
    };

});
})();