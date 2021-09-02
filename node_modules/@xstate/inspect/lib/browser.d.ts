import { Interpreter, EventObject } from 'xstate';
import { XStateDevInterface } from 'xstate/lib/devTools';
import type { Inspector, InspectorOptions, InspectReceiver, WebSocketReceiverOptions, WindowReceiverOptions } from './types';
export declare const serviceMap: Map<string, Interpreter<any, any, EventObject, {
    value: any;
    context: any;
}>>;
export declare function createDevTools(): XStateDevInterface;
export declare function inspect(options?: Partial<InspectorOptions>): Inspector | undefined;
export declare function createWindowReceiver(options?: Partial<WindowReceiverOptions>): InspectReceiver;
export declare function createWebSocketReceiver(options: WebSocketReceiverOptions): InspectReceiver;
//# sourceMappingURL=browser.d.ts.map