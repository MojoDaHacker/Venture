import React, { Children } from "react";
import { View } from "./Themed";

const List = ({ children }) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default List;
