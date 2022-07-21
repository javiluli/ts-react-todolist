import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Task from '../../types';

interface Props {
  task: Task;
  onComplete: Function;
  onDelete: Function;
}

function TaskItem({ task, onComplete, onDelete }: Props) {
  const { id, descripcion, completada } = task;

  return (
    <Paper
      elevation={0}
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.default',
        borderRadius: 0,
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '0.75em 1.5em' }}>
        <Stack direction="row" alignItems="center">
          {completada ? (
            <Typography variant="body1" style={{ textDecorationLine: 'line-through' }}>
              {descripcion}
            </Typography>
          ) : (
            <Typography variant="body1">{descripcion}</Typography>
          )}
        </Stack>

        <Stack direction="row">
          <IconButton aria-label="done" color="success" onClick={() => onComplete(id)}>
            <DoneIcon />
          </IconButton>

          <IconButton aria-label="delete" color="error" onClick={() => onDelete(id)}>
            <DeleteRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TaskItem;
