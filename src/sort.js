import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import YAML from 'yaml'
import { entries, flow, fromPairs, sortBy } from 'lodash-es'

const filePath = join(import.meta.dirname, 'abbr.yaml')
const abbrStr = await readFile(filePath, 'utf8')
const dictSort = (arr) => sortBy(arr, 0)
const newAbbrStr = flow(YAML.parse, entries, dictSort, fromPairs, YAML.stringify)(abbrStr)
await writeFile(filePath, newAbbrStr)
