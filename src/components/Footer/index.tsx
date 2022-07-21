import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import SelectLang from '../SelectLang';

interface ComponentsProps {
  numberOfTask: number;
}

function Footer({ numberOfTask }: ComponentsProps) {
  const [translation] = useTranslation('global');

  const styleConfig = {
    p: '1em 1.5em',
    m: numberOfTask ? '0' : '2em 0',
    alignItems: 'center',
    backgroundColor: 'background.default',
    borderTop: numberOfTask ? '1px solid' : '0',
    borderColor: 'palette.grey.primary',
    borderRadius: numberOfTask ? '0' : '0.5em',
  };

  return (
    <Paper elevation={0} sx={styleConfig}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1">
          {numberOfTask} {translation('footer.task-left')}
        </Typography>

        <SelectLang />
      </Stack>
    </Paper>
  );
}

export default Footer;
