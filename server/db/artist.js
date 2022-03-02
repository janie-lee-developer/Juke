const db = require('./db');
const { STRING } = db.Sequelize;

const Artist = db.define('artist', {
    name: {
        type: STRING,
        allowNull: false
    }
});

module.exports = Artist;