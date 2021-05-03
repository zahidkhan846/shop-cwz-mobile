import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Heading from "../../components/UI/Heading";
import Link from "../../components/UI/Link";
import Paragraph from "../../components/UI/Paragraph";
import { signinUserAction } from "../../store/actions/auth";
import { styles } from "../../styles/authStyles";

const AuthLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      await dispatch(signinUserAction(email, password));
      setLoading(false);
      props.navigation.navigate("Shop");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (error) {
    Alert.alert("An Error Occurred!", error, [{ text: "Okey" }]);
  }

  return (
    <LinearGradient
      colors={["#9d4edd", "#f72585"]}
      style={{ height: "100%", width: "100%" }}
    >
      <Card>
        <ScrollView>
          <View style={styles.content}>
            <Heading style={styles.heading}>Type your info...</Heading>
            {error ? <Text style={styles.errTextLogin}>{error}</Text> : null}

            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Email</Paragraph>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
            </View>

            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Passowrd</Paragraph>
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="black" />
            ) : (
              <Button
                onPress={handleSubmit}
                btnStyle={{ ...styles.btn, ...styles.loginBtn }}
                iName="log-in-outline"
              >
                Login
              </Button>
            )}

            <View style={styles.login}>
              <Paragraph style={styles.loginText}>
                Don't have an account click here
              </Paragraph>
              <Link
                text="Register"
                style={styles.link}
                onPress={() => props.navigation.navigate("AuthRegister")}
              />
            </View>
          </View>
        </ScrollView>
      </Card>
    </LinearGradient>
  );
};

export default AuthLogin;

AuthLogin.navigationOptions = (props) => {
  return {
    headerTitle: "Login",
  };
};
