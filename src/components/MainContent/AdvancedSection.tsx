import { FC } from "react";
import Image from "next/image";
import { StyleSheet, Text, View } from "react-native";

const AdvancedSection: FC = () => {
  return (
    <View style={styles.advancedSection}>
      <View style={styles.container}>
        <View style={styles.advancedInner}>
          <View style={styles.advancedItem}>
            <Image
              src="/images/i1.svg"
              alt="Search"
              width={95}
              height={56}
              style={styles.advancedItemImage}
            />
            <Text style={styles.advancedItemTitle}>FREQUENCY RANGE</Text>
            <Text style={styles.advancedItemText}>45–20,000 Hz</Text>
          </View>

          <View style={styles.advancedItem}>
            <Image
              src="/images/i2.svg"
              alt="Search"
              width={66}
              height={66}
              style={styles.advancedItemImage}
            />
            <Text style={styles.advancedItemTitle}>
              MAXIMUM SOUND PRESSURE LEVEL
            </Text>
            <Text style={styles.advancedItemText}>97 dB @ 1 m</Text>
          </View>

          <View style={styles.advancedItem}>
            <Image
              src="/images/i3.svg"
              alt="Search"
              width={42}
              height={71}
              style={styles.advancedItemImage}
            />
            <Text style={styles.advancedItemTitle}>COMPATIBLE APPS</Text>
            <Text style={styles.advancedItemText}>
              MARSHALL BLUETOOTH APP (IOS & ANDROID)
            </Text>
          </View>

          <View style={styles.advancedItem}>
            <Image
              src="/images/i4.svg"
              alt="Search"
              width={96}
              height={56}
              style={styles.advancedItemImage}
            />
            <Text style={styles.advancedItemTitle}>STEREO/MONO</Text>
            <Text style={styles.advancedItemText}>STEREO</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  advancedSection: {
    paddingTop: 12,
    paddingBottom: 45,
  },

  container: {
    paddingHorizontal: 14,
  },

  advancedInner: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "baseline",
  },

  advancedItem: {
    width: "100%",
    maxWidth: 172,
    alignItems: "center",

    paddingTop: 33,
  },

  advancedItemImage: {
    marginBottom: 21,
  },

  advancedItemTitle: {
    textAlign: "center",
    fontWeight: 700,

    marginBottom: 10,
  },

  advancedItemText: {
    textAlign: "center",
  },
});

export default AdvancedSection;
