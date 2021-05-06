import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Heading from "../../components/UI/Heading";
import IconButton from "../../components/UI/IconButton";
import { user } from "../../db/users";
import { styles } from "../../styles/userStyle";

const UserProfileScreen = (props) => {
  return (
    <View style={styles.userScreen}>
      <Card>
        <View style={styles.cardContent}>
          <Heading style={styles.heading}>User Profile</Heading>
          <Text>Username:</Text>
          <Text style={styles.textBold}>
            {user.firstName} {user.lastName}
          </Text>
          <Text>Phone:</Text>
          <Text style={styles.textBold}>{user.mobile}</Text>
          <Text>Email:</Text>
          <Text style={styles.textBold}>{user.email}</Text>
          <Text>Postal Code:</Text>
          <Text style={styles.textBold}>{user.PIN}</Text>
          <Text>Address:</Text>
          <Text style={styles.textBold}>{user.address}</Text>
          <Text>
            Note*{" "}
            <Text style={styles.note}>
              address field is used as default shipping address.
            </Text>
          </Text>
        </View>
      </Card>
      {user.isSeller && (
        <View>
          <Button
            iName="pricetag-outline"
            btnStyle={{ ...styles.btn, ...styles.light }}
            textStyle={styles.btnText}
            onPress={() => props.navigation.navigate("UserProducts")}
          >
            View My Products
          </Button>
          <Button
            iName="create-outline"
            btnStyle={{ ...styles.btn, ...styles.dark }}
            textStyle={styles.btnText}
            onPress={() => props.navigation.navigate("AddProducts")}
          >
            Add New Product
          </Button>
        </View>
      )}
    </View>
  );
};

export default UserProfileScreen;

export const userProfileOption = (navData) => {
  return {
    headerTitle: "Account Info",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IconButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
