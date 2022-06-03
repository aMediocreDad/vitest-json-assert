import { assert, expect, test } from "vitest";
import pkg from "../package.json" assert { type: "json" };
const { name } = pkg;

test("JSON", () => {
	const input = {
		foo: name,
		bar: "world",
	};

	const output = JSON.stringify(input);

	expect(output).eq('{"foo":"hello","bar":"world"}');
	assert.deepEqual(JSON.parse(output), input, "matches original");
});
