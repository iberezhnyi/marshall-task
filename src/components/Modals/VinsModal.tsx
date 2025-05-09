import Image from "next/image";
import { FC } from "react";
import { Text } from "react-native";

interface IVinsModalProps {
  selectedColor: string;
}

const colorToImage: Record<string, string> = {
  "Black.": "/images/speaker/black1.webp",
  "Cream.": "/images/speaker/cream1.webp",
  "Brown.": "/images/speaker/brown1.webp",
};

const VinsModal: FC<IVinsModalProps> = ({ selectedColor }) => {
  const imageUrl = colorToImage[selectedColor] || colorToImage["Black."];

  return (
    <>
      <Image
        src={imageUrl}
        alt="Box"
        width={280}
        height={175}
        style={{
          objectFit: "contain",
        }}
      />
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
        Congratulations! The Marshall speaker is yours!
      </Text>
      <Text
        style={{
          color: "#000",
          textAlign: "center",
          fontSize: 15,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontWeight: 700, color: "#000" }}>Hurry up! </Text>There
        are 7 other people viewing this with you.
      </Text>
      <Text style={{ marginBottom: 15, fontSize: 15, textAlign: "center" }}>
        1. Click &quot;OK&quot; below in order to go to the shipping checkout
        page.{"\n"}2. Fill out the form and pay to get your Marshall speaker.
        {"\n"}3. The package will be delivered within 5-7 days.
      </Text>
    </>
  );
};

export default VinsModal;
