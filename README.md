This is an example case for api-extractor / api-documenter.

It demonstrates some missing features and bugs that currently exists.

Currently it contains:

- Nested export statement (treated as namespace).
- types exported: `type`, `const`, `function`, `class` with typed members

# Usage

- `yarn`
- `npm run build` to generate *.d.ts files
- `npm run api-extractor` to generate api.json from *.d.ts
- `npm run api-documenter` to generate markdown from api.json
