import {configureStore} from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionnaireSlice';

const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
