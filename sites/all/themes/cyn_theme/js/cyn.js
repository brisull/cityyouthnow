// alert("here");

jQuery(document).ready( function() {
        
    jQuery("#main-content").css("height",jQuery("#columns").css("height") );
    jQuery(".front .region-sidebar-first").css("height",jQuery("#main-content").css("height") );
    jQuery(window).resize(function() {
        console.log( jQuery(window).width() );
        if ( parseInt( jQuery(window).width() ) < 768  ) {
            jQuery("#main-content").css( "height",jQuery("#main-content .block-content").css("height" ) );
        }
        else {
            jQuery("#main-content").css("height",jQuery("#columns").css("height") );
            jQuery(".front .region-sidebar-first").css("height",jQuery("#main-content").css("height") );
        }
});
   // alert( jQuery("#main-content").css("height") );
   
});
