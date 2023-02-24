<template>

  <div id="myChartBarm8" :style="{width: '105px', height: '110px'}"></div>

</template>

<script>
  export default {
    name: "myChartBarm8",
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
 this.$http.post(this.GLOBAL.Ip+"/duns/ErrorByType").then(
             function(res){


               for(var i =0;i<res.data.length;i++){
                this.list.push(res.data[i].name)
                this.list1.push(res.data[i].nums)
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
        let myChartBarm8 = this.$echarts.init(document.getElementById('myChartBarm8'))
        // 绘制图表
        var getname = this.list
        var getvalue = this.list1
        var data = [];
        for (var i = 0; i < getname.length; i++) {
            data.push({
                name: getname[i],
                value: getvalue[i]
            })
        }
        var colorList = ['#572569', '#B6388D', '#442162', '#9B3382', '#572569'];
        var rich = {


            hr: {
                width: '100%',
                height: 0,
            },

        }
        myChartBarm8.setOption({

    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show:false},
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '：' + params.value + '条'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#ffffff',
                borderWidth: 0.5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['60%', '75%'],
        center: ["50%", "50%"],

        label: {
            normal: {
                show: false,
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },

            }
        },
        data: data
    }, {
        itemStyle: {
            normal: {
                borderColor: '#ffffff',
                borderWidth: 0.5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['60%', '75%'],
        center: ["50%", "50%"],
        label:{
          show:false
        },
        labelLine: {
          show: false,
            normal: {
                length: 10,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },

        data: data,
        z: -1
    }, {
        itemStyle: {
            normal: {
                borderColor: '#ffffff',
                borderWidth: 0.5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['60%', '75%'],
        center: ["50%", "50%"],
        label:{
          show:false
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },

        data: data,
        z: -1
    }]

},true);

        },
      }
    }
</script>



<style>
#myChartBarm8{
  padding-top: 0px;
}
</style>
