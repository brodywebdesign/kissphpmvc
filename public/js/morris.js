(function($) {
  'use strict';
  $(function() {
    if ($('#morris-area-example').length) {
      Morris.Area({
        element: 'morris-area-example',
        lineColors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
        data: [{
            hour: '1AM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '2AM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '3AM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '4AM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '5AM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '6AM',
            a: 0,
            b: 0,
            c:0
          },
          {
            hour: '7AM',
            a: 5,
            b: 10,
            c: 12
          },
          {
            hour: '8AM',
            a: 9,
            b: 15,
            c: 22
          },
          {
            hour: '9AM',
            a: 14,
            b: 19,
            c: 5
          },
          {
            hour: '10AM',
            a: 16,
            b: 17,
            c: 3
          },
          {
            hour: '11AM',
            a: 21,
            b: 31,
            c: 12,
          },
          {
            hour: '12PM',
            a: 12,
            b: 33,
            c: 45
          },
          {
            hour: '1PM',
            a: 22,
            b: 34,
            c: 55
          },
          {
            hour: '2PM',
            a: 4,
            b: 3,
            c: 7
          },
          {
            hour: '3PM',
            a: 7,
            b: 13,
            c: 17
          },
          {
            hour: '4PM',
            a: 19,
            b: 23,
            c: 21
          },
          {
            hour: '5PM',
            a: 12,
            b: 33,
            c: 45
          },
          {
            hour: '6PM',
            a: 42,
            b: 53,
            c: 65
          },
          {
            hour: '7PM',
            a: 32,
            b: 45,
            c: 79
          },
          {
            hour: '8PM',
            a: 44,
            b: 67,
            c: 87
          },
          {
            hour: '9PM',
            a: 12,
            b: 10,
            c: 20
          },
          {
            hour: '10PM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '11PM',
            a: 0,
            b: 0,
            c: 0
          },
          {
            hour: '12AM',
            a: 0,
            b: 0,
            c: 0
          }
        ],
        xkey: 'hour',
        ykeys: ['a', 'b', 'c'],
        parseTime: false,
        labels: ['Lumini X', 'Primo','Web Glow Machine']
      });
    }
    if ($('#morris-line-example').length) {
      Morris.Line({
        element: 'morris-line-example',
        lineColors: ['#63CF72', '#F36368', '#76C1FA', '#FABA66'],
        data: [{
            y: '2006',
            a: 100,
            b: 150
          },
          {
            y: '2007',
            a: 75,
            b: 65
          },
          {
            y: '2008',
            a: 50,
            b: 40
          },
          {
            y: '2009',
            a: 75,
            b: 65
          },
          {
            y: '2010',
            a: 50,
            b: 40
          },
          {
            y: '2011',
            a: 75,
            b: 65
          },
          {
            y: '2012',
            a: 100,
            b: 90
          }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
      });
    }

    if ($("#morris-bar-example").length) {
      Morris.Bar({
        element: 'morris-bar-example',
        barColors: ['#63CF72', '#F36368', '#76C1FA', '#FABA66'],
        data: [{
            y: '2006',
            a: 100,
            b: 90
          },
          {
            y: '2007',
            a: 75,
            b: 65
          },
          {
            y: '2008',
            a: 50,
            b: 40
          },
          {
            y: '2009',
            a: 75,
            b: 65
          },
          {
            y: '2010',
            a: 50,
            b: 40
          },
          {
            y: '2011',
            a: 75,
            b: 65
          },
          {
            y: '2012',
            a: 100,
            b: 90
          }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Lumini X', 'Primo','Web Glow Machine']
      });
    }
    if ($("#morris-donut-example").length) {
      Morris.Donut({
        element: 'morris-donut-example',
        colors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
        data: [{
            label: "Download Sales",
            value: 12
          },
          {
            label: "In-Store Sales",
            value: 30
          },
          {
            label: "Mail-Order Sales",
            value: 20
          }
        ]
      });
    }
    if ($('#morris-dashboard-taget').length) {
      Morris.Area({
        element: 'morris-dashboard-taget',
        parseTime: false,
        lineColors: ['#76C1FA', '#F36368', '#63CF72', '#FABA66'],
        data: [{
            y: 'Jan',
            Revenue: 190,
            Target: 170
          },
          {
            y: 'Feb',
            Revenue: 60,
            Target: 90
          },
          {
            y: 'March',
            Revenue: 100,
            Target: 120
          },
          {
            y: 'Apr',
            Revenue: 150,
            Target: 140
          },
          {
            y: 'May',
            Revenue: 130,
            Target: 170
          },
          {
            y: 'Jun',
            Revenue: 200,
            Target: 160
          },
          {
            y: 'Jul',
            Revenue: 150,
            Target: 180
          },
          {
            y: 'Aug',
            Revenue: 170,
            Target: 180
          },
          {
            y: 'Sep',
            Revenue: 140,
            Target: 90
          }
        ],
        xkey: 'y',
        ykeys: ['Target', 'Revenue'],
        labels: ['Monthly Target', 'Monthly Revenue'],
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        axes: 'x'
      });
    }
  });
})(jQuery);