class MusicPlayer {
    #volume;
    #currentTrack;
    #isPlaying;

    constructor(volume = 50, currentTrack = "", isPlaying = false) {
        this.#volume = volume;
        this.#currentTrack = currentTrack;
        this.#isPlaying = isPlaying;
    }

    get volume() {
        return this.#volume;
    }

    get currentTrack() {
        return this.#currentTrack;
    }

    get isPlaying() {
        return this.#isPlaying;
    }

    set volume(value) {
        if (typeof value === 'number' && value >= 0 && value <= 100) {
            this.#volume = value;
        } else {
            console.error('Volume must be a number between 0 and 100');
        }
    }

    set currentTrack(value) {
        if (typeof value === 'string') {
            this.#currentTrack = value;
        } else {
            console.error('Track name must be a string');
        }
    }

    set isPlaying(value) {
        if (typeof value === 'boolean') {
            this.#isPlaying = value;
        } else {
            console.error('isPlaying must be a boolean');
        }
    }

    show() {
        const output = `Music Player: Track: "${this.#currentTrack}", Volume: ${this.#volume}, Playing: ${this.#isPlaying}`;
        console.log(output);
        return output;
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        const message = 'MusicPlayer instance deleted';
        console.log(message);
        return message;
    }

    copy() {
        return this;
    }

    #normalizeVolume() {
        if (this.#volume > 80) {
            this.#volume = 80;
            console.log('Volume normalized to 80 for safety');
        }
    }

    safeVolumeSet(volume) {
        this.volume = volume;
        this.#normalizeVolume();
    }

    static clone(player) {
        return new MusicPlayer(player.volume, player.currentTrack, player.isPlaying);
    }
}