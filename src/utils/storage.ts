import { QuizResult } from '../types';

const STORAGE_KEYS = {
  LEARNED_VERBS: 'irregular_verbs_learned_v1',
  VIEWED_VERBS: 'irregular_verbs_viewed_v1',
  QUIZ_HISTORY: 'irregular_verbs_quiz_history_v1',
  CURRENT_DAY: 'irregular_verbs_current_day_v1',
};

export function getLearnedVerbIds(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LEARNED_VERBS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLearnedVerbIds(ids: number[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LEARNED_VERBS, JSON.stringify(ids));
  } catch (e) {
    console.error(e);
  }
}

export function toggleLearnedVerbId(id: number): boolean {
  const current = getLearnedVerbIds();
  const exists = current.includes(id);
  const updated = exists ? current.filter(item => item !== id) : [...current, id];
  saveLearnedVerbIds(updated);
  return !exists;
}

export function getViewedVerbIds(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VIEWED_VERBS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markVerbViewed(id: number): void {
  try {
    const current = getViewedVerbIds();
    if (!current.includes(id)) {
      localStorage.setItem(STORAGE_KEYS.VIEWED_VERBS, JSON.stringify([...current, id]));
    }
  } catch (e) {
    console.error(e);
  }
}

export function getSavedCurrentDay(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_DAY);
    const parsed = raw ? parseInt(raw, 10) : 1;
    return isNaN(parsed) || parsed < 1 ? 1 : parsed;
  } catch {
    return 1;
  }
}

export function saveCurrentDay(day: number): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, day.toString());
  } catch (e) {
    console.error(e);
  }
}

export function getQuizHistory(): QuizResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(result: QuizResult): void {
  try {
    const history = getQuizHistory();
    const updated = [result, ...history].slice(0, 50); // keep last 50 attempts
    localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
}

export function clearQuizHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
  } catch (e) {
    console.error(e);
  }
}

// Gentle Web Audio API sound synthesizer
export function playSound(type: 'correct' | 'wrong' | 'click' | 'complete' | 'tick'): void {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } else if (type === 'complete') {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.25);
      });
    }
  } catch {
    // AudioContext blocked or not supported
  }
}
