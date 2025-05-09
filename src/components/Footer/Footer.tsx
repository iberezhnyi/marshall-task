import { FC } from "react";
import Image from "next/image";
import { StyleSheet, Text, View } from "react-native";

const Footer: FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.text}>
          ©2024 MARSHALL GROUP. {"\n"}
          ALL RIGHTS RESERVED. {"\n"}
          ORG. NR 5567574610
        </Text>

        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={130}
          height={35}
          style={styles.footerLogo}
        />

        <View style={styles.footerIcons}>
          <Image src="/images/f1.svg" alt="Search" width={35} height={34} />
          <Image src="/images/f2.svg" alt="Search" width={35} height={34} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 33,
    paddingBottom: 20,

    borderTopWidth: 2,
    borderTopColor: "#fff",
  },
  container: {
    paddingHorizontal: 14,
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 12,

    marginBottom: 10,

    textAlign: "center",
  },

  footerLogo: {
    marginBottom: 18,
  },

  footerIcons: {
    flexDirection: "row",
    gap: 34,
  },
});

export default Footer;
