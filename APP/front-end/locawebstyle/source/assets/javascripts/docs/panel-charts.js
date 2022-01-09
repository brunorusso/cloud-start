$(function () {

  // This will resize all charts examples on sidebar minimize or maximize
  $(document).on('sidebar-minimize sidebar-maximize', function() {
    $(window).resize();
  });

  // panel 1
  $('#panel-charts').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Agosto/2014'
    },
    xAxis: {
      categories: ['Joana', 'Marcela', 'Patricia', 'Diego']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Envios'
      }
    },
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    },
    colors: ['#bdaa38', '#aa4643 ','#89a54e'],
    series: [{
      name: 'Total de envios contratados',
      data: [25, 50, 20, 3]
    }]
  });

  $('#panel-charts-client').highcharts({

    chart: {
      type: 'column',
      width: $('#panel-charts').width()
    },
    title: {
      text: 'Agosto/2014'
    },
    xAxis: {
      categories: ['29/04 a 28/05', '29/06 a 28/07', '29/08 a 28/09', '29/10 a 28/11']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Envios'
      }
    },
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    },
    colors: ['#bdaa38', '#aa4643 ','#89a54e'],
    series: [{
      name: 'Mensagens enviadas',
      data: [30, 15, 30, 30],
    },
    {
      name: 'Erros de recebimento',
      data: [20, 12, 14, 22]
    },
    {
      name: 'Descadastramentos',
      data: [5, 1, 5, 10]
    }]
  });

  // Panel 2
  $('#panel-charts-2').highcharts({
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        '20/05/2014',
        '21/05/2014',
        '22/05/2014',
        '23/05/2014',
        '24/05/2014',
        '25/05/2014',
        '26/05/2014',
        '27/05/2014'
      ],
      labels: {
        rotation: 10,
        x: -20,
        step: 1,
        y: 20,
        align: "left"
      },
      tickWidth: 0
    },
    yAxis: {
      min: 0,
      allowDecimals: false,
      title: {
        text: 'Quantidade'
      }
    },
    legend: {
      lineHeight: 20
    },
    plotOptions: {
      line: {
        lineWidth: 2,
        marker: {
          enabled: false
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    colors: ['#25b799', '#d75452 ','#428bca'],
    series: [{
      name: 'Entregues',
      data: [1200,5000,500,1000,5500,1800,2500,2500]
    },
    {
      name: 'Bounces',
      data: [500,200,300,700,1600,500,200,500]
    },
    {
      name: 'Aberturas',
      data: [1000,2400,400,800,2400,1000,500,1500]
    }],
    legend: {
      lineHeight: 20
    },
    tooltip: {
      crosshairs: true,
      useHTML: true
    }
  });

  // Panel 2 Pie chart
  $('#panel-chart-pie-errors').highcharts({
    chart: {
      width: $('#panel-charts-2').width(),
      plotBackgroundColor: null,
      plotBorderWidth: 1,
      plotShadow: false
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    colors: ['#25b89a', '#aa4643 ','#89a54e'],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Erro 1', 15.0],
        ['Erro 2', 35.0],
        ['Erro 3', 40.0]
      ]
    }]
  });

  $('#panel-chart-pie-complaints').highcharts({
    chart: {
      width: $('#panel-charts-2').width(),
      plotBackgroundColor: null,
      plotBorderWidth: 1,
      plotShadow: false
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    colors: ['#1d937b', '#aa4643 ','#89a54e'],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Denúncias', 1],
        ['Nenhuma denúncia', 99],
      ]
    }]
  });

  // Panel 2 board chart 1
  $('#board-chart-1').highcharts({
    colors: ['#1d937b', '#d75553'],
    chart: {
      backgroundColor: '#f7f7f7',
      plotBackgroundColor: '#f7f7f7',
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [0, 0, 0, 0],
      height: 78,
      width: 78
    },
    title: {
      text: '80%',
      align: 'center',
      verticalAlign: 'middle',
      y: 8,
      style: {
        fontSize: '22px'
      }
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: false,
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '50%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Entregues x bounces',
      innerSize: '75%',
      data: [
        ['Entregues', 80],
        ['Bounces', 20],
        {
          name: 'Proprietary or Undetectable',
          y: 0,
          dataLabels: {
            enabled: false
          }
        }
      ],
      size: 78
    }],
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    }
  });

  // Panel 2 board chart 2
  $('#board-chart-2').highcharts({
    colors: ['#2881ac', '#dddddd'],
    chart: {
      backgroundColor: '#f7f7f7',
      plotBackgroundColor: '#f7f7f7',
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [0, 0, 0, 0],
      height: 78,
      width: 78
    },
    title: {
      text: '50%',
      align: 'center',
      verticalAlign: 'middle',
      y: 8,
      style: {
        fontSize: '22px'
      }
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: false,
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '50%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Abertos',
      innerSize: '75%',
      data: [
        ['Abertos', 50],
        ['Não abertos', 50],
        {
          name: 'Proprietary or Undetectable',
          y: 0,
          dataLabels: {
            enabled: false
          }
        }
      ],
      size: 78
    }],
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    }
  });

  // Panel 2 reputation hard bounce chart
  $('#reputation-hard-bounce').highcharts({
    colors: ['#dddddd', '#d75553'],
    chart: {
      backgroundColor: '#f7f7f7',
      plotBackgroundColor: '#f7f7f7',
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [0, 0, 0, 0],
      height: 100
    },
    title: {
      text: '10%',
      align: 'center',
      verticalAlign: 'middle',
      y: 8,
      style: {
        fontSize: '22px'
      }
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: false,
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '50%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Abertos',
      innerSize: '75%',
      data: [
        ['Ok', 90],
        ['Hard Bounces', 10],
        {
          name: 'Proprietary or Undetectable',
          y: 0,
          dataLabels: {
            enabled: false
          }
        }
      ],
      size: 78
    }],
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    }
  });

// Panel 2 reputation complaints chart
  $('#reputation-complaints').highcharts({
    colors: ['#dddddd', '#d75553'],
    chart: {
      backgroundColor: '#f7f7f7',
      plotBackgroundColor: '#f7f7f7',
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [0, 0, 0, 0],
      height: 100
    },
    title: {
      text: '0,1%',
      align: 'center',
      verticalAlign: 'middle',
      y: 8,
      style: {
        fontSize: '22px'
      }
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: false,
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '50%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Abertos',
      innerSize: '75%',
      data: [
        ['Ok', 90],
        ['Hard Bounces', 10],
        {
          name: 'Proprietary or Undetectable',
          y: 0,
          dataLabels: {
            enabled: false
          }
        }
      ],
      size: 78
    }],
    credits: {
      text: 'Locaweb',
      href: 'http://www.locaweb.com.br',
      style: {
        display: 'none'
      }
    }
  });

  // This is used to set the yAxis labels on chart
  var categories = [];

  for (var i = 0; i <= 125; i++) {
    switch(i) {
      case 0:
        categories.push('Sem índice');
        break;
      case 25:
        categories.push('0 a 24 Péssima');
        break;
      case 50:
        categories.push('25 a 49 Ruim');
        break;
      case 75:
        categories.push('50 a 74 Regular');
        break;
      case 100:
        categories.push('75 a 87 Boa');
        break;
      case 112:
        categories.push('Acima de 87 Ótima');
        break;
      case 125:
        categories.push('100 Nota máxima');
        break;
      default:
        categories.push('');
    }
  }

  // Reputation chart example
  $('#reputation-history').highcharts({
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        '20/05/2014',
        '21/05/2014',
        '22/05/2014',
        '23/05/2014',
        '24/05/2014',
        '25/05/2014',
        '26/05/2014',
        '27/05/2014',
        '28/05/2014'
      ],
      labels: {
        rotation: 10,
        x: -20,
        step: 1,
        y: 20,
        align: "left"
      },
      tickWidth: 0
    },
    yAxis: {
      min: 0,
      max: 125,
      allowDecimals: false,
      title: {
        text: null
      },
      tickPositions: [0,25,50,75,100,112,125],
      categories: categories
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      line: {
        lineWidth: 2,
        marker: {
          enabled: true,
          symbol: "circle"
        },
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    colors: ['#303030'],
    series: [{
      data: [0,25,30,120,55,110,0,95,125]
    }],
    tooltip: {
      crosshairs: true,
      useHTML: true,
      formatter: function() {
        var value = this.y < 25 ? 'Sem índice' : (this.y - 25);

        return this.x + '<br>' +
          'Nota: <b>' + value  + '</b>';
      },
    }
  });
});
