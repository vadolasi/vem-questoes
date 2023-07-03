import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from "react";
import { Container, ButtonTT } from "./styles";

import Link from 'next/link';
import { SpinnerCircular } from "spinners-react";


interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: any,
  link?: string,
  children: ReactNode,
  loading?: boolean
}

export const Button = (props: ButtonInterface) => {
  const { children, link, onClick, loading = false, ...rest } = props
  const [linkText, setLinkText] = useState('')

  useEffect(() => {
    link ? setLinkText(link) : setLinkText('');
  }, [link])

  return (
    <Container>
      <Link href={linkText}>
        <ButtonTT onClick={onClick} {...rest}>{loading ? <SpinnerCircular color="#f0f0fc" size="40" /> : children}</ButtonTT>
      </Link>
    </Container>
  );
}
