import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[800]}`,
  textAlign: 'center',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  // Align items to center horizontally
  padding: '24px 0',
});

const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  background: `linear-gradient(60deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',  // Center text horizontally
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  textAlign: 'center',  // Center text horizontally
}));

const Header = () => (
  <StyledAppBar position="static">
    <Box maxWidth="lg" width="100%" margin="0 auto">
      <StyledToolbar>
        <Name variant="h2" component="h1" gutterBottom>
          Sidhant S Srivastava
        </Name>
        <Subtitle variant="subtitle1">
          Backend Developer & Machine Learning Enthusiast
        </Subtitle>
      </StyledToolbar>
    </Box>
  </StyledAppBar>
);

export default Header;

