import React from "react";
import { useSelector } from "react-redux";

import { IStore } from "../../store/reducers/rootReducer";
import { Corgi, Polaroid, Chart } from "../../components";
import styles from "./Main.module.scss";

const categories = [
  "Papillon",
  "Pekinese",
  "Shih-tzu",
  "Blenheim Spaniel",
  "Pomeranian"
];
const data = [80, 10, 5, 3, 2];

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
        <Chart
          categories={
            fetchedData.categories.length !== 0
              ? fetchedData.categories
              : categories
          }
          data={fetchedData.data.length !== 0 ? fetchedData.data : data}
        />
      </main>
    </div>
  );
};

export { Main };
