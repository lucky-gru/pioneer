import React from 'react'

import { InputComponent, InputNumber } from '@/common/components/forms'
import { Row } from '@/common/components/Modal'
import { RowGapBlock } from '@/common/components/page/PageContent'
import { TextMedium } from '@/common/components/typography'

export const SetMembershipPrice = () => {
  return (
    <RowGapBlock gap={24}>
      <Row>
        <RowGapBlock gap={8}>
          <h4>Specific parameters</h4>
          <TextMedium lighter>Set Membership price</TextMedium>
        </RowGapBlock>
      </Row>
      <Row>
        <RowGapBlock gap={20}>
          <InputComponent
            label="Membership price"
            tight
            units="tJOY"
            required
            message="Value must be greater than zero"
            name="setMembershipPrice.amount"
          >
            <InputNumber id="amount-input" name="setMembershipPrice.amount" isTokenValue isInBN placeholder="0" />
          </InputComponent>
        </RowGapBlock>
      </Row>
    </RowGapBlock>
  )
}
