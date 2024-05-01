import styles from "./styles.module.scss";

const JoinBlock = () => {
  return (
    <div className={styles.joinBlock}>
      <input type="text" placeholder="Room ID" />
      <input type="text" placeholder="Username" />
      <button>Sign in</button>
    </div>
  );
};

export default JoinBlock;
