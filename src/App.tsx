import { AppBar, Stack, styled, Typography } from '@mui/material';
import './App.css';
import { LayoutContainer } from './components/LayoutContainer';
import PaymentPage from './pages/paymentPage';

const AppBarContent = styled(Stack)`
    padding: ${(props) => props.theme.spacing(2)};
    ${(props) => props.theme.breakpoints.up('md')} {
        flex-direction: row;
        column-gap: ${(props) => props.theme.spacing(0.5)};
    }
`;

function App() {
    return (
        <div className="App">
            <LayoutContainer>
                <AppBar position="sticky">
                    <AppBarContent direction="column" alignItems="stretch">
                        <Typography>Підтримуєш хлопців з передової -</Typography>
                        <Typography align="right">живеш у безпеці в тилу</Typography>
                    </AppBarContent>
                </AppBar>
            </LayoutContainer>
            <PaymentPage></PaymentPage>
        </div>
    );
}

export default App;
