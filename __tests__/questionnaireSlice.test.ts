import reducer, {
  setAnswer,
  clearAnswers,
} from '../src/store/slices/questionnaireSlice';

describe('questionnaireSlice', () => {
  const initialState = {
    answers: [],
    score: 0,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle setAnswer', () => {
    const actual = reducer(
      initialState,
      setAnswer({questionId: '1', answer: {label: 'Option A', value: 1}}),
    );
    expect(actual.answers.length).toEqual(1);
    expect(actual.score).toEqual(1);
  });

  it('should handle clearAnswers', () => {
    const actual = reducer(initialState, clearAnswers());
    expect(actual.answers.length).toEqual(0);
    expect(actual.score).toEqual(0);
  });
});
