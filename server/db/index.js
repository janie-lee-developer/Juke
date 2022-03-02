const db = require('./db')
// require each of your models here...
const Album = require('./album');
const Artist = require('./artist');
const Song = require('./song');

// ...and give them some nice associations here!
Album.belongsTo(Artist);
Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums' } );
Song.belongsTo(Album);
Album.hasMany(Song, { foreignKey: 'albumId', as: 'songs' } );
Song.belongsTo(Artist);
Artist.hasMany(Song, {foreignKey: 'artistId', as: 'songs' })

module.exports = {
  db,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
  Album,
  Artist,
  Song
}
