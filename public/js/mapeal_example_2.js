$(function() {
  'use strict';
  if ($(".mapeal-example-2").length) {
    $(".mapeal-example-2").mapael({
      map: {
        name: "usa_states",
        defaultArea: {
          attrsHover: {
            fill: "#343434",
            stroke: "#5d5d5d",
            "stroke-width": 1,
            "stroke-linejoin": "round"
          }
        }
      },
      legend: {
        plot: {
          cssClass: 'myLegend',
          labelAttrs: {
            fill: "#4a4a4a"
          },
          titleAttrs: {
            fill: "#4a4a4a"
          },
          marginBottom: 20,
          marginLeft: 30,
          hideElemsOnClick: {
            opacity: 0
          },
          title: "Amount of Sales",
          slices: [{
            size: 4,
            type: "circle",
            max: 20000,
            attrs: {
              fill: "#89ff72"
            },
            label: "Less than $50,000"
          }, {
            size: 6,
            type: "circle",
            min: 20000,
            max: 100000,
            attrs: {
              fill: "#fffd72"
            },
            label: "Between $50,000 and $100,000"
          }, {
            size: 10,
            type: "circle",
            min: 100000,
            max: 200000,
            attrs: {
              fill: "#ffbd54"
            },
            label: "Between $100,000 and $250,000"
          }, {
            size: 25,
            type: "circle",
            min: 200000,
            attrs: {
              fill: "#ff5454"
            },
            label: "More than $500,000"
          }]
        }
      },
      plots: {
        "town-75056": {
          value: "100002",
                        latitude: 38.362031,
                        longitude: -86.875938,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-13055": {
          value: "859368",
                        latitude: 38.362031,
                        longitude: -86.875938,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-69123": {
          value: "492578",
                        latitude: 37.792032,
                        longitude: -122.394613,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-31555": {
          value: "449328",
                        latitude: 37.792032,
                        longitude: -122.394613,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-06088": {
          value: "347105",
                        latitude: 34.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-44109": {
          value: "293234",
                        latitude: 34.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-67482": {
          value: "276401",
                        latitude: 34.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-34172": {
          value: "260572",
          latitude: 43.611111111111,
          longitude: 3.8766666666667,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-33063": {
          value: "242945",
          latitude: 44.837777777778,
          longitude: -0.57944444444444,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-59350": {
          value: "234058",
                        latitude: 38.905761,
                        longitude: -77.020746,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-35238": {
          value: "212939",
          latitude: 48.114166666667,
          longitude: -1.6808333333333,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-51454": {
          value: "184011",
                        latitude: 44.671504,
                        longitude: -110.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-76351": {
          value: "178070",
                        latitude: 38.362031,
                        longitude: -86.875938,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-42218": {
          value: "174566",
                        latitude: 40.667013,
                        longitude: -101.465781,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-83137": {
          value: "166851",
                        latitude: 35.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-38185": {
          value: "158249",
                        latitude: 37.025052,
                        longitude: -117.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-21231": {
          value: "101",
                        latitude: 40.671504,
                        longitude: -90.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-49007": {
          value: "20001",
                        latitude: 38.671504,
                        longitude: -90.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-72181": {
          value: "147108",
                        latitude: 39.672504,
                        longitude: -90.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-69266": {
          value: "146729",
                        latitude: 39.673504,
                        longitude: -90.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-97411": {
          value: "146489",
                        latitude: 38.671504,
                        longitude: -90.957968,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-29019": {
          value: "5000000",
                        latitude: 36.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-30189": {
          value: "50000000",
                        latitude: 40.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-13001": {
          value: "144884",
                        latitude: 41.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-63113": {
          value: "143669",
                        latitude: 42.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-87085": {
          value: "141540",
                        latitude: 41.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-37261": {
          value: "138268",
                        latitude: 42.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-80021": {
          value: "136512",
                        latitude: 43.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-57463": {
          value: "122928",
                        latitude: 43.025052,
                        longitude: -119.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-25056": {
          value: "1210000038",
                        latitude: 41.025052,
                        longitude: -120.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-66136": {
          value: "1190536",
                        latitude: 46.025052,
                        longitude: -110.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-45234": {
          value: "117833",
                        latitude: 46.025052,
                        longitude: -112.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-92012": {
          value: "50",
                        latitude: 40.025052,
                        longitude: -108.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-76540": {
          value: "113461",
                        latitude: 43.025052,
                        longitude: -112.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-14118": {
          value: "111949",
                        latitude: 45.025052,
                        longitude: -112.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-68224": {
          value: "111273",
                        latitude: 46.025052,
                        longitude: -112.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-93066": {
          value: "100000",
                        latitude: 46.025052,
                        longitude: -115.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-33366": {
          value: "9809",
                        latitude: 45.025052,
                        longitude: -117.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        },
        "town-02381": {
          value: "9756",
                        latitude: 44.025052,
                        longitude: -118.192006,
          href: "#",
          tooltip: {
            content: "<span style=\"font-weight:bold;\">Location #12</span><br />Sales : $62,345"
          }
        }
      }
    });
  }
});