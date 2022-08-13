import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PaymentCard from '../components/PaymentCard';
import { paymentMethods } from '../paymentMethods';
import { ReactComponent as MonobankText } from '../images/monobankText.svg';
import monoBankLogo from '../images/monoLogo.jpeg';
import privatBankLogo from '../images/privatBankLogo.jpg';
import { ReactComponent as PayPalLogo } from '../images/paypal.svg';
import payoneerLogo from '../images/payoneerLogo.png';
import { Button, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CryptosCard from '../components/CryptosCard';

const StyledBox = styled(Box)`
    padding: 10px;
`;

const MonobankJarElement = styled(Button)`
    background-color: black;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;

    &:hover {
        background-color: black;
    }
` as typeof Button;

const PaymentPage = () => {
    const monoBank = paymentMethods.MonoBank;
    const privatBank = paymentMethods.PrivatBank;
    const payPal = paymentMethods.PayPal;
    const payoneer = paymentMethods.Payoneer;
    const cryptos = paymentMethods.Crypto;

    return (
        <>
            <StyledBox>
                <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                    <MonobankJarElement
                        component={Link}
                        size="large"
                        variant="contained"
                        endIcon={<OpenInNewIcon />}
                        href={paymentMethods.MonoBankJar.url}
                        target="_blank">
                        <MonobankText />
                    </MonobankJarElement>
                    <PaymentCard
                        name={privatBank.name}
                        cardNumber={privatBank.cardNumber}
                        logo={privatBankLogo}
                        owner={privatBank.owner}
                    />
                    <PaymentCard
                        name={monoBank.name}
                        cardNumber={monoBank.cardNumber}
                        logo={monoBankLogo}
                        owner={monoBank.owner}
                    />
                    <PaymentCard
                        name={payPal.name}
                        cardNumber={payPal.cardNumber}
                        logo={<PayPalLogo />}
                        owner={payPal.owner}
                    />
                    <PaymentCard
                        name={payoneer.name}
                        cardNumber={payoneer.cardNumber}
                        logo={payoneerLogo}
                        owner={payoneer.owner}
                    />
                    <CryptosCard cryptos={cryptos}></CryptosCard>
                </Stack>
            </StyledBox>
        </>
    );
};

export default PaymentPage;
