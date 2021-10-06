import Score from '../model/score';

export default class ScoreController {
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
  }

  addScore(task) {
    task.updateIndex(this.scoresArray.length);
    this.scoresArray.push(task);
  }
}
