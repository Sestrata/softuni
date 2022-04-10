function solve(commands) {

    let newCommands = commands.shift().split(' ').map(Number);
    let commandsL = commands.length;

    function add(el) {
        newCommands.push(el);
    }
    function remove(num) {
        newCommands = newCommands.filter(el => el !== num);
    }
    function removeAt(index) {
        newCommands.splice(index, 1);
    }
    function insert(num, index) {
        newCommands.splice(index, 0, num);
    }

    for (let i = 0; i < commandsL; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command === 'Add') {
            add(firstNum);   
        } else if (command === 'Remove') {
            remove(firstNum);
        } else if (command === 'RemoveAt') {
            removeAt(firstNum);
        } else if (command === 'Insert') {
            insert(firstNum, secondNum);  
        }
    }
    console.log(newCommands.join(' '));
}
