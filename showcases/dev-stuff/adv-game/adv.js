function getPlayerCoords() {
  return player.coords;
}

function setPlayerCoords(x,y) {
  player.coords = [x,y];
  return player.coords;
}

function movePlayerUp(d) {
  return setPlayerCoords(player.coords[0]+d,player.coords[1]+0);
}

function movePlayerRight(d) {
  return setPlayerCoords(player.coords[0]+0,player.coords[1]+d);
}

function movePlayerDown(d) {
  return setPlayerCoords(player.coords[0]-d,player.coords[1]+0);
}

function movePlayerLeft(d) {
  return setPlayerCoords(player.coords[0]+0,player.coords[1]-d);
}

function movePlayer(dir,d) {
  switch (dir) {
    case 'up':
      movePlayerUp(d);
      addToOutput(getPlayerCoords());
      addToOutput(checkLocation(player.destination, messages.adv.reach + player.destination));
      break;
    case 'right':
      movePlayerRight(d);
      addToOutput(getPlayerCoords());
      addToOutput(checkLocation(player.destination, messages.adv.reach + player.destination));
      break;
    case 'down':
      movePlayerDown(d);
      addToOutput(getPlayerCoords());
      addToOutput(checkLocation(player.destination, messages.adv.reach + player.destination));
      break;
    case 'left':
      movePlayerLeft(d);
      addToOutput(getPlayerCoords());
      addToOutput(checkLocation(player.destination, messages.adv.reach + player.destination));
      break;
    default:
      addToOutput(messages.adv.advActive);
  }
}

function getDistance(target) {
  return distance(advMap.map[target][0],player.coords[0],advMap.map[target][1],player.coords[1])
}

function adventureDistance() {
  addToOutput(messages.adv.advGoalDistance+Math.round(getDistance(player.destination)));
}

function setSpeed(v) {
  if (v >= 0) {
    player.speed = v;
    return player.speed;
  } else {
    player.speed = 0;
    return player.speed;
  }
}

function dSpeed(d) {
  setSpeed(player.speed + d);
  return player.speed;
}
