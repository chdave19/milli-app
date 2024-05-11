export default class SoundSystem {
  constructor() {
    this.tracks = {};
    this.audioCtx = new AudioContext();
    this.currentTrack = null;
  }

  addSound(url, name) {
    console.log('track-about-to-be-added')
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => this.audioCtx.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        this.tracks[name] = audioBuffer;
        console.log('track-added')
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
    console.log('sound playing')
  }

  stopSound(){
    if(this.currentTrack){
      this.currentTrack.source.stop();
      this.currentTrack = null;
    }
  }
}
