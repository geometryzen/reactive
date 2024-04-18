import { Signal } from "signal-polyfill";
import { Equals, Readable } from "./types";

export function derived<T>(computation: () => T, equals?: Equals<T>): Readable<T> {
    return new Signal.Computed(computation, { equals });
}
