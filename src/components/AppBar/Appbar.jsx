import { StatusFilter } from '../StatusFilter/StatusFilter';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import { Header, Section, Title } from '../AppBar/Appbar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Header>
  );
};
