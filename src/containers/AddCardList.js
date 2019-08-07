import { connect } from 'react-redux';
import { addCardList } from '../actions';
import AddCardList from '../components/AddCardList';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  addCardList: (name, boardId) => dispatch(addCardList(name, boardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCardList);
