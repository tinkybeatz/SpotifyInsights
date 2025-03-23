export function sortData(dataType: string, sortBy: string, data: []): any[] {
  if (!data || data.length === 0) {
    return [];
  }

  switch (dataType) {
    case 'Albums':
      return sortAlbums(sortBy, data);
    case 'Artists':
      return sortArtists(sortBy, data);
    default:
      return data;
  }
}

function sortAlbums(sortBy: string, albums: any[]): any[] {
  switch (sortBy) {
    case 'songASC':
      console.log('Sorting albums by songASC');
      return albums.sort((a, b) => a.nbSongsInPlaylist - b.nbSongsInPlaylist);
    case 'songDESC':
      console.log('Sorting albums by songDESC');
      return albums.sort((a, b) => b.nbSongsInPlaylist - a.nbSongsInPlaylist);
    default:
      return albums;
  }
}

function sortArtists(sortBy: string, artists: any[]): any[] {
  switch (sortBy) {
    case 'songASC':
      console.log('Sorting artists by songASC');
      return artists.sort((a, b) => a.nbSongsInPlaylist - b.nbSongsInPlaylist);
    case 'songDESC':
      console.log('Sorting artists by songDESC');
      return artists.sort((a, b) => b.nbSongsInPlaylist - a.nbSongsInPlaylist);
    default:
      return artists;
  }
}