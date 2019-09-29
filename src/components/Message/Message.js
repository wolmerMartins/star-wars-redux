import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const setMessageTypeClass = type => {
    if (type === 'error') return 'message-error';
    if (type === 'warn') return 'message-warn';
    if (type === 'success') return 'message-success';
    return 'message';
};

const removeError = handleError => {
    setTimeout(
        () => handleError({ status: false }),
        3800
    )
};

const Message = props => (
    <div className="message-container">
        {removeError(props.handleError)}
        <div className={setMessageTypeClass(props.type)}>
            <p>{props.message}</p>
        </div>
    </div>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Message;