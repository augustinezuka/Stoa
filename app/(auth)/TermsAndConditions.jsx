// screens/TermsAndConditions.js
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TermsAndConditions = () => {

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

  return (
    <SafeAreaView >
      <ScrollView>
        <View>
          <Text className="text-3xl font-bold mb-4">
            Privacy Policy 
          </Text>
          <Text className="text-base mb-2">
            Last updated: 1{" "}
            {months[new Date().getMonth()] + "  " + new Date().getFullYear()}
          </Text>


          <Text className="text-xl font-semibold mt-4">
            1. Information We Collect
          </Text>
          <Text className="text-base mt-2">
            We may collect personal and non-personal information about you in a
            variety of ways, including:
          </Text>

          <Text className="text-lg font-semibold mt-2">
            1.1 Personal Information
          </Text>
          <Text className="text-base mt-2">
            Personal information refers to information that can be used to
            identify an individual. The personal data we collect includes:
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Account Information: Name, email address, phone number, username,
            password, etc.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Payment Information: Billing details and other necessary payment
            information.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Transaction Information: Purchase history, shipping addresses,
            payment methods, etc.
          </Text>

          <Text className="text-lg font-semibold mt-4">
            1.2 Non-Personal Information
          </Text>
          <Text className="text-base mt-2">
            Non-personal information refers to data that does not directly
            identify you. This includes:
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Usage Data: Browser type, operating system, IP address, etc.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Cookies and Tracking Technologies: Monitoring website activity and
            personalizing your experience.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            2. How We Use Your Information
          </Text>
          <Text className="text-base mt-2">
            We use your information for the following purposes:
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Processing transactions and payments.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Managing your account and providing customer support.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Sending transactional emails and promotional offers.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Preventing fraud, unauthorized transactions, or illegal
            activities.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            3. Sharing Your Information
          </Text>
          <Text className="text-base mt-2">
            We do not sell or rent your personal information to third parties.
            However, we may share your information in the following
            circumstances:
          </Text>
          <Text className="text-lg font-semibold mt-2">
            3.1 Service Providers
          </Text>
          <Text className="text-base ml-4 mt-1">
            We may share your data with third-party vendors who assist us with
            platform management and processing payments.
          </Text>
          <Text className="text-lg font-semibold mt-2">
            3.2 Business Transfers
          </Text>
          <Text className="text-base ml-4 mt-1">
            In the event of a merger or acquisition, your personal information
            may be transferred as part of that transaction.
          </Text>
          <Text className="text-lg font-semibold mt-2">
            3.3 Legal Requirements
          </Text>
          <Text className="text-base ml-4 mt-1">
            We may disclose your information if required by law or to protect
            the rights and safety of Stoa and its users.
          </Text>

          <Text className="text-xl font-semibold mt-4">4. Data Security</Text>
          <Text className="text-base mt-2">
            We take reasonable measures to protect your information, but no
            electronic transmission or storage is 100% secure.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            5. Your Rights and Choices
          </Text>
          <Text className="text-base mt-2">
            You have certain rights regarding your personal data:
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Access and Correction: You can update your information through
            your account.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Deletion: You can request the deletion of your data by contacting
            us.
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Opt-Out of Marketing: You can opt-out of receiving marketing
            communications from us at any time.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            6. Cookies and Tracking Technologies
          </Text>
          <Text className="text-base mt-2">
            We use cookies and similar technologies to enhance your experience.
            You can manage your cookie preferences in your browser settings.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            7. Third-Party Links
          </Text>
          <Text className="text-base mt-2">
            Our platform may contain links to third-party websites, which are
            not governed by this Privacy Policy. We encourage you to review
            their privacy policies.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            8. Children’s Privacy
          </Text>
          <Text className="text-base mt-2">
            Stoa is not intended for use by individuals under the age of 16. We
            do not knowingly collect information from children.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            9. International Data Transfers
          </Text>
          <Text className="text-base mt-2">
            Your information may be transferred internationally, and we ensure
            appropriate safeguards are in place to protect your personal data.
          </Text>

          <Text className="text-xl font-semibold mt-4">
            10. Changes to This Privacy Policy
          </Text>
          <Text className="text-base mt-2">
            We reserve the right to update this Privacy Policy. Please check
            this page periodically for updates.
          </Text>

          <Text className="text-xl font-semibold mt-4">11. Contact Us</Text>
          <Text className="text-base mt-2">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Email: [your-support-email@example.com]
          </Text>
          <Text className="text-base ml-4 mt-1">
            • Phone: [your-phone-number]
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
