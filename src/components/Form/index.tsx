import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';
import Task from '../../types';

interface FormState {
  inputValues: Task;
}

interface FormProps {
  onNewTask: (newTask: Task) => void;
  tasks: Array<Task>;
}

const INNIIAL_STATE = {
  id: '',
  descripcion: '',
  completada: false,
};

function generateID(str: string): string {
  return str
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('');
}

function Form({ onNewTask, tasks }: FormProps) {
  const [translation] = useTranslation('global');

  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INNIIAL_STATE);
  const [error, setError] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idTask = generateID(inputValues.descripcion);

    if (!inputValues.descripcion) {
      setShowError(true);
      return setError('La tarea es obligarotoria');
    }

    if (tasks.find((task) => task.id === idTask)) {
      setShowError(true);
      return setError('La tarea ya existe');
    }

    onNewTask({ ...inputValues, id: idTask });
    setInputValues(INNIIAL_STATE);

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
        setShowError(false);
      }, 3000);
    }
  }, [error]);

  return (
    <>
      <Paper
        component="form"
        elevation={0}
        sx={{ p: '14px 12px', m: '3em 0 0', alignItems: 'center', backgroundColor: 'background.default' }}
        onSubmit={handleSubmit}
      >
        <Stack direction="row" justifyContent="center" alignItems="flex-end" spacing={2}>
          <InputBase
            sx={{ ml: 1 }}
            id="standard-basic"
            name="descripcion"
            value={inputValues.descripcion}
            placeholder={translation('input.placeholder')}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
      </Paper>

      <Collapse in={showError} unmountOnExit>
        <Alert severity="error">{error}</Alert>
      </Collapse>
    </>
  );
}

export default Form;
