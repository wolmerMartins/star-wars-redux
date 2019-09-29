import { connect } from 'react-redux';
import Message from './Message';
import { handleError } from '../../actions/handleError';

const mapStateToProps = ({
    handleErrorReducer
}) => ({
    message: handleErrorReducer.message,
    type: handleErrorReducer.type
});

const mapDispatchToProps = dispatch => ({
    handleError: (error) => dispatch(handleError(error))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);