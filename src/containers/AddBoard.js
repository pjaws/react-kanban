import { connect } from 'react-redux';
import { addBoard } from '../actions';
import AddBoard from '../components';

const mapDispatchToProps = dispatch => ({
  addBoard: name => dispatch(addBoard(name)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddBoard);
