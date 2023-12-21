import React from "react";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, List } from "react-native-paper";

const Stores = ({ navigation }) => {
    const data = [
        { id: 1, title: "Store1", location: "https://maps.app.goo.gl/jorPqasvE879eYM18" },
        { id: 2, title: "Store2", location: "https://maps.app.goo.gl/jorPqasvE879eYM18" },
        { id: 3, title: "Store3", location: "https://maps.app.goo.gl/jorPqasvE879eYM18" },
    ];

    const handleStorePress = (props) => {
        Linking.openURL(props.location);
    };

    const handleAddStore = () => {
        navigation.navigate("AddStore");
    };

    const handleStoreEdit = (item) => {
        navigation.navigate("EditStore", { item });
    };

    return (
        <View style={styles.container}>
            <View>
                {data.map((item) => (
                    <List.Item
                        key={item.id}
                        title={item.title}
                        left={(props) => <List.Icon {...props} icon="folder" />}
                        right={(props) => (
                            <TouchableOpacity onPress={() => handleStoreEdit(item)}>
                                <List.Icon icon="pencil" />
                            </TouchableOpacity>
                        )}
                        onPress={() => handleStorePress(item)}
                    />
                ))}
            </View>
            <Button style={styles.addButton} mode="contained" onPress={handleAddStore}>Add</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    addButton: {
        margin: 2
    }
});

export default Stores;
