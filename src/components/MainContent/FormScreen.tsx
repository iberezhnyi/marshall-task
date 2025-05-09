"use client";

import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const FormScreen: FC = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    const formData = {
      address,
      city,
      country,
      zipCode,
      phone,
      email,
      firstName,
      lastName,
    };

    console.log("Form data:", formData);
  };

  return (
    <View style={styles.formSection}>
      <View style={styles.container}>
        {/* Order Overview */}
        <View style={styles.orderOverviewWrapper}>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 10,

              color: "#000",
            }}
          >
            Order Overview:
          </Text>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 700,

              color: "#000",
            }}
          >
            £ 9.99
          </Text>
        </View>

        <View style={styles.orderItem}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",

              color: "#000",
            }}
          >
            MARSHALL STANMORE III
          </Text>
          <View style={styles.orderItemWrapper}>
            <Text
              style={{
                textDecorationLine: "line-through",

                color: "#e2001f",
              }}
            >
              £340.00
            </Text>
            <Text
              style={{
                fontWeight: 700,

                color: "#000",
              }}
            >
              £9.99
            </Text>
          </View>
        </View>

        <View style={styles.pagination}>
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,

              color: "#000",
            }}
          >
            Shopping Cart
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,
              fontWeight: "700",

              color: "#000",
            }}
          >
            Information & Shipping
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,

              color: "#000",
            }}
          >
            Payment
          </Text>
        </View>

        {/* Shipping Information */}
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#000",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          1 SHIPPING INFORMATION
        </Text>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ADDRESS *
        </Text>
        <TextInput
          placeholder="ADDRESS"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          CITY *
        </Text>
        <TextInput
          placeholder="CITY"
          style={styles.input}
          value={city}
          onChangeText={setCity}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          COUNTRY *
        </Text>
        <TextInput
          placeholder="COUNTRY"
          style={styles.input}
          value={country}
          onChangeText={setCountry}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ZIP CODE *
        </Text>
        <TextInput
          placeholder="ZIP CODE"
          style={styles.input}
          value={zipCode}
          onChangeText={setZipCode}
        />

        {/* Contact Information */}
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#000",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          2 CONTACT INFORMATION
        </Text>

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          PHONE NUMBER *
        </Text>
        <TextInput
          placeholder="PHONE NUMBER"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          E-MAIL ADDRESS *
        </Text>
        <TextInput
          placeholder="E-mail address"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          FIRST NAME *
        </Text>
        <TextInput
          placeholder="FIRST NAME"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,

            color: "#595959",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          LAST NAME *
        </Text>
        <TextInput
          placeholder="LAST NAME"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Proceed Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formSection: {
    paddingTop: 12,
    paddingBottom: 50,

    backgroundColor: "#fff",
  },

  container: {
    paddingHorizontal: 12,
  },

  orderOverviewWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 12,

    marginBottom: 20,
  },

  orderItemWrapper: {},

  pagination: {
    flexDirection: "row",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 5,
    marginBottom: 12,

    color: "#595959",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FormScreen;
