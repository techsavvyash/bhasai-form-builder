import React, { createContext, useContext, useEffect, useRef } from 'react';
import { isStr, isFn, isObj, isPlainObj } from '@samagrax/shared';
import { observer } from '@formily/reactive-react';
import { Tooltip } from 'antd';
import { usePrefix, useRegistry, useTheme } from '../../hooks';
import cls from 'classnames';
import './styles.less';
const IconContext = createContext(null);
const isNumSize = (val) => /^[\d.]+$/.test(val);
export const IconWidget = observer((props) => {
    const theme = useTheme();
    const context = useContext(IconContext);
    const registry = useRegistry();
    const prefix = usePrefix('icon');
    const size = props.size || '1em';
    const height = props.style?.height || size;
    const width = props.style?.width || size;
    const takeIcon = (infer) => {
        if (isStr(infer)) {
            const finded = registry.getDesignerIcon(infer);
            if (finded) {
                return takeIcon(finded);
            }
            return React.createElement("img", { src: infer, height: height, width: width });
        }
        else if (isFn(infer)) {
            return React.createElement(infer, {
                height,
                width,
                fill: 'currentColor',
            });
        }
        else if (React.isValidElement(infer)) {
            if (infer.type === 'svg') {
                return React.cloneElement(infer, {
                    // @ts-ignore
                    height,
                    width,
                    fill: 'currentColor',
                    viewBox: infer.props.viewBox || '0 0 1024 1024',
                    focusable: 'false',
                    'aria-hidden': 'true',
                });
            }
            else if (infer.type === 'path' || infer.type === 'g') {
                return (React.createElement("svg", { viewBox: "0 0 1024 1024", height: height, width: width, fill: "currentColor", focusable: "false", "aria-hidden": "true" }, infer));
            }
            return infer;
        }
        else if (isPlainObj(infer)) {
            if (infer[theme]) {
                return takeIcon(infer[theme]);
            }
            else if (infer['shadow']) {
                return (React.createElement(IconWidget.ShadowSVG, { width: width, height: height, content: infer['shadow'] }));
            }
            return null;
        }
    };
    const renderTooltips = (children) => {
        if (!isStr(props.infer) && context?.tooltip)
            return children;
        const tooltip = props.tooltip || registry.getDesignerMessage(`icons.${props.infer}`);
        if (tooltip) {
            const title = React.isValidElement(tooltip) || isStr(tooltip)
                ? tooltip
                : tooltip.title;
            const props = React.isValidElement(tooltip) || isStr(tooltip)
                ? {}
                : isObj(tooltip)
                    ? tooltip
                    : {};
            return (React.createElement(Tooltip, { ...props, title: title }, children));
        }
        return children;
    };
    if (!props.infer)
        return null;
    return renderTooltips(React.createElement("span", { ...props, className: cls(prefix, props.className), style: {
            ...props.style,
            cursor: props.onClick ? 'pointer' : props.style?.cursor,
        } }, takeIcon(props.infer)));
});
IconWidget.ShadowSVG = (props) => {
    const ref = useRef();
    const width = isNumSize(props.width) ? `${props.width}px` : props.width;
    const height = isNumSize(props.height) ? `${props.height}px` : props.height;
    useEffect(() => {
        if (ref.current) {
            const root = ref.current.attachShadow({
                mode: 'open',
            });
            root.innerHTML = `<svg viewBox="0 0 1024 1024" style="width:${width};height:${height}">${props.content}</svg>`;
        }
    }, []);
    return React.createElement("div", { ref: ref });
};
IconWidget.Provider = (props) => {
    return (React.createElement(IconContext.Provider, { value: props }, props.children));
};
