import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, List } from "react-native-paper";

const Home = ({ navigation }) => {
    const data = [
        { id: 1, title: "Ponekkara" },
        { id: 2, title: "Palarivattom" },
        { id: 3, title: "Edappally" },
    ];

    const handlePlacePress = (props) => {
        console.log(props);
        navigation.navigate("stores", { headerTitle: props.title });
    };

    const handleAddPlace = () => {
        navigation.navigate("AddPlace");
    };

    const handlePLaceEdit = (item) => {
        navigation.navigate("EditPlace", { item });
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
                            <TouchableOpacity onPress={()=>handlePLaceEdit(item)}>
                                <List.Icon icon="pencil" />
                            </TouchableOpacity>
                        )}
                        onPress={() => handlePlacePress(item)}
                    />
                ))}
            </View>
            <Button style={styles.addButton} mode="contained" onPress={handleAddPlace}>Add</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    addButton: {
        margin:2
    }
});

export default Home;
