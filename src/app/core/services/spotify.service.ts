import { Injectable, signal } from '@angular/core';
import { MusicTrack } from '@data/schema/spotify/music-track'; // Adjust the path if needed

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  music = signal<MusicTrack | null>(null); // Signal to hold the currently playing song
  progressTime = signal<number>(0); // Signal to track progress time
  totalDuration = signal<number>(0); // Signal to track total duration

  private songs: MusicTrack[] = []; // Array to hold all songs
  private currentIndex = 0; // Index of the currently playing song

  constructor() {
    this.loadStaticSongs();
  }

  loadStaticSongs(): void {
    // Hardcoded data for two Coldplay songs
    this.songs = [
      {
        track: {
          name: 'Yellow',
          artist: 'Coldplay',
          url: 'https://open.spotify.com/track/3zqEf2yZwYgkx81uQ6Z7Jh', // Example URL
          image: {
            url: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG', // Example image URL
            height: 64,
            width: 64,
          },
        },
        playedAt: new Date().toISOString(),
        isPlaying: true, // Simulate "Now Playing"
        progressTime: 30000, // Simulate progress (30 seconds)
        durationTime: 230000, // Duration in milliseconds (example: 3 minutes 50 seconds)
      },
      {
        track: {
          name: 'Fix You',
          artist: 'Coldplay',
          url: 'https://open.spotify.com/track/1WlXtRlzxb0cL1FGmgVHvZ', // Example URL
          image: {
            url: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Coldplay_-_Fix_You.jpg', // Example image URL
            height: 64,
            width: 64,
          },
        },
        playedAt: new Date().toISOString(),
        isPlaying: false, // Simulate "Recently Played"
        progressTime: 0,
        durationTime: 290000, // Duration in milliseconds (example: 4 minutes 50 seconds)
      },
    ];

    // Set the first song as the currently playing song
    this.setCurrentSong(0);
  }

  setCurrentSong(index: number): void {
    const song = this.songs[index];
    if (song) {
      this.music.set(song);
      this.progressTime.set(song.progressTime);
      this.totalDuration.set(song.durationTime);

      // Start simulating progress for the new song
      this.startProgressTracking();
    }
  }

  startProgressTracking(): void {
    setInterval(() => {
      const currentSong = this.music();
      if (currentSong && currentSong.isPlaying) {
        const currentProgress = this.progressTime() + 1000;
        if (currentProgress < this.totalDuration()) {
          this.progressTime.set(currentProgress);
        } else {
          // Stop progress when the song ends
          this.music.update((song) => {
            if (song) {
              return { ...song, isPlaying: false }; // Mark the song as finished
            }
            return null;
          });

          // Move to the next song
          this.playNextSong();
        }
      }
    }, 1000);
  }

  playNextSong(): void {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex < this.songs.length) {
      this.currentIndex = nextIndex;
      this.setCurrentSong(nextIndex);
    } else {
      // If there are no more songs, stop playback
      this.music.set(null);
      this.progressTime.set(0);
      this.totalDuration.set(0);
    }
  }
}