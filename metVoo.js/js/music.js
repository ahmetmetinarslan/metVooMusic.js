class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Elizabhet","Metvoo Müzik","example.jpg","Elizabhet.mp3"),
    new Music("Hyper-2","Metvoo Müzik","example.jpg","Hyper-2.mp3"),
    new Music("Into-The-Night","Metvoo Müzik","example.jpg","Into-The-Night.mp3")
];