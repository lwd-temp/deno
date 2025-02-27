// Copyright 2018-2025 the Deno authors. MIT license.
// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// deno-lint-ignore-file

import { Readable } from "ext:deno_node/_stream.mjs";
const { ReadableState, _fromList, from, fromWeb, toWeb, wrap } = Readable;

export default Readable;
export { _fromList, from, fromWeb, ReadableState, toWeb, wrap };
