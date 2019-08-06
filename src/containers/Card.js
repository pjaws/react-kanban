import { connect } from 'react-redux';
import { editCard } from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.byId[ownProps.id];

  return { card };
};

const mapDispatchToProps = dispatch => ({
  editCard: (cardId, text) => dispatch(editCard(cardId, text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
