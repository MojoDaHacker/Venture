import { StyleSheet } from "react-native";
import Window from './Layout'

const { window } = Window

export default StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 12,
    // borderWidth: 1,
    // borderColor: "red",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
  },
  Col: {
    flex: 1,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "yellow",
  },
  Img: {
    width: window.width,
    height: window.height
  }
});

const theme = {
  primary: {
    backgroundColor: "#57d8b3"
  },
  link: {
    backgroundColor: "transparent",
    textColor: "#57d8b3"
  }
}
export {
  theme
};
