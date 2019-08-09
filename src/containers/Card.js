import { connect } from 'react-redux';
import { editCard, deleteCard } from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.byId[ownProps.id];

  return {
    ...ownProps,
    card,
  };
};

const mapDispatchToProps = dispatch => ({
  editCard: (cardId, text) => dispatch(editCard(cardId, text)),
  deleteCard: (cardId, cardListId) => dispatch(deleteCard(cardId, cardListId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
