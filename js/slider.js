
      $(function() {
             $( "#price" ).slider({
                   range: true,
                   min: 100,
                   max: 5000,
                   values: [ 500, 2000 ],
                   slide: function( event, ui ) {
                         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                   }
             });
             $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0, 500 ) +
                   " - $" + $( "#slider-range" ).slider( "values", 1, 2000 ) );
      });
