"use client";

import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductId } from "@/components/MainContent/ProductSlider";

const colorOptions: { id: ProductId; name: string; color: string }[] = [
  { id: "product-1", name: "BLACK", color: "#000000" },
  { id: "product-2", name: "CREAM", color: "#ece3d3" },
  { id: "product-3", name: "BROWN", color: "#7a4b23" },
];

interface IColorSelectorProps {
  activeProduct: ProductId;
  onChange: (id: ProductId) => void;
}

const ColorSelector: FC<IColorSelectorProps> = ({
  activeProduct,
  onChange,
}) => {
  const activeColor = colorOptions.find((opt) => opt.id === activeProduct);

  return (
    <>
      <View style={styles.infoBar}>
        <Text style={{ fontSize: 14, fontWeight: 700 }}>
          {activeColor?.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 700 }}>IN STOCK</Text>
      </View>

      <View style={styles.colorSelector}>
        {colorOptions.map(({ id, color }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            style={{
              ...styles.colorButton,
              backgroundColor: color,
              border:
                activeProduct === id
                  ? "2px solid white"
                  : "2px solid transparent",
            }}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  infoBar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,

    marginTop: 16,
    marginBottom: 12,

    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: 30,
  },
  colorSelector: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,

    marginBottom: 20,
  },
  colorButton: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    cursor: "pointer",
    outlineColor: "none",
  },
});

export default ColorSelector;
