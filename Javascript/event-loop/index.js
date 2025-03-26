//MicroTask Queue

console.log('Começo')
queueMicrotask(() => { console.log('2') })
new Promise(resolve => resolve(console.log('1'))).then(() => {
  console.log('3')
})

new Promise(resolve => {
  setTimeout(() => { resolve(console.log('4') ) },10)
}).then(() => console.log('Fim'))