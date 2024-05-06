// import { io } from "socket.io-client";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./hoc/AuthProvider";
import Router from "./routes/Router";

import styles from "./App.module.scss";
// const socket = io("http://localhost:3000");

function App() {
  return (
    <div className={styles.appWrapper}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
