"use client";

import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import QuestionButtons from "@/components/MainContent/QuestionButtons";

interface IQuestionnaireProps {
  onComplete: (selectedColor: string) => void;
}

const questions = [
  {
    question: "1. How did you hear about Marshall?",
    options: [
      "From Facebook/Instagram.",
      "From friends or family.",
      "From news, articles, blogs.",
    ],
  },
  {
    question: "2. What size room do you plan to use the speaker in?",
    options: [
      "Small room space.",
      "Medium-sized room or office.",
      "Large open space.",
    ],
  },
  {
    question: "3. What features are important to you in the speaker?",
    options: [
      "Bluetooth connectivity.",
      "High sound quality.",
      "Ability to connect to other devices (such as a phone or television).",
    ],
  },
  {
    question: "4. What colour of speaker do you prefer?",
    options: ["Black.", "Cream.", "Brown."],
  },
];

const Questionnaire: FC<IQuestionnaireProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [, setSelectedColor] = useState<string>("");

  const handleAnswer = (answer: string) => {
    // Если это вопрос №4 (индекс 3), сохраняем цвет
    if (currentQuestionIndex === 3) {
      setSelectedColor(answer);
      onComplete(answer); // передаём выбранный цвет наверх
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {currentQuestion && (
        <QuestionButtons
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
});

export default Questionnaire;
