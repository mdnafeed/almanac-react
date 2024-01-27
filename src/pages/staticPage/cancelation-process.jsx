
import { Container } from 'react-bootstrap';

const PaymentCancelation = () => {
  return (
   <>
      <Container>
        <h1 style={{marginTop:'10px'}}>Online Payment Terms</h1>
        <p>Users can donate using debit/credit cards, internet banking, or accounts, ensuring correct details and authorization to use lawfully in their possession and authorized for transactions.</p>

        <p>The user is responsible for ensuring that all debit/credit card or bank account details provided are correct. Convenience fees will be charged for online payments through any payment channels (Credit card/debit card/net banking/wallets and cash cards), convenience fees, or internet processing Fees. The convenience fee can be either a flat fee (Net Banking) or a percentage (Card Gateway & Wallets & Cash Cards) of the amount you pay, depending on the payment method selected.</p>

        <p>
        Almanac Social Welfare (ASW) provides a service for convenience but disclaims liability and claims. Users agree to terminate access at any time. ASW is solely responsible for user conduct, and ASW's liability policy does not cover payment gateway failures or fraud. ASW is not responsible for payment services.
        </p>

        <p><b>REFUND POLICY</b></p>
        <p>Once a donation has been made in favor of Almanac Social Welfare, no refund of any kind can be expected or be subject to such, except for fraudulent credit card or bank transactions that can be reasonably proven to the satisfaction of ASW. However, the refund of funds to the original user's account will be made through the same payment gateway process only if the transaction fails for technical reasons and then only, subject to any deductions and within a reasonable processing time. There will be no refund of any kind. The refund will be made within a reasonable time, taking into account all necessary deductions.</p>
      </Container>
   </>
  )
}

export default PaymentCancelation
