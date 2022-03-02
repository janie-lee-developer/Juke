const  Album  = require('../db/album');
const  Artist  = require('../db/artist');
const Song = require('../db/song');

const router = require('express').Router();
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const albums = await Album.findAll({
            include: [
                { model: Artist }
            ]
        });
        res.json(albums);
    }
    catch(ex){
        next(ex);
    }
});

router.get('/:albumid', async(req, res, next) => {
    try {
        const singleAlbum = await Album.findAll({
            where : {
                id : req.params.albumid
            }, 
            include: [
                { model: Artist },
                { model: Song, as: 'songs' }
            ]
            
        });
        res.json(singleAlbum);
    }
    catch(ex) {
        next(ex);
    }
})