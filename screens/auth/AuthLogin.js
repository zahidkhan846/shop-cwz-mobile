import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import validator from "validator";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Heading from "../../components/UI/Heading";
import Link from "../../components/UI/Link";
import Paragraph from "../../components/UI/Paragraph";
import { styles } from "../../styles/authStyles";

const AuthLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      setError("Invalid email address.");
    }
    if (
      validator.isEmpty(password) ||
      !validator.isLength(password, { min: 6 })
    ) {
      setError("Invalid Password");
    }
  };

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
              <TextInput style={styles.input} />
            </View>

            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Passowrd</Paragraph>
              <TextInput style={styles.input} />
            </View>

            <Button
              onPress={handleSubmit}
              btnStyle={{ ...styles.btn, ...styles.loginBtn }}
              iName="log-in-outline"
            >
              Login
            </Button>

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
