function build_template(element){
    console.log('- Rendering #' + element.id)
    var template = $(element).html();
    var templateScript = Handlebars.compile(template);
    var data = $(element).data('src')
    var output_div = $(element).data('output')
    console.log('  * Fetching data /data/' + data)
    $.getJSON("./data/" + data, function(json) {
        var html = templateScript(json);
        console.log('  * Outputting to ' + output_div)
        $(output_div).append(html);
    });
}

function swapText(){
    var text1 = 'cybersecurity analyst';
    var text2 =  'サイバーセキュリティアナリスト';
    
    var el = $('.subhero');
    el.data('text', (el.data('text') === text1 ? text2 : text1));
    el.children()[0].innerText = (el.children()[0].innerText === text1 ? text2 : text1);
}

$(function() {
    Handlebars.registerHelper('randomNum', function (min_value, max_value) {
        return Math.floor(Math.random() * (max_value - min_value) + min_value);
    })
    // grab all handlebars templates
    var templates = $("script[type='text/x-handlebars-template']");
    
    console.log('Found '+templates.length+' element(s) needing rendered. Starting handlebars template rendering')
    // render content
    $.each( templates, function( key, value ) {
        build_template(value)
      });

    // main hero text
    //setInterval(swapText, 5000)
    /*
    $.each($('.random-glitch'), function(i, e){
        var ms = Math.floor(Math.random() * (800 - 100) + 100);
        var s = Math.floor(Math.random() * (9 - 1) + 1);
        console.log(' - Setting Header "' + e.innerText + '" to ' + ms + 'ms delay; ' + s + 's duration')
        $(e).css({
            'animation-delay': ms.toString() + 'ms',
            'animation-duration': s.toString() + 's'
        }).hide().show(0);
    })
    */
    
});



