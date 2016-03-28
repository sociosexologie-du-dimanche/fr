// Couple
    $(function() {
  $('#couple').highcharts({
    chart: {
      type: 'bar'
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['En couple cohabitant', 'En couple non cohabitant', 'Célibataire ayant déjà été en couple', 'Célibataire n\'ayant jamais été en couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Pourcentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Pas du tout satisfait',
      data: [5, 3, 19, 16]

    }, {
      name: 'Peu satisfait',
      data: [16, 11, 29, 29]
    }]
  });
});

// Gauge
(function(){
    
var legend1 = "<span style='font-weight:100'>Un peu</span>",
    legend2 = "<span style='font-weight:100'>Beaucoup</span>",
    legend3 = "<span style='font-weight:100'>Pas du <br/>tout</span>";




$(function () {
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'none'
            },
            colors: ['#CBA148', '#0092B9', '#107671']
        });
    }
    // 

    Highcharts.chart('gauge', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
        },

        tooltip: {
            borderWidth : 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Gill Sans'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 150
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for 'un peu H'
                outerRadius: '112%',
                innerRadius: '100%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),            
                borderWidth:0,


            }, { // Track for 'un peu F'
                outerRadius: '100%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth:0,


            }, { // Track for Beaucoup H
                outerRadius: '87%',
                innerRadius: '75%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
								borderWidth:0,


            }, { // Track for Beaucoup F
                outerRadius: '75%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tout H
                outerRadius: '62%',
                innerRadius: '50%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tou F
                outerRadius: '50%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 60,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: 17,
                dataLabels: {
                    enabled: false
                },
                linecap : 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: '(hommes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '106%',
                innerRadius: '106%',
                y: 40
            }]
        }, {
            name: '(femmes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '94%',
                innerRadius: '94%',
                y: 51
            }]
        } , {
            name: '(hommes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '81%',
                innerRadius: '81%',
                y: 49
            }]
        }, {
            name: '(femmes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '69%',
                innerRadius: '69%',
                y: 36
            }]
        } , {
            name: '(hommes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '56%',
                innerRadius: '56%',
                y: 11
            }]
        }, {
            name: '(femmes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '44%',
                innerRadius: '44%',
                y: 15
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.text(legend1, -55, 5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.text(legend2, -65, 10)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.text(legend3,-50,5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});

})();

// Highcharts1
(function(){
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non-religieux', 'Cathloiques non pratiquants', 'Autres religions','Catholiques pratiquants'], // categories
                ["N'ont jamais sucé ou léché le sexe de leur partenaire", 11, 12, 21,23], // first series
                ["N'ont jamais sodomisé leur partenaire", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },

    });
});
})();

// Nombre
(function(){
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar'
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Entre 2 et 3','Entre 4 et 5','Entre 6 et10','Plus de 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Pas du tout satisfait',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Peu satisfait',
            data: [18,18,21,20,20]
        }]
    });
});
})();

//Polsodo
(function(){
    $(function () {
    $('#polsodo').highcharts({ 
     		colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Pourcentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Ont déjà eu une relation sexuelle avec plus de deux personnes en même temps',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Ont déjà eu une relation homosexuelle',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Ont déjà pratiqué la pénétration anale',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});


})();

// Treemap
(function(){
    $(function () {
    $('#treemap').highcharts({
    		chart : {
        	type : 'treemap'
        },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Supérieur au bac',
            }, {
                id: 'R',
                name: 'Inférieur au bac',
            },{
            		id: 'DH',
                name: 'Hommes',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Femmes',
                parent : 'D'
            },{
                name: 'Souvent : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Souvent : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Jamais"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});
})();

// vieillir
    $(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area'
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Moins de 35 ans','Entre 35 et 50 ans','Plus de 50 ans']
        },
        yAxis: {
            title: {
                text: "Part de la génération d'âge"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Au moins deux fois par semaine',
            data: [33,31,21]
        },{
            name: 'Environ une fois par semaine',
            data: [46,46,46],
            visible : false
        },{
            name: 'Jamais',
            data: [21,23,33]
        }]
    });
});