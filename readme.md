# Conversator

### Why ?

With conversator, you can send data/message across files. It works like web socket but it runs locally.

### How to use ?

firstFile.js or ts

```ts
import { listen } from "conversator"

listen("message", (message) => {
  // listen("onMessage", (message) => {     // They are totally same, you can add 'on' to start if you want.
  console.log(`New message is ${message}`)
})
```

secondFile.js or ts

```ts
import { speak } from "conversator"

speak("message", { text: "It is a message" })
```

### Type support? Definetely!

```ts
// for speak, you don't have to give types, it understands you but if you want strict type:
interface Message {
  text: string
}
speak<Message>("message", { text: "It is a message" })

listen<Message>("message", (message) => {
  console.log(`New message is ${message}`)
})

// or
listen("message", (message: Message) => {
  console.log(`New message is ${message}`)
})
```

### Other import type

```ts
import WhateverNameYouWant from "conversator"

WhateverNameYouWant.listen(/*...your code*/)
WhateverNameYouWant.speak(/*...your code*/)
```

### Create your own conversator ? Of course!

```ts
import { Conversation } from "conversator"

const [speak, listen] = Conversation()
// You can change their names, first one is speak, second one is listen.
const [badSpeaker, goodListener] = Conversation() // or etc.
```
