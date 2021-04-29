import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";

const Form = (props) => {
  const { productId } = props;

  const allUserProducts = useSelector((state) => state.products.userProducts);

  const selectedProduct = allUserProducts.find(
    (product) => product.id === productId
  );

  const [title, setTitle] = useState(
    selectedProduct ? selectedProduct.title : ""
  );
  const [description, setDescription] = useState(
    selectedProduct ? selectedProduct.description : ""
  );
  const [imageURL, setImageURL] = useState(
    selectedProduct ? selectedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");

  return (
    <ScrollView>
      <Card>
        <View style={styles.form}>
          <Heading style={styles.heading}>
            {productId ? "Update Product Info" : "Enter Product Info"}
          </Heading>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title}
              onChange={(value) => setTitle(value)}
              style={styles.input}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              value={description}
              onChange={(value) => setDescription(value)}
              style={styles.input}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              value={imageURL}
              onChange={(value) => setImageURL(value)}
              style={styles.input}
            />
          </View>
          {!productId && (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                value={price}
                onChange={(value) => setPrice(value)}
                style={styles.input}
              />
            </View>
          )}
          <Button
            onPress={() => {}}
            iName="create-outline"
            btnStyle={styles.btn}
          >
            Create New Product
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
});
