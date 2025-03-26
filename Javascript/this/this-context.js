var artista = 'Global Lexical Context'

let bar = {
  artista : 'YYY',
}

let show = {
  artista : 'XXX',
}

function tocar() {
  console.log(`${this.artista} está tocando aqui agora `)
}


let foo = {
  artista : 'boo',
  tocar : function() {
    console.log(`${this.artista} está tocando aqui agora `)
  }
}


foo.tocar()

tocar.call(show)

class Entity {
  #id

  get id() {
    return this.#id
  }
}
