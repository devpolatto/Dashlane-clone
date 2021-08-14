import React, { ReactNode } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
    text: string;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return(
    <ButtonStyled>
        {props.children}{props.text}
    </ButtonStyled>
  );
}

export default Button;