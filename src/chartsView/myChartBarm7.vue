<template>

  <div id="myChartBarm7" :style="{width: '200px', height: '180px'}"></div>

</template>

<script>
  export default {
    name: "myChartBarm7",
    components: {
    },
    data(){
      return{
        data:[],
        title:[],
        array:[],
        list:[],
        list1:[]
      }
    },

    /* mounted(){
      this.init();
    }, */
    created(){
      this.$http.post(this.GLOBAL.Ip+"/duns/findVpn").then(
             function(res){


               for(var i =0;i<res.data.length;i++){
                this.list.push(res.data[i].county)
                this.list1.push(res.data[i].cout)
               }
 this.init();




             },
             function(err){

             }
       )

    },

    methods: {

      init(){
        /*分成两个集合*/
        this.data = [];
        this.title = [];
        for(var i =0;i<this.array.length; i++){
          this.data.push(this.array[i].count)
          this.title.push(this.array[i].title)
        }

        this.drawLine();
      },

      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChartBarm7 = this.$echarts.init(document.getElementById('myChartBarm7'))
        // 绘制图表
        myChartBarm7.setOption({
    color: ['#B9398E'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    },

    xAxis: [
        {
            show: false,
            type: 'category',
            data: this.list,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white',  //更改坐标轴文字颜色
                    fontSize : 12      //更改坐标轴文字大小
                }
            },
        }
    ],
    yAxis: [

        {
          show: false,
            type: 'value',
            axisLabel:{
                formatter:'{value} %',
                show: true,
                textStyle: {
                  show:false,
                    color: 'white',  //更改坐标轴文字颜色
                    fontSize : 12      //更改坐标轴文字大小
                }
            }
        }
    ],
    series: [
        {
            name: 'VPN用户数',
            type: 'bar',
            barWidth: '40%',
            data: this.list1,
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    label: {
                       show: false,		//开启显示


                   }
                }
            }
        }
    ]
},true);

        },
      }
    }
</script>



<style>
#myChartBarm7{
  padding-top: 0px;
}
</style>
