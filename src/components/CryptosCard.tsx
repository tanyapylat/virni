import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { Alert, CardActionArea, Snackbar, Stack } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export type CryptosCardProps = { cryptos: { name: string; number: string }[] };

const StyledCard = styled(Card)`
    background-color: #0082e90f;
`;

const StyledTypographyForNumber = styled(Typography)`
    word-break: break-word;
`;

const StyledTypographyWithPadding = styled(Typography)`
    padding: 16px;
`;

const StyledTypographyForName = styled(Typography)`
    font-size: 1.1rem;
    font-weight: bold;
`;

const CryptosCard = ({ cryptos }: CryptosCardProps) => {
    const [copied, setCopied] = useState(false);

    return (
        <StyledCard>
            <StyledTypographyWithPadding variant="h5">Криптовалюта</StyledTypographyWithPadding>

            {cryptos.map((crypto) => {
                const number = crypto.number;
                const name = crypto.name;

                return (
                    <>
                        <CopyToClipboard text={number} onCopy={() => setCopied(true)}>
                            <CardActionArea>
                                <CardContent>
                                    <Stack direction="column" justifyContent="center" alignItems="stretch">
                                        <Stack direction="row" spacing={2} alignItems="flex-end">
                                            <StyledTypographyForName variant="h6">{name}</StyledTypographyForName>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <StyledTypographyForNumber>{number}</StyledTypographyForNumber>
                                                <ContentCopyIcon color="primary"></ContentCopyIcon>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </CopyToClipboard>

                        <Snackbar open={copied} autoHideDuration={3000} onClose={() => setCopied(false)}>
                            <Alert severity="success" sx={{ width: '100%' }}>
                                Скопійовано...
                            </Alert>
                        </Snackbar>
                    </>
                );
            })}

            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions> */}
        </StyledCard>
    );
};

export default CryptosCard;
