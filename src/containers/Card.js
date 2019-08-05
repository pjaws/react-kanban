import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.byId[ownProps.id];

  return { card };
};

export default connect(mapStateToProps)(Card);
