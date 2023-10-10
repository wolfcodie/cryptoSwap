import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function Price() {
  const chart_container = useRef();

  useEffect(() => {
    const initialData = [
      { time: "2023-05-10", value: 0.11 },
      { time: "2023-05-11", value: 0.13 },
      { time: "2023-05-12", value: 0.13 },
      { time: "2023-05-13", value: 0.1 },
      { time: "2023-05-14", value: 0.13 },
      { time: "2023-05-15", value: 0.12 },
      { time: "2023-05-16", value: 0.11 },
      { time: "2023-05-17", value: 0.12 },
      { time: "2023-05-18", value: 0.14 },
      { time: "2023-05-19", value: 0.13 },
      { time: "2023-05-20", value: 0.12 },
      { time: "2023-05-21", value: 0.11 },
      { time: "2023-05-22", value: 0.12 },
      { time: "2023-05-23", value: 0.12 },
      { time: "2023-05-24", value: 0.12 },
      { time: "2023-05-25", value: 0.11 },
      { time: "2023-05-26", value: 0.11 },
      { time: "2023-05-27", value: 0.11 },
      { time: "2023-05-28", value: 0.12 },
      { time: "2023-05-29", value: 0.13 },
      { time: "2023-05-30", value: 0.132 },
      { time: "2023-05-31", value: 0.13 },
      { time: "2023-06-01", value: 0.121 },
      { time: "2023-06-02", value: 0.12 },
      { time: "2023-06-03", value: 0.13 },
      { time: "2023-06-04", value: 0.13 },
      { time: "2023-06-05", value: 0.14 },
      { time: "2023-06-06", value: 0.14 },
      { time: "2023-06-07", value: 0.12 },
      { time: "2023-06-08", value: 0.11 },
      { time: "2023-06-09", value: 0.12 },
      { time: "2023-06-10", value: 0.13 },
      { time: "2023-06-11", value: 0.12 },
      { time: "2023-06-12", value: 0.13 },
      { time: "2023-06-13", value: 0.12 },
      { time: "2023-06-14", value: 0.13 },
      { time: "2023-06-15", value: 0.13 },
      { time: "2023-06-16", value: 0.12 },
      { time: "2023-06-17", value: 0.13 },
      { time: "2023-06-18", value: 0.11 },
      { time: "2023-06-19", value: 0.121 },
      { time: "2023-06-20", value: 0.11 },
      { time: "2023-06-21", value: 0.12 },
      { time: "2023-06-22", value: 0.13 },
      { time: "2023-06-23", value: 0.14 },
      { time: "2023-06-24", value: 0.13 },
      { time: "2023-06-25", value: 0.12 },
      { time: "2023-06-26", value: 0.11 },
      { time: "2023-06-27", value: 0.12 },
      { time: "2023-06-28", value: 0.12 },
      { time: "2023-06-30", value: 0.13 },
      { time: "2023-07-01", value: 0.121 },
      { time: "2023-07-02", value: 0.12 },

      { time: "2023-07-03", value: 0.13 },
      { time: "2023-07-04", value: 0.13 },
      { time: "2023-07-05", value: 0.12 },
      { time: "2023-07-06", value: 0.11 },
      { time: "2023-07-07", value: 0.121 },
      { time: "2023-07-08", value: 0.122 },
      { time: "2023-07-09", value: 0.1213 },
      { time: "2023-07-10", value: 0.12321 },

      { time: "2023-07-11", value: 0.132 },
      { time: "2023-07-12", value: 0.1321 },
      { time: "2023-07-13", value: 0.11132 },
      { time: "2023-07-14", value: 0.134 },
      { time: "2023-07-15", value: 0.134 },
      { time: "2023-07-16", value: 0.1431 },
      { time: "2023-07-17", value: 0.112 },
      { time: "2023-07-18", value: 0.11213 },
      { time: "2023-07-19", value: 0.1113 },
      { time: "2023-07-20", value: 0.11312 },

      { time: "2023-07-21", value: 0.1121 },
      { time: "2023-07-22", value: 0.11142 },
      { time: "2023-07-23", value: 0.11123 },
      { time: "2023-07-24", value: 0.112 },
      { time: "2023-07-25", value: 0.111 },
      { time: "2023-07-26", value: 0.112 },
      { time: "2023-07-27", value: 0.12 },
      { time: "2023-07-28", value: 0.13 },
      { time: "2023-07-29", value: 0.112 },
      { time: "2023-07-30", value: 0.122 },
      { time: "2023-07-31", value: 0.121 },
      { time: "2023-08-01", value: 0.141 },
      { time: "2023-08-02", value: 0.13 },
      { time: "2023-08-03", value: 0.14 },
      { time: "2023-08-04", value: 0.14 },
      { time: "2023-08-05", value: 0.13 },
    ];
    const chart = createChart(chart_container.current, {
      layout: {
        textColor: "white",
        background: { type: ColorType.solid, color: "transparent" },
        color: { type: ColorType.solid, color: "white" },
      },
      width: chart_container.current.clientWidth,
      height: 400,
      grid: {
        vertLines: false,
        horzLines: false,
      },
      priceFormat: {
        color: "#fff", // Set the time color to white
      },
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#5DB9F5",
      topColor: "#3C7AA1",
      bottomColor: "#152128",
    });
    newSeries.setData(initialData);
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <section className="Volume">
      <h1>XAI Price</h1>

      <div ref={chart_container} className="tv-lightweight-charts "></div>
    </section>
  );
}

export default Price;
