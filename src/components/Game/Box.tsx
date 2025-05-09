import { FC } from "react";
import Image from "next/image";
import { TouchableOpacity, StyleSheet } from "react-native";

interface BoxProps {
  onPress: () => void;
  disabled: boolean;
  isOpened: boolean;
}

const Box: FC<BoxProps> = ({ onPress, disabled, isOpened }) => {
  const source = isOpened ? "/images/box/box-4.png" : "/images/box/box-1.png";

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.box}>
      <Image src={source} alt="Box" width={100} height={100} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    // margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Box;
