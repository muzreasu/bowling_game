export class Round {
  constructor(firstScore, secondScore, thirdScore) {
    this.firstScore = firstScore;
    this.secondScore = secondScore;
    this.thirdScore = thirdScore;
  }
}

export const calculateTotalScore = (game) => {
  let lastRound = game[game.length - 1];
  return game.map((round) => round.firstScore)
    .reduce((accumulateScore, currentScore) => accumulateScore + currentScore * 3) + lastRound.secondScore + lastRound.thirdScore;
};
