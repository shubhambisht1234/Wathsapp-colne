import "./App.css";
import { AcountProvider } from "./components/context/acountProvider";
import Messanger from "./components/messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "545468100122-1fjio7o0flfbr6m6j521m2888b8lk5b3.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AcountProvider>
          <Messanger />
        </AcountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
