import {GoBell, GoDatabase, GoCloudDownload} from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button succes outline rounded><GoBell  />Click here!</Button>
      </div>
      <div>
        <Button danger>Buy Now!</Button>
      </div>
      <div>
        <Button warning outline><GoDatabase />See deal</Button>
      </div>
      <div>
        <Button secondary outline> < GoCloudDownload />Hide adds!</Button>
      </div>
      <div>
        <Button primary rounded outline >Something ...</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
