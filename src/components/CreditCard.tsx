import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { Alert, Avatar, Button, CardActionArea, CardActions, Snackbar, Stack } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export type CreditCardProps = { name: string; cardNumber: string; logo: string };

const StyledCard = styled(Card)`
    background-color: #0082e90f;
`;

const CreditCard = ({ name, cardNumber, logo }: CreditCardProps) => {
    const [copied, setCopied] = useState(false);

    return (
        <StyledCard>
            <CardActionArea>
                <CardContent>
                    <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="flex-end">
                            <Avatar src={logo} variant="square" sx={{ bgcolor: "white" }}></Avatar>
                            <Typography gutterBottom variant="h5" color="text.secondary" component="div">
                                {name}
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="h6">{cardNumber}</Typography>
                            <CopyToClipboard text={cardNumber} onCopy={() => setCopied(true)}>
                                <ContentCopyIcon color="primary"></ContentCopyIcon>
                            </CopyToClipboard>

                            {/* <ContentCopyIcon color="primary"></ContentCopyIcon> */}
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
            <Snackbar open={copied} autoHideDuration={3000} onClose={() => setCopied(false)}>
                <Alert severity="success" sx={{ width: "100%" }}>
                    Скопійовано...
                </Alert>
            </Snackbar>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions> */}
        </StyledCard>
    );
};

export default CreditCard;
