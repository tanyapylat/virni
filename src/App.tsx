import { AppBar, Stack, Typography } from '@mui/material';
import './App.css';
import PaymentPage from './pages/paymentPage';

function App() {
    return (
        <div className="App">
            <AppBar position="sticky">
                <Stack direction="column" alignItems="stretch" style={{ padding: '16px' }}>
                    <Typography>Підтримуєш хлопців з передової - </Typography>
                    <Typography align="right">живеш у безпеці в тилу</Typography>
                </Stack>

                {/* <Toolbar></Toolbar> */}
            </AppBar>
            <PaymentPage></PaymentPage>
        </div>
    );
}

export default App;
