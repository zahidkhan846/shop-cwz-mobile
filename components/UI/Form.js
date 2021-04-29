import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import {
  addProductAction,
  updateProductAction,
} from "../../store/actions/products";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";

const Form = (props) => {
  const { productId, navigation } = props;

  const allUserProducts = useSelector((state) => state.products.userProducts);

  console.log(productId);

  const selectedProduct = allUserProducts.find(
    (product) => product.id === productId
  );

  const [title, setTitle] = useState(
    selectedProduct ? selectedProduct.title : ""
  );
  const [description, setDescription] = useState(
    selectedProduct ? selectedProduct.description : ""
  );
  const [imageUrl, setImageUrl] = useState(
    selectedProduct ? selectedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      title.length < 5 ||
      title.trim() === "" ||
      description.length < 10 ||
      description.trim() === ""
    ) {
      return setError("Invalid input. Please try again.");
    }
    if (!productId) {
      dispatch(addProductAction(title, description, imageUrl, +price));
    } else {
      dispatch(updateProductAction(productId, title, description, imageUrl));
    }
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Card>
        <View style={styles.form}>
          <Heading style={styles.heading}>
            {productId ? "Update Product Info" : "Enter Product Info"}
          </Heading>
          <Text numberOfLines={2} style={styles.alert}>
            {error ? (
              <Text>{error}</Text>
            ) : (
              <Text>
                Note*
                <Text>
                  {" "}
                  Title & Description should atleast include 5 and 10 characters
                  minimum.
                </Text>
              </Text>
            )}
          </Text>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              style={styles.input}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              value={description}
              onChangeText={(value) => setDescription(value)}
              style={styles.input}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              value={imageUrl}
              onChangeText={(value) => setImageUrl(value)}
              style={styles.input}
            />
          </View>
          {!productId && (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                value={price}
                onChangeText={(value) => setPrice(value)}
                style={styles.input}
              />
            </View>
          )}
          <Button
            onPress={handleSubmit}
            iName="create-outline"
            btnStyle={styles.btn}
          >
            {productId ? "Update Product" : "Create Product"}
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },

  heading: {
    marginBottom: 10,
    color: colors.primary,
  },

  label: {
    fontFamily: "robotoBold",
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontSize: 16,
  },

  formControl: {
    marginBottom: 5,
  },

  btn: {
    marginTop: 10,
    paddingVertical: 14,
    backgroundColor: colors.btnPrimary,
  },

  alert: {
    marginBottom: 10,
    color: colors.danger,
    fontStyle: "italic",
  },
});
