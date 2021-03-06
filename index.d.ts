declare type listen = <T = any>(event: string, callback: (message: T) => void) => void;
declare type speak = <T = any>(event: string, message: T) => void;
export declare const Conversation: () => [listen, speak];
export declare const listen: listen, speak: speak;
declare const conservation: {
    listen: listen;
    speak: speak;
};
export default conservation;
