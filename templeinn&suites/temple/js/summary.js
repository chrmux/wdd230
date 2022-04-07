$(document).ready(function(){
    $('#mainInfoSlideCebu').hide();
    $('#servicesSlideCebu').hide();
    $('#closuresSlideCebu').hide();
    $('#summarySlideCebu').hide();
    $('#mainInfoSlideColumbia').hide();
    $('#servicesSlideColumbia').hide();
    $('#closuresSlideColumbia').hide();
    $('#summarySlideColumbia').hide();
    $('#mainInfoSlideManila').hide();
    $('#servicesSlideManila').hide();
    $('#closuresSlideManila').hide();
    $('#summarySlideManila').hide();
    $('#mainInfoSlidePort').hide();
    $('#servicesSlidePort').hide();
    $('#closuresSlidePort').hide();
    $('#summarySlidePort').hide();
  });
// Cebu Slide Info
$( "#mainInfoClickCebu" ).click(function() {
    $('#mainInfoSlideCebu').slideToggle( "slow", function() {
    });
});
$( "#servicesClickCebu" ).click(function() {
    $('#servicesSlideCebu').slideToggle( "slow", function() {
    });
});
$( "#closuresClickCebu" ).click(function() {
    $('#closuresSlideCebu').slideToggle( "slow", function() {
    });
});
$( "#summaryClickCebu" ).click(function() {
    $('#summarySlideCebu').slideToggle( "slow", function() {
    });
});

// Columbia Slide Info
$( "#mainInfoClickColumbia" ).click(function() {
    $('#mainInfoSlideColumbia').slideToggle( "slow", function() {
    });
});
$( "#servicesClickColumbia" ).click(function() {
    $('#servicesSlideColumbia').slideToggle( "slow", function() {
    });
});
$( "#closuresClickColumbia" ).click(function() {
    $('#closuresSlideColumbia').slideToggle( "slow", function() {
    });
});
$( "#summaryClickColumbia" ).click(function() {
    $('#summarySlideColumbia').slideToggle( "slow", function() {
    });
});

// Manila Slide Info
$( "#mainInfoClickManila" ).click(function() {
    $('#mainInfoSlideManila').slideToggle( "slow", function() {
    });
});
$( "#servicesClickManila" ).click(function() {
    $('#servicesSlideManila').slideToggle( "slow", function() {
    });
});
$( "#closuresClickManila" ).click(function() {
    $('#closuresSlideManila').slideToggle( "slow", function() {
    });
});
$( "#summaryClickManila" ).click(function() {
    $('#summarySlideManila').slideToggle( "slow", function() {
    });
});

// Portland Slide Info
$( "#mainInfoClickPort" ).click(function() {
    $('#mainInfoSlidePort').slideToggle( "slow", function() {
    });
});
$( "#servicesClickPort" ).click(function() {
    $('#servicesSlidePort').slideToggle( "slow", function() {
    });
});
$( "#closuresClickPort" ).click(function() {
    $('#closuresSlidePort').slideToggle( "slow", function() {
    });
});
$( "#summaryClickPort" ).click(function() {
    $('#summarySlidePort').slideToggle( "slow", function() {
    });
});

$('.clickSlideToggle').click(function() {
    $('#mainInfoSlidePort').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle('slow');
});

$(document).ready(function() {
    $('.post').on('click', function() {
      $(this).find('.summary').slideToggle();
    })  
  });

