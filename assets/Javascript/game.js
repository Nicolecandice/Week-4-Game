$("#buttonId").button({

    icons: {primary: null},
    text: false
    }).addClass("ButtonClass")$(document).ready(function() {
        var img_index = 1;
        $('#crystal').click(function() {
            var img = $('<img />').attr({
                'id': 'myImage'+img_index,
                'src': 'http://doc.jsfiddle.net/_downloads/jsfiddle-logo.png',
                'alt': 'JSFiddle logo',
                'title': 'JSFiddle logo',
                'width': 250
            }).appendTo('#container');
            img_index++;
        });
    });