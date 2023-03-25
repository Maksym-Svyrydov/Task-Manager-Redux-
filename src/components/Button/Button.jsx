// import clsx from 'clsx';
import { Btn } from './button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn
      // className={clsx(css.btn, {
      //   [css.isSelected]: selected,
      // })}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};
