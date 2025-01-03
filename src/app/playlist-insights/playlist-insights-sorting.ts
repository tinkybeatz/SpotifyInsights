export function sortPlaylistInsights(playlistInfo: any): {
  name: string;
  trackCount: number;
  description: string;
  followers: number;
  collaborative: boolean;
  externalUrl: string;
  owner: string;
  actualTracksCount: number;
  tracks: { trackName: string; artists: string[]; album: string; link: string }[];
  albums: { albumName: string; artists: string[]; nbSongsInPlaylist: number }[];
  artists: { artistName: string; nbSongsInPlaylist: number }[];
} {
  if (!playlistInfo || typeof playlistInfo !== 'object') {
    return {
      name: 'Unknown Playlist',
      trackCount: 0,
      description: 'No description available',
      followers: 0,
      collaborative: false,
      externalUrl: '',
      owner: 'Unknown Owner',
      actualTracksCount: 0,
      tracks: [],
      albums: [],
      artists: [],
    };
  }

  // Extracting the necessary fields
  const name = playlistInfo.name || 'Unknown Playlist';
  const trackCount = playlistInfo.tracks?.total || 0;
  const description = playlistInfo.description || 'No description available';
  const followers = playlistInfo.followers?.total || 0;
  const collaborative = playlistInfo.collaborative || false;
  const externalUrl = playlistInfo.external_urls?.spotify || '';
  const owner = playlistInfo.owner?.display_name || 'Unknown Owner';

  // Extracting track details
  const tracks =
    playlistInfo.tracks?.items?.map((track: any) => ({
      trackName: track.track?.name || 'Unknown Track',
      artists:
        track.track?.artists?.map((artist: any) => artist.name).join(', ') ||
        'Unknown Artist',
      album: track.track?.album?.name || 'Unknown Album',
      link: track.track?.external_urls?.spotify || 'unknown link',
    })) || [];

  interface Album {
    albumName: string;
    artists: string[];
    nbSongsInPlaylist: number;
  }

  const albums: Album[] = playlistInfo.tracks?.items?.reduce(
    (acc: Album[], track: any) => {
      const albumName = track.track?.album?.name || 'Unknown Album';
      const artists =
        track.track?.album?.artists
          ?.map((artist: any) => artist.name)
          .join(', ') || 'Unknown Artist';

      // Check if the album already exists in the accumulator
      const existingAlbum = acc.find((album) => album.albumName === albumName);

      if (existingAlbum) {
        // If the album already exists, increment the song count
        existingAlbum.nbSongsInPlaylist += 1;
      } else {
        // If the album doesn't exist, create a new entry
        acc.push({
          albumName,
          artists: artists.split(', '), // Convert artist names back into an array
          nbSongsInPlaylist: 1,
        });
      }

      return acc;
    },
    []
  ); // Initialize accumulator as an empty array of type Album[]

  interface Artist {
    artistName: string;
    nbSongsInPlaylist: number;
  }

  const artists: Artist[] = playlistInfo.tracks?.items?.reduce(
    (acc: Artist[], track: any) => {
      const artists = track.track?.artists
        ?.map((artist: any) => artist.name)
        .join(', ') || 'Unknown Artist';

      // Split the artist names into an array
      const artistNames = artists.split(', ');

      // Iterate over each artist in the track
      artistNames.forEach((artistName: string) => {
        // Check if the artist already exists in the accumulator
        const existingArtist = acc.find(
          (artist) => artist.artistName === artistName
        );

        if (existingArtist) {
          // If the artist already exists, increment the song count
          existingArtist.nbSongsInPlaylist += 1;
        } else {
          // If the artist doesn't exist, create a new entry
          acc.push({
            artistName,
            nbSongsInPlaylist: 1,
          });
        }
      });

      return acc;
    },
    []
  ); // Initialize accumulator as an empty array of

  const actualTracksCount = tracks.length || 0;

  return {
    name,
    trackCount,
    description,
    followers,
    collaborative,
    externalUrl,
    owner,
    actualTracksCount,
    tracks,
    albums,
    artists,
  };
}
