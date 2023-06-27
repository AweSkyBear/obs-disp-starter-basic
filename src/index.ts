import * as OD from 'obs-disp'
import { exposeToWindow } from './common'
import { createEntryPoint } from './createEntryPoint'
exposeToWindow({ OD }) // for tinkering only

createEntryPoint()
