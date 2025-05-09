import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface IQuestionButtonsProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const QuestionButtons: FC<IQuestionButtonsProps> = ({
  question,
  options,
  onAnswer,
}) => {
  return (
    <>
      <Text
        style={{
          marginBottom: 15,
          fontWeight: "700",
        }}
      >
        {question}
      </Text>
      <View
        style={{
          marginBottom: -10,
        }}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#fff",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 2,

              marginBottom: 10,
            }}
            onPress={() => onAnswer(option)}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 12,
                textAlign: "center",
                lineHeight: 17,
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default QuestionButtons;
