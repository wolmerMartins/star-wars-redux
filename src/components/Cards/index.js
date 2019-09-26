import { connect } from 'react-redux';
import Cards from './Cards';

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapDispatchToProps
)(Cards);