
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId = '666392944368-b75v7lap2mmd5nj7d89h8cg0irju9mre.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
