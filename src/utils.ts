import { EModules } from '@/enums'
import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { GettersTypes } from '@/enums/getter-types'

type AvailableTypes = MutationTypes | ActionTypes | GettersTypes

export const getModule = (module: EModules, type: AvailableTypes): string => {
  return `${module}/${type}`
}
