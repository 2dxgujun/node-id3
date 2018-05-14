var NodeID3 = require('.')

let private = {
  private: [
    {
      owner: 'bitrate',
      data: '320'
    },
    {
      owner: 'hello',
      data: 'world'
    }
  ]
}

let image = { image: '/home/jun/Downloads/cover.jpeg' }

let comment = {
  comment: {
    language: 'eng',
    text: 'WORLD',
    shortText: 'HELLO'
  }
}

NodeID3.update(private, '/home/jun/Downloads/Blue - All Rise.mp3')
//NodeID3.update(comment, '/home/jun/Downloads/Blue - All Rise.mp3')
//NodeID3.update(image, '/home/jun/Downloads/Blue - All Rise.mp3')
//let res = NodeID3.read('/home/jun/Downloads/Blue - All Rise.mp3')
//console.log(res)
