import { connect } from 'react-redux';
import PeopleDetails from './PeopleDetails';

const mapStateToProps = ({ getDataByIdReducer }) => ({
    data: getDataByIdReducer.cardsData[getDataByIdReducer.filter][getDataByIdReducer.selectedCardId]
});

export default connect(
    mapStateToProps
)(PeopleDetails);