interface Option {
  label: string;
  value: number;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

interface QuestionCardProps {
  item: Question;
  selectedOption?: Option | null;
}

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  width?: string | number;
  backgroundColor?: string;
  textColor?: string;
  testID?:string
}

interface RiskCategory {
  riskCategory: string;
  color: string;
  progress: number;
}

type RootStackParamList = {
  Result: {score: number; riskCategory: RiskCategory};
};

interface Answer {
  questionId: string;
  answer: {label: string; value: number};
}

interface QuestionnaireState {
  answers: Answer[];
  score: number;
}
