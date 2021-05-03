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
import validator from "validator";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Heading from "../../components/UI/Heading";
import Link from "../../components/UI/Link";
import Paragraph from "../../components/UI/Paragraph";
import { signupUserAction } from "../../store/actions/auth";
import { styles } from "../../styles/authStyles";

const AuthScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setError("");
    setPasswordError("");
    setEmailError("");
    setLoading(true);
    if (password !== confirmPassowrd) {
      setPasswordError("Password did not match!");
      return;
    }

    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      setEmailError("Invalid email address.");
    }
    try {
      await dispatch(signupUserAction(email, password));
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

            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Email</Paragraph>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
              {emailError ? (
                <Text style={styles.errText}>{emailError}</Text>
              ) : null}
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
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Confirm Password</Paragraph>
              <TextInput
                secureTextEntry={true}
                value={confirmPassowrd}
                onChangeText={(text) => setConfirmPassowrd(text)}
                style={styles.input}
              />
              {passwordError ? (
                <Text style={styles.errText}>{passwordError}</Text>
              ) : (
                <Text style={styles.errText}>
                  Password must be 6 character long.
                </Text>
              )}
            </View>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Button
              onPress={handleSubmit}
              btnStyle={{ ...styles.btn, ...styles.logoutBtn }}
              iName="log-out-outline"
            >
              Register
            </Button>
          )}

          <View style={styles.login}>
            <Paragraph style={styles.loginText}>
              Already a user, click here
            </Paragraph>
            <Link
              text="Login"
              style={styles.link}
              onPress={() => props.navigation.navigate("AuthLogin")}
            />
          </View>
        </ScrollView>
      </Card>
    </LinearGradient>
  );
};

AuthScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Register",
  };
};

export default AuthScreen;
