import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TextInput, View } from "react-native";
import validator from "validator";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Heading from "../../components/UI/Heading";
import Link from "../../components/UI/Link";
import Paragraph from "../../components/UI/Paragraph";
import { styles } from "../../styles/authStyles";

const AuthScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    setPasswordError("");
    setNameError("");
    setMobileError("");
    setAddressError("");
    setEmailError("");
    if (password !== confirmPassowrd) {
      setError("Password did not match!");
      return;
    }

    if (validator.isEmpty(firstName) || validator.isEmpty(lastName)) {
      setNameError("Empty name field. Required!");
    }

    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      setEmailError("Invalid email address.");
    }

    if (validator.isEmpty(mobile) || !validator.isNumeric(mobile)) {
      setMobileError("Invalid Mobile Number");
    }

    if (
      validator.isEmpty(password) ||
      !validator.isLength(password, { min: 6 })
    ) {
      setPasswordError("Invalid Password");
    }

    if (validator.isEmpty(address)) {
      setAddressError("Invalid address.");
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

            <View style={styles.formControl}>
              <Paragraph style={styles.label}>First Name</Paragraph>
              <TextInput
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Last Name</Paragraph>
              <TextInput
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                style={styles.input}
              />
              {nameError ? (
                <Text style={styles.errText}>{nameError}</Text>
              ) : null}
            </View>
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
              <Paragraph style={styles.label}>Mobile</Paragraph>
              <TextInput
                keyboardType="number-pad"
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                style={styles.input}
              />
              {mobileError ? (
                <Text style={styles.errText}>{mobileError}</Text>
              ) : null}
            </View>
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Passowrd</Paragraph>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Confirm Password</Paragraph>
              <TextInput
                value={confirmPassowrd}
                onChangeText={(text) => setConfirmPassowrd(text)}
                style={styles.input}
              />
              {passwordError ? (
                <Text style={styles.errText}>{passwordError}</Text>
              ) : null}
              {error ? (
                <Text style={styles.errText}>{error}</Text>
              ) : (
                <Text style={styles.errText}>
                  Password must be 6 character long.
                </Text>
              )}
            </View>
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>Address</Paragraph>
              <TextInput
                value={address}
                onChangeText={(text) => setAddress(text)}
                style={styles.input}
              />
              {addressError ? (
                <Text style={styles.errText}>{addressError}</Text>
              ) : null}
            </View>
            <View style={styles.formControl}>
              <Paragraph style={styles.label}>PIN</Paragraph>
              <TextInput
                value={pin}
                onChangeText={(text) => setPin(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.seller}>
              <Paragraph style={styles.label}>Signup as seller</Paragraph>
              <Switch
                value={isSeller}
                onValueChange={() => {
                  setIsSeller((prevState) => !prevState);
                }}
              />
            </View>
          </View>

          <Button
            onPress={handleSubmit}
            btnStyle={{ ...styles.btn, ...styles.logoutBtn }}
            iName="log-out-outline"
          >
            Register
          </Button>

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
