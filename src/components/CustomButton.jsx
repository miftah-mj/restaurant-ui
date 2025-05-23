import PropTypes from "prop-types";

const CustomButton = ({ btnText, onClick = () => {} }) => {
    return (
        <div className="flex justify-center mt-10">
            <button
                onClick={onClick}
                className="border-b-4 border-black rounded-r-lg rounded-l-lg py-2 px-4 uppercase font-semibold"
            >
                {btnText}
            </button>
        </div>
    );
};

CustomButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default CustomButton;
