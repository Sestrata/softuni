function solve(input) {

    class Song {
        constructor(playList, name, time) {
            this.playList = playList,
                this.name = name,
                this.time = time
        }
        print() {
            console.log(this.name);
        }
    }
    let numberOfSongs = input.shift();
    let desiredPlayList = input.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = input[i];
        let currentArrey = currentInput.split('_');
        let currentSong = new Song(currentArrey[0], currentArrey[1], currentArrey[2]);
        songs.push(currentSong);
    }

    if (desiredPlayList === "all") {
        songs.forEach(s => s.print());
    } else {
        songs.filter(s => s.playList === desiredPlayList)
            .forEach(s => s.print());
    }
}
