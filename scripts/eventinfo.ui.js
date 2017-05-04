      function fetchUserInfo () {
          FB.api('/me?fields=picture,name', function(response) {
                  $("#logged_user").html("<strong>" + response.name + "</strong>").show();
                  $("#logged_user_image").attr("src", response.picture.data.url).show();
                  $("#error").hide();
              });
      }

      function hideUserInfo ()
      {
           $("#logged_user").hide();
           $("#logged_user_image").hide();
      }

      function checkLoginState ()
      {
          FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                fetchUserInfo ();
            } else {
                hideUserInfo ();
            }
          });
      }

      function cleanError ()
      {
              $("#error").hide();
      }
      
      function onProcess()
      {
           FB.getLoginStatus(function(response) {
            if (response.status !== 'connected') {
              error ("You must connect with your Facebook Account in order to use this tool");
              return;
            } 
            cleanError ();
            onFetchEventInfo ();
          });
      }

      function onFetchEventInfo ()
      {
          var max_going = 4000;
          var max_interested = 1000;
          var event = $("#event-url").val();
          var rx = /facebook\.com\/events\/(\d+)/ig;
          var rx2 = /(\d+)/ig;

          var result = rx.exec (event);
          if (!result || result.length < 2)
                result = rx2.exec (event);
          if (!result || result.length < 2) {
              error ("Invalid Event URL or Event ID");
              return;
          }

          cleanError();

          var eventid = result [1];

          var info_going = {
                      asian_female_count: 0,
                      asian_male_count: 0,
                      non_asian_female_count: 0,
                      non_asian_male_count: 0,
                      chart_id: 'going_chart',
                      chart_title: 'Going'
           };

          var info_interested = {
                asian_female_count: 0,
                asian_male_count: 0,
                non_asian_female_count: 0,
                non_asian_male_count: 0,
                chart_id: 'interested_chart',
                chart_title: 'Interested'
           };
        
          drawChart (info_going);
          drawChart (info_interested);

          $('#charts').spin();

          fetchMoreAttendingParticipants (eventid, info_going, null,'attending', max_going) ;
          fetchMoreAttendingParticipants (eventid, info_interested,null, 'interested', max_interested);
      }

      function fetchMoreAttendingParticipants (eventid, info, cursor, type, max)
      {
            var fields = {"fields":"name,link", "limit":"475", "pretty":"0" };
            if (cursor)
                fields.after = cursor;
            FB.api(
            '/' + eventid + '/' + type,
            'GET',
            fields,
                function (response) {

                        if (!response) {
                            error ("Error retrieving Event info from Facebook");
                            return;
                        }
                        if (response.error)
                        {
                            error ("Error retrieving Event info from Facebook: " + response.error.message);
                            return;
                        }

                        if (!cursor)
                            $('#charts').spin(false);
                            
                        getEventInfoFromParticipants (response.data, info);

                        if (response.paging && response.paging.next)
                            cursor = response.paging.cursors.after;
                        else
                            cursor = null;

                        drawChart (info);

                        var total = info.asian_female_count + info.non_asian_female_count + info.asian_male_count + info.non_asian_male_count;
                        
                        if (total > max)
                            return;
                        
                        if (cursor)
                            setTimeout( function () { fetchMoreAttendingParticipants (eventid, info, cursor, type, max)}, 510);
                });
      }

      function error (message)
      {
           $("#error").html(message). show ();
      }

     function drawChart(info) {

        var data = google.visualization.arrayToDataTable([
          ['Tipo', 'Total'],
          ['👩🏻 (🇰🇷 🇯🇵 🇨🇳) ',      info.asian_female_count],
          ['👩 ',     info.non_asian_female_count],
          ['👦🏻  (🇰🇷 🇯🇵 🇨🇳) ',     info.asian_male_count],
          ['👦🏽 ',     info.non_asian_male_count]
        ]);

        var total = info.asian_female_count + info.non_asian_female_count + info.asian_male_count + info.non_asian_male_count;
        var chart = new google.visualization.PieChart(document.getElementById(info.chart_id));
        if (total == 0) {
            chart.draw(data);
            return;
        }

        var male = info.asian_male_count + info.non_asian_male_count;
        var female = info.asian_female_count + info.non_asian_female_count;

        var options = {
          title: info.chart_title + " Sample: " + total + "\nM: " + male + " ("+ Math.round(100*male/total) + "%)" + " F: " + female + " ("+ Math.round(100*female/total) + "%)"
          ,colors: ['#ed1c24', '#9e0b0f', '#448ccb', '#0054a6' ]
        };

        chart.draw(data, options);
      }