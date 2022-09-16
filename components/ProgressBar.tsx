import React from "react";
import { LinearProgress } from "@rneui/themed";

const ProgressBar = ({ progress, variant, trackColor, color, style }) => {
  const [_progress, setProgress] = React.useState(progress);

  return (
    <LinearProgress
      value={_progress}
      style={{ ...defaultStyles, ...style }}
      variant={variant}
      trackColor={trackColor}
      color={color}
    />
  );
};

export default ProgressBar;

ProgressBar.defaultProps = {
  progress: 0.3,
  variant: "determinate",
  trackColor: "lightgray",
  color: "secondary",
};

const defaultStyles = {
  width: "100%",
  minHeight: 8,
  borderRadius: 10,
};
