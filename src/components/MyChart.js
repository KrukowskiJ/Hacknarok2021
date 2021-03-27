import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

let data = [];

function appendData() {
    let newValue;
    if(arrayOfNums == null || arrayOfNums[arrayOfNums.length - 1] == null){
        newValue = 0
        console.log("I got null, new value: " + newValue)
    } else {
        newValue = arrayOfNums[arrayOfNums.length - 1] * 100
        console.log("I didn't got null, new value: " + newValue)
    }

    const time = parseInt(new Date().getTime() / 1000, 10);

    if (data.length >= 10) {
        data = [...data.slice(1, 10), [time, newValue]];
    } else {
        data.push([time, newValue]);
        // console.log("data: " + data)
    }
}


let arrayOfNums;

class MyChart extends React.Component {


    constructor(props) {
        super(props);
        this.state = getState();
        arrayOfNums = props.arrayOfNums;
    }

    componentDidMount() {
        this.intervals();
    }

    intervals() {
        window.setInterval(() => {
            appendData();
            console.log("Current array of nums: " + arrayOfNums)
            ApexCharts.exec("realtime", "updateSeries", [
                {
                    data: data
                }
            ]);
        }, 1000);
    }

    render() {
        return (
            <div id="chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height="350"
                    width="500"
                />
            </div>
        );
    }
}

export default MyChart;


function getState() {
    return {
        options: {
            chart: {
                id: "realtime",
                animations: {
                    enabled: true,
                    easing: "linear",
                    dynamicAnimation: {
                        enabled: true,
                        speed: 300
                    }
                },
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },

            title: {
                text: "Dynamic Updating Chart",
                align: "left"
            },
            markers: {
                size: 0
            },
            xaxis: {},
            yaxis: [
                {
                    title: {
                        text: "rand1"
                    }
                },
                {
                    title: {
                        text: "rand2"
                    },
                    opposite: true
                }
            ],
            legend: {
                show: true
            }
        },
        series: [
            {
                data: data.slice()
            }
        ]
    };
}