import React from "react";
import { Pie } from "react-chartjs-2";
// tslint:disable-next-line:no-any
const StatisticsPieChart = (props: any) => {
    return (
        <>
            <Pie
                type
                data={props.diversData}
                height={100}
                width={100}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: "Largest Cities in Massachusetts",
                        fontSize: 25,
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition,
                        labels: {
                            fontColor: "#000",
                        },
                    },

                    datalabels: {
                        display: true,
                        color: "white",
                    },
                }}
            />
        </>
    );
};

export default StatisticsPieChart;
// StatisticsPieChart;
// StatisticsChart;
