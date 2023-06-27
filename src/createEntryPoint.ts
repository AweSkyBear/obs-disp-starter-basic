import { ObsDispCreate, obsDispEvents } from 'obs-disp'
import { obsDispCreator } from './OD'

export const createEntryPoint = obsDispCreator(
  () => {
    const state = {
      someProp: 1,
    }

    return {
      [obsDispEvents.OBS_CREATE]: ObsDispCreate.useObs((obs) => {
        console.log('createEntryPoint obs created: ', state, obs)

        document.body.appendChild(
          (() => {
            const el = document.createElement('div')
            el.innerText = 'createEntryPoint: delete this and start adding observers here'
            return el
          })()
        )
      }),
    }
  },
  { id: 'app' }
)
