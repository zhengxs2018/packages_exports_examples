import { createRequire } from "module";

const require = createRequire(import.meta.url)

const {
  printMsg
} = require('./index.cjs')

export {
  printMsg
}

console.log('run index.mjs')
