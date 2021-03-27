import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import styled from "styled-components"

let data = [];
let int = 1;
let arrayOfNums;

function appendData() {
    let newValue;
    if(arrayOfNums == null || arrayOfNums[arrayOfNums.length - 1] == null){
        newValue = 0
        // console.log("I got null, new value: " + newValue)
    } else {
        newValue = parseInt( arrayOfNums[arrayOfNums.length - 1] * 100)
        // console.log("I didn't got null, new value: " + newValue)
    }

    const time =  int++
    // console.log(time)

    if (data.length >= 10) {
        data = [...data.slice(1, 10), [time, newValue]];
    } else {
        data.push([time, newValue]);
        // console.log("data: " + data)
    }
}




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
            // console.log("Current array of nums: " + arrayOfNums)
            ApexCharts.exec("realtime", "updateSeries", [
                {
                    data: data
                }
            ]);
        }, 1000);
    }

    render() {
        return (
            <>
            <Title>
                WYKRES POSTURY
            </Title>

            <ChartBox>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height="500px"
                    width="100%"
                    margin="0px"
                />
            </ChartBox>
            </>
        );
    }
}

export default MyChart;

const Title = styled.h3`
    text-align: left;
    font: normal normal bold 16px/20px Microsoft YaHei UI;
    letter-spacing: 0px;
    color: #676767;
    opacity: 1; 
    margin:10%;
    margin-top:5%;
    font-size: 2rem;
    padding-bottom:20px;
    border-bottom: 4px solid #7C7C7C ;
`

const ChartBox = styled.div`
    padding:10%;
    padding-top:0px;
`

function getState() {
    return {
        options: {

            colors: ['#9DC54A'],
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
                align: "left",
                size: "2px"
            },
            markers: {
                size: 0
            },
            xaxis: {
                title: {
                    text: "Czas"
                }
            },
            yaxis: [
                {
                    title: {
                        text: "Czy byłeś wyprostowany?"
                    }
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