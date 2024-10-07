import { ISchema } from '@formily/json-schema';
export declare const createComponentSchema: (component: ISchema, decorator: ISchema) => {
    'component-group': {
        type: string;
        'x-component': string;
        'x-reactions': {
            fulfill: {
                state: {
                    visible: string;
                };
            };
        };
        properties: {
            'x-component-props': import("@formily/json-schema").Stringify<{
                [key: symbol]: any;
                [key: `x-${string}`]: any;
                [key: `x-${number}`]: any;
                version?: string;
                name?: import("@formily/json-schema").SchemaKey;
                title?: any;
                description?: any;
                default?: any;
                readOnly?: boolean;
                writeOnly?: boolean;
                type?: import("@formily/json-schema").SchemaTypes;
                enum?: import("@formily/json-schema").SchemaEnum<any>;
                const?: any;
                multipleOf?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                minimum?: number;
                exclusiveMinimum?: number;
                maxLength?: number;
                minLength?: number;
                pattern?: string | RegExp;
                maxItems?: number;
                minItems?: number;
                uniqueItems?: boolean;
                maxProperties?: number;
                minProperties?: number;
                required?: string[] | boolean | string;
                format?: string;
                $ref?: string;
                $namespace?: string;
                definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                additionalItems?: import("@formily/json-schema").Stringify<any>;
                patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                additionalProperties?: import("@formily/json-schema").Stringify<any>;
                "x-value"?: any;
                "x-index"?: number;
                "x-pattern"?: any;
                "x-display"?: any;
                "x-validator"?: any;
                "x-decorator"?: any;
                "x-decorator-props"?: any;
                "x-component"?: any;
                "x-component-props"?: any;
                "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                "x-content"?: any;
                "x-data"?: any;
                "x-visible"?: boolean;
                "x-hidden"?: boolean;
                "x-disabled"?: boolean;
                "x-editable"?: boolean;
                "x-read-only"?: boolean;
                "x-read-pretty"?: boolean;
                "x-compile-omitted"?: string[];
            }>;
        };
    };
    'decorator-group': {
        type: string;
        'x-component': string;
        'x-component-props': {
            defaultExpand: boolean;
        };
        'x-reactions': {
            fulfill: {
                state: {
                    visible: string;
                };
            };
        };
        properties: {
            'x-decorator-props': import("@formily/json-schema").Stringify<{
                [key: symbol]: any;
                [key: `x-${string}`]: any;
                [key: `x-${number}`]: any;
                version?: string;
                name?: import("@formily/json-schema").SchemaKey;
                title?: any;
                description?: any;
                default?: any;
                readOnly?: boolean;
                writeOnly?: boolean;
                type?: import("@formily/json-schema").SchemaTypes;
                enum?: import("@formily/json-schema").SchemaEnum<any>;
                const?: any;
                multipleOf?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                minimum?: number;
                exclusiveMinimum?: number;
                maxLength?: number;
                minLength?: number;
                pattern?: string | RegExp;
                maxItems?: number;
                minItems?: number;
                uniqueItems?: boolean;
                maxProperties?: number;
                minProperties?: number;
                required?: string[] | boolean | string;
                format?: string;
                $ref?: string;
                $namespace?: string;
                definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                additionalItems?: import("@formily/json-schema").Stringify<any>;
                patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                additionalProperties?: import("@formily/json-schema").Stringify<any>;
                "x-value"?: any;
                "x-index"?: number;
                "x-pattern"?: any;
                "x-display"?: any;
                "x-validator"?: any;
                "x-decorator"?: any;
                "x-decorator-props"?: any;
                "x-component"?: any;
                "x-component-props"?: any;
                "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                "x-content"?: any;
                "x-data"?: any;
                "x-visible"?: boolean;
                "x-hidden"?: boolean;
                "x-disabled"?: boolean;
                "x-editable"?: boolean;
                "x-read-only"?: boolean;
                "x-read-pretty"?: boolean;
                "x-compile-omitted"?: string[];
            }>;
        };
    };
    'component-style-group': {
        type: string;
        'x-component': string;
        'x-component-props': {
            defaultExpand: boolean;
        };
        'x-reactions': {
            fulfill: {
                state: {
                    visible: string;
                };
            };
        };
        properties: {
            'x-component-props.style': import("@formily/json-schema").Stringify<{
                [key: symbol]: any;
                [key: `x-${string}`]: any;
                [key: `x-${number}`]: any;
                version?: string;
                name?: import("@formily/json-schema").SchemaKey;
                title?: any;
                description?: any;
                default?: any;
                readOnly?: boolean;
                writeOnly?: boolean;
                type?: import("@formily/json-schema").SchemaTypes;
                enum?: import("@formily/json-schema").SchemaEnum<any>;
                const?: any;
                multipleOf?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                minimum?: number;
                exclusiveMinimum?: number;
                maxLength?: number;
                minLength?: number;
                pattern?: string | RegExp;
                maxItems?: number;
                minItems?: number;
                uniqueItems?: boolean;
                maxProperties?: number;
                minProperties?: number;
                required?: string[] | boolean | string;
                format?: string;
                $ref?: string;
                $namespace?: string;
                definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                additionalItems?: import("@formily/json-schema").Stringify<any>;
                patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                additionalProperties?: import("@formily/json-schema").Stringify<any>;
                "x-value"?: any;
                "x-index"?: number;
                "x-pattern"?: any;
                "x-display"?: any;
                "x-validator"?: any;
                "x-decorator"?: any;
                "x-decorator-props"?: any;
                "x-component"?: any;
                "x-component-props"?: any;
                "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                "x-content"?: any;
                "x-data"?: any;
                "x-visible"?: boolean;
                "x-hidden"?: boolean;
                "x-disabled"?: boolean;
                "x-editable"?: boolean;
                "x-read-only"?: boolean;
                "x-read-pretty"?: boolean;
                "x-compile-omitted"?: string[];
            }>;
        };
    };
    'decorator-style-group': {
        type: string;
        'x-component': string;
        'x-component-props': {
            defaultExpand: boolean;
        };
        'x-reactions': {
            fulfill: {
                state: {
                    visible: string;
                };
            };
        };
        properties: {
            'x-decorator-props.style': import("@formily/json-schema").Stringify<{
                [key: symbol]: any;
                [key: `x-${string}`]: any;
                [key: `x-${number}`]: any;
                version?: string;
                name?: import("@formily/json-schema").SchemaKey;
                title?: any;
                description?: any;
                default?: any;
                readOnly?: boolean;
                writeOnly?: boolean;
                type?: import("@formily/json-schema").SchemaTypes;
                enum?: import("@formily/json-schema").SchemaEnum<any>;
                const?: any;
                multipleOf?: number;
                maximum?: number;
                exclusiveMaximum?: number;
                minimum?: number;
                exclusiveMinimum?: number;
                maxLength?: number;
                minLength?: number;
                pattern?: string | RegExp;
                maxItems?: number;
                minItems?: number;
                uniqueItems?: boolean;
                maxProperties?: number;
                minProperties?: number;
                required?: string[] | boolean | string;
                format?: string;
                $ref?: string;
                $namespace?: string;
                definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                additionalItems?: import("@formily/json-schema").Stringify<any>;
                patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                additionalProperties?: import("@formily/json-schema").Stringify<any>;
                "x-value"?: any;
                "x-index"?: number;
                "x-pattern"?: any;
                "x-display"?: any;
                "x-validator"?: any;
                "x-decorator"?: any;
                "x-decorator-props"?: any;
                "x-component"?: any;
                "x-component-props"?: any;
                "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                "x-content"?: any;
                "x-data"?: any;
                "x-visible"?: boolean;
                "x-hidden"?: boolean;
                "x-disabled"?: boolean;
                "x-editable"?: boolean;
                "x-read-only"?: boolean;
                "x-read-pretty"?: boolean;
                "x-compile-omitted"?: string[];
            }>;
        };
    };
};
export declare const createFieldSchema: (component?: ISchema, decorator?: ISchema) => ISchema;
export declare const createVoidFieldSchema: (component?: ISchema, decorator?: ISchema) => {
    type: string;
    properties: {
        'component-group': {
            type: string;
            'x-component': string;
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: string;
                    };
                };
            };
            properties: {
                'x-component-props': import("@formily/json-schema").Stringify<{
                    [key: symbol]: any;
                    [key: `x-${string}`]: any;
                    [key: `x-${number}`]: any;
                    version?: string;
                    name?: import("@formily/json-schema").SchemaKey;
                    title?: any;
                    description?: any;
                    default?: any;
                    readOnly?: boolean;
                    writeOnly?: boolean;
                    type?: import("@formily/json-schema").SchemaTypes;
                    enum?: import("@formily/json-schema").SchemaEnum<any>;
                    const?: any;
                    multipleOf?: number;
                    maximum?: number;
                    exclusiveMaximum?: number;
                    minimum?: number;
                    exclusiveMinimum?: number;
                    maxLength?: number;
                    minLength?: number;
                    pattern?: string | RegExp;
                    maxItems?: number;
                    minItems?: number;
                    uniqueItems?: boolean;
                    maxProperties?: number;
                    minProperties?: number;
                    required?: string[] | boolean | string;
                    format?: string;
                    $ref?: string;
                    $namespace?: string;
                    definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                    additionalItems?: import("@formily/json-schema").Stringify<any>;
                    patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    additionalProperties?: import("@formily/json-schema").Stringify<any>;
                    "x-value"?: any;
                    "x-index"?: number;
                    "x-pattern"?: any;
                    "x-display"?: any;
                    "x-validator"?: any;
                    "x-decorator"?: any;
                    "x-decorator-props"?: any;
                    "x-component"?: any;
                    "x-component-props"?: any;
                    "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                    "x-content"?: any;
                    "x-data"?: any;
                    "x-visible"?: boolean;
                    "x-hidden"?: boolean;
                    "x-disabled"?: boolean;
                    "x-editable"?: boolean;
                    "x-read-only"?: boolean;
                    "x-read-pretty"?: boolean;
                    "x-compile-omitted"?: string[];
                }>;
            };
        };
        'decorator-group': {
            type: string;
            'x-component': string;
            'x-component-props': {
                defaultExpand: boolean;
            };
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: string;
                    };
                };
            };
            properties: {
                'x-decorator-props': import("@formily/json-schema").Stringify<{
                    [key: symbol]: any;
                    [key: `x-${string}`]: any;
                    [key: `x-${number}`]: any;
                    version?: string;
                    name?: import("@formily/json-schema").SchemaKey;
                    title?: any;
                    description?: any;
                    default?: any;
                    readOnly?: boolean;
                    writeOnly?: boolean;
                    type?: import("@formily/json-schema").SchemaTypes;
                    enum?: import("@formily/json-schema").SchemaEnum<any>;
                    const?: any;
                    multipleOf?: number;
                    maximum?: number;
                    exclusiveMaximum?: number;
                    minimum?: number;
                    exclusiveMinimum?: number;
                    maxLength?: number;
                    minLength?: number;
                    pattern?: string | RegExp;
                    maxItems?: number;
                    minItems?: number;
                    uniqueItems?: boolean;
                    maxProperties?: number;
                    minProperties?: number;
                    required?: string[] | boolean | string;
                    format?: string;
                    $ref?: string;
                    $namespace?: string;
                    definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                    additionalItems?: import("@formily/json-schema").Stringify<any>;
                    patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    additionalProperties?: import("@formily/json-schema").Stringify<any>;
                    "x-value"?: any;
                    "x-index"?: number;
                    "x-pattern"?: any;
                    "x-display"?: any;
                    "x-validator"?: any;
                    "x-decorator"?: any;
                    "x-decorator-props"?: any;
                    "x-component"?: any;
                    "x-component-props"?: any;
                    "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                    "x-content"?: any;
                    "x-data"?: any;
                    "x-visible"?: boolean;
                    "x-hidden"?: boolean;
                    "x-disabled"?: boolean;
                    "x-editable"?: boolean;
                    "x-read-only"?: boolean;
                    "x-read-pretty"?: boolean;
                    "x-compile-omitted"?: string[];
                }>;
            };
        };
        'component-style-group': {
            type: string;
            'x-component': string;
            'x-component-props': {
                defaultExpand: boolean;
            };
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: string;
                    };
                };
            };
            properties: {
                'x-component-props.style': import("@formily/json-schema").Stringify<{
                    [key: symbol]: any;
                    [key: `x-${string}`]: any;
                    [key: `x-${number}`]: any;
                    version?: string;
                    name?: import("@formily/json-schema").SchemaKey;
                    title?: any;
                    description?: any;
                    default?: any;
                    readOnly?: boolean;
                    writeOnly?: boolean;
                    type?: import("@formily/json-schema").SchemaTypes;
                    enum?: import("@formily/json-schema").SchemaEnum<any>;
                    const?: any;
                    multipleOf?: number;
                    maximum?: number;
                    exclusiveMaximum?: number;
                    minimum?: number;
                    exclusiveMinimum?: number;
                    maxLength?: number;
                    minLength?: number;
                    pattern?: string | RegExp;
                    maxItems?: number;
                    minItems?: number;
                    uniqueItems?: boolean;
                    maxProperties?: number;
                    minProperties?: number;
                    required?: string[] | boolean | string;
                    format?: string;
                    $ref?: string;
                    $namespace?: string;
                    definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                    additionalItems?: import("@formily/json-schema").Stringify<any>;
                    patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    additionalProperties?: import("@formily/json-schema").Stringify<any>;
                    "x-value"?: any;
                    "x-index"?: number;
                    "x-pattern"?: any;
                    "x-display"?: any;
                    "x-validator"?: any;
                    "x-decorator"?: any;
                    "x-decorator-props"?: any;
                    "x-component"?: any;
                    "x-component-props"?: any;
                    "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                    "x-content"?: any;
                    "x-data"?: any;
                    "x-visible"?: boolean;
                    "x-hidden"?: boolean;
                    "x-disabled"?: boolean;
                    "x-editable"?: boolean;
                    "x-read-only"?: boolean;
                    "x-read-pretty"?: boolean;
                    "x-compile-omitted"?: string[];
                }>;
            };
        };
        'decorator-style-group': {
            type: string;
            'x-component': string;
            'x-component-props': {
                defaultExpand: boolean;
            };
            'x-reactions': {
                fulfill: {
                    state: {
                        visible: string;
                    };
                };
            };
            properties: {
                'x-decorator-props.style': import("@formily/json-schema").Stringify<{
                    [key: symbol]: any;
                    [key: `x-${string}`]: any;
                    [key: `x-${number}`]: any;
                    version?: string;
                    name?: import("@formily/json-schema").SchemaKey;
                    title?: any;
                    description?: any;
                    default?: any;
                    readOnly?: boolean;
                    writeOnly?: boolean;
                    type?: import("@formily/json-schema").SchemaTypes;
                    enum?: import("@formily/json-schema").SchemaEnum<any>;
                    const?: any;
                    multipleOf?: number;
                    maximum?: number;
                    exclusiveMaximum?: number;
                    minimum?: number;
                    exclusiveMinimum?: number;
                    maxLength?: number;
                    minLength?: number;
                    pattern?: string | RegExp;
                    maxItems?: number;
                    minItems?: number;
                    uniqueItems?: boolean;
                    maxProperties?: number;
                    minProperties?: number;
                    required?: string[] | boolean | string;
                    format?: string;
                    $ref?: string;
                    $namespace?: string;
                    definitions?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    properties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    items?: import("@formily/json-schema").SchemaItems<any, any, any, any, any, any, any, any>;
                    additionalItems?: import("@formily/json-schema").Stringify<any>;
                    patternProperties?: import("@formily/json-schema").SchemaProperties<any, any, any, any, any, any, any, any>;
                    additionalProperties?: import("@formily/json-schema").Stringify<any>;
                    "x-value"?: any;
                    "x-index"?: number;
                    "x-pattern"?: any;
                    "x-display"?: any;
                    "x-validator"?: any;
                    "x-decorator"?: any;
                    "x-decorator-props"?: any;
                    "x-component"?: any;
                    "x-component-props"?: any;
                    "x-reactions"?: import("@formily/json-schema").SchemaReactions<any>;
                    "x-content"?: any;
                    "x-data"?: any;
                    "x-visible"?: boolean;
                    "x-hidden"?: boolean;
                    "x-disabled"?: boolean;
                    "x-editable"?: boolean;
                    "x-read-only"?: boolean;
                    "x-read-pretty"?: boolean;
                    "x-compile-omitted"?: string[];
                }>;
            };
        };
        'field-group': {
            type: string;
            'x-component': string;
            properties: {
                name: {
                    type: string;
                    'x-decorator': string;
                    'x-component': string;
                };
                title: {
                    type: string;
                    'x-decorator': string;
                    'x-component': string;
                    'x-reactions': {
                        fulfill: {
                            state: {
                                hidden: string;
                            };
                        };
                    };
                };
                description: {
                    type: string;
                    'x-decorator': string;
                    'x-component': string;
                    'x-reactions': {
                        fulfill: {
                            state: {
                                hidden: string;
                            };
                        };
                    };
                };
                'x-display': {
                    type: string;
                    enum: string[];
                    'x-decorator': string;
                    'x-component': string;
                    'x-component-props': {
                        defaultValue: string;
                    };
                };
                'x-pattern': {
                    type: string;
                    enum: string[];
                    'x-decorator': string;
                    'x-component': string;
                    'x-component-props': {
                        defaultValue: string;
                    };
                };
                'x-reactions': {
                    'x-decorator': string;
                    'x-component': import("react").FC<import("@samagrax/formily-setters").IReactionsSetterProps>;
                };
                'x-decorator': {
                    type: string;
                    'x-decorator': string;
                    'x-component': import("react").FC<import("../../common/FormItemSwitcher").IFormItemSwitcherProps>;
                };
            };
        };
    };
};
