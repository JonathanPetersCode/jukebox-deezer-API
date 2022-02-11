const { default: axios } = require("axios");

const kansasLeftovertureAlbum = "https://api.deezer.com/album/78167/"
const kansasLeftovertureAlbumTracks = "https://api.deezer.com/album/78167/tracks"
let kansasLeftovertureAlbumResponse = getDeezerFieldExample(kansasLeftovertureAlbum)
let kansasLeftovertureAlbumTracksResponse = getDeezerFieldExample(kansasLeftovertureAlbumTracks)


function getDeezerFieldExample(field){
    axios.get(field).then(res => {
        // console.log(`statusCode: ${res.status}`)
        // console.log(Object.keys(res.data))
        console.log(res.data)
      })
      
}

// console.log(`Leftoverature Album Info JSON Response: ${kansasLeftovertureAlbumResponse}`);
console.log(`Leftoverature Album Track Info JSON Response: ${kansasLeftovertureAlbumTracksResponse}`);

