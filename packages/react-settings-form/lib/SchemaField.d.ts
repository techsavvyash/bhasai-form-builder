export declare const SchemaField: {
    <Decorator extends import("@formily/react").JSXComponent, Component extends import("@formily/react").JSXComponent>(props: import("@formily/react").ISchemaFieldProps<Decorator, Component, import("@formily/core").ObjectField<Decorator, Component>>): JSX.Element;
    displayName: string;
    Markup: {
        <Decorator_1 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_1 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaMarkupFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_1, Decorator_1>): JSX.Element;
        displayName: string;
    };
    String: {
        <Decorator_2 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_2 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_2, Decorator_2>): JSX.Element;
        displayName: string;
    };
    Object: {
        <Decorator_3 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_3 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_3, Decorator_3>): JSX.Element;
        displayName: string;
    };
    Array: {
        <Decorator_4 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_4 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_4, Decorator_4>): JSX.Element;
        displayName: string;
    };
    Boolean: {
        <Decorator_5 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_5 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_5, Decorator_5>): JSX.Element;
        displayName: string;
    };
    Date: {
        <Decorator_6 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_6 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_6, Decorator_6>): JSX.Element;
        displayName: string;
    };
    DateTime: {
        <Decorator_7 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_7 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_7, Decorator_7>): JSX.Element;
        displayName: string;
    };
    Void: {
        <Decorator_8 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_8 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_8, Decorator_8>): JSX.Element;
        displayName: string;
    };
    Number: {
        <Decorator_9 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab", Component_9 extends "Space" | "FormItem" | "CollapseItem" | "Input" | "ValueInput" | "SizeInput" | "ColorInput" | "ImageInput" | "MonacoInput" | "PositionInput" | "CornerInput" | "BackgroundImageInput" | "BackgroundStyleSetter" | "BoxStyleSetter" | "BorderStyleSetter" | "BorderRadiusStyleSetter" | "DisplayStyleSetter" | "BoxShadowStyleSetter" | "FlexStyleSetter" | "FontStyleSetter" | "DrawerSetter" | "NumberPicker" | "DatePicker" | "TimePicker" | "Select" | "Radio" | "Slider" | "Switch" | "ArrayItems" | "ArrayTable" | "FormCollapse" | "FormGrid" | "FormLayout" | "FormTab" | "FormItem.BaseItem" | "Input.TextArea" | "MonacoInput.loader" | "NumberPicker.$$typeof" | "DatePicker.RangePicker" | "TimePicker.RangePicker" | "Radio.Group" | "Radio.__ANT_RADIO" | "Slider.$$typeof" | "Switch.$$typeof" | "ArrayItems.Item" | "ArrayItems.Addition" | "ArrayItems.Copy" | "ArrayItems.Remove" | "ArrayItems.MoveUp" | "ArrayItems.MoveDown" | "ArrayItems.SortHandle" | "ArrayItems.Index" | "ArrayItems.useArray" | "ArrayItems.useIndex" | "ArrayItems.useRecord" | "ArrayTable.Addition" | "ArrayTable.Copy" | "ArrayTable.Remove" | "ArrayTable.MoveUp" | "ArrayTable.MoveDown" | "ArrayTable.SortHandle" | "ArrayTable.Index" | "ArrayTable.useArray" | "ArrayTable.useIndex" | "ArrayTable.useRecord" | "ArrayTable.Column" | "FormCollapse.CollapsePanel" | "FormCollapse.createFormCollapse" | "FormGrid.GridColumn" | "FormGrid.useFormGrid" | "FormGrid.createFormGrid" | "FormGrid.useGridSpan" | "FormGrid.useGridColumn" | "FormLayout.useFormLayout" | "FormLayout.useFormDeepLayout" | "FormLayout.useFormShallowLayout" | "FormTab.TabPane" | "FormTab.createFormTab">(props: import("@formily/react").ISchemaTypeFieldProps<{
            FormItem: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormItemProps>> & {
                BaseItem?: React.FC<React.PropsWithChildren<import("@formily/antd").IFormItemProps>>;
            };
            CollapseItem: import("react").FC<import("./components").ICollapseItemProps>;
            Input: import("react").FC<import("react").PropsWithChildren<import("antd").InputProps>> & {
                TextArea?: React.FC<React.PropsWithChildren<import("antd/lib/input").TextAreaProps>>;
            };
            ValueInput: import("react").FC<import("./components").IInput>;
            SizeInput: import("react").FC<import("./components").IInput>;
            ColorInput: import("react").FC<import("./components").IColorInputProps>;
            ImageInput: import("react").FC<import("./components").ImageInputProps>;
            MonacoInput: import("react").FC<import("./components").MonacoInputProps> & {
                loader?: typeof import("@monaco-editor/react").loader;
            };
            PositionInput: import("react").FC<import("./components").IPositionInputProps>;
            CornerInput: import("react").FC<import("./components").ICornerInputProps>;
            BackgroundImageInput: import("react").FC<import("./components").ImageInputProps>;
            BackgroundStyleSetter: import("react").FC<import("./components").IBackgroundStyleSetterProps>;
            BoxStyleSetter: import("react").FC<import("./components").IMarginStyleSetterProps>;
            BorderStyleSetter: import("react").FC<import("./components").IBorderStyleSetterProps>;
            BorderRadiusStyleSetter: import("react").FC<import("./components").IBorderRadiusStyleSetterProps>;
            DisplayStyleSetter: import("react").FC<import("./components").IDisplayStyleSetterProps>;
            BoxShadowStyleSetter: import("react").FC<import("./components").IBoxShadowStyleSetterProps>;
            FlexStyleSetter: import("react").FC<import("./components").IFlexStyleSetterProps>;
            FontStyleSetter: import("react").FC<import("./components").IFontStyleSetterProps>;
            DrawerSetter: import("react").FC<import("./components").IDrawerSetterProps>;
            NumberPicker: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").InputNumberProps<string | number> & {
                children?: import("react").ReactNode;
            } & {
                ref?: import("react").Ref<HTMLInputElement>;
            }>, keyof import("antd").InputNumberProps<string | number>> & import("react").RefAttributes<unknown>>;
            DatePicker: import("react").FC<import("react").PropsWithChildren<import("antd").DatePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd/lib/date-picker").RangePickerProps>>;
            };
            TimePicker: import("react").FC<import("react").PropsWithChildren<import("antd").TimePickerProps>> & {
                RangePicker?: React.FC<React.PropsWithChildren<import("antd").TimeRangePickerProps>>;
            };
            Select: import("@formily/react").ReactFC<import("antd").SelectProps<any, any>>;
            Radio: import("react").FC<import("react").PropsWithChildren<import("antd").RadioProps>> & {
                Group?: React.FC<React.PropsWithChildren<import("antd").RadioGroupProps>>;
                __ANT_RADIO?: boolean;
            };
            Slider: import("react").ForwardRefExoticComponent<(import("antd").SliderSingleProps | import("antd/lib/slider").SliderRangeProps) & import("react").RefAttributes<unknown>>;
            Switch: import("react").ForwardRefExoticComponent<Pick<Partial<import("antd").SwitchProps & import("react").RefAttributes<HTMLElement>>, "key" | keyof import("antd").SwitchProps> & import("react").RefAttributes<unknown>>;
            Space: import("react").FC<import("react").PropsWithChildren<import("antd").SpaceProps>>;
            ArrayItems: import("react").FC<import("react").PropsWithChildren<import("react").HTMLAttributes<HTMLDivElement> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Item?: React.FC<React.HTMLAttributes<HTMLDivElement> & {
                    type?: "card" | "divide";
                }>;
            };
            ArrayTable: import("react").FC<import("react").PropsWithChildren<import("antd").TableProps<any> & import("@formily/antd").IArrayBaseProps>> & import("@formily/antd").ArrayBaseMixins & {
                Column?: React.FC<React.PropsWithChildren<import("antd").TableColumnProps<any>>>;
            };
            FormCollapse: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormCollapseProps>> & {
                CollapsePanel?: React.FC<React.PropsWithChildren<import("antd").CollapsePanelProps>>;
                createFormCollapse?: (defaultActiveKeys?: string | number | (string | number)[]) => import("@formily/antd").IFormCollapse;
            };
            FormGrid: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormGridProps>> & {
                GridColumn: React.FC<React.PropsWithChildren<import("@formily/antd").IGridColumnProps>>;
                useFormGrid: () => import("@formily/grid").Grid<HTMLElement>;
                createFormGrid: (props: import("@formily/antd").IFormGridProps) => import("@formily/grid").Grid<HTMLElement>;
                useGridSpan: (gridSpan: number) => number;
                useGridColumn: (gridSpan: number) => number;
            };
            FormLayout: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormLayoutProps>> & {
                useFormLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormDeepLayout: () => import("@formily/antd").IFormLayoutContext;
                useFormShallowLayout: () => import("@formily/antd").IFormLayoutContext;
            };
            FormTab: import("react").FC<import("react").PropsWithChildren<import("@formily/antd").IFormTabProps>> & {
                TabPane: React.FC<React.PropsWithChildren<import("@formily/antd").IFormTabPaneProps>>;
                createFormTab: (defaultActiveKey?: string) => import("@formily/antd").IFormTab;
            };
        }, Component_9, Decorator_9>): JSX.Element;
        displayName: string;
    };
};
