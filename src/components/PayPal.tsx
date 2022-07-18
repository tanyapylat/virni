import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { CardActionArea, CardActions, Stack } from "@mui/material";

export type CreditCardProps = {};

const StyledCard = styled(Card)`
    background-color: #0082e90f;
`;

const PayPal = ({}: CreditCardProps) => {
    return (
        <StyledCard>
            <CardActionArea>
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography gutterBottom variant="h5" color="text.secondary" component="div">
                            PayPal
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="h6">tanyapylatgithub@gmail.com</Typography>
                            <ContentCopyIcon color="primary"></ContentCopyIcon>
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};

export default PayPal;
