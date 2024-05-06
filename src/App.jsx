// import { io } from "socket.io-client";
// const socket = io("http://localhost:3000");

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./hoc/AuthProvider";
import Router from "./routes/Router";

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className={styles.appWrapper}>
          <Router />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
