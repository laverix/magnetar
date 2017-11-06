import { MillisToMinutesPipe } from './millis-to-minutes.pipe';

describe('MillisToMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MillisToMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
