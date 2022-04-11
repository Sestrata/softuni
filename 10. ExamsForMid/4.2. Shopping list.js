function solve(input) {

    let list = input.shift().split('!');

    for (command of input) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let productFirst = tokens[1];
        let productSecond = tokens[2];
        
        while (command !== 'Go Shopping!') {
            if (currentCommand === 'Urgent') {
                if (!list.includes(productFirst)) {
                    list.splice(0, 0, productFirst);
                } break;
            } else if (currentCommand === 'Unnecessary') {
                if (list.includes(productFirst)) {
                    let index = list.indexOf(productFirst);
                    list.splice(index, 1);
                } break;
            } else if (currentCommand === 'Correct') {
                if (list.includes(productFirst)) {
                    let index = list.indexOf(productFirst);
                    list.splice(index, 1, productSecond);
                } break
            } else if (currentCommand === 'Rearrange') {
                if (list.includes(productFirst)) {
                    let index = list.indexOf(productFirst);
                    list.splice(index, 1);
                    list.push(productFirst);
                } break;
            }
        }
    }
    console.log(list.join(', '));
}
