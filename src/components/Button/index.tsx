import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from "react";
import { Container, ButtonTT } from "./styles";

import Link from 'next/link';


interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: any,
  link?: string,
  children: ReactNode,
}

export const Button = ({ children, link, onClick, ...rest }: ButtonInterface) => {
  const [linkText, setLinkText] = useState('')

  useEffect(() => {
    link ? setLinkText(link) : setLinkText('');
  }, [link])
  return (
    <Container>
      <Link href={linkText}>
        <ButtonTT onClick={onClick} {...rest}>{children}</ButtonTT>
      </Link>
    </Container>
  );
}
