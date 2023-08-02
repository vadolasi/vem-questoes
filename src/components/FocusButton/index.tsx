import { RiFocus2Line } from "react-icons/ri";
import { Container } from "./styles";

type FocusButtonProps = {
  onClick: any;
};

export function FocusButton({ onClick }: FocusButtonProps) {
  return (
    <Container onClick={onClick}>
      <RiFocus2Line />
    </Container>
  );
}
