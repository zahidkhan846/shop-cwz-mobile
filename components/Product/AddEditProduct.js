import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
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
import IcoBtn from "../UI/IcoBtn";
import Input from "../UI/Input";
import Loading from "../UI/Loading";

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

  const [loading, setLoading] = useState(false);
  const [dispatchError, setDispatchError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setDispatchError("");
    if (
      title.length < 5 ||
      title.trim() === "" ||
      description.length < 10 ||
      description.trim() === "" ||
      imageUrl.length === 0
    ) {
      return setError("Invalid input. Please try again.");
    }
    try {
      if (!productId) {
        await dispatch(addProductAction(title, description, imageUrl, +price));
      } else {
        await dispatch(
          updateProductAction(productId, title, description, imageUrl)
        );
      }
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setDispatchError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dispatchError) {
      Alert.alert("An error occured!", dispatchError, [{ text: "Okey" }]);
    }
  }, [dispatchError]);

  if (loading) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView>
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
            <View style={styles.imageSection}>
              <View style={styles.imageInput}>
                <View style={styles.imageText}>
                  <Input
                    value={imageUrl}
                    onChangeText={(value) => setImageUrl(value)}
                    keyboardType="url"
                    returnKeyType="next"
                    label="Image Url"
                  />
                </View>
                <View style={styles.imageFile}>
                  <IcoBtn iconName="camera-outline" color={colors.btnPrimary} />
                </View>
              </View>
              <Text style={styles.text}>
                Pick a image or enter image url menually.
              </Text>
            </View>

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

  imageInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageText: {
    flex: 1,
    marginRight: 5,
  },

  imageFile: {
    width: "10%",
  },

  imageSection: {
    marginBottom: 15,
  },

  text: {
    color: colors.lightGrey,
    fontStyle: "italic",
  },
});
