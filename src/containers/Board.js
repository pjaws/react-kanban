import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.boardId;
  const board = state.boards.byId[id];

  return { board };
};

export default connect(mapStateToProps)(Board);
