import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";
import Loading from "../components/UI/Loading";
import { authenticate } from "../store/actions/auth";

const Start = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("AuthRegister");
        return;
      }
      const data = JSON.parse(userData);
      const { token, userId, expiresIn } = data;

      const expDate = new Date(expiresIn);

      if (expDate < new Date() || !token || !userId) {
        props.navigation.navigate("AuthRegister");
        return;
      }

      const newExpTime = expDate.getTime() - new Date().getTime();
      props.navigation.navigate("Shop");

      dispatch(authenticate(token, userId, newExpTime));
    };
    tryLogin();
  }, []);

  return <Loading />;
};

export default Start;
