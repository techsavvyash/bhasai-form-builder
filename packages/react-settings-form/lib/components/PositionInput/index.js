import React, { useState, useEffect } from 'react';
import { usePrefix } from '@samagrax/react';
import cls from 'classnames';
import './styles.less';
export const PositionInput = (props) => {
    const prefix = usePrefix('position-input');
    const [current, setCurrent] = useState(props.value);
    useEffect(() => {
        if (!props.value) {
            setCurrent('center');
        }
    }, [props.value]);
    const createCellProps = (type) => ({
        className: cls(prefix + '-cell', { active: current === type }),
        onClick() {
            setCurrent(type);
            props.onChange?.(type);
        },
    });
    return (React.createElement("div", { className: cls(prefix, props.className), style: props.style },
        React.createElement("div", { className: prefix + '-row' },
            React.createElement("div", { ...createCellProps('top') }, "\u2533")),
        React.createElement("div", { className: prefix + '-row' },
            React.createElement("div", { ...createCellProps('left') }, "\u2523"),
            React.createElement("div", { ...createCellProps('center') }, "\u254B"),
            React.createElement("div", { ...createCellProps('right') }, "\u252B")),
        React.createElement("div", { className: prefix + '-row' },
            React.createElement("div", { ...createCellProps('bottom') }, "\u253B"))));
};
