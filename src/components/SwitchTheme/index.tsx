import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../context/toggleTheme';

function CustomizedSwitches() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Typography variant="body1" component="span">
      <IconButton onClick={toggleColorMode} color="default">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Typography>
  );
}

export default CustomizedSwitches;
