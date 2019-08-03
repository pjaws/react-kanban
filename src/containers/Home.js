import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = state => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(Home);
