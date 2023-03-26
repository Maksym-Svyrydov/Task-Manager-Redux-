import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/Appbar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
      <ToastContainer autoClose={3500} />
    </Layout>
  );
};
