import React, { ReactNode } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
    text: string;
    children?: ReactNode;
    typeColor?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return(
    <ButtonStyled typeColor={props.typeColor}>
        {props.children}{props.text}
    </ButtonStyled>
  );
}

export default Button;