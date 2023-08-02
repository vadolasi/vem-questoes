import { RiFocus2Line } from "react-icons/ri";
import { Container } from "./styles";

type FocusButtonProps = {
  onClick: any;
  className?: string;
};

export function FocusButton({ onClick, className }: FocusButtonProps) {
  return (
    <Container onClick={onClick} className={className}>
      <RiFocus2Line />
    </Container>
  );
}
