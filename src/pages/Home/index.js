import { connect } from 'react-redux';
import { fetchDataIfNeeded } from '../../actions/getDataByPage';

import Home from './Home';

const mapStateToProps = state => ({
    state: state.getDataByPageReducer,
    isLoading: state.getDataByPageReducer.isLoading,
    actualPage: state.getDataByPageReducer.actualPage,
    filteredBy: state.getDataByPageReducer.filteredBy,
    response: state.getDataByPageReducer.dataByFilter
});

const mapDispatchToProps = dispatch => ({
    fetchData: (filter, page) => dispatch(fetchDataIfNeeded(filter, page))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);