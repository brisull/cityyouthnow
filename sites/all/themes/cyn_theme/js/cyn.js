// alert("here");

jQuery(document).ready( function() {
    if ( parseInt( jQuery(window).width() ) > 768  ) {
        jQuery("#main-content").css("height",jQuery("#columns").css("height") );
        jQuery(".front .region-sidebar-first").css("height",jQuery("#columns").css("height") );
    }
    else if ( parseInt( jQuery(window).width() ) < 768  ) {
        jQuery("#main-content").css( "height","auto" );
        jQuery(".front .region-sidebar-first").css("height","auto" );
    }
    jQuery(window).resize(function() {
        if ( parseInt( jQuery(window).width() ) < 768  ) {
            jQuery("#main-content").css( "height","auto" );
            jQuery(".front .region-sidebar-first").css("height","auto" );
        }

});
   // alert( jQuery("#main-content").css("height") );
   jQuery(".page-node").not(".page-node-67").find('a[href^="mailto:"]').each( function() {
        jQuery(this).attr("href","/about-us/contact-city-youth-now");
    });
});
