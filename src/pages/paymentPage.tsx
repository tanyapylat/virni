import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CreditCard from "../components/CreditCard";
import { paymentMethods } from "../paymentMethods";
import monoBankLogo from "../images/monoLogo.jpeg";
import privatBankLogo from "../images/privatBankLogo.jpg";
import payPalLogo from "../images/paypal.png";
import payoneerLogo from "../images/payoneerLogo.png";

const StyledBox = styled(Box)`
    padding: 10px;
`;

const PaymentPage = () => {
    const monoBank = paymentMethods.MonoBank;
    const privatBank = paymentMethods.PrivatBank;
    const payPal = paymentMethods.PayPal;
    const payoneer = paymentMethods.Payoneer;

    return (
        <>
            <StyledBox>
                <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                    <CreditCard
                        name={privatBank.name}
                        cardNumber={privatBank.cardNumber}
                        logo={privatBankLogo}></CreditCard>
                    <CreditCard name={monoBank.name} cardNumber={monoBank.cardNumber} logo={monoBankLogo}></CreditCard>
                    <CreditCard name={payPal.name} cardNumber={payPal.cardNumber} logo={payPalLogo}></CreditCard>
                    <CreditCard name={payoneer.name} cardNumber={payoneer.cardNumber} logo={payoneerLogo}></CreditCard>
                </Stack>
            </StyledBox>
        </>
    );
};

export default PaymentPage;
