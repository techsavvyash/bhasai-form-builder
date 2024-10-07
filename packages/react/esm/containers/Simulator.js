import React from 'react';
import { ScreenType } from '@samagrax/core';
import { requestIdle } from '@samagrax/shared';
import { observer } from '@formily/reactive-react';
import { useScreen } from '../hooks';
import { MobileSimulator, PCSimulator, ResponsiveSimulator, } from '../simulators';
export const Simulator = observer((props) => {
    const screen = useScreen();
    if (screen.type === ScreenType.PC)
        return React.createElement(PCSimulator, { ...props }, props.children);
    if (screen.type === ScreenType.Mobile)
        return React.createElement(MobileSimulator, { ...props }, props.children);
    if (screen.type === ScreenType.Responsive)
        return (React.createElement(ResponsiveSimulator, { ...props }, props.children));
    return React.createElement(PCSimulator, { ...props }, props.children);
}, {
    scheduler: requestIdle,
});
