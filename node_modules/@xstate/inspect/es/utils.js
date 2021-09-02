import { __assign } from './_virtual/_tslib.js';
import { createMachine, State } from 'xstate';
import safeStringify from 'fast-safe-stringify';

function getLazy(value) {
    return typeof value === 'function' ? value() : value;
}
function stringify(value) {
    try {
        return JSON.stringify(value);
    }
    catch (e) {
        return safeStringify(value);
    }
}
function isReceiverEvent(event) {
    if (!event) {
        return false;
    }
    try {
        if (typeof event === 'object' &&
            'type' in event &&
            event.type.startsWith('service.')) {
            return true;
        }
    }
    catch (e) {
        return false;
    }
    return false;
}
function parseState(stateJSON) {
    var state = State.create(JSON.parse(stateJSON));
    delete state.history;
    return state;
}
function parseReceiverEvent(event) {
    switch (event.type) {
        case 'service.event':
            return __assign(__assign({}, event), { event: JSON.parse(event.event) });
        case 'service.register':
            return __assign(__assign({}, event), { machine: createMachine(JSON.parse(event.machine)), state: parseState(event.state) });
        case 'service.state':
            return __assign(__assign({}, event), { state: parseState(event.state) });
        default:
            return event;
    }
}

export { getLazy, isReceiverEvent, parseReceiverEvent, parseState, stringify };
