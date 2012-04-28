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
   
   
   
   var overlayScript = function() {
       var self = this;
       self.checkForAddDonation = (new RegExp("node/add/donation").test(document.location.hash));
       self.checkForEditDonation = (new RegExp("overlay-context=node").test(document.location.hash) && jQuery("body").hasClass("page-type-donation") ) ;
       
       self.donation = function() {
           return ( self.checkForAddDonation || self.checkForEditDonation );
       };
   };
   var overlay = new overlayScript();
   
   if ( overlay.donation() ){
       /*
       var dateSelect = jQuery("#overlay-active").contents().find(".date-year").find("select");
       var donorSelect = jQuery("#overlay-active").contents().find("#edit-field-donor select");
       alert( dateSelect.html() );
           jQuery(dateSelect, donorSelect).bind("change", function() {
                   alert("hay");
                   jQuery("overlay-active").contents().find("#edit-title").val( dateSelect.val() +": "+ donorSelect.val() ); 
           });
           */
   }
});
