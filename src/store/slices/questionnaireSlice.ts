import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: QuestionnaireState = {
  answers: [],
  score: 0,
};

const calculateScore = (answers: Answer[]) => {
  return answers.reduce((total, answer) => total + answer?.answer?.value, 0);
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<Answer>) => {
      const index = state?.answers.findIndex(
        ans => ans?.questionId === action?.payload?.questionId,
      );
      if (index === -1) {
        state?.answers.push(action?.payload);
      } else {
        state.answers[index] = action?.payload;
      }
      state.score = calculateScore(state?.answers);
    },
    clearAnswers: state => {
      state.answers = [];
      state.score = 0;
    },
  },
});

export const {setAnswer, clearAnswers} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
