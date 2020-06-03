const ROUND_FULL_SCORE = 10;

export class Round {
  constructor(firstScore, secondScore, thirdScore) {
    this.firstScore = firstScore;
    this.secondScore = secondScore;
    this.thirdScore = thirdScore;
  }

  isStrike() {
    return this.firstScore === ROUND_FULL_SCORE;
  }

  getTotalScore() {
    return this.firstScore + this.secondScore;
  }
}

export const calculateLastRound = (game) => {
  return game.firstScore + game.secondScore + game.thirdScore;
};

export const calculateTotalScore = (game) => {
  let lastRound = game[game.length - 1];
  let totalScore = 0;
  const isAllStrike = game.every((round) => round.firstScore === ROUND_FULL_SCORE);

  if (isAllStrike) {
    return game.map((round) => round.firstScore)
      .reduce((accumulateScore, currentScore) => accumulateScore + currentScore * 3) + lastRound.secondScore + lastRound.thirdScore;
  }

  for (let i = 0; i < 9; i++) {
    const isSpare = game[i].getTotalScore() === ROUND_FULL_SCORE;
    if (game[i].isStrike()) {
      if (game[i + 1].isStrike()) {
        totalScore += ROUND_FULL_SCORE * 2 + game[i + 2].firstScore;
      } else {
        totalScore += ROUND_FULL_SCORE + game[i + 1].firstScore + game[i + 1].secondScore;
      }
    } else if (isSpare) {
        totalScore += ROUND_FULL_SCORE + game[i + 1].firstScore;
    } else {
      totalScore += game[i].getTotalScore();
    }
  }

  totalScore += calculateLastRound(lastRound);
  return totalScore;
};
