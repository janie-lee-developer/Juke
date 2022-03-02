const db = require('./db');
const { STRING } = db.Sequelize;

const Album = db.define('album', {
    name: {
        type: STRING,
        allowNull: false
    },
    artworkUrl: {
        type: STRING,
        defaultValue: "default-album.jpg"
    }
});

module.exports = Album;