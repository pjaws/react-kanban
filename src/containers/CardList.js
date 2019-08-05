import { connect } from 'react-redux';
import CardList from '../components/CardList';

const mapStateToProps = (state, ownProps) => {
  const cardList = state.cardLists.byId[ownProps.id];

  return { cardList };
};

export default connect(mapStateToProps)(CardList);
