import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import YAML from 'yaml'
import { entries, flow, fromPairs } from 'lodash-es'

const sortKeyDict = (arr) => arr.sort(([a], [b]) => a.localeCompare(b))

const filePath = join(import.meta.dirname, 'abbr.yaml')
const abbrStr = await readFile(filePath, 'utf8')
const newAbbrStr = flow(YAML.parse, entries, sortKeyDict, fromPairs, YAML.stringify)(abbrStr)
await writeFile(filePath, newAbbrStr)
