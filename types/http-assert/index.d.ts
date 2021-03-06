// Type definitions for http-assert 1.2
// Project: https://github.com/jshttp/http-assert
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param status the status code
 * @param msg the message of the error, defaulting to node's text for that status code
 * @param opts custom properties to attach to the error object
 */
declare function assert(value: any, status?: number, msg?: string, opts?: {}): void;

declare namespace assert {
    /**
     * @param status the status code
     * @param msg the message of the error, defaulting to node's text for that status code
     * @param opts custom properties to attach to the error object
     */
    type Assert = <T>(a: T, b: T, status?: number, msg?: string, opts?: {}) => void;

    const equal: Assert;
    const notEqual: Assert;
    const strictEqual: Assert;
    const notStrictEqual: Assert;
    const deepEqual: Assert;
    const notDeepEqual: Assert;
}

export = assert;
