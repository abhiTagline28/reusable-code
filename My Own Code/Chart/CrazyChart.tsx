import React from "react";
import { Bar } from "react-chartjs-2";

/* const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            type: "line",
            label: "Line",
            borderColor: `rgba(${rand()}, ${rand()}, ${rand()},${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [13, 35, 24, 36, 11, 45, 32],
        },
        {
            type: "bar",
            label: "Approved",
            backgroundColor: `rgba(${rand()}, ${rand()}, ${rand()},${rand()})`,
            data: [23, 15, 34, 26, 21, 35, 22],
            borderColor: "white",
            borderWidth: 2,
        },
        {
            type: "bar",
            label: "Pending",
            backgroundColor: `rgba(${rand()}, ${rand()}, ${rand()},${rand()})`,
            data: [33, 25, 14, 56, 41, 25, 12],
        },
        {
            type: "bar",
            label: "Rejected",
            backgroundColor: `rgba(${rand()}, ${rand()}, ${rand()},${rand()})`,
            data: [43, 27, 12, 26, 41, 27, 19],
        },
    ],
}); */

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};
// tslint:disable-next-line:no-any
const CrazyChart = (props: any) => {
    // const [data, setData] = useState(genData());
    return (
        <>
            {/* <Bar type data={props.multiBarData} options={options} /> */}
            <Bar type data={props.multiBarData} options={options} />
        </>
    );
};

export default CrazyChart;
