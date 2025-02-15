import PropTypes from 'prop-types';

const Status = ({ text, icon : Icon, color, bg }) => {
    return (
        <div className={`flex items-center justify-center ${bg} ${color} px-4 py-2 font-semibold rounded-lg`}>
            <Icon className="inline-block mr-2" />
            {text}
        </div>
    );

};

Status.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string,
    bg: PropTypes.string,
}


export default Status;