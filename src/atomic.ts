import { Signal } from "signal-polyfill";
import { Equals, State } from "./types";

export function atomic<T>(initialValue: T, equals?: Equals<T>): State<T> {
    return new Signal.State(initialValue, { equals, });
}
