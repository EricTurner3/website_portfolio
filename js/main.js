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

$(function() {
    // grab all handlebars templates
    var templates = $("script[type='text/x-handlebars-template']");
    
    console.log('Found '+templates.length+' element(s) needing rendered. Starting handlebars template rendering')
    // render content
    $.each( templates, function( key, value ) {
        build_template(value)
      });
});



