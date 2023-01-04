/*import {withStyles} from "@mui/styles/index";*/
import {Chip, Slider, Accordion, withStyles} from "@mui/material/index";

export const customAccordion = (props) => {
    const {borderRadius = 5, backgroundColor} = props;
    return withStyles({
        root: {
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 0,
            },
            borderRadius,
            ...(backgroundColor && {backgroundColor}),
        },
        expanded: {},
    })(Accordion)
};

export const customChip = (props) => {
    const {color, variant, size: s} = props;
    const size = (s || "").constructor === "".constructor
        ? s === "small" ? 24 : s === "big" ? 40 : 32
        : !isNaN(Number(s)) ? Number(s || 24) : 24
    ;
    return withStyles({
        root: {
            color: 'white',
            backgroundColor: `${color} !important`,
            '&:hover': {
                backgroundColor: color,
                filter: 'brightness(120%)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: color,
                borderColor: color,
            },
            ...(s && {height: size}),
            ...(s && {borderRadius: size / 2})
        },
        outlined: {
            color: color,
            border: `1px solid ${color}`,
            backgroundColor: `transparent !important`,
        },
        icon: {
            color: variant === 'outlined' ? color : 'white',
        },
        deleteIcon: {
            color: variant === 'outlined' ? color : 'white',
        },
        label: {
            paddingLeft: size / 3,
            paddingRight: size / 3,
        }
    })(Chip)
};

export const customSlider = (props) => {
    const {color, size} = props;
    const margin = (size / 2) * -1;
    const height = (size * 0.75);
    const top = size / 8;
    return withStyles({
        root: {
            color: color,
            height: 0,
            padding: `${size / 2}px 0`
        },
        thumb: {
            height: size,
            width: size,
            backgroundColor: color,
            marginTop: margin,
            /*marginLeft: margin,*/
            marginLeft: margin + 10,
            boxShadow: "0 1px 2px 0 rgba(0,0,0,.5) !important",
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: height - 1,
            top: top + 1,
            borderRadius: height / 2
        },
        mark: {
            backgroundColor: "transparent"
        },
        markLabel: {
            top: size + top
        }
    })(Slider)
};
