<template>
  <div class="hello">
       <highcharts :constructor-type="'stockChart'" :options="chartOptions" ref="chart"></highcharts>
       <highcharts :options="chartOptions2" ref="chart2"></highcharts>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    // 차트 타입, 종류 
    // chart: {
    //   type: ''
    // },
    chartOptions: {
      //highcharts options에 바인딩 될 데이터
      title: {
          // 제목
          text: 'Weekly Average Chart'
      },
      subtitle: {
          // 부제목
          text: 'highchart sample subtitle'
      },
      /* 
        #Axes > xAxis: x축, yAxis: y축
          #tick: 축을 따라 배치되어 측정 단위를 나타내는 눈금선
          #label: formatter을 이용해서 가공된 라벨 제공 가능
              `labels: {
                  formatter: function() {
                    return .... ;
                  }
               }`
      */
      xAxis: {
          categories: [
              '1일',
              '2일',
              '3일',
              '4일',
              '5일',
              '6일',
              '7일'
          ],
          crosshair: true,
          plotBands: [{
            color: 'orange',
            from: 1,
            to: 2,
            events: {
              click: (e) => {
                console.log('click....')
              }
            }            
          }],
      },
      yAxis: {
          min: 0,
          title: {
              text: 'avarage'
          },
          plotBands: [{
            color: 'yellow',
            from: 3,
            to: 50,
            events: {
              click: (e) => {
                console.log('click....y')
              }
            },
            zIndex: -1            
          }],          
      },
      rangeSelector: {
        selected: 1
      },    
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      /*
       # series :
        차트 데이터 집합, 여러개의 series를 설정할 수 있기 때문에 배열로 관리함 
        데이터 > 1) 1차원 배열 2) 2차원 배열
          data [[5,2], [6,3]...] 이런 식으로 설정된다.
        
        # plotOptions : 모든 series의 공통 옵션 설정 > 개별 옵션 설정은 각 series에서 함
      */
      series: [{
          type: 'column',
          name: '현재상품',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

      }, {
          name: '유사상품',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

      }]
      },
      chartOptions2: {
        chart: {
            type: 'pie',
            backgroundColor: '#FCFFC5'
        },
        title: {
            text: 'Browser market share, January, 2018'
        },
        subtitle: {
            text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%'],
                showInLegend: true,
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
          backgroundColor: 'white',
          alignColumns: true,
          layout: 'vertical',
          align: 'right',
          width: '150px',
          borderRadius: '20px'
        },
        series: [ {
            name: 'Versions',
                data: [
                    1.02,
                    7.36,
                    0.35,
                    0.11,
                    0.1,
                    0.95,
                    0.15,
                    0.1,
                    0.31,
                    0.12
                ],
            size: '100%',
            /* 이렇게 설정해주면 도넛 형태 > innserSize */
            innerSize: '60%',
            id: 'versions'
        },
        {
            name: 'Versions2',
                data: [
                    1.02,
                    7.36,
                    0.35,
                    0.11,
                    0.1,
                    0.95,
                    0.15,
                    0.1,
                    0.31,
                    0.12
                ],
            size: '40%',
            /* 이렇게 설정해주면 도넛 형태 > innserSize */
            innerSize: '20%',
            id: 'versions'
        }]        
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
