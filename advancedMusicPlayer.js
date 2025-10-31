class AdvancedMusicPlayer extends MusicPlayer {
    #equalizerPreset;

    constructor(volume = 50, currentTrack = "", isPlaying = false, equalizerPreset = "Normal") {
        super(volume, currentTrack, isPlaying);
        this.#equalizerPreset = equalizerPreset;
    }

    get equalizerPreset() {
        return this.#equalizerPreset;
    }

    set equalizerPreset(value) {
        const presets = ["Normal", "Rock", "Jazz", "Classical", "Bass Boost", "Pop"];
        if (presets.includes(value)) {
            this.#equalizerPreset = value;
        } else {
            console.error('Invalid equalizer preset');
        }
    }

    show() {
        const output = `Advanced Music Player: Track: "${this.currentTrack}", Volume: ${this.volume}, Playing: ${this.isPlaying}, EQ: ${this.#equalizerPreset}`;
        console.log(output);
        return output;
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        const message = 'AdvancedMusicPlayer instance deleted';
        console.log(message);
        return message;
    }

    copy() {
        return this;
    }

    static clone(player) {
        return new AdvancedMusicPlayer(player.volume, player.currentTrack, player.isPlaying, player.equalizerPreset);
    }
}