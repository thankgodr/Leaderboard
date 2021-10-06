import Score from '../model/score';
export default class ScoreController {
  constructor(scoresArray) {
    this.scoresArray = scoresArray;
  }

  populateDemo(amount) {
    let num = 0;
    while (num < amount) {
      let tempScore = new Score(`Demo ${num + 1}`);
      this.scoresArray.push(tempScore);
      num++;
    }
  }
}
