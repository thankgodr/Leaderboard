import ScoreController from './controllers/scorecontroller';
import LeaderBoardNetwork from './controllers/leaderboardnetwork';
import '../css/style.css';
import CreateScoreRequest from './request/createscorerequest';

const scoreController = new ScoreController([]);
let gameId = localStorage.getItem('gameID');
let leaderboardnetwork = null;

const refereshList = () => {
  const domScoresHolders = document.getElementById('scoreHolder');
  domScoresHolders.innerHTML = '';
  leaderboardnetwork.fetchScores().then((outcome) => {
    let res = JSON.parse(outcome);
    scoreController.scoresArray = res.result;
    //scoreController.populateDemo(5);
    scoreController.scoresArray.forEach((element, loopIndex) => {
      const singleScore = document.createElement('li');
      singleScore.className = loopIndex % 2 === 0 ? 'list-group-item' : 'list-group-item disabled';
      const textNode = document.createTextNode(`Name: ${element.user} Score: ${element.score}`);
      singleScore.appendChild(textNode);
      domScoresHolders.appendChild(singleScore);
    });
  });
};

const buildDemoView = () => {
  console.log(gameId);
  if (gameId == null || gameId.length == 0) {
    console.log('new game created');
    leaderboardnetwork = new LeaderBoardNetwork();
    this.leaderboardnetwork.createGame('My new game');
  } else {
    console.log('new game not created');
    leaderboardnetwork = new LeaderBoardNetwork(gameId);
  }
  refereshList();
};

buildDemoView();

//Buttons
const subitBtn = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');

//Event listerners
subitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputPlayerName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  let response = leaderboardnetwork.postScores(new CreateScoreRequest(inputPlayerName, inputScore));
  console.log(
    response.then((outcome) => {
      console.log(outcome);
    })
  );
});

refreshBtn.addEventListener('click', (e) => {
  refereshList();
});
