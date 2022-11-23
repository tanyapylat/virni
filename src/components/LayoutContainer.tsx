import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const LayoutContainer = styled(Box)`
    ${(props) => props.theme.breakpoints.up('md')} {
        max-width: ${(props) => props.theme.breakpoints.values.md}px;
        margin: 0 auto;
    }
`;
