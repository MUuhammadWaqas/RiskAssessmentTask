import {Colors} from '../theme';

export const getRiskData = (score: number) => {
  if (score <= 18) {
    return {
      riskCategory: 'Low',
      color: Colors.textGreen,
      progress: 0.33,
    };
  }
  if (score <= 29) {
    return {
      riskCategory: 'Medium',
      color: Colors.warning,
      progress: 0.66,
    };
  } else {
    return {
      riskCategory: 'High',
      color: Colors.alert,
      progress: 1,
    };
  }
};
