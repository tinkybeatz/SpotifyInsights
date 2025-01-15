interface Album {
  albumName: string;
  artists: string[];
  nbSongsInPlaylist: number;
  image: string;
  albumLink: string;
}

interface Artist {
  artistName: string;
  nbSongsInPlaylist: number;
  artistLink: string;
}

interface Track {
  trackName: string;
  artists: string[];
  album: string;
  link: string;
  image: string;
  albumLink: string;
  artistsLinks: string[];
  duration: number;
  added_at: string;
}

interface PlaylistStats {
  totalAlbums: number;
  albumWithMostTracks: Album;
  totalArtists: number;
  artistWithMostTracks: Artist;
  totalTracks: number;
  dateFirstAdded: Track;
  numberOfFeaturings: number;
  proportionOfFeaturings: string;
  totalDuration: string;
  averageTracksDuration: string;
}

export function statsGathering(
  playlistInfo: any,
  albums: Album[],
  artists: Artist[],
  tracks: Track[]
): PlaylistStats {
  if (!playlistInfo || typeof playlistInfo !== 'object') {
    return {
      totalAlbums: 0,
      albumWithMostTracks: {
        albumName: '',
        artists: [],
        nbSongsInPlaylist: 0,
        image: '',
        albumLink: '',
      },
      totalArtists: 0,
      artistWithMostTracks: {
        artistName: '',
        nbSongsInPlaylist: 0,
        artistLink: '',
      },
      totalTracks: 0,
      dateFirstAdded: {
        trackName: '',
        artists: [],
        album: '',
        link: '',
        image: '',
        albumLink: '',
        artistsLinks: [],
        duration: 0,
        added_at: '',
      },
      numberOfFeaturings: 0,
      proportionOfFeaturings: '',
      totalDuration: '',
      averageTracksDuration: '',
    };
  }

  // OK
  const totalAlbums = albums?.length || 0;

  // OK
  const albumWithMostTracks =
    albums?.reduce((prev: any, current: any) =>
      prev.nbSongsInPlaylist > current.nbSongsInPlaylist ? prev : current
    ) || {};

  // OK
  const totalArtists = artists?.length || 0;

  // OK
  const artistWithMostTracks = artists?.reduce((prev: any, current: any) =>
    prev.nbSongsInPlaylist > current.nbSongsInPlaylist ? prev : current
  );

  // OK
  const totalTracks = tracks?.length || 0;

  // OK
  const dateFirstAdded = tracks?.reduce((earliest: Track, current: Track) => {
    return new Date(current.added_at) < new Date(earliest.added_at)
      ? current
      : earliest;
  });

  // OK
  const numberOfFeaturings = tracks?.filter((track: any) => {
    return track.artists.split(',').length > 1;
  }).length;

  // OK
  const proportionOfFeaturings = `${(
    (numberOfFeaturings / totalTracks) *
    100
  ).toFixed(1)}%`;

  // OK
  const totalDurationMS = tracks?.reduce(
    (prev: any, current: any) => prev + current.duration,
    0
  );
  const totalDuration = formatDuration(convertMiliseconds(totalDurationMS));

  // OK
  const averageTracksDurationMS = parseInt(
    (totalDurationMS / totalTracks).toFixed(1)
  );
  const averageTracksDuration = formatDuration(convertMiliseconds(averageTracksDurationMS));

  return {
    totalAlbums,
    albumWithMostTracks,
    totalArtists,
    artistWithMostTracks,
    totalTracks,
    dateFirstAdded,
    numberOfFeaturings,
    proportionOfFeaturings,
    totalDuration,
    averageTracksDuration,
  };
}

function convertMiliseconds(miliseconds: number): {
  d: number;
  h: number;
  m: number;
  s: number;
} {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = Math.floor(miliseconds / 1000);
  total_minutes = Math.floor(total_seconds / 60);
  total_hours = Math.floor(total_minutes / 60);
  days = Math.floor(total_hours / 24);

  seconds = total_seconds % 60;
  minutes = total_minutes % 60;
  hours = total_hours % 24;

  return { d: days, h: hours, m: minutes, s: seconds };
}

function formatDuration(duration: {
  d: number;
  h: number;
  m: number;
  s: number;
}): string {
  const { d, h, m, s } = duration;
  const parts: string[] = [];

  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  if (s) parts.push(`${s}s`);

  // If none of d, h, m, s are > 0, it will return an empty array
  // so you could handle that case as well:
  if (parts.length === 0) {
    return '0s'; // fallback if everything is 0
  }

  return parts.join(' ');
}
