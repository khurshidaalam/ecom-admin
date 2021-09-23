import Chart1 from "./Chart1";
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

const ChartData = [
    {
        id: 1,
        about: "sells graph",
        amount: `$5,234`,
        chart: <Chart1 />,

    },
    {
        id: 2,
        about: "total visitors",
        amount: `10,200`,
        chart: <Chart2 />,

    },
    {
        id: 3,
        about: "new users",
        amount: `8,250`,
        chart: <Chart3 />,

    },
    {
        id: 4,
        about: "total orders",
        amount: "25,234",
        chart: <Chart4 />,

    }
]

export default ChartData;