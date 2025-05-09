import { FC } from "react";
import { StyleSheet, View } from "react-native";
import BoxSelection from "@/components/Game/BoxSelection";

interface IGameScreenProps {
  selectedColor: string;
  onWinComplete: () => void;
}

const GameScreen: FC<IGameScreenProps> = ({ selectedColor, onWinComplete }) => {
  return (
    <View style={styles.gameSection}>
      <View style={styles.container}>
        <BoxSelection
          selectedColor={selectedColor}
          onWinComplete={onWinComplete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameSection: {
    flexGrow: 1,
    justifyContent: "center",

    paddingTop: 40,

    backgroundColor: "#fff",
  },

  container: {
    alignItems: "center",

    paddingHorizontal: 14,
  },
});

export default GameScreen;
