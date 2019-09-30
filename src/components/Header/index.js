import { connect } from 'react-redux';
import Header from './Header';
import { fetchDataIfNeeded } from '../../actions/getDataByPage';
import { goBackToPage } from '../../actions/getDataById';

const mapStateToProps = ({ getDataByPageReducer }) => ({
    filteredBy: getDataByPageReducer.filteredBy
});

const mapDispatchToProps = dispatch => ({
    fetchData: (filter, page) => dispatch(fetchDataIfNeeded(filter, page)),
    goBackToPage: () => dispatch(goBackToPage())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);