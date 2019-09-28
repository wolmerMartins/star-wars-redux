import { connect } from 'react-redux';
import PeopleDetails from './PeopleDetails';
import { goBackToPage } from '../../actions/getDataById';

const mapStateToProps = ({ getDataByIdReducer }) => ({
    cardData: getDataByIdReducer.cardsData[getDataByIdReducer.filter][getDataByIdReducer.selectedCardId]
});

const mapDispatchToProps = dispatch => ({
    goBackToPage: () => dispatch(goBackToPage())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleDetails);