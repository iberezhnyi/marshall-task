import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const SuccessScreen: FC = () => {
  return (
    <View style={styles.successSection}>
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 15,

            fontSize: 18,
            fontWeight: "700",
            color: "#000",
            textAlign: "center",
          }}
        >
          Your answers are being verified
        </Text>

        <Text
          style={{
            marginBottom: 15,

            fontSize: 18,
            color: "#000",
            textAlign: "center",
          }}
        >
          Loading...
        </Text>

        <Text
          style={{
            marginBottom: 15,

            fontSize: 18,
            color: "#000",
            textAlign: "center",
          }}
        >
          You answered 4/4 questions!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successSection: {
    flexGrow: 1,

    paddingTop: 40,

    backgroundColor: "#fff",
  },

  container: {
    paddingHorizontal: 14,
  },
});

export default SuccessScreen;
