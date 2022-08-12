import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import PaymentPage from './pages/paymentPage';

function App() {
    return (
        <div className="App">
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">Дай 🤚 снайперу</Typography>
                </Toolbar>
            </AppBar>
            <PaymentPage></PaymentPage>
        </div>
    );
}

export default App;
