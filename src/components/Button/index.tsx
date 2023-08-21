import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from "react";
import { Container, ButtonTT } from "./styles";

import Link from 'next/link';


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
        <button className="btn btn-primary flex items-center justify-center text-center" onClick={onClick} {...rest}>{loading ? <span className="loading loading-spinner"></span> : children}</button>
      </Link>
    </Container>
  );
}
