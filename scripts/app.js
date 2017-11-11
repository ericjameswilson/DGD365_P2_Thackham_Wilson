 $(document).ready(function() {
   $.ajax({
     type: 'GET',
     url: 'https://raw.githubusercontent.com/ericjameswilson/int3p2json/master/data3.json',
     dataType: 'json',
     success: function(data) {


       $.each(data, function(i, house) {
         if (house.columncount == 1) {
           $('#col-1').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 2) {
           $('#col-2').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 3) {
           $('#col-3').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 4) {
           $('#col-4').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 5) {
           $('#col-5').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 6) {
           $('#col-6').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 7) {
           $('#col-7').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 8) {
           $('#col-8').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 9) {
           $('#col-9').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 10) {
           $('#col-10').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 11) {
           $('#col-11').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 12) {
           $('#col-12').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 13) {
           $('#col-13').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 14) {
           $('#col-14').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
         } else if (house.columncount == 15) {
           $('#col-15').append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '" data-columncount="' + house.columncount + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');

         }
       });
     },
     complete: function() {

       $(".house").box2d({
         'y-velocity': 10
       });

       var counter = 1300;
       var demolitionCountdown = setInterval(function(i) {

         $('.house').each(function() {
           var boxTimer = $(this).attr('data-timer');
           if (boxTimer == counter) {
             $(this).css('border-color', 'orange').fadeOut(20000, function() {
               $(this).remove();

             });




           } else if (counter < 1) {
             clearInterval(demolitionCountdown);
             location.reload();
           }
           boxTimer--;
           $('.countdown').html('DAY ' + counter);
         })

         counter--;

         if (annyang) {
           // Let's define our first command. First the text we expect, and then the function it should call
           var commands = {
             '14622': function() {
               $('#14622').stop().fadeOut();
               $('#14622').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15877': function() {
               $('#15877').stop().fadeOut();
               $('#15877').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14882': function() {
               $('#14882').stop().fadeOut();
               $('#14882').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15045': function() {
               $('#15045').stop().fadeOut();
               $('#15045').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14615': function() {
               $('#14615').stop().fadeOut();
               $('#14615').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14884': function() {
               $('#14884').stop().fadeOut();
               $('#14884').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14864': function() {
               $('#14864').stop().fadeOut();
               $('#14864').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14834': function() {
               $('#14834').stop().fadeOut();
               $('#14834').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15370': function() {
               $('#15370').stop().fadeOut();
               $('#15370').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14858': function() {
               $('#14858').stop().fadeOut();
               $('#14858').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14823': function() {
               $('#14823').stop().fadeOut();
               $('#14823').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14910': function() {
               $('#14910').stop().fadeOut();
               $('#14910').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14656': function() {
               $('#14656').stop().fadeOut();
               $('#14656').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14648': function() {
               $('#14648').stop().fadeOut();
               $('#14648').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14640': function() {
               $('#14640').stop().fadeOut();
               $('#14640').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14608': function() {
               $('#14608').stop().fadeOut();
               $('#14608').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14574': function() {
               $('#14574').stop().fadeOut();
               $('#14574').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15915': function() {
               $('#15915').stop().fadeOut();
               $('#15915').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15721': function() {
               $('#15721').stop().fadeOut();
               $('#15721').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14344': function() {
               $('#14344').stop().fadeOut();
               $('#14344').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15351': function() {
               $('#15351').stop().fadeOut();
               $('#15351').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14895': function() {
               $('#14895').stop().fadeOut();
               $('#14895').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14888': function() {
               $('#14888').stop().fadeOut();
               $('#14888').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15095': function() {
               $('#15095').stop().fadeOut();
               $('#15095').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15064': function() {
               $('#15064').stop().fadeOut();
               $('#15064').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15011': function() {
               $('#15011').stop().fadeOut();
               $('#15011').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15050': function() {
               $('#15050').stop().fadeOut();
               $('#15050').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15038': function() {
               $('#15038').stop().fadeOut();
               $('#15038').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15713': function() {
               $('#15713').stop().fadeOut();
               $('#15713').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15031': function() {
               $('#15031').stop().fadeOut();
               $('#15031').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15503': function() {
               $('#15503').stop().fadeOut();
               $('#15503').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14589': function() {
               $('#14589').stop().fadeOut();
               $('#14589').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14580': function() {
               $('#14580').stop().fadeOut();
               $('#14580').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14554': function() {
               $('#14554').stop().fadeOut();
               $('#14554').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14839': function() {
               $('#14839').stop().fadeOut();
               $('#14839').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14628': function() {
               $('#14628').stop().fadeOut();
               $('#14628').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14614': function() {
               $('#14614').stop().fadeOut();
               $('#14614').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14863': function() {
               $('#14863').stop().fadeOut();
               $('#14863').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14607': function() {
               $('#14607').stop().fadeOut();
               $('#14607').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14581': function() {
               $('#14581').stop().fadeOut();
               $('#14581').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14818': function() {
               $('#14818').stop().fadeOut();
               $('#14818').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14810': function() {
               $('#14810').stop().fadeOut();
               $('#14810').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14620': function() {
               $('#14620').stop().fadeOut();
               $('#14620').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14629': function() {
               $('#14629').stop().fadeOut();
               $('#14629').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14635': function() {
               $('#14635').stop().fadeOut();
               $('#14635').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14641': function() {
               $('#14641').stop().fadeOut();
               $('#14641').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14627': function() {
               $('#14627').stop().fadeOut();
               $('#14627').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14541': function() {
               $('#14541').stop().fadeOut();
               $('#14541').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14851': function() {
               $('#14851').stop().fadeOut();
               $('#14851').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13577': function() {
               $('#13577').stop().fadeOut();
               $('#13577').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13503': function() {
               $('#13503').stop().fadeOut();
               $('#13503').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15915': function() {
               $('#15915').stop().fadeOut();
               $('#15915').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15914': function() {
               $('#15914').stop().fadeOut();
               $('#15914').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15908': function() {
               $('#15908').stop().fadeOut();
               $('#15908').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13511': function() {
               $('#13511').stop().fadeOut();
               $('#13511').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15220': function() {
               $('#15220').stop().fadeOut();
               $('#15220').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14889': function() {
               $('#14889').stop().fadeOut();
               $('#14889').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14916': function() {
               $('#14916').stop().fadeOut();
               $('#14916').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15089': function() {
               $('#15089').stop().fadeOut();
               $('#15089').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15065': function() {
               $('#15065').stop().fadeOut();
               $('#15065').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15156': function() {
               $('#15156').stop().fadeOut();
               $('#15156').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15106': function() {
               $('#15106').stop().fadeOut();
               $('#15106').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15100': function() {
               $('#15100').stop().fadeOut();
               $('#15100').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15801': function() {
               $('#15801').stop().fadeOut();
               $('#15801').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14931': function() {
               $('#14931').stop().fadeOut();
               $('#14931').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15151': function() {
               $('#15151').stop().fadeOut();
               $('#15151').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15045': function() {
               $('#15045').stop().fadeOut();
               $('#15045').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15039': function() {
               $('#15039').stop().fadeOut();
               $('#15039').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14924': function() {
               $('#14924').stop().fadeOut();
               $('#14924').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14917': function() {
               $('#14917').stop().fadeOut();
               $('#14917').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14861': function() {
               $('#14861').stop().fadeOut();
               $('#14861').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14855': function() {
               $('#14855').stop().fadeOut();
               $('#14855').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14868': function() {
               $('#14868').stop().fadeOut();
               $('#14868').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14802': function() {
               $('#14802').stop().fadeOut();
               $('#14802').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14875': function() {
               $('#14875').stop().fadeOut();
               $('#14875').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14918': function() {
               $('#14918').stop().fadeOut();
               $('#14918').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14902': function() {
               $('#14902').stop().fadeOut();
               $('#14902').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14379': function() {
               $('#14379').stop().fadeOut();
               $('#14379').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14325': function() {
               $('#14325').stop().fadeOut();
               $('#14325').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14145': function() {
               $('#14145').stop().fadeOut();
               $('#14145').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14051': function() {
               $('#14051').stop().fadeOut();
               $('#14051').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14428': function() {
               $('#14428').stop().fadeOut();
               $('#14428').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14420': function() {
               $('#14420').stop().fadeOut();
               $('#14420').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14364': function() {
               $('#14364').stop().fadeOut();
               $('#14364').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14358': function() {
               $('#14358').stop().fadeOut();
               $('#14358').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13949': function() {
               $('#13949').stop().fadeOut();
               $('#13949').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14032': function() {
               $('#14032').stop().fadeOut();
               $('#14032').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14336': function() {
               $('#14336').stop().fadeOut();
               $('#14336').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15497': function() {
               $('#15497').stop().fadeOut();
               $('#15497').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15052': function() {
               $('#15052').stop().fadeOut();
               $('#15052').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15109': function() {
               $('#15109').stop().fadeOut();
               $('#15109').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14363': function() {
               $('#14363').stop().fadeOut();
               $('#14363').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15701': function() {
               $('#15701').stop().fadeOut();
               $('#15701').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14619': function() {
               $('#14619').stop().fadeOut();
               $('#14619').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15100': function() {
               $('#15100').stop().fadeOut();
               $('#15100').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14406': function() {
               $('#14406').stop().fadeOut();
               $('#14406').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15844': function() {
               $('#15844').stop().fadeOut();
               $('#15844').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14535': function() {
               $('#14535').stop().fadeOut();
               $('#14535').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15122': function() {
               $('#15122').stop().fadeOut();
               $('#15122').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14856': function() {
               $('#14856').stop().fadeOut();
               $('#14856').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14101': function() {
               $('#14101').stop().fadeOut();
               $('#14101').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15520': function() {
               $('#15520').stop().fadeOut();
               $('#15520').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14560': function() {
               $('#14560').stop().fadeOut();
               $('#14560').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14527': function() {
               $('#14527').stop().fadeOut();
               $('#14527').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14358': function() {
               $('#14358').stop().fadeOut();
               $('#14358').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14591': function() {
               $('#14591').stop().fadeOut();
               $('#14591').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14592': function() {
               $('#14592').stop().fadeOut();
               $('#14592').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14131': function() {
               $('#14131').stop().fadeOut();
               $('#14131').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14610': function() {
               $('#14610').stop().fadeOut();
               $('#14610').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14801': function() {
               $('#14801').stop().fadeOut();
               $('#14801').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14377': function() {
               $('#14377').stop().fadeOut();
               $('#14377').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14000': function() {
               $('#14000').stop().fadeOut();
               $('#14000').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14190': function() {
               $('#14190').stop().fadeOut();
               $('#14190').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14253': function() {
               $('#14253').stop().fadeOut();
               $('#14253').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14197': function() {
               $('#14197').stop().fadeOut();
               $('#14197').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14137': function() {
               $('#14137').stop().fadeOut();
               $('#14137').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14049': function() {
               $('#14049').stop().fadeOut();
               $('#14049').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14029': function() {
               $('#14029').stop().fadeOut();
               $('#14029').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14364': function() {
               $('#14364').stop().fadeOut();
               $('#14364').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14156': function() {
               $('#14156').stop().fadeOut();
               $('#14156').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14110': function() {
               $('#14110').stop().fadeOut();
               $('#14110').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15073': function() {
               $('#15073').stop().fadeOut();
               $('#15073').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14150': function() {
               $('#14150').stop().fadeOut();
               $('#14150').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15103': function() {
               $('#15103').stop().fadeOut();
               $('#15103').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14931': function() {
               $('#14931').stop().fadeOut();
               $('#14931').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14007': function() {
               $('#14007').stop().fadeOut();
               $('#14007').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14586': function() {
               $('#14586').stop().fadeOut();
               $('#14586').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14542': function() {
               $('#14542').stop().fadeOut();
               $('#14542').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13994': function() {
               $('#13994').stop().fadeOut();
               $('#13994').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13987': function() {
               $('#13987').stop().fadeOut();
               $('#13987').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15836': function() {
               $('#15836').stop().fadeOut();
               $('#15836').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14330': function() {
               $('#14330').stop().fadeOut();
               $('#14330').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14252': function() {
               $('#14252').stop().fadeOut();
               $('#14252').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14205': function() {
               $('#14205').stop().fadeOut();
               $('#14205').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14140': function() {
               $('#14140').stop().fadeOut();
               $('#14140').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14118': function() {
               $('#14118').stop().fadeOut();
               $('#14118').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13986': function() {
               $('#13986').stop().fadeOut();
               $('#13986').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15150': function() {
               $('#15150').stop().fadeOut();
               $('#15150').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14165': function() {
               $('#14165').stop().fadeOut();
               $('#14165').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22465': function() {
               $('#22465').stop().fadeOut();
               $('#22465').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22459': function() {
               $('#22459').stop().fadeOut();
               $('#22459').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21321': function() {
               $('#21321').stop().fadeOut();
               $('#21321').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21540': function() {
               $('#21540').stop().fadeOut();
               $('#21540').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15445': function() {
               $('#15445').stop().fadeOut();
               $('#15445').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15498': function() {
               $('#15498').stop().fadeOut();
               $('#15498').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15757': function() {
               $('#15757').stop().fadeOut();
               $('#15757').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15174': function() {
               $('#15174').stop().fadeOut();
               $('#15174').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15830': function() {
               $('#15830').stop().fadeOut();
               $('#15830').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15484': function() {
               $('#15484').stop().fadeOut();
               $('#15484').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15720': function() {
               $('#15720').stop().fadeOut();
               $('#15720').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15720': function() {
               $('#15720').stop().fadeOut();
               $('#15720').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15484': function() {
               $('#15484').stop().fadeOut();
               $('#15484').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14897': function() {
               $('#14897').stop().fadeOut();
               $('#14897').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14580': function() {
               $('#14580').stop().fadeOut();
               $('#14580').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15765': function() {
               $('#15765').stop().fadeOut();
               $('#15765').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15351': function() {
               $('#15351').stop().fadeOut();
               $('#15351').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15861': function() {
               $('#15861').stop().fadeOut();
               $('#15861').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15410': function() {
               $('#15410').stop().fadeOut();
               $('#15410').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15778': function() {
               $('#15778').stop().fadeOut();
               $('#15778').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21630': function() {
               $('#21630').stop().fadeOut();
               $('#21630').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21674': function() {
               $('#21674').stop().fadeOut();
               $('#21674').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15915': function() {
               $('#15915').stop().fadeOut();
               $('#15915').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15471': function() {
               $('#15471').stop().fadeOut();
               $('#15471').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15710': function() {
               $('#15710').stop().fadeOut();
               $('#15710').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15708': function() {
               $('#15708').stop().fadeOut();
               $('#15708').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15700': function() {
               $('#15700').stop().fadeOut();
               $('#15700').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15455': function() {
               $('#15455').stop().fadeOut();
               $('#15455').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15437': function() {
               $('#15437').stop().fadeOut();
               $('#15437').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15364': function() {
               $('#15364').stop().fadeOut();
               $('#15364').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15011': function() {
               $('#15011').stop().fadeOut();
               $('#15011').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15070': function() {
               $('#15070').stop().fadeOut();
               $('#15070').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15416': function() {
               $('#15416').stop().fadeOut();
               $('#15416').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12918': function() {
               $('#12918').stop().fadeOut();
               $('#12918').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15450': function() {
               $('#15450').stop().fadeOut();
               $('#15450').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15019': function() {
               $('#15019').stop().fadeOut();
               $('#15019').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15361': function() {
               $('#15361').stop().fadeOut();
               $('#15361').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15041': function() {
               $('#15041').stop().fadeOut();
               $('#15041').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15111': function() {
               $('#15111').stop().fadeOut();
               $('#15111').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);
               console.log("Success!");

             },
             '15707': function() {
               $('#15707').stop().fadeOut();
               $('#15707').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14800': function() {
               $('#14800').stop().fadeOut();
               $('#14800').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14590': function() {
               $('#14590').stop().fadeOut();
               $('#14590').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14880': function() {
               $('#14880').stop().fadeOut();
               $('#14880').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14864': function() {
               $('#14864').stop().fadeOut();
               $('#14864').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14858': function() {
               $('#14858').stop().fadeOut();
               $('#14858').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14565': function() {
               $('#14565').stop().fadeOut();
               $('#14565').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15114': function() {
               $('#15114').stop().fadeOut();
               $('#15114').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15092': function() {
               $('#15092').stop().fadeOut();
               $('#15092').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15022': function() {
               $('#15022').stop().fadeOut();
               $('#15022').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15137': function() {
               $('#15137').stop().fadeOut();
               $('#15137').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14585': function() {
               $('#14585').stop().fadeOut();
               $('#14585').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21600': function() {
               $('#21600').stop().fadeOut();
               $('#21600').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21450': function() {
               $('#21450').stop().fadeOut();
               $('#21450').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21618': function() {
               $('#21618').stop().fadeOut();
               $('#21618').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21442': function() {
               $('#21442').stop().fadeOut();
               $('#21442').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21256': function() {
               $('#21256').stop().fadeOut();
               $('#21256').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22303': function() {
               $('#22303').stop().fadeOut();
               $('#22303').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22113': function() {
               $('#22113').stop().fadeOut();
               $('#22113').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22100': function() {
               $('#22100').stop().fadeOut();
               $('#22100').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21603': function() {
               $('#21603').stop().fadeOut();
               $('#21603').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22112': function() {
               $('#22112').stop().fadeOut();
               $('#22112').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22128': function() {
               $('#22128').stop().fadeOut();
               $('#22128').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22313': function() {
               $('#22313').stop().fadeOut();
               $('#22313').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22136': function() {
               $('#22136').stop().fadeOut();
               $('#22136').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22133': function() {
               $('#22133').stop().fadeOut();
               $('#22133').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15346': function() {
               $('#15346').stop().fadeOut();
               $('#15346').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15355': function() {
               $('#15355').stop().fadeOut();
               $('#15355').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15360': function() {
               $('#15360').stop().fadeOut();
               $('#15360').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15103': function() {
               $('#15103').stop().fadeOut();
               $('#15103').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14184': function() {
               $('#14184').stop().fadeOut();
               $('#14184').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14895': function() {
               $('#14895').stop().fadeOut();
               $('#14895').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14239': function() {
               $('#14239').stop().fadeOut();
               $('#14239').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14647': function() {
               $('#14647').stop().fadeOut();
               $('#14647').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14562': function() {
               $('#14562').stop().fadeOut();
               $('#14562').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14370': function() {
               $('#14370').stop().fadeOut();
               $('#14370').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14654': function() {
               $('#14654').stop().fadeOut();
               $('#14654').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14569': function() {
               $('#14569').stop().fadeOut();
               $('#14569').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15000': function() {
               $('#15000').stop().fadeOut();
               $('#15000').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15130': function() {
               $('#15130').stop().fadeOut();
               $('#15130').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15094': function() {
               $('#15094').stop().fadeOut();
               $('#15094').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15086': function() {
               $('#15086').stop().fadeOut();
               $('#15086').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13947': function() {
               $('#13947').stop().fadeOut();
               $('#13947').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14880': function() {
               $('#14880').stop().fadeOut();
               $('#14880').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14591': function() {
               $('#14591').stop().fadeOut();
               $('#14591').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14576': function() {
               $('#14576').stop().fadeOut();
               $('#14576').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15757': function() {
               $('#15757').stop().fadeOut();
               $('#15757').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15095': function() {
               $('#15095').stop().fadeOut();
               $('#15095').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14337': function() {
               $('#14337').stop().fadeOut();
               $('#14337').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15100': function() {
               $('#15100').stop().fadeOut();
               $('#15100').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14582': function() {
               $('#14582').stop().fadeOut();
               $('#14582').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14014': function() {
               $('#14014').stop().fadeOut();
               $('#14014').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14356': function() {
               $('#14356').stop().fadeOut();
               $('#14356').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14001': function() {
               $('#14001').stop().fadeOut();
               $('#14001').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14526': function() {
               $('#14526').stop().fadeOut();
               $('#14526').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14917': function() {
               $('#14917').stop().fadeOut();
               $('#14917').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14245': function() {
               $('#14245').stop().fadeOut();
               $('#14245').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '23330': function() {
               $('#23330').stop().fadeOut();
               $('#23330').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15121': function() {
               $('#15121').stop().fadeOut();
               $('#15121').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14657': function() {
               $('#14657').stop().fadeOut();
               $('#14657').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14615': function() {
               $('#14615').stop().fadeOut();
               $('#14615').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14609': function() {
               $('#14609').stop().fadeOut();
               $('#14609').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14581': function() {
               $('#14581').stop().fadeOut();
               $('#14581').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14561': function() {
               $('#14561').stop().fadeOut();
               $('#14561').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14876': function() {
               $('#14876').stop().fadeOut();
               $('#14876').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14644': function() {
               $('#14644').stop().fadeOut();
               $('#14644').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13506': function() {
               $('#13506').stop().fadeOut();
               $('#13506').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13564': function() {
               $('#13564').stop().fadeOut();
               $('#13564').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13556': function() {
               $('#13556').stop().fadeOut();
               $('#13556').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15728': function() {
               $('#15728').stop().fadeOut();
               $('#15728').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15451': function() {
               $('#15451').stop().fadeOut();
               $('#15451').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15439': function() {
               $('#15439').stop().fadeOut();
               $('#15439').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21581': function() {
               $('#21581').stop().fadeOut();
               $('#21581').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '21501': function() {
               $('#21501').stop().fadeOut();
               $('#21501').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11685': function() {
               $('#11685').stop().fadeOut();
               $('#11685').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11473': function() {
               $('#11473').stop().fadeOut();
               $('#11473').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11689': function() {
               $('#11689').stop().fadeOut();
               $('#11689').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11185': function() {
               $('#11185').stop().fadeOut();
               $('#11185').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11721': function() {
               $('#11721').stop().fadeOut();
               $('#11721').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11831': function() {
               $('#11831').stop().fadeOut();
               $('#11831').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11664': function() {
               $('#11664').stop().fadeOut();
               $('#11664').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11572': function() {
               $('#11572').stop().fadeOut();
               $('#11572').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11580': function() {
               $('#11580').stop().fadeOut();
               $('#11580').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11708': function() {
               $('#11708').stop().fadeOut();
               $('#11708').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11248': function() {
               $('#11248').stop().fadeOut();
               $('#11248').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11232': function() {
               $('#11232').stop().fadeOut();
               $('#11232').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11156': function() {
               $('#11156').stop().fadeOut();
               $('#11156').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11930': function() {
               $('#11930').stop().fadeOut();
               $('#11930').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12128': function() {
               $('#12128').stop().fadeOut();
               $('#12128').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11466': function() {
               $('#11466').stop().fadeOut();
               $('#11466').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11182': function() {
               $('#11182').stop().fadeOut();
               $('#11182').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11162': function() {
               $('#11162').stop().fadeOut();
               $('#11162').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11504': function() {
               $('#11504').stop().fadeOut();
               $('#11504').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12350': function() {
               $('#12350').stop().fadeOut();
               $('#12350').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12194': function() {
               $('#12194').stop().fadeOut();
               $('#12194').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12340': function() {
               $('#12340').stop().fadeOut();
               $('#12340').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '12339': function() {
               $('#12339').stop().fadeOut();
               $('#12339').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11770': function() {
               $('#11770').stop().fadeOut();
               $('#11770').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11778': function() {
               $('#11778').stop().fadeOut();
               $('#11778').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '11692': function() {
               $('#11692').stop().fadeOut();
               $('#11692').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '22486': function() {
               $('#22486').stop().fadeOut();
               $('#22486').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15930': function() {
               $('#15930').stop().fadeOut();
               $('#15930').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15144': function() {
               $('#15144').stop().fadeOut();
               $('#15144').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15761': function() {
               $('#15761').stop().fadeOut();
               $('#15761').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15703': function() {
               $('#15703').stop().fadeOut();
               $('#15703').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15736': function() {
               $('#15736').stop().fadeOut();
               $('#15736').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15347': function() {
               $('#15347').stop().fadeOut();
               $('#15347').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15436': function() {
               $('#15436').stop().fadeOut();
               $('#15436').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14587': function() {
               $('#14587').stop().fadeOut();
               $('#14587').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14629': function() {
               $('#14629').stop().fadeOut();
               $('#14629').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14526': function() {
               $('#14526').stop().fadeOut();
               $('#14526').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13950': function() {
               $('#13950').stop().fadeOut();
               $('#13950').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15349': function() {
               $('#15349').stop().fadeOut();
               $('#15349').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14130': function() {
               $('#14130').stop().fadeOut();
               $('#14130').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15400': function() {
               $('#15400').stop().fadeOut();
               $('#15400').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '14301': function() {
               $('#14301').stop().fadeOut();
               $('#14301').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13500': function() {
               $('#13500').stop().fadeOut();
               $('#13500').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15914': function() {
               $('#15914').stop().fadeOut();
               $('#15914').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '13563': function() {
               $('#13563').stop().fadeOut();
               $('#13563').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15734': function() {
               $('#15734').stop().fadeOut();
               $('#15734').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             },
             '15333': function() {
               $('#15333').stop().fadeOut();
               $('#15333').css({
                 'border-color': 'cyan',
                 "font-family": "compressed"
               }).fadeIn(1000);


             }
           };

           // Add our commands to annyang
           annyang.addCommands(commands);

           // Start listening. You can call this here, or attach this call to an event, button, etc.
           annyang.start();
         }


       }, 700);
     },



   });

 });
