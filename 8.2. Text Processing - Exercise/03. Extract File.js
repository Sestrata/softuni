function solve(text) {

    let index = text.lastIndexOf('\\');
    let fileName = text.substring(index + 1);
    let arr = fileName.split('.');
    let extension = arr.pop();
    let template = arr.join('.');

    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);
}
