import { useEffect, useState } from "react";

async function searchTracks(artists) {
  const requests = artists.map(async (artist) => {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        artist
      )}&media=music&entity=song&limit=5`
    );

    if (!res.ok) {
      throw new Error("itunes search failed");
    }

    const data = await res.json();

    return data.results;
  });

  const results = await Promise.all(requests);

  // Combine all artist results
  const allTracks = results.flat();

  // Remove duplicate songs
  const uniqueTracks = allTracks.filter(
    (track, index, self) =>
      index === self.findIndex((t) => t.trackId === track.trackId)
  );

  return uniqueTracks.slice(0, 10);
}

export default function Result({ moods, setError, error }) {
  const [tracks, setTracks] = useState([]);

  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTrackId, setPlayingTrackId] = useState(null);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!moods?.artists?.length) return;
     console.log("Artists being searched:", moods.artists);


    setTracks([]);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);

    searchTracks(moods.artists)
      .then(setTracks)
      //  console.log("iTunes tracks:", setTracks)
      
      .catch(() => setError("could not fetch tracks. Try again."))
      console.error("iTunes ERROR:");
  }, [moods]);

  if (!moods) {
    return (
      <div className="min-h-screen bg-[#02040F] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-5xl mb-5">🎧</div>

          <h1 className="text-2xl text-purple-300 font-semibold">
            Your vibe is waiting.
          </h1>

          <p className="mt-2 text-gray-500">
            Search your mood first and let Emotune find your soundtrack.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02040F] text-white py-10">

      {/* ================= MOOD HEADER ================= */}

      <section className="mx-6 md:mx-10 lg:mx-16">

        <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-[#16102D] via-[#0D0B20] to-[#16091C] px-7 py-8 md:px-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

          <div className="absolute -left-20 bottom-[-100px] h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-medium uppercase tracking-[0.22em] text-pink-400">
              your mood
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {moods.mood}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2">
                <span className="mr-2 text-pink-400">♫</span>

                <span className="text-sm font-medium text-purple-200">
                  {moods.genre}
                </span>
              </div>

              {moods.artists?.length > 0 && (
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400">
                  curated from {moods.artists.length} artists
                </div>
              )}

            </div>

          </div>
        </div>

      </section>


      {/* ================= FIRST SONG ================= */}

      {tracks.length > 0 && (
        <section className="mx-6 md:mx-10 lg:mx-16 mt-10">

          <div className="mb-4 flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#FF4FA3]" />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              first song picked
            </p>

          </div>


          <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-[#0A0B19] p-5 md:p-7">

            {/* Background glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-pink-500/5 blur-3xl" />


            <div className="relative flex flex-col md:flex-row items-center gap-7">

              {/* Album */}

              <div className="relative shrink-0">

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-xl" />

                <img
                  src={tracks[0].artworkUrl100?.replace(
                    "100x100",
                    "600x600"
                  )}
                  alt={tracks[0].trackName}
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-2xl"
                />

              </div>


              {/* Song information */}

              <div className="relative flex-1 w-full text-center md:text-left">

                <p className="text-xs uppercase tracking-[0.2em] text-pink-400 font-semibold">
                  top recommendation ✦
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white truncate">
                  {tracks[0].trackName}
                </h2>

                <p className="mt-2 text-gray-400">
                  {tracks[0].artistName}
                </p>


                {/* Player */}

                {tracks[0].previewUrl && (
                  <div className="mt-6">

                    <audio
                      id="main-audio"
                      src={tracks[0].previewUrl}
                      onTimeUpdate={(e) => {

                        const audio = e.currentTarget;

                        setCurrentTime(audio.currentTime);

                        if (audio.duration) {
                          setProgress(
                            (audio.currentTime / audio.duration) * 100
                          );
                        }

                      }}
                      onLoadedMetadata={(e) => {
                        setDuration(e.currentTarget.duration);
                      }}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => {
                        setIsPlaying(false);
                        setProgress(0);
                        setCurrentTime(0);
                      }}
                      className="hidden"
                    />


                    <div className="flex items-center gap-4">

                      {/* Play */}

                      <button
                        onClick={() => {

                          const audio =
                            document.getElementById("main-audio");

                          if (!audio) return;

                          if (audio.paused) {
                            audio.play();
                          } else {
                            audio.pause();
                          }

                        }}
                        className="shrink-0 h-11 w-11 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all"
                      >
                        {isPlaying ? (
                          <span className="text-sm">Ⅱ</span>
                        ) : (
                          <span className="text-sm ml-0.5">▶</span>
                        )}
                      </button>


                      {/* Progress */}

                      <div className="flex-1">

                        <div className="flex justify-between text-[11px] text-gray-500 mb-2">

                          <span>
                            {formatTime(currentTime)}
                          </span>

                          <span>
                            {formatTime(duration)}
                          </span>

                        </div>


                        <div
                          className="h-1.5 w-full rounded-full bg-[#24243D] cursor-pointer overflow-hidden"
                          onClick={(e) => {

                            const audio =
                              document.getElementById("main-audio");

                            if (!audio?.duration) return;

                            const rect =
                              e.currentTarget.getBoundingClientRect();

                            const percent =
                              (e.clientX - rect.left) / rect.width;

                            audio.currentTime =
                              percent * audio.duration;

                          }}
                        >

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-[width] duration-100"
                            style={{
                              width: `${progress}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>


                    <p className="mt-3 text-xs text-gray-600">
                      your first vibe is locked in ✦
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>

        </section>
      )}


      {/* ================= RECOMMENDED SONGS ================= */}

      <section className="mt-12 px-6 md:px-10 lg:px-16">

        <div className="flex items-end justify-between mb-6">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-purple-400 font-medium">
              your soundtrack
            </p>

            <h2 className="mt-1 text-xl md:text-2xl font-semibold text-gray-100">
              songs picked for you
            </h2>

          </div>

          <p className="text-xs text-gray-500">
            {Math.max(tracks.length - 1, 0)} songs
          </p>

        </div>


        {/* Cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

          {tracks.slice(1).map((track, index) => (

            <div
              key={track.trackId}
              className="group relative rounded-2xl border border-white/10 bg-[#0A0B19] p-3 hover:bg-[#101124] hover:border-purple-400/30 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Number */}

              <div className="absolute top-5 left-5 z-10 h-7 min-w-7 px-2 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center">

                <span className="text-[10px] font-semibold text-gray-300">
                  {String(index + 2).padStart(2, "0")}
                </span>

              </div>


              {/* Cover */}

              <div className="relative overflow-hidden rounded-xl">

                <img
                  src={track.artworkUrl100?.replace(
                    "100x100",
                    "600x600"
                  )}
                  alt={track.trackName}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />


                {/* Dark hover */}

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                {/* Play */}

                {track.previewUrl && (
                  <button
  onClick={() => {
    const audio = document.getElementById(
      `audio-${track.trackId}`
    );

    if (!audio) return;

    // If this song is currently playing → pause it
    if (playingTrackId === track.trackId && !audio.paused) {
      audio.pause();
      setPlayingTrackId(null);
      return;
    }

    // Pause any other recommended song
    document.querySelectorAll(".recommended-audio").forEach((el) => {
      el.pause();
      el.currentTime = 0;
    });

    audio.play();
    setPlayingTrackId(track.trackId);
  }}
  className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
>
  {playingTrackId === track.trackId ? "Ⅱ" : "▶"}
</button>
                )}

              </div>


              {/* Information */}

              <div className="pt-3 px-1">

                <p className="text-sm font-semibold text-gray-100 truncate">
                  {track.trackName}
                </p>

                <p className="text-xs text-gray-500 truncate mt-1">
                  {track.artistName}
                </p>


                {/* Hidden native audio */}

                {track.previewUrl && (
                  <audio
  id={`audio-${track.trackId}`}
  src={track.previewUrl}
  className="recommended-audio"
  onEnded={() => {
    if (playingTrackId === track.trackId) {
      setPlayingTrackId(null);
    }
  }}
/>
                )}

              </div>

            </div>

          ))}

        </div>


        {/* No results */}

        {tracks.length === 0 && (
          <div className="py-20 text-center">

            <div className="mx-auto h-12 w-12 rounded-full border-2 border-purple-400/20 border-t-purple-400 animate-spin" />

            <p className="mt-5 text-sm text-gray-400">
              finding songs that match your vibe...
            </p>

          </div>
        )}

      </section>


      {/* ================= BOTTOM MESSAGE ================= */}

      {tracks.length > 0 && (
        <section className="mx-6 md:mx-10 lg:mx-16 mt-16 mb-8">

          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink-500/5 to-purple-500/5 px-6 py-5 text-center">

            <p className="text-sm text-gray-400">
              Your vibe was matched with{" "}
              <span className="text-purple-300 font-medium">
                {moods.genre}
              </span>{" "}
              music ✦
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Want a different feeling? Search another mood.
            </p>

          </div>

        </section>
      )}

    </div>
  );
}