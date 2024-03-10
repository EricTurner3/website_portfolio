import "./src/css/index.css"
import 'tw-elements'
const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
      console.log('jQuery Loaded');
     
      // 11 Jun 2022 - Weird build issues where elements are duplicating outside of #___gatsby
      // this will enumerate the elements in the body and remove any duplicates.
      $.each($('body').children(), function(i){
        // only elements in body that should exist are div#___gatsby, div#gatsby-announcer and a bunch of scripts
        var e = $(this)[0];
        //console.log(e);
        if (e.id === '___gatsby'){}
          //console.log(' * Found #___gatsby, skipping...');
        else if (e.id === 'gatsby-announcer' ){}
          //console.log(' * Found #gatsby-announcer, skipping...');
        else if (e.tagName === 'SCRIPT'){}
          //console.log(' * Found script, skipping...');
        else{
          console.log(' * Removing erroneous element: ');
          console.log(e);
          e.remove();
        }
          
      });

    $(document).on("click", ".filter-category", function(){
        var cat = $(this).data('skill');
        console.log('Projects - Filtering for ' + cat);

        // add selected class to this pill and remove from the others
        $('.filter-category').removeClass('selected');
        $(this).addClass('selected');

        if (cat === '*')
            $('.project-category').parent().parent().parent().parent().show();
        else{
            // hide all projects
            $('.project-category').parent().parent().parent().parent().hide();
            // show the specific ones
            $('.project-category[data-skill="'+cat+'"').parent().parent().parent().parent().show();
        }
        
    });
  });
}

