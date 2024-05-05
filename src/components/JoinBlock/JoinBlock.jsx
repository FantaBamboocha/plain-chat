import { useState, useRef } from "react";
import axios from "axios";

import styles from "./styles.module.scss";
// import socket from "../../socket";

const JoinBlock = () => {
  const [formData, setFormData] = useState({
    roomId: "",
    userName: "",
  });

  const roomIdRef = useRef(null);
  const userNameRef = useRef(null);

  const onChange = ({ target }) => {
    const { name, value } = target;

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.roomId || !formData.userName) {
      const message =
        !formData.roomId && !formData.userName
          ? "Нужно указать название комнаты и имя, пёс"
          : !formData.roomId
          ? "Укажи название комнаты, пёс"
          : "А ну-ка укажи имя, пёс";
      alert(message);
      if (!formData.roomId) {
        roomIdRef.current.focus();
      } else {
        userNameRef.current.focus();
      }
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }

    axios.post("http://localhost:3000/", formData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className={styles.joinBlock}>
      <form onSubmit={onSubmit}>
        <input
          ref={roomIdRef}
          type="text"
          name="roomId"
          placeholder="Room ID"
          value={formData.roomId}
          onChange={onChange}
        />
        <input
          ref={userNameRef}
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={onChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default JoinBlock;
