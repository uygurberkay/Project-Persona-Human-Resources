import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "./theme";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
  }),
  jobName: (selectedJob, item) => ({
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
});

export default styles;
