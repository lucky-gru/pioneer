import { useMemo } from 'react'

import { Api } from '@/api'
import { useApi } from '@/api/hooks/useApi'
import { asProposalConstants, ProposalConstants } from '@/proposals/types/constants'

import { ProposalType } from '../types'

export const useProposalConstants = (proposalType?: ProposalType): ProposalConstants | null => {
  const { api, isConnected } = useApi()

  return useMemo(() => {
    if (!proposalType) {
      return null
    }

    const constantKey = proposalTypeToConstantKey.get(proposalType)

    if (!constantKey) {
      return null
    }
    const constants = api?.consts.proposalsCodex[constantKey]

    return constants ? asProposalConstants(constants) : null
  }, [proposalType, isConnected])
}

const proposalTypeToConstantKey = new Map<ProposalType, keyof Api['consts']['proposalsCodex']>([
  ['amendConstitution', 'amendConstitutionProposalParameters'],
  ['cancelWorkingGroupLeadOpening', 'cancelWorkingGroupLeadOpeningProposalParameters'],
  ['createBlogPost', 'createBlogPostProposalParameters'],
  ['createWorkingGroupLeadOpening', 'createWorkingGroupLeadOpeningProposalParameters'],
  ['decreaseWorkingGroupLeadStake', 'decreaseWorkingGroupLeadStakeProposalParameters'],
  ['editBlogPost', 'editBlogPostProoposalParamters'],
  ['fillWorkingGroupLeadOpening', 'fillWorkingGroupOpeningProposalParameters'],
  ['fundingRequest', 'fundingRequestProposalParameters'],
  ['lockBlogPost', 'lockBlogPostProposalParameters'],
  ['runtimeUpgrade', 'runtimeUpgradeProposalParameters'],
  ['setCouncilBudgetIncrement', 'setCouncilBudgetIncrementProposalParameters'],
  ['setCouncilorReward', 'setCouncilorRewardProposalParameters'],
  ['setInitialInvitationBalance', 'setInitialInvitationBalanceProposalParameters'],
  ['setInitialInvitationCount', 'setInvitationCountProposalParameters'],
  ['setMaxValidatorCount', 'setMaxValidatorCountProposalParameters'],
  ['setMembershipLeadInvitationQuota', 'setMembershipLeadInvitationQuotaProposalParameters'],
  ['setMembershipPrice', 'setMembershipPriceProposalParameters'],
  ['setReferralCut', 'setReferralCutProposalParameters'],
  ['setWorkingGroupLeadReward', 'setWorkingGroupLeadRewardProposalParameters'],
  ['signal', 'signalProposalParameters'],
  ['slashWorkingGroupLead', 'slashWorkingGroupLeadProposalParameters'],
  ['terminateWorkingGroupLead', 'terminateWorkingGroupLeadProposalParameters'],
  ['unlockBlogPost', 'unlockBlogPostProposalParameters'],
  ['updateWorkingGroupBudget', 'updateWorkingGroupBudgetProposalParameters'],
  ['veto', 'vetoProposalProposalParameters'],
])
