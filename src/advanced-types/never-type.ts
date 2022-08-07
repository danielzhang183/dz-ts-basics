function reject(message: string): never {
  throw new Error(message)
}

function processEvent(): never {
  while (true) {
    // read a message form a queue
  }
}

reject('Error Occur')
processEvent()
console.log('Hello World')
