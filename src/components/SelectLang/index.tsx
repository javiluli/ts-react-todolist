import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

function SelectLang() {
  const [, i18n] = useTranslation('global');

  const [value, setValue] = useState<string>('es');

  const handleClick = (lang: string) => {
    setValue(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Box sx={{ m: '1' }}>
      <Stack direction="row" spacing={0.5}>
        <TranslateRoundedIcon />

        <Link
          component="button"
          variant={value === 'es' ? 'subtitle2' : 'caption'}
          color="text.primary"
          onClick={() => handleClick('es')}
        >
          Español
        </Link>

        <Link
          component="button"
          variant={value === 'en' ? 'subtitle2' : 'caption'}
          color="text.primary"
          onClick={() => handleClick('en')}
        >
          English
        </Link>
      </Stack>
    </Box>
  );
}

export default SelectLang;
