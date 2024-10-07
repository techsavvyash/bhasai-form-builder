import React, { Fragment } from 'react';
import { isStr, isPlainObj } from '@samagrax/shared';
import { GlobalRegistry } from '@samagrax/core';
import { observer } from '@formily/reactive-react';
export const TextWidget = observer((props) => {
    const takeLocale = (message) => {
        if (isStr(message))
            return message;
        if (isPlainObj(message)) {
            const lang = GlobalRegistry.getDesignerLanguage();
            for (const key in message) {
                if (key.toLocaleLowerCase() === lang)
                    return message[key];
            }
            return;
        }
        return message;
    };
    const takeMessage = (token) => {
        if (!token)
            return;
        const message = isStr(token)
            ? GlobalRegistry.getDesignerMessage(token)
            : token;
        if (message)
            return takeLocale(message);
        return token;
    };
    return (React.createElement(Fragment, null, takeMessage(props.children) ||
        takeMessage(props.token) ||
        takeMessage(props.defaultMessage)));
});
