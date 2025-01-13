export function filterPlaylistInsights(playlistInfo: any): {
  name: string;
  image: string;
  infoFields: { label: string; key: string | number | boolean }[];
  actualTracksCount: number;
  externalUrl: string;
  tracks: {
    trackName: string;
    artists: string[];
    album: string;
    link: string;
    image: string;
    albumLink: string;
    artistsLinks: string[];
  }[];
  albums: {
    albumName: string;
    artists: string[];
    nbSongsInPlaylist: number;
    image: string;
    albumLink: string;
  }[];
  artists: {
    artistName: string;
    nbSongsInPlaylist: number;
    artistLink: string;
  }[];
} {
  if (!playlistInfo || typeof playlistInfo !== 'object') {
    return {
      name: 'Unknown Playlist',
      image: 'Unknown Image',
      infoFields: [],
      externalUrl: '',
      actualTracksCount: 0,
      tracks: [],
      albums: [],
      artists: [],
    };
  }

  const name = playlistInfo.name || 'Unknown Playlist';
  const image = playlistInfo.images?.[0]?.url || 'Unknown Image';

  // Extracting the necessary fields for infoFields
  const trackCount = playlistInfo.tracks?.total || 0;
  const description = playlistInfo.description || 'No description available';
  const followers = playlistInfo.followers?.total || 0;
  const collaborative = playlistInfo.collaborative || false;
  const owner = playlistInfo.owner?.display_name || 'Unknown Owner';

  const infoFields = [
    { label: 'Track Count', key: trackCount },
    { label: 'Description', key: description },
    { label: 'Followers', key: followers },
    { label: 'Collaborative', key: collaborative ? 'Yes' : 'No' },
    { label: 'Owner', key: owner },
  ];

  const externalUrl = playlistInfo.external_urls?.spotify || '';

  // Extracting track details
  const tracks =
    playlistInfo.tracks?.items?.map((track: any) => ({
      trackName: track.track?.name || 'Unknown Track',
      artists:
        track.track?.artists?.map((artist: any) => artist.name).join(', ') ||
        'Unknown Artist',
      artistsLinks:
        track.track?.artists
          ?.map((artist: any) => artist.external_urls.spotify)
          .join(', ') || 'Unknown Artist Links',    
      album: track.track?.album?.name || 'Unknown Album',
      link: track.track?.external_urls?.spotify || 'unknown link',
      image: track.track?.album?.images[0]?.url || 'unknown image',
      albumLink:
        track.track?.album?.external_urls?.spotify || 'unknown album link',
    })) || [];

  interface Album {
    albumName: string;
    artists: string[];
    nbSongsInPlaylist: number;
    image: string;
    albumLink: string;
  }

  const albums: Album[] = playlistInfo.tracks?.items?.reduce(
    (acc: Album[], track: any) => {
      const albumName = track.track?.album?.name || 'Unknown Album';
      const image = track.track?.album?.images[0]?.url || 'unknown image';
      const albumLink =
        track.track?.album?.external_urls?.spotify || 'unknown album link';
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
          artists: artists.split(','), // Convert artist names back into an array
          nbSongsInPlaylist: 1,
          image,
          albumLink,
        });
      }

      return acc;
    },
    []
  ); // Initialize accumulator as an empty array of type Album[]

  interface Artist {
    artistName: string;
    nbSongsInPlaylist: number;
    artistLink: string;
  }

  const artists: Artist[] = playlistInfo.tracks?.items?.reduce(
    (acc: Artist[], track: any) => {
      const artists =
        track.track?.artists?.map((artist: any) => artist.name).join(', ') ||
        'Unknown Artist';

      // Split the artist names into an array
      const artistNames = artists.split(', ');

      const artistLinks =
        track.track?.artists
          ?.map((artist: any) => artist.external_urls.spotify)
          .join(', ') || 'Unknown Artist';

      const artistLinks2 = artistLinks.split(', ');

      // Iterate over each artist in the track
      artistNames.forEach((artistName: string) => {
        // Check if the artist already exists in the accumulator
        const existingArtist = acc.find(
          (artist) => artist.artistName === artistName
        );

        if (existingArtist) {
          // If the artist already exists, increment the song count
          existingArtist.nbSongsInPlaylist += 1;
          existingArtist.artistLink = existingArtist.artistLink;
        } else {
          // If the artist doesn't exist, create a new entry
          acc.push({
            artistName,
            nbSongsInPlaylist: 1,
            artistLink: artistLinks2[artistNames.indexOf(artistName)],
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
    image,
    infoFields,
    externalUrl,
    actualTracksCount,
    tracks,
    albums,
    artists,
  };
}
