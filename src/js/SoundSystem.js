export default class SoundSystem {
  constructor() {
    this.tracks = {};
    this.audioCtx = new AudioContext();
    this.currentTrack = null;
  }

  addSound(url, name) {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => this.audioCtx.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        this.tracks[name] = audioBuffer;
      }).catch(e=>{console.log(e)});
  }

  

  playSound(name){
    if(this.currentTrack){
        this.currentTrack.source.stop();
    }

    let audio = this.audioCtx.createBufferSource();
    audio.buffer = this.tracks[name];
    audio.connect(this.audioCtx.destination);
    audio.start();
    this.currentTrack = {source: audio, name: name}
  }
}
