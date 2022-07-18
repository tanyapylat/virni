import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PaymentCard from "../components/PaymentCard";
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
                    <PaymentCard
                        name={privatBank.name}
                        cardNumber={privatBank.cardNumber}
                        logo={privatBankLogo}
                        owner={privatBank.owner}></PaymentCard>
                    <PaymentCard
                        name={monoBank.name}
                        cardNumber={monoBank.cardNumber}
                        logo={monoBankLogo}
                        owner={monoBank.owner}></PaymentCard>
                    <PaymentCard
                        name={payPal.name}
                        cardNumber={payPal.cardNumber}
                        logo={payPalLogo}
                        owner={payPal.owner}></PaymentCard>
                    <PaymentCard
                        name={payoneer.name}
                        cardNumber={payoneer.cardNumber}
                        logo={payoneerLogo}
                        owner={payoneer.owner}></PaymentCard>
                </Stack>
            </StyledBox>
        </>
    );
};

export default PaymentPage;
