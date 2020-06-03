import { calculateTotalScore, Round } from "../main/BowlingGame";

describe('bowling scoring rules', () => {
  test('should return 300 when calculate total score given ten rounds are all strike', () => {
    const game = [];
    for (let i = 0; i < 9; i++) {
      game.push(new Round(10, 0, 0));
    }
    game.push(new Round(10, 10, 10));

    expect(calculateTotalScore(game)).toBe(300);
  });

  test('should return 62 when calculate total score given ten rounds are [(1,4),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(1,4)]', () => {
    const game = [];
    for (let i = 0; i < 2; i++) {
      game.push(new Round(1, 4, 0));
      game.push(new Round(3, 5, 0));
      game.push(new Round(4, 4, 0));
      game.push(new Round(2, 3, 0));
      game.push(new Round(1, 4, 0));
    }

    expect(calculateTotalScore(game)).toBe(62);
  });
});
