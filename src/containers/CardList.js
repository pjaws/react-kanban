import { connect } from 'react-redux';
import CardList from '../components/CardList';

const mapStateToProps = (state, ownProps) => {
  const cardList = state.cardLists.byId[ownProps.id];
  console.log('cardList');
  console.log(cardList);
  return { cardList };
};

export default connect(mapStateToProps)(CardList);
