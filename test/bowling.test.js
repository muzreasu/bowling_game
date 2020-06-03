import { calculateTotalScore, Round } from "../main/BowlingGame";

describe('bowling scoring rules', () => {
  test('should return 300 when calculate total score given ten rounds are all strike', () => {
    const game = [];
    for (let i = 0; i < 9; i++) {
      game.push(new Round(10, 0, 0));
    }
    game.push(new Round(10, 10, 10));

    expect(calculateTotalScore(game)).toBe(300);
  })
});
