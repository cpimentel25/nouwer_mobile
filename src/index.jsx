import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoster } from "./features/counter/counterSlice";
import { View } from "react-native";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";

function Nouwer() {
  const [tokenLive, setTokenLive] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.counter?.user);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_token');
      setTokenLive(true);
      await dispatch(fetchRoster());
      return token;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [userData]);

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
