import { connect } from 'react-redux';
import Cards from './Cards';
import { getAdditionalDataToCard } from '../../actions/getDataById';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getAdditionalDataToCard: (cardId) => dispatch(getAdditionalDataToCard(cardId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);