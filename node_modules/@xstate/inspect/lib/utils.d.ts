import { State } from 'xstate';
import { MaybeLazy, ParsedReceiverEvent, ReceiverEvent } from './types';
export declare function getLazy<T>(value: MaybeLazy<T>): T;
export declare function stringify(value: any): string;
export declare function isReceiverEvent(event: any): event is ReceiverEvent;
export declare function parseState(stateJSON: string): State<any, any>;
export declare function parseReceiverEvent(event: ReceiverEvent): ParsedReceiverEvent;
//# sourceMappingURL=utils.d.ts.map