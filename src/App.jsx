import JoinBlock from "./components/JoinBlock/JoinBlock";

import styles from "./App.module.scss";
// const socket = io("http://localhost:3000");

function App() {
  return (
    <div className={styles.appWrapper}>
      <JoinBlock />
    </div>
  );
}

export default App;
