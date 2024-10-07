import React, { useContext } from 'react';
import { Input, Upload } from 'antd';
import { usePrefix, IconWidget } from '@samagrax/react';
import { SettingsFormContext } from '../../shared/context';
import cls from 'classnames';
import './styles.less';
export const ImageInput = ({ className, style, ...props }) => {
    const prefix = usePrefix('image-input');
    const context = useContext(SettingsFormContext);
    return (React.createElement("div", { className: cls(prefix, className), style: style },
        React.createElement(Input, { ...props, onChange: (e) => {
                props.onChange?.(e?.target?.['value']);
            }, prefix: React.createElement(Upload, { action: context.uploadAction, itemRender: () => null, maxCount: 1, onChange: (params) => {
                    const response = params.file?.response;
                    const url = response?.url ||
                        response?.downloadURL ||
                        response?.imageURL ||
                        response?.thumbUrl;
                    if (!url)
                        return;
                    props.onChange?.(url);
                } },
                React.createElement(IconWidget, { infer: "CloudUpload", style: { cursor: 'pointer' } })) })));
};
export const BackgroundImageInput = (props) => {
    const addBgValue = (value) => {
        if (/url\([^)]+\)/.test(value)) {
            return value;
        }
        return `url(${value})`;
    };
    const removeBgValue = (value) => {
        const matched = String(value).match(/url\(\s*([^)]+)\s*\)/);
        if (matched?.[1]) {
            return matched?.[1];
        }
        return value;
    };
    return (React.createElement(ImageInput, { value: removeBgValue(props.value), onChange: (url) => {
            props.onChange?.(addBgValue(url));
        } }));
};
