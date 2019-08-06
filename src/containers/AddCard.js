import { connect } from 'react-redux';
import { addCard } from '../actions';
import AddCard from '../components/AddCard';

const mapDispatchToProps = dispatch => ({
  addCard: (text, cardListId) => dispatch(addCard(text, cardListId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddCard);
