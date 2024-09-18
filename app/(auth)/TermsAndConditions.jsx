// screens/TermsAndConditions.js
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Terms and Conditions</Text>
        <Text style={styles.date}>Last updated: [Insert Date]</Text>

        <Text style={styles.sectionHeading}>1. Definitions</Text>
        <Text style={styles.paragraph}>
          - "We," "Us," "Our" refer to the team behind Stoa.
          {"\n"}- "User," "You" refers to any individual or entity accessing or
          using the Stoa app.
          {"\n"}- "App" refers to the Stoa marketplace mobile application.
        </Text>

        <Text style={styles.sectionHeading}>2. User Accounts</Text>
        <Text style={styles.paragraph}>
          - To access certain features of Stoa, you may need to create an
          account.
          {"\n"}- You are responsible for maintaining the confidentiality of
          your account information, including your password.
          {"\n"}- All activities under your account are your responsibility.
          {"\n"}- You must provide accurate and complete information when
          creating your account.
        </Text>

        {/* Add more sections as necessary */}

        <Text style={styles.sectionHeading}>3. Use of the App</Text>
        <Text style={styles.paragraph}>
          - The app is intended for individuals over the age of 18. By using the
          app, you confirm that you are at least 18 years old.
          {"\n"}- You agree not to use the app for any illegal or unauthorized
          purpose.
          {"\n"}- You may not use the app in a way that could damage, disable,
          or overburden the app's infrastructure.
        </Text>

        {/* Additional sections can go here */}

        <Text style={styles.sectionHeading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about these Terms and Conditions, please
          contact us at:{"\n"}
          Email: [Insert Email Address]{"\n"}
          Phone: [Insert Phone Number]
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default TermsAndConditions;
