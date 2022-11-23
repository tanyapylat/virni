import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import PaymentCard from '../components/PaymentCard';
import { paymentMethods } from '../paymentMethods';
import { ReactComponent as MonobankText } from '../images/monobankText.svg';
import { ReactComponent as MonobankJar } from '../images/jarBadge.svg';
import monoBankLogo from '../images/monoLogo.jpeg';
import privatBankLogo from '../images/privatBankLogo.jpg';
import { ReactComponent as PayPalLogo } from '../images/paypal.svg';
import payoneerLogo from '../images/payoneerLogo.png';
import millenniumLogo from '../images/millenniumLogo.png';
import { Button, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CryptosCard from '../components/CryptosCard';
import { LayoutContainer } from '../components/LayoutContainer';

const StyledBox = styled(LayoutContainer)`
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
    const millennium = paymentMethods.Millennium;
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
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <MonobankJar />
                            <MonobankText />
                        </Stack>
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
                        name={millennium.name}
                        cardNumber={millennium.cardNumber}
                        logo={millenniumLogo}
                        owner={millennium.owner}
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
