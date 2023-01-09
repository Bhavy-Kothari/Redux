import { connect } from 'react-redux';
import { login } from './Actions/action';

const mapDispatchToProps = (dispatch) => ({
  setLoginReducer: (data) => {
    dispatch(login(data));
  }
});

const mapStateToProps = (state) => ({
  loginReducer: state.login ? state.login : {}
});

export default connect(mapStateToProps, mapDispatchToProps);
