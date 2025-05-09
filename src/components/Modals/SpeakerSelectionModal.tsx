import Image from "next/image";
import { FC } from "react";
import { StyleSheet, Text } from "react-native";

const SpeakerSelectionModal: FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Image src="/images/box/box-1.png" alt="Box" width={136} height={137} />
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
        Congratulations! We have a speaker that meets all the parameters you
        specified.
      </Text>
      <Text style={styles.description}>
        Today, {today}, you have the opportunity to get a Marshall speaker.
        {"\n\n"}
        All you need is just to choose the right gift box.{"\n\n"}
        You&apos;ve got 3 attempts, good luck!
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

export default SpeakerSelectionModal;
