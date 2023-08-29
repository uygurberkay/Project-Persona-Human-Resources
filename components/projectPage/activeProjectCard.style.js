import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    backgroundColor: selectedJob === item._id ? COLORS.primary : "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    backgroundColor: selectedJob === item._id ? "#FFF" : COLORS.white,
  }),
  jobName: (selectedJob, item) => ({
    color: selectedJob === item._id ? COLORS.white : COLORS.primary,
  }),
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    color: selectedJob === item._id ? COLORS.white : COLORS.primary,
  }),
});

export default styles;
