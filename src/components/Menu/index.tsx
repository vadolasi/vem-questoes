import { Container } from "./styles";
import {AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart} from 'react-icons/ai'

export const Menu = () => {
    return(
        <Container>
            <li>
                <button>
                    <AiOutlineHome/>
                    Home
                </button>
            </li>
            <li>
                <button>
                    <AiOutlineRead/>
                    Mesa de estudos
                </button>
            </li>
            <li>
                <button>
                    <AiOutlineForm/>
                    Banco de questões
                </button>
            </li>
            <li>
                <button>
                    <AiOutlineKey/>
                    Raio-X
                </button>
            </li>
            <li>
                <button>
                    <AiOutlineBarChart/>
                    Estatísticas
                </button>
            </li>
        </Container>
    );
}