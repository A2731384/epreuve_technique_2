$(document).ready(function(){
    let logo = $('#logo-ctn');

    if (window.innerWidth > 768) {
        logo.css('flex-direction', 'row');
        logo.css('align-items', 'center');

        logo.children('p').css('max-width', '60ch');
        logo.children('p').css('text-align', 'left');
    }
});