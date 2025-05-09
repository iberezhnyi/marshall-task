import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { BsCheck2 } from "react-icons/bs";

interface ISorryModalProps {
  attempts: number;
}

const SorryModal: FC<ISorryModalProps> = ({ attempts }) => {
  return (
    <>
      <BsCheck2 color="white" size={120} />
      <Text
        style={{
          marginTop: 25,
          marginBottom: 10,

          fontSize: 21,
          fontWeight: 700,
          lineHeight: 25,
          textAlign: "center",
        }}
      >
        OHHH...
      </Text>
      <Text style={styles.description}>
        Sorry, but this gift is empty! You have ({attempts}) more attempts. Good
        luck!
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
});

export default SorryModal;
