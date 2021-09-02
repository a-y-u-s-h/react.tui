import * as WebSocket from 'ws';
import { Inspector } from './types';
interface ServerInspectorOptions {
    server: WebSocket.Server;
}
export declare function inspect(options: ServerInspectorOptions): Inspector;
export {};
//# sourceMappingURL=server.d.ts.map