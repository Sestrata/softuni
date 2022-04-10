function solve(input) {

    let library = {};
    let shelves = [];
    let booksAndAuthors = [];

    while (input.length > 0) {
        let tokens = input.shift();

        if (tokens.includes('->')) {
            let shelfID = tokens.split(' -> ');
            let curID = shelfID[0];
            let idGenre = shelfID[1];

            if (!shelves.includes(curID)) {
                shelves.push(curID);
                shelves.push(idGenre);
            }

        } else if (tokens.includes(': ')) {
            tokens = tokens.split(', ');
            let nameBookAndAuthor = tokens.shift();
            let genre = tokens.pop();

            if (shelves.includes(genre)) {
                booksAndAuthors.push(nameBookAndAuthor);
            }
            for (let i = 0; i < shelves.length; i++) {
                let nameGenre = shelves[i];

                if (nameGenre === genre) {
                    if (!library.hasOwnProperty(nameGenre)) {
                        library[nameGenre] = [];
                    }
                    library[nameGenre].push(
                        nameBookAndAuthor,
                    ); break;
                }
            }
        }
    }
    let sortedShelves = Object.entries(library).sort(([namegenreA, booksnumA], [namegenreB, booksnumB]) => booksnumB.length - booksnumA.length);
 
    for (let shelf of sortedShelves) {
        let genre = shelf[0];
        let books = shelf[1];
        let sortedBooks = books.sort((a, b) => a.localeCompare(b));
        if (shelves.includes(genre)) {
            let id = shelves[shelves.indexOf(genre) - 1];
            let booksCount = sortedBooks.length;
            console.log(`${id} ${genre}: ${booksCount}`);
            for (let book of sortedBooks) {
                console.log(`--> ${book}`);
            }
        }
    }
}
