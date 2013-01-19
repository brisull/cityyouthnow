// alert("here");
function handleDonationAddOrEdit( form ) {
    var title = form.find("#edit-title");
    var year = form.find("#edit-field-year-und-0-value-year");
    var donor = form.find("#edit-field-donor-und-0-target-id");
    var donorLevel = form.find("#edit-field-donor-level-und");
    var amounts = form.find("#field-amount-values").find(".form-text");
    function writeTitle() {
        setTimeout( function() { title.val( year.val() +" - "+ donor.val() ); }, 500 );
    }
    donor.parents(".form-item").find("label").append("<a href='/node#overlay=node/add/donor' target='_blank'>Add New Donor</a>");
    title.bind("focus", function() {
        jQuery(this).blur();
    });
    year.bind("change", function() {
        writeTitle()
    });
    donor.bind("change", function() {
        writeTitle();
    });
    amounts.bind("change", function() {
        var newAmount = 0;
        amounts.each( function() {
            var intVal = parseInt( jQuery(this).val() );
            if ( !isNaN(intVal)  ) {
                newAmount += intVal;
            }
            else {
                jQuery(this).val(0);
            }
        });
        setDonorLevel( newAmount ) ;
    });
    function setDonorLevel( amount ) {
        if ( isNaN( amount ) ) {
            return false;       
        }
        var defaultOptVal = '';
        var defaultOptText = '';
        donorLevel.find("option").each( function() {
            var optVal = jQuery(this).attr("value");
            var optText = jQuery(this).text();
            var valRange =  optVal.substring(2).replace(/k/g,"000").split("_");
            
            if ( isNaN( valRange[0] ) ) {
                valRange[0] = 100000000;
                valRange[1] = 20000;
            }
            if ( amount < valRange[0] && amount >= valRange[1] ) {
                donorLevel.val( optVal );
                if ( optVal != donor.find("option:selected").val() ) {
                    alert( "Setting Donor Level for "+ year.find("option:selected").text() +" to "+ optText +". If this is incorrect, please change it." );
                }
            }
        });
    }
}

jQuery(document).ready( function() {
    if ( parseInt( jQuery(window).width() ) > 768  ) {
      setTimeout( function() {
          jQuery("#main-content").css("height",jQuery("#columns").css("height") );
          jQuery(".front .region-sidebar-first").css("height",jQuery("#columns").css("height") );
        }, 500 );
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
       self.isOverlayLoaded = false;
       self.checkForAddDonation = (new RegExp("node/add/donation").test(document.location.hash));
       self.checkForEditDonation = (new RegExp("overlay-context=node").test(document.location.hash) && jQuery("body").hasClass("page-type-donation") ) ;
       
       self.overlayIsLoaded = function(which) {
           switch(which.attr("id")) {
               case "donation-node-form":
                   handleDonationAddOrEdit( which );
                   break;
               default:
                   // do something
           }
       };
       self.donation = function() {
           return ( self.checkForAddDonation || self.checkForEditDonation );
       };
   };
   var overlay = new overlayScript();
   window.overlay = overlay;
   

   
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
