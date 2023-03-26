import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { WrapperTasks, Input, Text, Btn } from './Task.styled';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <WrapperTasks>
      <Input type="checkbox" checked={task.completed} onChange={handleToggle} />

      <Text>{task.text}</Text>

      <Btn onClick={handleDelete}>
        <MdClose size={24} />
      </Btn>
    </WrapperTasks>
  );
};
