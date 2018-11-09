import * as mod from './mod';
import * as mod2 from './mod2';
import * as math from './math';

export { mod, mod2, math };

// Missing feature: api-extractor@6.1.3 does not support variable declaration in "package"
export const foo2: number = 2;

// Bug: it's related to multiple tools.
// In typescript@3.0.1, following code generates declarations as "export declare const foo3 = 2;"
// Then, in api-extractor@6.1.3, it generates an item with { "type": "" }, (or in .api.ts: "foo3:  = 2;")
// Then the bug appears in api-documenter@1.5.52, throwing an error: "Error: The code parameter is missing";
//
// (But note, ts code as "export const foo3: 2 = 2;" works fine.)
export const foo3 = 2;

export * from './mod2';
