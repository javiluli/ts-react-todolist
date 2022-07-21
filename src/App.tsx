import { useEffect, useState } from 'react';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Task from './types';
import TodoList from './components/TodoList';
import Form from './components/Form';
import imgMountain from './img/playa.jpg';
import CustomizedSwitches from './components/SwitchTheme';
import Footer from './components/Footer';

function App() {
  const [translation] = useTranslation('global');

  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [taskCount, setTaskCount] = useState<number>(0);

  const handleNewTask = (newTask: Task): void => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string): void => {
    const removeTask = [...tasks].filter((task) => task.id !== id);
    setTasks(removeTask);
  };

  const handleCompleteTask = (id: string): void => {
    const task = [...tasks].find((element) => element.id === id);

    if (task) {
      task.completada = !task.completada;
      setTasks([...tasks]);
    }
  };

  useEffect(() => {
    const data = sessionStorage.getItem('tasks');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    setTaskCount(tasks.length);
  }, [tasks]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'background.paper',
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
        }}
        src={imgMountain}
      />
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          margin: '7em auto 0',
          zIndex: 10,
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row">
            <Typography variant="h4" component="h1" color="white" sx={{ flexGrow: 1 }}>
              {translation('header.todo-list')}
            </Typography>

            <CustomizedSwitches />
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Form onNewTask={handleNewTask} tasks={tasks} />
            </Grid>
            <Grid item xs={12}>
              <TodoList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
            </Grid>
          </Grid>

          <Footer numberOfTask={taskCount} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
