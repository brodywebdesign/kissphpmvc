(function($) {
  'use strict';
  $(function() {
    if ($('#calendar').length) {
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2018-07-12',
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'Total Sales: $4312',
            start: '2018-07-01'
          },
          {
            title: 'Total Sales: $3312',
            start: '2018-07-02'
          },
          {
            title: 'Total Sales: $1312',
            start: '2018-07-03'
          },
          {
            title: 'Total Sales: $2312',
            start: '2018-07-04'
          },
          {
            title: 'Total Sales: $1234',
            start: '2018-07-05'
          },
          {
            title: 'Total Sales: $9312',
            start: '2018-07-06'
          },
          {
            title: 'Total Sales: $10312',
            start: '2018-07-07'
          },
          {
            title: 'Total Sales: $1782',
            start: '2018-07-08'
          },
          {
            title: 'Total Sales: $3312',
            start: '2018-07-09'
          },
          {
            title: 'Total Sales: $1312',
            start: '2018-07-10'
          },
          {
            title: 'Total Sales: $2312',
            start: '2018-07-11'
          },
          {
            title: 'Total Sales: $1234',
            start: '2018-07-12'
          },
          {
            title: 'Total Sales: $9312',
            start: '2018-07-13'
          },
          {
            title: 'Total Sales: $10312',
            start: '2018-07-14'
          },
          {
            title: 'Total Sales: $1782',
            start: '2018-07-15'
          },
          {
            title: 'Total Sales: $3312',
            start: '2018-07-16'
          },
          {
            title: 'Total Sales: $1312',
            start: '2018-07-17'
          },
          {
            title: 'Total Sales: $2312',
            start: '2018-07-18'
          },
          {
            title: 'Total Sales: $1234',
            start: '2018-07-19'
          },
          {
            title: 'Total Sales: $9312',
            start: '2018-07-20'
          },
          {
            title: 'Total Sales: $10312',
            start: '2018-07-21'
          },
          {
            title: 'Total Sales: $1782',
            start: '2018-07-22'
          },
          {
            title: 'Total Sales: $3312',
            start: '2018-07-23'
          },
          {
            title: 'Total Sales: $1312',
            start: '2018-07-24'
          },
          {
            title: 'Total Sales: $2312',
            start: '2018-07-25'
          },
          {
            title: 'Total Sales: $1234',
            start: '2018-07-26'
          },
          {
            title: 'Total Sales: $9312',
            start: '2018-07-27'
          },
          {
            title: 'Total Sales: $10312',
            start: '2018-07-28'
          },
          {
            title: 'Total Sales: $1782',
            start: '2018-07-29'
          },
          {
            title: 'Total Sales: $10312',
            start: '2018-07-30'
          },
          {
            title: 'Total Sales: $1782',
            start: '2018-07-31'
          }

        ]
      })
    }
  });
})(jQuery);