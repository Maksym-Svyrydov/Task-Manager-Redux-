import { TaskSection, TaskText } from './TaskCounter.styled';

export const TaskCounter = () => {
  return (
    <TaskSection>
      <TaskText>Active: 0</TaskText>
      <TaskText>Completed: 0</TaskText>
    </TaskSection>
  );
};
