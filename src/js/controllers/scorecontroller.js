import Score from '../model/score';
import LeaderBoardNetwork from './leaderboardnetwork';
import CreateScoreRequest from '../request/createscorerequest';

export default class ScoreController {
  leaderboardnetwork;

  constructor(scoresArray) {
    this.scoresArray = scoresArray;
    this.scoresArray.forEach((element, index) => {
      element.updateIndex(index);
    });
  }

  populateDemo(amount) {
    let num = 0;
    while (num < amount) {
      const ranNum = Math.round(Math.random() * (100 - 1) + 1);
      const tempScore = new Score(`Demo ${num + 1}`, ranNum);
      this.scoresArray.push(tempScore);
      num += 1;
    }
    this.leaderboardnetwork = new LeaderBoardNetwork();
    this.leaderboardnetwork.createGame('My new game');
  }

  addScore(playerName, playerScore) {
    const task = new CreateScoreRequest(playerName, playerScore);
    this.leaderboardnetwork.postScores(task);
    //task.updateIndex(this.scoresArray.length);
    this.scoresArray.push(task);
  }
}
