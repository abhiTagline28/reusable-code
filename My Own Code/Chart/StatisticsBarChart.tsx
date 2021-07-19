import React from "react";
import { Bar } from "react-chartjs-2";
// tslint:disable-next-line:no-any
const StatisticsBarChart = (props: any) => {
    return (
        <div>
            <Bar
                type
                data={props.newDriversData}
                options={{
                    /* title: {
                        display: props.displayTitle,
                        text: "Largest Cities in Massachusetts",
                        fontSize: 25,
                    }, */
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition,
                        labels: {
                            fontColor: "#000",
                        },
                    },
                }}
            />
        </div>
    );
};

export default StatisticsBarChart;


/*
import CrazyChart from "./CrazyChart";

const [orderStatusData, setOrderStatusData] = useState({
        labels: [],
        datasets: [
            {
                type: "bar",
                label: "Approved",
                backgroundColor: `rgba(0,128,0,0.8)`,
                data: [],
            },
            {
                type: "bar",
                label: "Pending",
                backgroundColor: `rgba(255,255,0,0.6)`,
                data: [],
            },
            {
                type: "bar",
                label: "Rejected",
                backgroundColor: `rgba(255,0,0,0.8)`,
                data: [],
            },
        ],
    });

    useEffect(()=>{
        data && // tslint:disable-next-line:no-any
            data.getDashboard.totalDriverByStatus.map((item: any) => {
                TOTAL_ORDERS_BY_STATUS_LABEL.push(item.date);
                TOTAL_ORDERS_BY_STATUS_APPROVED.push(item.approved);
                TOTAL_ORDERS_BY_STATUS_PENDING.push(item.pending);
                TOTAL_ORDERS_BY_STATUS_REJECTED.push(item.rejected);
            });
        const CloneOrderByStatus = { ...orderStatusData };
        CloneOrderByStatus.labels = TOTAL_ORDERS_BY_STATUS_LABEL;
        CloneOrderByStatus.datasets[0].data = TOTAL_ORDERS_BY_STATUS_APPROVED;
        CloneOrderByStatus.datasets[1].data = TOTAL_ORDERS_BY_STATUS_PENDING;
        CloneOrderByStatus.datasets[2].data = TOTAL_ORDERS_BY_STATUS_REJECTED;
        setOrderStatusData(CloneOrderByStatus);
    },[data])

<CrazyChart multiBarData={orderStatusData} />


*/
