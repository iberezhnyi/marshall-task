import { FC, ReactNode } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ICustomModalProps {
  visible: boolean;
  onClose: () => void;

  children: ReactNode;
}

const CustomModal: FC<ICustomModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <LinearGradient
          colors={["#474747", "#e2bb87", "#424345"]}
          locations={[-0.3098, 2.1743, 2.1885]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.container}
        >
          {children}

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={{ color: "#000", fontSize: 12 }}>OK</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "95%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 6,
  },
});

export default CustomModal;
