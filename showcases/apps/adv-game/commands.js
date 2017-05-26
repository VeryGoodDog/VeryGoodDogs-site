
function genop1(ic) {
  addToOutput(commands[ic].out1);
  commands[ic].completed = true;
  addToOutput(messages.general.questCompleted+commands[ic].after)
  setAfter(ic);
  setPStatus(0);
  return;
}

function genop2(ic) {
  addToOutput(commands[ic].out2);
  setPStatus(0);
  return;
}

function entertown() {
  if (checkComp('entertown') === true) {
    addToOutput(messages['entertown'].out1);
    commands['entertown'].completed = true;
    addToOutput(messages.general.questCompleted+commands['entertown'].after)
    setAfter('entertown');
    return;
  }
}

function fight() {
  if (checkComp('fight') === true) {
    if (randomNumber(0,10) >= 4) {
      addToOutput(messages['fight'].out1);
      commands['fight'].fightCount++;
      if (commands['fight'].fightCount >= 5) {
        addToOutput(messages.fight.fightEnd);
        addToOutput(messages.general.questCompleted + commands['fight'].after);
        setAfter('fight');
        addToOutput(messages.general.health+setPStatus(player.health[1]));
        return;
      } else {
        addToOutput(messages.fight.fightCount+commands['fight'].fightCount);
        addToOutput(messages.general.health+dPStatus(-1));
        return;
      }
    } else {
      addToOutput(messages['fight'].out2);
      addToOutput(messages.general.health+dPStatus(-2));
      return;
    }
  }
}

function advop1() {
  commands['adv'].active = true;
  addToOutput(messages.adv.out1);
  return;
}

function advop2() {
  addToOutput(messages['adv'].out2);
  setPStatus(-20);
  return;
}

function lookingforop1() {
  addToOutput(messages.lookingfor.out1);
  player.destination = 'finish';
  setAfter('lookingfor');
  addToOutput(messages.general.questCompleted + commands.lookingfor.after);
  return;
}

function lookingforop2() {
  addToOutput(messages.lookingfor.out2);
  player.destination = 'enemies';
  setAfter('lookingfor');
  addToOutput(messages.general.questCompleted + commands.lookingfor.after);
  return;
}

function help(ic) {
  if (ic === undefined) {
    for (var i = 0; i < commands.vldCmds.length; i++) {
      addToOutput(commands.vldCmds[i]);
    }
    commands.active = 'help';
  } else {
    addToOutput(commands[ic].description);
    commands.active = '';
    return;
  }
}

function heal() {
  addToOutput(messages.general.health+dPStatus(2));
}

function helppeople() {
  if (checkComp('helppeople') === true) {
    if (randomNumber(0,10) >= 3) {
      addToOutput(messages['helppeople'].out1);
      commands['helppeople'].helpCount++;
      if (commands['helppeople'].helpCount >= 5) {
        addToOutput(messages['helppeople'].helpEnd);
        addToOutput(messages.general.questCompleted + commands['helppeople'].after);
        setAfter('helppeople');
        addToOutput(messages['helppeople'].helpness + setHelpness(10));
        return;
      } else {
        addToOutput(messages['helppeople'].helpCount + commands['helppeople'].helpCount);
        addToOutput(messages['helppeople'].helpness + setHelpness(3));
        return;
      }
    } else {
      addToOutput(messages['helppeople'].out2);
      addToOutput(messages['helppeople'].helpness + setHelpness(-2));
      return;
    }
  }
}
