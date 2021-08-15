import PasswordItem from '../../components/PasswordItem';
import { Container } from './styles';

const Password: React.FC = () => {
  return(
      <Container>
          <PasswordItem
            email=""
            login="teste"
            password="mu$G`Pe`3qL/NU)_4"
            website="discord.com"
            name="Discord"
            category=""
            note=""
          />
          <PasswordItem
            email="teste@teste.com"
            login=""
            password="mu$G`Pe`3qL/NU)_4"
            website="discord.com"
            name="Discord"
            category=""
            note=""
          />
          <PasswordItem
            email="teste@teste.com"
            login=""
            password="mu$G`Pe`3qL/NU)_4"
            website="discord.com"
            name="Discord"
            category=""
            note=""
          />
      </Container>
  );
}

export default Password;