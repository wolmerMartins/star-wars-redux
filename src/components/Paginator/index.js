import { connect } from 'react-redux';
import Paginator from './Paginator';

import { fetchDataIfNeeded } from '../../actions/getDataByPage';

const mapStateToProps = ({ getDataByPageReducer }) => ({
    actualPage: getDataByPageReducer.actualPage,
    response: getDataByPageReducer.dataByFilter,
    filteredBy: getDataByPageReducer.filteredBy,
    isLoading: getDataByPageReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchData: (filter, page) => dispatch(fetchDataIfNeeded(filter, page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Paginator);