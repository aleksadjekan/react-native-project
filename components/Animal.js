import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import UserContext from "../storage/dataContext";
import { ScrollView } from "react-native-gesture-handler";

const Animals = () => {
  const userContext = React.useContext(UserContext);
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    userContext.addComment(
      description,
      userContext.selectedAnimal?.id,
      userContext.loginUser.username
    );
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{userContext.selectedAnimal?.title}</Text>
        <Image
          source={userContext.selectedAnimal?.url.toString()}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ width: 300, marginTop: 20 }}>
          {userContext.selectedAnimal?.description}
        </Text>
        <View style={styles.addComment}>
          <TextInput
            placeholder="Add your comment"
            value={description}
            onChangeText={(text) => setDescription(text)}
            multiline
            style={styles.commentInput}
          />
          <TouchableOpacity style={styles.comment} onPress={handleSubmit}>
            <Text style={styles.commentText}>Comment</Text>
          </TouchableOpacity>
        </View>
        {userContext.comments
          .filter(
            (comment) => comment.animal_id === userContext.selectedAnimal?.id
          )
          .map((item) => (
            <View style={styles.comments}>
              <Text style={styles.username}>{item.username}</Text>
              <Text>{item.description}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    overflowY: "auto",
    height: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
  comments: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    width: 300,
  },
  username: {
    fontWeight: "bold",
  },
  addComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    marginTop: 20,
  },
  comment: {
    marginLeft: 10,
    backgroundColor: "#19abff",
    padding: 5,
    borderRadius: 8,
  },
  commentText: {
    color: "white",
  },
  commentInput: {
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default Animals;
