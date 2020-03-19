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
    id: "Pekinese",
    label: "Pekinese",
    value: 83
  },
  {
    id: "Shih-tzu",
    label: "Shih-tzu",
    value: 491
  },
  {
    id: "Blenheim Spaniel",
    label: "Blenheim Spaniel",
    value: 29
  },
  {
    id: "Pomeranian",
    label: "Pomeranian",
    value: 427
  }
];

const Main: React.FC = () => {
  const fetchedData = useSelector((state: IStore) => state.data);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          Pupper classifier
          <Corgi />
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
    </div>
  );
};

export { Main };
