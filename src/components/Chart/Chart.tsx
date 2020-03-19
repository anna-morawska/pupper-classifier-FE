import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ResponsivePie, PieDatum, PieDatumWithColor } from "@nivo/pie";

import { IStore } from "../../store/reducers/rootReducer";

import styles from "./Chart.module.scss";

interface IChart {
  data: PieDatum[];
}

const colors = [
  "hsl(344, 70%, 50%)",
  "hsl(175, 70%, 50%)",
  "hsl(267, 70%, 50%)",
  "hsl(12, 70%, 50%)",
  "hsl(265, 70%, 50%)"
];

const Chart: FC<IChart> = ({ data }) => {
  const [chartData, setChartData] = useState<PieDatumWithColor[]>([]);
  const loading = useSelector((state: IStore) => state.loading);
  const error = useSelector((state: IStore) => state.error);

  useEffect(() => {
    const chartData = data.map((dogStat, index) => ({
      ...dogStat,
      color: colors[index]
    }));
    setChartData(chartData.slice(0, 5));
  }, [data]);

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.loading}>
        {loading === true
          ? "Loading..."
          : error
          ? "Upss, something went wrong :("
          : " "}
      </div>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "ruby"
            },
            id: "dots"
          },
          {
            match: {
              id: "c"
            },
            id: "dots"
          },
          {
            match: {
              id: "go"
            },
            id: "dots"
          },
          {
            match: {
              id: "python"
            },
            id: "dots"
          },
          {
            match: {
              id: "scala"
            },
            id: "lines"
          },
          {
            match: {
              id: "lisp"
            },
            id: "lines"
          },
          {
            match: {
              id: "elixir"
            },
            id: "lines"
          },
          {
            match: {
              id: "javascript"
            },
            id: "lines"
          }
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000"
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export { Chart };
