import { connect } from 'react-redux';
import Header from './Header';
import { fetchDataIfNeeded } from '../../actions/getDataByPage';

const mapStateToProps = ({ getDataByPageReducer }) => ({
    filteredBy: getDataByPageReducer.filteredBy
});

const mapDispatchToProps = dispatch => ({
    fetchData: (filter, page) => dispatch(fetchDataIfNeeded(filter, page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);