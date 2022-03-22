import "./src/css/index.css"
const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
      console.log('jQuery Loaded')
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

