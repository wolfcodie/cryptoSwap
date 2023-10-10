import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function Volume() {
  const chart_container = useRef();

  useEffect(() => {
    const initialData = [
      { time: "2023-05-10", value: 1.3 },
      { time: "2023-05-11", value: 1.1 },
      { time: "2023-05-12", value: 1.2 },
      { time: "2023-05-13", value: 1.3 },
      { time: "2023-05-14", value: 1.7 },
      { time: "2023-05-15", value: 1.1 },
      { time: "2023-05-16", value: 0.8 },
      { time: "2023-05-17", value: 1 },
      { time: "2023-05-18", value: 1.6 },
      { time: "2023-05-19", value: 0.9 },
      { time: "2023-05-20", value: 2.3 },
      { time: "2023-05-21", value: 1.2 },
      { time: "2023-05-22", value: 1.2 },
      { time: "2023-05-23", value: 0.9 },
      { time: "2023-05-24", value: 1.2 },
      { time: "2023-05-25", value: 1.6 },
      { time: "2023-05-26", value: 2 },
      { time: "2023-05-27", value: 2.4 },
      { time: "2023-05-28", value: 2.8 },
      { time: "2023-05-29", value: 3.2 },
      { time: "2023-05-30", value: 3.6 },
      { time: "2023-05-31", value: 3.1 },
      { time: "2023-06-01", value: 2.2 },
      { time: "2023-06-02", value: 1 },
      { time: "2023-06-03", value: 2.6 },
      { time: "2023-06-04", value: 1.9 },
      { time: "2023-06-05", value: 1.6 },
      { time: "2023-06-06", value: 2 },
      { time: "2023-06-07", value: 2.6 },
      { time: "2023-06-08", value: 1.9 },
      { time: "2023-06-09", value: 2.2 },
      { time: "2023-06-10", value: 1.6 },
      { time: "2023-06-11", value: 1.5 },
      { time: "2023-06-12", value: 1 },
      { time: "2023-06-13", value: 1.6 },
      { time: "2023-06-14", value: 1 },
      { time: "2023-06-15", value: 0.9 },
      { time: "2023-06-16", value: 2 },
      { time: "2023-06-17", value: 3.3 },
      { time: "2023-06-18", value: 1.9 },
      { time: "2023-06-19", value: 2.2 },
      { time: "2023-06-20", value: 2.5 },
      { time: "2023-06-21", value: 2.7 },
      { time: "2023-06-22", value: 2.7 },
      { time: "2023-06-23", value: 2.9 },
      { time: "2023-06-24", value: 2 },
      { time: "2023-06-25", value: 3.5 },
      { time: "2023-06-26", value: 3 },
      { time: "2023-06-27", value: 3.2 },
      { time: "2023-06-28", value: 3.2 },
      { time: "2023-06-30", value: 3.2 },
      { time: "2023-07-01", value: 3.6 },
      { time: "2023-07-02", value: 3.2 },

      { time: "2023-07-03", value: 4 },
      { time: "2023-07-04", value: 4.2 },
      { time: "2023-07-05", value: 4 },
      { time: "2023-07-06", value: 3.5 },
      { time: "2023-07-07", value: 3.2 },
      { time: "2023-07-08", value: 3 },
      { time: "2023-07-09", value: 3.7 },
      { time: "2023-07-10", value: 3.2 },

      { time: "2023-07-11", value: 4 },
      { time: "2023-07-12", value: 3.2 },
      { time: "2023-07-13", value: 2.2 },
      { time: "2023-07-14", value: 3.5 },
      { time: "2023-07-15", value: 3.2 },
      { time: "2023-07-16", value: 4 },
      { time: "2023-07-17", value: 3.7 },
      { time: "2023-07-18", value: 4.2 },
      { time: "2023-07-19", value: 3.6 },
      { time: "2023-07-20", value: 3.2 },

      { time: "2023-07-21", value: 4 },
      { time: "2023-07-22", value: 3.5 },
      { time: "2023-07-23", value: 3.7 },
      { time: "2023-07-24", value: 3.5 },
      { time: "2023-07-25", value: 3.2 },
      { time: "2023-07-26", value: 3 },
      { time: "2023-07-27", value: 3.7 },
      { time: "2023-07-28", value: 2.2 },
      { time: "2023-07-29", value: 3 },
      { time: "2023-07-30", value: 3.2 },
      { time: "2023-07-31", value: 2.9 },
      { time: "2023-08-01", value: 3.5 },
      { time: "2023-08-02", value: 3.2 },
      { time: "2023-08-03", value: 4.2 },
      { time: "2023-08-04", value: 3.7 },
      { time: "2023-08-05", value: 4.2 },
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
      <h1>Volume 🎈</h1>
      <div className="volumes">
        <article>
          <h2>$2,023,653</h2>
          <p>Past 24 Hours</p>
        </article>
        <article>
          <h2>$10,199,109</h2>
          <p>Past Week</p>
        </article>
        <article>
          <h2>$38,328,008</h2>
          <p>Past Month</p>
        </article>
        <article>
          <h2>$38,328,008</h2>
          <p>Past Year</p>
        </article>
        <article>
          <h2>$994,109,679</h2>
          <p>All Time</p>
        </article>
      </div>
      <div ref={chart_container} className="tv-lightweight-charts "></div>
    </section>
  );
}

export default Volume;
