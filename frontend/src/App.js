import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import React, { useEffect } from "react";
import Quora from "./components/Quora";
import Login from "./components/auth/Login";
import { login, selectUser } from "./feature/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


useEffect(()=>{
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      dispatch(
        login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid,
        })
      );
      console.log("AuthUser", authUser);
    }
  });
}, [dispatch]);



  return( <div className="App">
    
    {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;