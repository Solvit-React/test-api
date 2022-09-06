import "./app.css";
import { CanvasDraw } from "./pages/canvas";
const data = [
    {date: 10, sales: 42000},
    {date: 11, sales: 42000},
    {date: 12, sales: 62000},
    {date: 13, sales: 42000},
    {date: 14, sales: 46000},
    {date: 15, sales: 45000},
    {date: 16, sales: 82000},
    {date: 17, sales: 43000},
    {date: 18, sales: 43000},
    {date: 19, sales: 64000},
    {date: 20, sales: 62000},
    {date: 21, sales: 41000},
    {date: 22, sales: 61000},
    {date: 23, sales: 43000},
    {date: 24, sales: 60000},
];
export const App = () => {
    
    return <>
        <CanvasDraw data={data} />
    </>
}