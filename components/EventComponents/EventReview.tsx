import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import React from "react";
import StarRatings from "../StarRatings";
import { Image, Text, View } from "../Themed";

const EventReview = (props) => {
  return (
    <View style={styles.borderAndShadow}>
      <View {...props} style={styles.container}>
        <View padding="_s2" style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/images/pic1.jpg")}
          />
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.rating}>
            <StarRatings />
          </View>
          <View style={styles.review}>
            <Text>Was a great time!</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventReview;

const styles = {
  borderAndShadow: {
    borderColor: 'lightgray',
    borderWidth: .5,
    borderRadius: 5,
    marginVertical: 12,
    shadowOffset:{
        width: 2,
        height: 2,
    },
    shadowColor: "black",
    shadowOpacity: .5,
    shadowRadius: 1
  },
  container: {
    flexDirection: "row",
    minHeight: 80,
  },
  profilePictureContainer: {},
  reviewContainer: {
    flex: 1,
  },
  rating: {
    flexShrink: 1,
  },
  review: {
    flex: 1,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
};
