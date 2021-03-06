type listen = <T = any>(event: string, callback: (message: T) => void) => void
type speak = <T = any>(event: string, message: T) => void

interface IListener<T = any> {
  event: string
  callback: (message: T) => void
}

export const Conversation = (): [speak, listen] => {
  const listeners = new Set<IListener>()

  const speak: speak = (event, message) => {
    listeners.forEach((listener) => {
      if (
        listener.event.toLowerCase() === event.toLowerCase() ||
        `on${event}`.toLowerCase() === listener.event.toLowerCase()
      )
        listener.callback(message)
    })
  }

  const listen: listen = (event, callback) => {
    listeners.add({ event, callback })
  }

  return [speak, listen]
}

export const [speak, listen] = Conversation()
const conservation = {
  speak,
  listen,
}
export default conservation
