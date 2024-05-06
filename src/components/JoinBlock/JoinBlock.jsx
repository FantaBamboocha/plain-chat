import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../../hook/useAuth";
import socket from "../../socket";

import styles from "./styles.module.scss";

const JoinBlock = () => {
  const [formData, setFormData] = useState({
    roomId: "",
    userName: "",
  });

  const { login } = useAuth();

  const roomIdRef = useRef(null);
  const userNameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("joined", (users) => {
      console.log("у вас новенький", users);
    });
  }, []);

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

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (validateForm()) {
        login(formData.userName);
        navigate("/");
      }

      const response = await axios.post("http://localhost:3000/", formData);

      console.log(response.data);
      socket.emit("join", formData);
    } catch (error) {
      console.log(error);
    }
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
