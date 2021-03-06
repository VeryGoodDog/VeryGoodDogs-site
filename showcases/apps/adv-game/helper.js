function init() {
  addToOutput(messages.general.starter);
  generateFinish(1,1,10,10);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
}

function restrict(input,min,max) {
  if (input > max) {
    return max;
  } else if (input < min) {
    return min;
  } else {
    return input;
  }
}

function debug() {
  console.log('------');
  console.log(lastCommand);
  console.log('------');
  console.log(commands);
  console.log('------');
  console.log(pc());

}

function addToCommandList(input) {
  lastCommand.count++;
  lastCommand.list[lastCommand.count] = input;
}

function getCleanInput() {
  var out = [];
  var invalid = false;
  var temp = $('#commandLine').val().trim().toLowerCase().split(" ");
  for (var i = 0; i < temp.length; i++) {
    for (var o = 0; o < commands.vldCmds.length; o++) {
      if (commands.vldCmds[o] === temp[i]) {
        out[i] = temp[i];
      }
    }
  }
  return out;
}

function addToOutput(input) {
  if (input != undefined) {
    $('#output').prepend('\n'+input+'\n');
    return;
  }
}

function pc() {
  if (lastCommand.list[lastCommand.count-1]) {
    return lastCommand.list[lastCommand.count-1];
  } else {
    return lastCommand.recent;
  }

}

function clearOutput() {
  $('#output').val('');
}

function clearInput() {
  $('#commandLine').val('');
}

function checkType(ic) {
  return (commands[ic].type === 'quest' || commands[ic].type === 'response' || commands[ic].type === 'gen');
}

function setAfter(ic) {
  if (commands[ic].after != 'none') {
    for (var i = 0; i < commands[ic].after.length; i++) {
      commands[commands[ic].after[i]].require = 'met';
    }
  }
}

function setPStatus(v) {
  return player.health[0] = restrict(v,0,player.health[1]);
}

function dPStatus(d) {
   return player.health[0] = setPStatus(player.health[0]+d);
}

function setHelpness(v) {
  return player.helpness = v;
}

function dHelpness(d) {
  return player.helpness = setHelpness(player.helpness+d);
}

function generateFinish(x1,y1,x2,y2) {
  createObject('finish',randomNumber(x1,x2),randomNumber(y1,y2));
}

function createObject(type,x,y) {
  advMap.map[type] = [x,y];
  return;
}

function checkLocation(loc,message) {
  if (message == undefined) {
    if (advMap.map[loc][0] == player.coords[0] && advMap.map[loc][1] == player.coords[1]) {
      return true;
    } else {
      return false;
    }
  } else {
    if (advMap.map[loc][0] == player.coords[0] && advMap.map[loc][1] == player.coords[1]) {
      return message;
    } else {
      return;
    }
  }
}

function checkComp(ic) {
  if (commands[ic].require === 'met') {
    return true;
  } else if (commands[ic].require != ['met']) {
    addToOutput(messages.general.questIncomplete+commands[ic].require);
    return false;
  } else if ((commands[ic].completed === true)) {
    addToOutput(messages.general.questAlreadyCompleted+ic);
    return 'met';
  }
}
