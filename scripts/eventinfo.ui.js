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

          FB.api(
            '/' + eventid,
            'GET',
            {"fields":"attending_count,interested_count,attending.limit(450){link,name,picture},interested.limit(450)"},
            function(response) {

                if (!response) {
                    error ("Error retrieving Event info from Facebook");
                    return;
                }
                if (response.error)
                {
                    error ("Error retrieving Event info from Facebook: " + response.error.message);
                    return;
                }

                cleanError();

                getEventInfo (response, info_going, info_interested);

                drawChart (info_going);
                drawChart (info_interested);
            }
          );
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
        if (total == 0)
            return;

        var male = info.asian_male_count + info.non_asian_male_count;
        var female = info.asian_female_count + info.non_asian_female_count;

        var options = {
          title: info.chart_title + " Sample: " + total + "\nM: " + male + " ("+ Math.round(100*male/total) + "%)" + " F: " + female + " ("+ Math.round(100*female/total) + "%)"
        };

        var chart = new google.visualization.PieChart(document.getElementById(info.chart_id));
        chart.draw(data, options);
      }