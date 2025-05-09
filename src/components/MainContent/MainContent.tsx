"use client";

import { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomModal from "@/components/Modals/CustomModal";
import SuccessScreen from "@/components/MainContent/SuccessScreen";
import GameScreen from "@/components/Game/GameScreen";
import IntroSection from "@/components/MainContent/IntroSection";
import AdvancedSection from "@/components/MainContent/AdvancedSection";
import Questionnaire from "@/components/MainContent/Questionnaire";
import SpeakerSelectionModal from "@/components/Modals/SpeakerSelectionModal";
import FormScreen from "@/components/MainContent/FormScreen";

const MainContent: FC = () => {
  const [isSurveyComplete, setIsSurveyComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("Black.");

  useEffect(() => {
    if (isSurveyComplete) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSurveyComplete]);

  const handleModalClose = () => {
    setShowModal(false);

    setShowGameScreen(true);
  };

  return (
    <View style={styles.main}>
      {showForm ? (
        <FormScreen />
      ) : showGameScreen ? (
        <GameScreen
          selectedColor={selectedColor}
          onWinComplete={() => setShowForm(true)}
        />
      ) : isSurveyComplete ? (
        <>
          <SuccessScreen />

          <CustomModal visible={showModal} onClose={handleModalClose}>
            <SpeakerSelectionModal />
          </CustomModal>
        </>
      ) : (
        <>
          <LinearGradient
            colors={["#1b1d1f", "#525355"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.mainSection}
          >
            <IntroSection />

            <Questionnaire
              onComplete={(color) => {
                setSelectedColor(color);
                setIsSurveyComplete(true);
              }}
            />
          </LinearGradient>
          <AdvancedSection />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },

  mainSection: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 64,
  },
});

export default MainContent;
