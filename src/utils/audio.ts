// Web Audio API Procedural Audio Synthesizer for "Schrodinger's Love"
// Generates beautiful lo-fi piano chords, drones, and arcade-style retro sound effects in real-time.

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private bgmOscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private currentBgmName: string | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.5; // Scale 0 to 1

  constructor() {
    // Lazy initialize to bypass browser autopilot audio blocks
  }

  private initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
    if (mute) {
      this.stopBGM();
    } else if (this.currentBgmName) {
      this.playBGM(this.currentBgmName);
    }
  }

  setVolume(vol: number) {
    this.volume = vol;
    // Realtime adjustment can be done if current loop gain node is held
  }

  playSE(name: string) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      
      if (name === 'item_drop' || name === 'eraser') {
        // High pitch slide down mimicking eraser drop
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.exponentialRampToValueAtTime(150, t + 0.35);

        gain.gain.setValueAtTime(0.15 * this.volume, t);
        gain.gain.linearRampToValueAtTime(0, t + 0.35);

        osc.start(t);
        osc.stop(t + 0.35);
      } 
      else if (name === 'heartbeat') {
        // Deep sub pulse twice for heart thumping
        const makeThump = (delay: number) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(60, t + delay);
          osc.frequency.exponentialRampToValueAtTime(25, t + delay + 0.2);

          gain.gain.setValueAtTime(0.4 * this.volume, t + delay);
          gain.gain.linearRampToValueAtTime(0, t + delay + 0.2);

          osc.start(t + delay);
          osc.stop(t + delay + 0.2);
        };

        makeThump(0);
        makeThump(0.25);
      } 
      else if (name === 'page_turn') {
        // Soft white noise-like puff for page flip
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, t);
        osc.frequency.linearRampToValueAtTime(30, t + 0.15);

        gain.gain.setValueAtTime(0.08 * this.volume, t);
        gain.gain.linearRampToValueAtTime(0, t + 0.15);

        osc.start(t);
        osc.stop(t + 0.15);
      } 
      else if (name === 'decision' || name === 'click') {
        // Soft resonant high-toned ping
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        gain.gain.setValueAtTime(0.12 * this.volume, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

        osc.start(t);
        osc.stop(t + 0.3);
      }
      else if (name === 'unlock') {
        // Rising sparkly bells
        [523, 659, 783, 1046].forEach((freq, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t + idx * 0.08);
          gain.gain.setValueAtTime(0.08 * this.volume, t + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.3);

          osc.start(t + idx * 0.08);
          osc.stop(t + idx * 0.08 + 0.35);
        });
      }
    } catch (e) {
      console.warn('Procedural sound triggers are locked behind navigator policy.', e);
    }
  }

  playBGM(name: string) {
    if (this.isMuted) {
      this.currentBgmName = name;
      return;
    }
    
    if (this.currentBgmName === name && this.bgmOscillators.length > 0) {
      return; // Already playing
    }

    this.stopBGM();
    this.currentBgmName = name;

    try {
      this.initContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;

      // Define lo-fi mood structures for different scenes!
      let chordNotes: number[] = [261.63, 329.63, 392.00, 493.88]; // Cmaj7 base
      let tempo = 1.2; // Speed of change
      let waveType: 'sine' | 'triangle' = 'triangle';

      if (name === 'title' || name === 'hidden') {
        // Atmospheric Gmaj9 arpeggio theme
        chordNotes = [196.00, 246.94, 293.66, 392.00, 440.00]; 
        tempo = 2.0;
        waveType = 'sine';
      } else if (name === 'library') {
        // Warm library quiet piano chord block (Amin9, D7)
        chordNotes = [220.00, 261.63, 329.63, 392.00, 440.00];
        tempo = 3.5;
        waveType = 'sine';
      } else if (name === 'classroom') {
        // Steady lively campus chords
        chordNotes = [261.63, 329.63, 392.00, 440.00]; // F to G vibe
        tempo = 1.5;
        waveType = 'triangle';
      } else if (name === 'lunch') {
        // Bright whimsical major chords
        chordNotes = [293.66, 369.99, 440.00, 587.33]; // Dmaj7
        tempo = 1.0;
        waveType = 'sine';
      } else if (name === 'honsitsu') {
        // Vintage VHS drone lo-fi
        chordNotes = [110.00, 164.81, 220.00, 293.66]; // D-minor drone
        tempo = 4.0;
        waveType = 'triangle';
      } else if (name === 'end1' || name === 'end4') {
        // Sparkling love resolution
        chordNotes = [329.63, 392.00, 523.25, 659.25, 783.99]; // High C Major sparkling
        tempo = 1.8;
        waveType = 'sine';
      } else if (name === 'end2' || name === 'end3') {
        // Bittersweet melancholic resolution
        chordNotes = [146.83, 220.00, 261.63, 329.63, 392.00]; // Amin/D7 melancholic
        tempo = 2.5;
        waveType = 'sine';
      } else if (name === 'end5') {
        // Cold echo silent block
        chordNotes = [55.00, 82.41, 110.00]; // Low unresolved bass
        tempo = 5.0;
        waveType = 'sine';
      }

      // Launch procedurally alternating lofi loop using scheduler
      chordNotes.forEach((rootFreq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = waveType;
        osc.frequency.setValueAtTime(rootFreq, t);

        // Slow breathing gain modulation to form organic chords in lo-fi style
        const baseAmp = 0.05 * this.volume;
        gain.gain.setValueAtTime(0, t);
        
        const scheduleLoop = (cycleStart: number) => {
          if (!this.ctx) return;
          // Slowly fadeIn and fadeOut each voice at offset times
          const localOffset = idx * 0.35;
          const onTime = cycleStart + localOffset;
          gain.gain.linearRampToValueAtTime(0, onTime);
          gain.gain.linearRampToValueAtTime(baseAmp, onTime + tempo * 0.4);
          gain.gain.linearRampToValueAtTime(baseAmp * 0.4, onTime + tempo * 0.6);
          gain.gain.linearRampToValueAtTime(0, onTime + tempo * 0.95);
        };

        // Schedule first 3 iterations manually to create steady pad sound
        for (let loopIdx = 0; loopIdx < 20; loopIdx++) {
          scheduleLoop(t + loopIdx * (tempo * 2));
        }

        osc.start(t);
        this.bgmOscillators.push({ osc, gain });
      });

    } catch (e) {
      console.warn('Synthesizer BGM init failed due to background suspension.', e);
    }
  }

  stopBGM() {
    this.bgmOscillators.forEach(({ osc }) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    this.bgmOscillators = [];
  }
}

export const audio = new SoundSynthesizer();
