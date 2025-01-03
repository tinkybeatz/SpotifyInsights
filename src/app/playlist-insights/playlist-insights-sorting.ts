export function sortPlaylistInsights(playlistInfo: any): {
    name: string;
    trackCount: number;
    description: string;
    followers: number;
    collaborative: boolean;
    externalUrl: string;
    owner: string;
    actualTracksCount: number;
    tracks: { trackName: string; artists: string[] }[];
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
    const tracks = playlistInfo.tracks?.items?.map((track: any) => ({
      trackName: track.track?.name || 'Unknown Track',
      artists: track.track?.artists?.map((artist: any) => artist.name).join(', ') || 'Unknown Artist',
    })) || [];

    const actualTracksCount = tracks.length || 0;
  
    return { name, trackCount, description, followers, collaborative, externalUrl, owner, actualTracksCount, tracks };
  }