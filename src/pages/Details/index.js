import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = ({ getDataByPageReducer, getDataByIdReducer }) => ({
    selectedCardId: getDataByIdReducer.selectedCardId,
    isSelectedCard: getDataByIdReducer.isSelectedCard,
    cardsData: getDataByIdReducer.cardsData,
    filter: getDataByPageReducer.filteredBy
});

export default connect(
    mapStateToProps
)(Details);