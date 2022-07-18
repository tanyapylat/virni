import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { Alert, Avatar, Button, CardActionArea, CardActions, Snackbar, Stack } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export type CreditCardProps = { name: string; cardNumber: string; owner?: string; logo: string };

const StyledCard = styled(Card)`
    background-color: #0082e90f;
`;

const PaymentCard = ({ name, cardNumber, owner, logo }: CreditCardProps) => {
    const [copied, setCopied] = useState(false);

    return (
        <StyledCard>
            <CopyToClipboard text={cardNumber} onCopy={() => setCopied(true)}>
                <CardActionArea>
                    <CardContent>
                        <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
                            <Stack direction="row" spacing={2} alignItems="flex-end">
                                <Avatar src={logo} variant="square" sx={{ bgcolor: "white" }}></Avatar>
                                <Typography gutterBottom variant="h5" color="text.secondary" component="div">
                                    {name}
                                </Typography>
                            </Stack>
                            <Stack>
                                {owner ? (
                                    <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
                                        {" "}
                                        {owner}
                                    </Typography>
                                ) : null}
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography variant="h6">{cardNumber}</Typography>
                                    <ContentCopyIcon color="primary"></ContentCopyIcon>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </CopyToClipboard>

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

export default PaymentCard;
