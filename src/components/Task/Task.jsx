import { MdClose } from 'react-icons/md';
import { WrapperTasks, Input, Text, Btn } from './Task.styled';

export const Task = ({ task }) => {
  return (
    <WrapperTasks>
      <Input type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Btn>
        <MdClose size={24} />
      </Btn>
    </WrapperTasks>
  );
};
