import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductSlider from "@/components/MainContent/ProductSlider";

const IntroSection: FC = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 29,
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 52,
          textTransform: "uppercase",
        }}
      >
        STANMORE III
      </Text>

      <ProductSlider />

      <Text
        style={{
          marginBottom: 30,

          fontSize: 29,
          fontWeight: 700,
          lineHeight: 30,
          textTransform: "uppercase",
        }}
      >
        Marshall celebrates 60th Anniversary!
      </Text>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          To celebrate our 60th anniversary, Marshall is providing the
          opportunity to get one of 60 Bluetooth speakers in UK under special
          conditions to popularize the brand in the country and to thank our
          customers for their loyalty and love.
        </Text>
        <Text style={styles.text}>
          You have the opportunity to get a Marshall Bluetooth speaker for only{" "}
          <Text style={styles.textPrice}>£9,99</Text>!
        </Text>
        <Text style={styles.text}>
          In order to receive a promotional Marshall speaker, simply complete
          the survey.
        </Text>
        <Text>
          Please hurry, as the number of available speakers is limited!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },

  textWrapper: {
    marginBottom: 40,
  },

  text: {
    marginBottom: 15,
  },

  textPrice: {
    fontWeight: 700,
  },
});

export default IntroSection;
