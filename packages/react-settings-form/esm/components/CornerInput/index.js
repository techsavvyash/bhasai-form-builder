import React, { useState, useEffect } from 'react';
import { usePrefix } from '@samagrax/react';
import cls from 'classnames';
import './styles.less';
export const CornerInput = (props) => {
    const prefix = usePrefix('corner-input');
    const [current, setCurrent] = useState(props.value);
    useEffect(() => {
        if (!props.value) {
            setCurrent('all');
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
        React.createElement("div", { className: prefix + '-column' },
            React.createElement("div", { ...createCellProps('topLeft') }, "\u250F"),
            React.createElement("div", { ...createCellProps('bottomLeft') }, "\u2517")),
        React.createElement("div", { className: prefix + '-column' },
            React.createElement("div", { ...createCellProps('all') }, "\u254B")),
        React.createElement("div", { className: prefix + '-column' },
            React.createElement("div", { ...createCellProps('topRight') }, "\u2513"),
            React.createElement("div", { ...createCellProps('bottomRight') }, "\u251B"))));
};
