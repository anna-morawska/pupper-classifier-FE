import React from "react";
import { useSelector } from "react-redux";

import { IStore } from "../../store/reducers/rootReducer";
import { Corgi, Polaroid, Chart } from "../../components";
import styles from "./Main.module.scss";

const data = [
  {
    id: "Papillon",
    label: "Papillon",
    value: 436
  },
  {
    id: "hack",
    label: "hack",
    value: 83
  },
  {
    id: "scala",
    label: "scala",
    value: 491
  },
  {
    id: "rust",
    label: "rust",
    value: 29
  },
  {
    id: "erlang",
    label: "erlang",
    value: 427
  }
];

const Main: React.FC = () => {
  const loading = useSelector((state: IStore) => state.loading);
  const error = useSelector((state: IStore) => state.error);
  const fetchedData = useSelector((state: IStore) => state.data);

  console.log(fetchedData);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          <span role="img" aria-label="dog">
            🐶
          </span>{" "}
          Pupper classifier
        </h1>
        <p>
          Use pre-trained image classification model to detect the breed of your
          doggo!
        </p>
      </header>
      <main className={styles.main}>
        <Polaroid />
        <Chart data={fetchedData.length === 0 ? data : fetchedData} />
      </main>
      <Corgi
        text={
          loading
            ? "Loading..."
            : error
            ? "Upss, something went wrong :("
            : "Woof"
        }
      />
    </div>
  );
};

export { Main };
