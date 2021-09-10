import * as React from "react";
import { connect } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import Alert from '../components/modules/Alert'
import { Header, Footer } from '../components'

interface IProps {
  exact?: boolean;
  isAuthenticated?: boolean | null;
  path: string;
  messages?: any;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({ component: Component, isAuthenticated, messages, ...otherProps }: IProps) => {
  const history = useHistory()
  console.log(history)
  if (isAuthenticated === false) {
    history.push("/login");
    // alert("this is a logged in route, you are logged out, redirected to log in");
  }

  const loadAlert = () => {
    if (typeof messages.message === 'string')
      return (<Alert variant={messages.variant} show={messages.show} message={messages.message} />)
    else {
      const listItems = messages.message.map((msg: any, id: any) => <Alert key={id} variant={messages.variant} show={messages.show} message={msg} />);
      return listItems;
    }
  }

  return (
    <>
      {loadAlert()}
      <Header isAuthenticated={isAuthenticated}  {...otherProps} />
      <Route  {...otherProps}
        render={otherProps => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
      <Footer />
      {/* <footer>
        Logged In Footer
      </footer> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  console.log('loggedin', state)
  return {
    isAuthenticated: state.client.isLoggedIn,
    messages: state.messages
  }
};

export default connect(
  mapStateToProps
)(LoggedInRoute);
