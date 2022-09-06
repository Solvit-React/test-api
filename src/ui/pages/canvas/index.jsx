import { useEffect } from "react";
import "./style.css";



export const CanvasDraw = ({data}) =>{
    /**
     * @type {HTMLCanvasElement}
     */
    let paperElt;
    useEffect(()=>{
        
        paperElt = document.querySelector("#paper");
        const pen = paperElt.getContext("2d");
        draw(pen, paperElt);
    });
    /**
     * 
     * @param {CanvasRenderingContext2D} pen 
     * @param {HTMLCanvasElement} canvas
     */
    const draw = (pen, canvas) => {
        const {width, height} = canvas;
        pen.fillStyle = "#fff";
        pen.fillRect(0,0, width, height);
        pen.strokeStyle = "red";
        // drawYLabel(20000,100000, 20000);
        const normalizedData = normalize(data);
        const {date, sales} = normalizedData[0];
        pen.moveTo(date, sales);
        pen.beginPath();
        normalizedData.forEach((point)=>{
            pen.lineTo(point.date, point.sales);
        });
        pen.stroke();

        
    };
    /**
     * 
     * @param {{date: number, sales: number}[]} data 
     * @returns 
     */
    const normalize = (data) =>{

        const normalizedData = data.map(record=>{
            return {
                date: Math.floor(normFormula(record.date, 10, 24, 400)),
                sales: Math.floor(normFormula(record.sales, 20000, 100000, 150, true )),
            };
        });
        return normalizedData;
    }
    const normFormula = (x, min, max, scale, flip)=>{
        const a =  ((x - min)/(max - min));
        return flip ? (1 - a) * scale : a * scale;
    };

    return <div className="chart-container">
        <canvas id="paper"  height="150" width="400"> </canvas>
    </div>
}