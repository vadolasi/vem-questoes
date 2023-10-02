import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Input = ({ text, ...rest }: InputInterface) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <div>
        <input {...rest} type={showPassword ? "text" : rest.type} />
        {rest.type === "password" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 text-2xl" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              />
            ) : (
              <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        )}
      </div>
      <span>{text}</span>
    </Container>
  );
};
