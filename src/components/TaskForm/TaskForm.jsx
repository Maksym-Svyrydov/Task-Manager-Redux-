import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { Form, Field } from './TaskForm.styled';
import { addTask } from '../../redux/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value.trim() === '') {
      toast.error('Введите название задачи');
      return;
    }
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
