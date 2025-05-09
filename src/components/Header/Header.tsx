import { FC } from "react";
import Image from "next/image";
import { StyleSheet, View } from "react-native";

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.headerInner}>
          <Image src="/images/logo.svg" alt="Logo" width={122} height={32} />
          <View style={styles.headerAuth}>
            <Image
              src="/images/search.svg"
              alt="Search"
              width={21}
              height={21}
            />
            <Image src="/images/faq.svg" alt="Faq" width={20} height={20} />
            <Image src="/images/cart.svg" alt="Cart" width={27} height={20} />
            <Image src="/images/flag.webp" alt="Flag" width={33} height={20} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
  },
  container: {
    width: "100%",
    paddingHorizontal: 14,
  },

  headerInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerAuth: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: 20,
  },
});

export default Header;
