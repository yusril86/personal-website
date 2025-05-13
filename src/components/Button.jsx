import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ 
    href, 
    target = "_self",
    label,
    icon,
    classes
}) => {
    return (
        <div>

        </div>
    );
}
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string ,
    target: PropTypes.string,
    icon: PropTypes.node,
    classes: PropTypes.string
}; 

export {
    ButtonPrimary,
    ButtonOutline
}

