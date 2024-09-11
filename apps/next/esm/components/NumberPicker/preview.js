import { NumberPicker as FormilyNumberPicker } from '@formily/next';
import { createBehavior, createResource } from '@samagrax/core';
import { createFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
export const NumberPicker = FormilyNumberPicker;
NumberPicker.Behavior = createBehavior({
    name: 'NumberPicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'NumberPicker',
    designerProps: {
        propsSchema: createFieldSchema(AllSchemas.NumberPicker),
    },
    designerLocales: AllLocales.NumberPicker,
});
NumberPicker.Resource = createResource({
    icon: 'NumberPickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'NumberPicker',
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
            },
        },
    ],
});
