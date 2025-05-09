import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import Box from "@/components/Game/Box";
import CustomModal from "@/components/Modals/CustomModal";
import SorryModal from "@/components/Modals/SorryModal";
import VinsModal from "@/components/Modals/VinsModal";

interface IBoxSelectionProps {
  selectedColor: string;
  onWinComplete: () => void;
}

const BoxSelection: FC<IBoxSelectionProps> = ({
  selectedColor,
  onWinComplete,
}) => {
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [openedIndexes, setOpenedIndexes] = useState<number[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const handleBoxPress = (index: number) => {
    if (openedIndexes.includes(index) || attemptsLeft === 0) return;

    const newOpened = [...openedIndexes, index];
    setOpenedIndexes(newOpened);

    const remaining = attemptsLeft - 1;

    if (remaining === 0) {
      setIsWin(true); // третья попытка — выигрыш
    }

    setAttemptsLeft(remaining);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);

    if (isWin) {
      onWinComplete(); // <=== запуск формы после выигрыша
    }
  };

  return (
    <>
      <View style={styles.grid}>
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            onPress={() => handleBoxPress(i)}
            disabled={openedIndexes.includes(i) || attemptsLeft === 0}
            isOpened={openedIndexes.includes(i)}
          />
        ))}
      </View>
      <CustomModal visible={modalVisible} onClose={closeModal}>
        {isWin ? (
          <VinsModal selectedColor={selectedColor} />
        ) : (
          <SorryModal attempts={attemptsLeft} />
        )}
      </CustomModal>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    rowGap: 40,
    columnGap: 12,
  },
});

export default BoxSelection;
