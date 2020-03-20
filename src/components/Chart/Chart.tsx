import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ApexChart from "react-apexcharts";

import { IStore } from "../../store/reducers/rootReducer";
import styles from "./Chart.module.scss";

interface IChart {
  categories: string[];
  data: number[];
}

interface IOptions {
  colors: string[];
  chart: {
    id: string;
  };
  xaxis: {
    categories: string[];
  };
}

interface ISeries {
  name: string;
  data: number[];
}

const initialOptions = {
  colors: ["#d94a26"],
  chart: {
    id: "breeds"
  },
  xaxis: {
    categories: []
  }
};

const initialData = {
  name: "breeds",
  data: []
};

const Chart: FC<IChart> = ({ categories, data }) => {
  const [options, setOptions] = useState<IOptions>(initialOptions);
  const [series, setSeries] = useState<ISeries>(initialData);
  const loading = useSelector((state: IStore) => state.loading);
  const error = useSelector((state: IStore) => state.error);

  useEffect(() => {
    const newOptions = {
      ...options,
      xaxis: {
        categories
      }
    };

    const newSeries = {
      ...series,
      data
    };

    setOptions(newOptions);
    setSeries(newSeries);
  }, [categories, data]);

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.loading}>
        {loading === true
          ? "Loading..."
          : error
          ? "Upss, something went wrong :("
          : " "}
      </div>
      <ApexChart
        options={options}
        series={[series]}
        type="bar"
        width={430}
        height={430}
      />
    </div>
  );
};

export { Chart };
