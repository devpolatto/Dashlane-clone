import PasswordItem from '../../components/PasswordItem';
import { Container } from './styles';

const Password: React.FC = () => {
  return(
      <Container>
          <PasswordItem
            email=""
            login="teste"
            password="mu$G`Pe`3qL/NU)_4"
            website="notion.so"
            name="notion"
            category=""
            note=""
          />
          <PasswordItem
            email="polatto.xcode.job@gmail.com"
            login=""
            password="<Ut.+{HDx8T5S"
            website="discord.com"
            name="twitch.tv"
            category=""
            note=""
          />
          <PasswordItem
            email="teste@teste.com"
            login="slack.com"
            password="mu$G`Pe`3qL/NU)_4"
            website="twitch.tv"
            name="twitch"
            category=""
            note=""
          />
      </Container>
  );
}

export default Password;