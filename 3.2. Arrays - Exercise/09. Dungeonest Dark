function solve(input) {
  let rooms = input[0].split("|");
  let startCoins = 0;
  let bestRoom = 0;
  let startHealth = 100;

  for (let i = 0; i < rooms.length; i++) {
    let oneRoom = rooms[i].split(' ');
    let monster = oneRoom[0];
    let coins = +oneRoom[1];

    switch (monster) {
      case "potion":
        if (startHealth + coins > 100) {
          console.log(`You healed for ${100 - startHealth} hp.`);
          startHealth = 100;
        } else {
          console.log(`You healed for ${coins} hp.`);
          startHealth += coins;
        }
        console.log(`Current health: ${startHealth} hp.`);
        bestRoom++;
        break;

      case "chest":
        startCoins += coins;
        console.log(`You found ${coins} coins.`);
        bestRoom++;
        break;

      default:
        bestRoom++;
        startHealth -= coins;
        if (startHealth > 0) {
          console.log(`You slayed ${monster}.`);
        } else {
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${bestRoom}`);
          return;
        }
        break;
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${startCoins}`);
  console.log(`Health: ${startHealth}`);
}
