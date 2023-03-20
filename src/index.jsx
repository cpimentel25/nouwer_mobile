import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";

function Nouwer() {
  const [tokenLive, setTokenLive] = useState(false);

  const userData = useSelector((state) => state.counter?.user);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_token');
      // console.log('token isAlive: ', token);
      setTokenLive(true);
      return token;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [userData]);

  // console.log('tokenLive: ', tokenLive);
  // console.log('user data: ', userData);

  return(
    <>
    {!tokenLive ? (
        <Auth />
      ) : (
        <Home logOut={() => setTokenLive()} />
      )}
    </>
  )
}

export default Nouwer;
