
// import './App.css';
import react, { useContext, useEffect } from 'react';
import Routing from './Router.jsx';
import { DataContext } from "./Componets/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";



function App() {


  const [{ user }, dispatch] = useContext(DataContext);  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);





  return (
  <Routing/>
  
  );
}

export default App;
