const ROUND_FULL_SCORE = 10;

export class Round {
  constructor(firstScore, secondScore, thirdScore) {
    this.firstScore = firstScore;
    this.secondScore = secondScore;
    this.thirdScore = thirdScore;
  }

  getTotalScore() {
    return this.firstScore + this.secondScore;
  }
}

export const calculateTotalScore = (game) => {
  let lastRound = game[game.length - 1];
  let totalScore = 0;
  const isAllStrike = game.every((round) => round.firstScore === ROUND_FULL_SCORE);

  if (isAllStrike) {
    return game.map((round) => round.firstScore)
      .reduce((accumulateScore, currentScore) => accumulateScore + currentScore * 3) + lastRound.secondScore + lastRound.thirdScore;
  }

  for (let i = 0; i < 10; i++) {
    const isSpare = game[i].getTotalScore() === ROUND_FULL_SCORE;
    if (isSpare) {
      if (i === 9 && game[i].thirdScore !== 0) {
        totalScore += ROUND_FULL_SCORE + game[i].thirdScore;
      } else {
        totalScore += ROUND_FULL_SCORE + game[i + 1].firstScore;
      }
    } else {
      totalScore += game[i].getTotalScore();
    }
  }
  return totalScore;
};
