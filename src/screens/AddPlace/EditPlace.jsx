import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import TextInput from "../../components/TextInput";

const EditPlace = (props) => {
  const { item } = props.route.params;
  const [name, setName] = useState(item.title);
  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleMedium" style={styles.text}>
          Edit Name of the place
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            label="Name"
            returnKeyType="done"
            value={name}
            onChangeText={(text) => setName({ value: text, error: "" })}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          buttonColor="grey"
          onPress={() => console.log()}
        >
          Cancel
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log()}
        >
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  textInputContainer: {
    margin: 5,
  },
  text: {
    margin: 5,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default EditPlace;
