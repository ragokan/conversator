"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.speak = exports.listen = exports.Conversation = void 0;
const Conversation = () => {
    const listeners = new Set();
    const speak = (event, message) => {
        listeners.forEach((listener) => {
            if (listener.event.toLowerCase() === event.toLowerCase() ||
                `on${event}`.toLowerCase() === listener.event.toLowerCase())
                listener.callback(message);
        });
    };
    const listen = (event, callback) => {
        listeners.add({ event, callback });
    };
    return [listen, speak];
};
exports.Conversation = Conversation;
_a = exports.Conversation(), exports.listen = _a[0], exports.speak = _a[1];
const conservation = {
    listen: exports.listen,
    speak: exports.speak,
};
exports.default = conservation;
//# sourceMappingURL=index.js.map