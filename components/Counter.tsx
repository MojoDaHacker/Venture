import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "./Themed";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.counterControls}
        margin="s0"
        onPress={decrement}
        disabled={count < 1}
      >
        <AntDesign
          name="minus"
          size={40}
          color={count < 1 ? "lightgray" : "black"}
        />
      </TouchableOpacity>
      <View margin="s0">
        <Text size="s3">{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.counterControls}
        margin="s0"
        onPress={increment}
      >
        <AntDesign name="plus" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  counterControls: {
    justifyContent: "center",
    // borderWidth: 1,
    // borderRadius: 25
  },
};
