import { AppBar, Stack, styled, ThemeProvider, Typography } from '@mui/material';
import { LayoutContainer } from './components/LayoutContainer';
import PaymentPage from './pages/paymentPage';
import theme from './muiTheme';

const AppBarContent = styled(Stack)`
    padding: ${(props) => props.theme.spacing(2)};
    ${(props) => props.theme.breakpoints.up('md')} {
        flex-direction: row;
        column-gap: ${(props) => props.theme.spacing(0.5)};
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LayoutContainer>
                <AppBar position="sticky">
                    <AppBarContent direction="column" alignItems="stretch">
                        <Typography>Підтримуєш хлопців з передової -</Typography>
                        <Typography align="right">живеш у безпеці в тилу</Typography>
                    </AppBarContent>
                </AppBar>
            </LayoutContainer>
            <PaymentPage></PaymentPage>
        </ThemeProvider>
    );
}

export default App;
