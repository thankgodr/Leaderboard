import ScoreController from './controllers/scorecontroller';
import '../css/style.css';

let scoreController;

function buildDemoView() {
  scoreController = new ScoreController([]);
  scoreController.populateDemo(5);
  let domScoresHolders = document.getElementById('scoreHolder');
  scoreController.scoresArray.forEach((element, loopIndex) => {
    let singleScore = document.createElement('li');
    singleScore.className = loopIndex % 2 == 0 ? 'list-group-item' : 'list-group-item disabled';
    let textNode = document.createTextNode(`Name: ${element.name} Score: ${element.score}`);
    singleScore.appendChild(textNode);
    domScoresHolders.appendChild(singleScore);
  });
}

buildDemoView();
