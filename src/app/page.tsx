import { SafeAreaView, StyleSheet } from "react-native";
import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <MainContent />

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
