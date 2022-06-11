import "./src/css/index.css"
import 'tw-elements'
const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
      console.log('jQuery Loaded');
      $($('footer')[1]).hide(); // I can't figure out why, but on production build the footer appears twice. Only does in prod and not dev. Just hide it.
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

