import { IconButton, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslation } from 'react-i18next';
import Task from '../../types';
import TaskItem from '../TaskItem';

interface Props {
  tasks: Array<Task>;
  onCompleteTask: Function;
  onDeleteTask: Function;
}

function TodoList({ tasks, onCompleteTask, onDeleteTask }: Props) {
  const [translation] = useTranslation('global');

  return (
    <Box>
      {tasks.length > 0 ? (
        <List>
          <TransitionGroup>
            {tasks.map((task) => (
              <Collapse key={task.id}>
                <TaskItem task={task} onComplete={onCompleteTask} onDelete={onDeleteTask} />
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      ) : (
        <Paper
          elevation={0}
          sx={{
            p: '0.75em 1.5em',
            alignItems: 'center',
            backgroundColor: 'background.default',
          }}
        >
          <Stack direction="column" justifyContent="space-between" alignItems="center">
            <IconButton aria-label="done" color="info">
              <InfoOutlinedIcon />
            </IconButton>

            <Stack direction="row" alignItems="center">
              <Typography variant="h4" component="h2">
                {translation('main.title')}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}

export default TodoList;
