import { atomic } from "../src/index";

test("index", function () {
    expect(typeof atomic === 'function').toBe(true);
});
