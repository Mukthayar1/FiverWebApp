import React, { useEffect } from "react";
import MainRoutes from '../src/routes'
import useAuth from '../src/util/Contex/useAuth';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "./util/firebase";
// import './assets2/style/app.scss'
import './assets2/fontawesome/css/all.css'


function App() {
  let { setAuth, auth } = useAuth()
  let UserSessionId = localStorage.getItem("Uid")

  useEffect(() => {
    // localStorage.removeItem('Uid')
    // localStorage.removeItem('isLogged')
    if (UserSessionId) {
      const unsub = onSnapshot(doc(db, "Users", UserSessionId), (doc) => {
        setAuth(doc.data())
      })
    }

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainRoutes />
  );
}

export default App;
