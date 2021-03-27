import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

let data = [];
let data2 = [];

function appendData() {
    const rand1 = parseInt(Math.random() * (100 - 0) + 0, 10);
    const rand2 = parseInt(Math.random() * (100 - 0) + 0, 10);
    const time = parseInt(new Date().getTime() / 1000, 10);

    if (data.length >= 10) {
        data = [...data.slice(1, 10), [time, rand1]];
        data2 = [...data2.slice(1, 10), [time, rand2]];
    } else {
        data.push([time, rand1]);
        data2.push([time, rand2]);
    }
}

class MyChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
                xaxis: {
                },
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
                    data: data.slice(),
                    data2: data2.slice()
                }
            ]
        };
    }

    componentDidMount() {
        this.intervals();
    }

    intervals() {
        window.setInterval(() => {
            appendData();

            ApexCharts.exec("realtime", "updateSeries", [

                {
                    data: data
                },
                {
                    data: data2
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