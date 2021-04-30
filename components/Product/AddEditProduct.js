import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import {
  addProductAction,
  updateProductAction,
} from "../../store/actions/products";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrMsg from "../UI/ErrMsg";
import Heading from "../UI/Heading";
import Input from "../UI/Input";

const AddEditForm = (props) => {
  const { productId, navigation } = props;

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
      description.trim() === "" ||
      price.length === 0 ||
      imageUrl.length === 0
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
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView>
        <Card>
          <View style={styles.form}>
            <Heading style={styles.heading}>
              {productId ? "Update Product Info" : "Enter Product Info"}
            </Heading>
            <ErrMsg error={error} />
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              label="Title"
            />
            <Input
              value={description}
              onChangeText={(value) => setDescription(value)}
              keyboardType="default"
              returnKeyType="next"
              multiline
              numberOfLines={5}
              label="Description"
            />
            <Input
              value={imageUrl}
              onChangeText={(value) => setImageUrl(value)}
              keyboardType="url"
              returnKeyType="next"
              label="Image Url"
            />
            {!productId && (
              <Input
                value={price}
                onChangeText={(value) => setPrice(value)}
                keyboardType="decimal-pad"
                returnKeyType="send"
                label="Price"
              />
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
    </KeyboardAvoidingView>
  );
};

export default AddEditForm;

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },

  heading: {
    marginBottom: 10,
    color: colors.primary,
  },

  btn: {
    marginTop: 10,
    paddingVertical: 14,
    backgroundColor: colors.btnPrimary,
  },
});
