import {getRiskData} from '../src/utils/calculateRisk';
import {Colors} from '../src/theme';

describe('getRiskData', () => {
  it('returns Low risk category for scores <= 18', () => {
    const result = getRiskData(18);
    expect(result).toEqual({
      riskCategory: 'Low',
      color: Colors.textGreen,
      progress: 0.33,
    });
  });

  it('returns Medium risk category for scores between 19 and 29', () => {
    const result = getRiskData(25);
    expect(result).toEqual({
      riskCategory: 'Medium',
      color: Colors.warning,
      progress: 0.66,
    });
  });

  it('returns High risk category for scores > 29', () => {
    const result = getRiskData(30);
    expect(result).toEqual({
      riskCategory: 'High',
      color: Colors.alert,
      progress: 1,
    });
  });
});
