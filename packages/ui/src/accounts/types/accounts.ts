import { Address } from '@/common/types'

export interface Account {
  name: string | undefined
  address: Address
  source?: string
}

export type OptionLock = 'insufficientFunds' | 'boundMembership' | 'rivalrousLock' | 'recoverableLock'

export interface AccountOption extends Account {
  optionLocks?: OptionLock[]
}
