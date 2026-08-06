// Web Audio API Sound Synthesizer for UI Interactivity

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.isMuted = true; // muted by default until user enables audio
    this.bgOscillator = null;
    this.bgGain = null;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.initContext();
    this.isMuted = !this.isMuted;
    
    if (this.isMuted) {
      this.stopAmbientSound();
    } else {
      this.playHoverSound();
      this.startAmbientSound();
    }
    
    return !this.isMuted;
  }

  playHoverSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio errors on un-interacted DOMs
    }
  }

  playClickSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.12);
      
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.12);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch (e) {
      // Ignore
    }
  }

  playSuccessSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        const startTime = this.audioCtx.currentTime + idx * 0.08;
        gain.gain.setValueAtTime(0.03, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.2);
        
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.2);
      });
    } catch (e) {
      // Ignore
    }
  }

  startAmbientSound() {
    if (this.isMuted || this.bgOscillator) return;
    try {
      this.initContext();
      this.bgOscillator = this.audioCtx.createOscillator();
      this.bgGain = this.audioCtx.createGain();
      
      this.bgOscillator.type = 'sine';
      this.bgOscillator.frequency.setValueAtTime(110, this.audioCtx.currentTime); // Low A note
      
      this.bgGain.gain.setValueAtTime(0.005, this.audioCtx.currentTime); // Very soft low ambient drone
      
      this.bgOscillator.connect(this.bgGain);
      this.bgGain.connect(this.audioCtx.destination);
      
      this.bgOscillator.start();
    } catch (e) {
      // Ignore
    }
  }

  stopAmbientSound() {
    if (this.bgOscillator) {
      try {
        this.bgGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.3);
        setTimeout(() => {
          if (this.bgOscillator) {
            this.bgOscillator.stop();
            this.bgOscillator = null;
          }
        }, 300);
      } catch (e) {
        this.bgOscillator = null;
      }
    }
  }
}

export const soundManager = new SoundManager();
