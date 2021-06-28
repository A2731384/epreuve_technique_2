$(document).ready(function(){
    // I change the css here because I can't do it directly 
    let logo = $('#logo-ctn');

    // The same as @media I use window.innerWidth
    if (window.innerWidth > 768) {
        logo.css('flex-direction', 'row');
        logo.css('align-items', 'center');

        logo.children('p').css('max-width', '60ch');
        logo.children('p').css('text-align', 'left');
    }
});
