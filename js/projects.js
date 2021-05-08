$(document).ready(function(){
    console.log('Initializing Handlebars Templating Engine');
    

    var TagColors = {
        //     [bg-color, text-color]
        php: ['#FFD166', '#333'],
        web: ['#3a7bd5', 'white'],
        automotive: ['red', 'white'],
        python: ['#06D6A0', 'white'],
        default: ['#eee', '#333'] // for a missing tag
    };

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