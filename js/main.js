$(document).ready(function(){
    console.log('Initializing Handlebars Templating Engine');
    //Handlebars helper for formatting time
    var DateFormats = {
        short: "MMM YYYY", //Jan 1997
        long: "dddd DD.MM.YYYY HH:mm" //Thursday 14.01.1997 02:15
    };

    var TagColors = {
        //     [bg-color, text-color]
        php: ['#FFD166', '#333'],
        web: ['#3a7bd5', 'white'],
        automotive: ['red', 'white'],
        python: ['#06D6A0', 'white'],
        default: ['#eee', '#333'] // for a missing tag
    };



    //call from template by doing {{formatDate <property> "short"}}
    Handlebars.registerHelper("formatDate", function(datetime, format) {
        //Check for word present and pass through
        if(datetime == 'Present')
            return datetime
        else{
            if (moment) {
                // can use other formats like 'lll' too
                format = DateFormats[format] || format;
                return moment(datetime).format(format);
              }
              else {
                return datetime;
              }
        }
        
      });
      // for skills, pass a number of how many filled stars to return
      Handlebars.registerHelper("stars", function(stars) {
        //Based on number passed, fill the specified amount of stars
        var html =  
        '<i class="fas fa-star '+(stars >= 1 ? 'filled' : '')+'"></i>' +
        '<i class="fas fa-star '+(stars >= 2 ? 'filled' : '')+'"></i>' +
        '<i class="fas fa-star '+(stars >= 3 ? 'filled' : '')+'"></i>' +
        '<i class="fas fa-star '+(stars >= 4 ? 'filled' : '')+'"></i>' +
        '<i class="fas fa-star '+(stars >= 5 ? 'filled' : '')+'"></i>';
        
        // return as HTML (unescaped) and not text
        return new Handlebars.SafeString(html);
      });

      Handlebars.registerHelper("tags", function(tags) {
        var html = '';
        
        tags.forEach(function(tag) {
            var color = TagColors[tag];
            if(color === undefined) 
                color = TagColors['default'];
              
            html += '<span class="badge badge-pill" style="background-color:' + color[0] + '; color: ' + color[1] + '">' + tag + '</span>'
        });
        
        // return as HTML (unescaped) and not text
        return new Handlebars.SafeString(html);
      });
      
    var source = document.getElementById("template").innerHTML;
    $('#main').html(Handlebars.compile(source)(context));
    /*=============================================*/


    //Turn on Bootstrap Tooltips site wide
    $('[data-toggle="tooltip"]').tooltip();


    console.log('Initiializing checkHash() and ScrollSpy');
    checkHash();
    applyScrollSpy();





    //Smooth scrolling
    $(".link").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top}, 1000, function(){
                    if(hash != "#top"){
                        window.location.hash = hash;
                        window.history.replaceState('Section', 'EricTurner.it', hash.replace('#', '#/'));
                    }
                    else{
                        window.location.hash = hash;
                        window.history.replaceState('Section', 'EricTurner.it', " ");
                    }
                    
                });
        }
    });
    

    function applyScrollSpy(){
        $('#sidebarMenu').on('activate.bs.scrollspy', function() 
        {
            window.location.hash = $('.nav-link .active').attr('href').replace('#', '#/');
        });
    }

    // I liked the hash in the URL from http://www.pascalvangemert.nl so this method implements that formatting


    function checkHash(){
        lstrHash = window.location.hash.replace('#/', '#');
        
        if($('a[href="'+ lstrHash +'"]').length > 0)
        {
            $('a[href="'+ lstrHash +'"]').trigger('click');
        }
    }
});