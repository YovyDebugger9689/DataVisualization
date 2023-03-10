//柱状图模块 （柱状图）（左一）
(function () {
    // new一个DOM容器，容器是.bar 下的 .chart
    var myChart = echarts.init(document.querySelector('.bar1 .chart'));

    // 配置项
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            }
        },
        // 修改图表大小
        grid: {
            left: '0%',
            top: "10px",
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改X轴刻度
                axisLabel: {
                    // 修改X轴刻度的字体颜色
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.16rem",
                    interval: 0,
                },
                // 取消X轴的垂直的灰色线
                axisTick: {
                    show: false,
                },
                // 取消与X轴平行的灰色线
                axisLine: {
                    show: false,
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                // 修改Y轴刻度
                axisLabel: {
                    // 修改X轴刻度的字体颜色
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "10px",
                },
                // 给Y轴添加一个与其平行的线条
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.1)",
                    },
                },
                // 设置Y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.1)",
                    },
                },
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '40%',// 柱子的粗壮程度
                data: [190, 52, 200, 834, 390, 930, 320],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 1.9,
                },
            }
        ]
    };

    // 把配置项的东西给实例对象
    myChart.setOption(option);
    // 让图表根据窗口的大小变化而自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 为条形图（右一）设置颜色参数
var myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6', 'blue'];
//横向柱状图（条形图）（右一）
(function () {
    // new一个DOM容器，容器是第三列的.bar 下的 .chart
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));

    // 配置项
    var option = {
        title: {
            // text: 'World Population'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        legend: {},
        grid: {
            left: '28%',
            top: '10%',
            right: '16%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            // type: 'value',
            // boundaryGap: [0, 0.01]
            show: false,//X轴不显示刻度数值
        },
        yAxis: [
            //左边的Y轴
            {
                type: 'category',
                inverse: true,//将数组的值按顺序（index从小到大）取
                data: ['World', 'Indonesia', 'USA', 'India', 'China', 'Brazil'],
                //Y轴的线
                axisLine: {
                    show: false,
                },
                //Y轴的刻度线
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: '0.3rem',
                    color: "#fff",
                }
            },
            //右边的Y轴
            {
                inverse: true,//将数组的值按顺序（index从小到大）取
                data: [706, 50, 80, 99, 503, 666],
                //Y轴的线
                axisLine: {
                    show: false,
                },
                //Y轴的刻度线
                axisTick: {
                    show: false,
                },
                //将刻度标签设置为白色
                axisLabel: {
                    fontSize: '0.3rem',
                    color: "#fff",
                },
            },
        ],
        series: [
            {
                // name: '2012',
                type: 'bar',//里面的条条
                data: [90, 55, 35, 56, 76, 65],
                yAxisIndex: 0,//将条条压在下面
                itemStyle: {
                    //改成圆角的条状
                    barBorderRadius: 25,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    },
                },
                //柱子间的距离
                barCategoryGap: 80,
                //柱子的宽度
                barWidth: 8,
                //显示柱子内的文字
                label: {
                    show: true,
                    posiition: "inside",
                    formatter: "{c}%",
                    color: "#fff",//更改字体颜色
                    fontSize: '0.3rem',
                },
            },
            {
                // name: '2011',
                type: 'bar',//外面的框框
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [100, 100, 100, 100, 100, 100],
                yAxisIndex: 1,//将框框放在上面
            },
        ]
    };

    // 把配置项的东西给实例对象
    myChart.setOption(option);
    // 让图表根据窗口的大小变化而自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 折线图（左二）
(function () {
    var yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    // 创建DOM容器
    var myChart = echarts.init(document.querySelector('.line1 .chart'));

    // 配置项
    var option = {
        color: ['#00f2f1', '#ed3f35'],//修改两条线的颜色
        title: {
            // text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //如果series对象有name值，则Legend可以不用写data
            data: ['Email', 'Union Ads'],
            //修改顶部图例图片的颜色
            textStyle: {
                fontSize: '0.3rem',
                color: '#4c9bfd',
            },
            // right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '6%',
            bottom: '5%',
            show: true,//边框
            borderColor: '#012f4a',//边框颜色
            containLabel: true,//边框文字和刻度
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false,//去除刻度
            },
            axisLabel: {
                color: '#4c9bfd',//文本颜色
                fontSize: '11',
            },
            axisLine: {
                show: false,//去除轴线
            },
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,//去除刻度
            },
            axisLabel: {
                color: '#4c9bfd',//文本颜色
            },
            axisLine: {
                show: false,//去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                },
                // show: false,//去除与X轴平行的、在网格里的线
            },
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                smooth: true,//让直线有弧度
                data: yearData[0].data[0],
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                smooth: true,//让直线有弧度
                data: yearData[0].data[1],
            },
            // {
            //     name: 'Video Ads',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [150, 232, 201, 154, 190, 330, 410]
            // },
            // {
            //     name: 'Direct',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [320, 332, 301, 334, 390, 330, 320]
            // },
            // {
            //     name: 'Search Engine',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [820, 932, 901, 934, 1290, 1330, 1320]
            // },
        ]
    };

    // 把配置项的东西给实例对象
    myChart.setOption(option);

    // 让图表根据窗口的大小变化而自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    //点击链接的切换效果
    $('.line1 h2').on("click", "a", function () {
        var arr = yearData[$(this).index()];
        option.series[0].data = arr.data[0];
        option.series[1].data = arr.data[1];

        //当数据变化之后需要重新对页面进行渲染
        myChart.setOption(option);
    });
})();

// 波浪线图（右二）
(function () {
    // 创建DOM容器s
    var myChart = echarts.init(document.querySelector('.line2 .chart'));

    // 配置项
    var option = option = {
        title: {
            // text: 'Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //   type: 'cross',
            //   label: {
            //     backgroundColor: '#6a7985'
            //   }
            // }
        },
        legend: {
            data: ['Direct', 'Search Engine'],
            textStyle: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.3rem",
            }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: '12',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)",
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12",
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                    },
                },
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'line',
                // stack: 'Total',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.9)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle",
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(211,220,107,0.1)",
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: "2",
                },
            },
            {
                name: 'Search Engine',
                type: 'line',
                // stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.6)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.6,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle",
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    color: "#00D887",
                    borderColor: "rgba(211,220,107,0.1)",
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
                smooth: true,
                lineStyle: {
                    color: "#00D887",
                    width: "2",
                },
            },
        ]
    };

    // 为此对象布置option
    myChart.setOption(option);

    // 让图表根据窗口的大小变化而自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 扇形图（左三）
(function () {
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));

    var option = option = {
        // color: [
        //     "#065aab",
        //     "#066eab",
        //     "#0682ab",
        //     "#0696ab",
        //     "#06a0ab",
        // ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '0',
            left: 'center',
            // left: 'center',
            // bottom: '0',
            // itemWidth: "15",
            // itemHeight: "7",
            // data: ['Search', 'Direct', 'Email', 'Union', 'Video'],
            textStyle: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "12",
            },
        },
        series: [
            {
                name: '使用情况',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: "0.23rem",
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 1048, name: 'Search' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union' },
                    { value: 300, name: 'Video' }
                ]
            }
        ]
    };

    // 把配置项的东西给实例对象
    myChart.setOption(option);
    // 让图表根据窗口的大小变化而自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 扇形图（右三）
(function () {
    //创建DOM容器
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));

    //配置项
    var option = option = {
        // title: {
        //   text: 'Nightingale Chart',
        //   subtext: 'Fake Data',
        //   left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: '0',
            textStyle: {
                color: '#fff',
            },
            itemWidth: 10,
            itemHeight: 10,
            // data: [
            //     'rose1',
            //     'rose2',
            //     'rose3',
            //     'rose4',
            //     'rose5',
            //     'rose6',
            //     'rose7',
            //     'rose8'
            // ]
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        series: [
            // {
            //   name: 'Radius Mode',//半径模式
            //   type: 'pie',
            //   radius: [20, 140],
            //   center: ['25%', '50%'],
            //   roseType: 'radius',
            //   itemStyle: {
            //     borderRadius: 5
            //   },
            //   label: {
            //     show: false
            //   },
            //   emphasis: {
            //     label: {
            //       show: true
            //     }
            //   },
            //   data: [
            //     { value: 40, name: 'rose 1' },
            //     { value: 33, name: 'rose 2' },
            //     { value: 28, name: 'rose 3' },
            //     { value: 22, name: 'rose 4' },
            //     { value: 20, name: 'rose 5' },
            //     { value: 15, name: 'rose 6' },
            //     { value: 12, name: 'rose 7' },
            //     { value: 10, name: 'rose 8' }
            //   ]
            // },
            {
                name: 'Area Mode',//面积模式
                type: 'pie',
                radius: ['20%', '80%'],
                center: ['50%', '45%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: '0.2rem',
                },
                labelLine: {
                    length: '0.3rem',
                    length2: '30',
                },
                data: [
                    { value: 30, name: '北京' },
                    { value: 28, name: '深圳' },
                    { value: 26, name: '广州' },
                    { value: 24, name: '上海' },
                    { value: 30, name: '杭州' },
                    { value: 20, name: '南京' },
                    // { value: 18, name: 'rose 7' },
                    // { value: 16, name: 'rose 8' },
                ],
            },
        ]
    };

    //为此DOM容器布置配置项
    myChart.setOption(option);
})();