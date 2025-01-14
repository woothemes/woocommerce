"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[7424],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ey: () => (/* binding */ InputControl),
  Ay: () => (/* binding */ input_control)
});

// UNUSED EXPORTS: UnforwardedInputControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-base.js + 2 modules
var input_base = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-base.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.3.1/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js + 3 modules
var use_gesture_react_esm = __webpack_require__("../../node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.3.1/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

/**
 * Gets a CSS cursor value based on a drag direction.
 *
 * @param dragDirection The drag direction.
 * @return  The CSS cursor value.
 */
function getDragCursor(dragDirection) {
  let dragCursor = 'ns-resize';
  switch (dragDirection) {
    case 'n':
    case 's':
      dragCursor = 'ns-resize';
      break;
    case 'e':
    case 'w':
      dragCursor = 'ew-resize';
      break;
  }
  return dragCursor;
}

/**
 * Custom hook that renders a drag cursor when dragging.
 *
 * @param {boolean} isDragging    The dragging state.
 * @param {string}  dragDirection The drag direction.
 *
 * @return {string} The CSS cursor value.
 */
function useDragCursor(isDragging, dragDirection) {
  const dragCursor = getDragCursor(dragDirection);
  (0,react.useEffect)(() => {
    if (isDragging) {
      document.documentElement.style.cursor = dragCursor;
    } else {
      // @ts-expect-error
      document.documentElement.style.cursor = null;
    }
  }, [isDragging, dragCursor]);
  return dragCursor;
}
function useDraft(props) {
  const refPreviousValue = (0,react.useRef)(props.value);
  const [draft, setDraft] = (0,react.useState)({});
  const value = draft.value !== undefined ? draft.value : props.value;

  // Determines when to discard the draft value to restore controlled status.
  // To do so, it tracks the previous value and marks the draft value as stale
  // after each render.
  (0,react.useLayoutEffect)(() => {
    const {
      current: previousValue
    } = refPreviousValue;
    refPreviousValue.current = props.value;
    if (draft.value !== undefined && !draft.isStale) {
      setDraft({
        ...draft,
        isStale: true
      });
    } else if (draft.isStale && props.value !== previousValue) {
      setDraft({});
    }
  }, [props.value, draft]);
  const onChange = (nextValue, extra) => {
    // Mutates the draft value to avoid an extra effect run.
    setDraft(current => Object.assign(current, {
      value: nextValue,
      isStale: false
    }));
    props.onChange(nextValue, extra);
  };
  const onBlur = event => {
    setDraft({});
    props.onBlur?.(event);
  };
  return {
    value,
    onBlur,
    onChange
  };
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/reducer/state.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const initialStateReducer = state => state;
const initialInputControlState = {
  error: null,
  initialValue: '',
  isDirty: false,
  isDragEnabled: false,
  isDragging: false,
  isPressEnterToChange: false,
  value: ''
};
//# sourceMappingURL=state.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js
var actions = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/reducer/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Prepares initialState for the reducer.
 *
 * @param initialState The initial state.
 * @return Prepared initialState for the reducer
 */
function mergeInitialState(initialState = initialInputControlState) {
  const {
    value
  } = initialState;
  return {
    ...initialInputControlState,
    ...initialState,
    initialValue: value
  };
}

/**
 * Creates the base reducer which may be coupled to a specializing reducer.
 * As its final step, for all actions other than CONTROL, the base reducer
 * passes the state and action on through the specializing reducer. The
 * exception for CONTROL actions is because they represent controlled updates
 * from props and no case has yet presented for their specialization.
 *
 * @param composedStateReducers A reducer to specialize state changes.
 * @return The reducer.
 */
function inputControlStateReducer(composedStateReducers) {
  return (state, action) => {
    const nextState = {
      ...state
    };
    switch (action.type) {
      /*
       * Controlled updates
       */
      case actions/* CONTROL */.W3:
        nextState.value = action.payload.value;
        nextState.isDirty = false;
        nextState._event = undefined;
        // Returns immediately to avoid invoking additional reducers.
        return nextState;

      /**
       * Keyboard events
       */
      case actions/* PRESS_UP */.wX:
        nextState.isDirty = false;
        break;
      case actions/* PRESS_DOWN */.r7:
        nextState.isDirty = false;
        break;

      /**
       * Drag events
       */
      case actions/* DRAG_START */.Qf:
        nextState.isDragging = true;
        break;
      case actions/* DRAG_END */.Ry:
        nextState.isDragging = false;
        break;

      /**
       * Input events
       */
      case actions/* CHANGE */.PL:
        nextState.error = null;
        nextState.value = action.payload.value;
        if (state.isPressEnterToChange) {
          nextState.isDirty = true;
        }
        break;
      case actions/* COMMIT */.cJ:
        nextState.value = action.payload.value;
        nextState.isDirty = false;
        break;
      case actions/* RESET */.Ut:
        nextState.error = null;
        nextState.isDirty = false;
        nextState.value = action.payload.value || state.initialValue;
        break;

      /**
       * Validation
       */
      case actions/* INVALIDATE */.uY:
        nextState.error = action.payload.error;
        break;
    }
    nextState._event = action.payload.event;

    /**
     * Send the nextState + action to the composedReducers via
     * this "bridge" mechanism. This allows external stateReducers
     * to hook into actions, and modify state if needed.
     */
    return composedStateReducers(nextState, action);
  };
}

/**
 * A custom hook that connects and external stateReducer with an internal
 * reducer. This hook manages the internal state of InputControl.
 * However, by connecting an external stateReducer function, other
 * components can react to actions as well as modify state before it is
 * applied.
 *
 * This technique uses the "stateReducer" design pattern:
 * https://kentcdodds.com/blog/the-state-reducer-pattern/
 *
 * @param stateReducer    An external state reducer.
 * @param initialState    The initial state for the reducer.
 * @param onChangeHandler A handler for the onChange event.
 * @return State, dispatch, and a collection of actions.
 */
function useInputControlStateReducer(stateReducer = initialStateReducer, initialState = initialInputControlState, onChangeHandler) {
  const [state, dispatch] = (0,react.useReducer)(inputControlStateReducer(stateReducer), mergeInitialState(initialState));
  const createChangeEvent = type => (nextValue, event) => {
    dispatch({
      type,
      payload: {
        value: nextValue,
        event
      }
    });
  };
  const createKeyEvent = type => event => {
    dispatch({
      type,
      payload: {
        event
      }
    });
  };
  const createDragEvent = type => payload => {
    dispatch({
      type,
      payload
    });
  };

  /**
   * Actions for the reducer
   */
  const change = createChangeEvent(actions/* CHANGE */.PL);
  const invalidate = (error, event) => dispatch({
    type: actions/* INVALIDATE */.uY,
    payload: {
      error,
      event
    }
  });
  const reset = createChangeEvent(actions/* RESET */.Ut);
  const commit = createChangeEvent(actions/* COMMIT */.cJ);
  const dragStart = createDragEvent(actions/* DRAG_START */.Qf);
  const drag = createDragEvent(actions/* DRAG */.j);
  const dragEnd = createDragEvent(actions/* DRAG_END */.Ry);
  const pressUp = createKeyEvent(actions/* PRESS_UP */.wX);
  const pressDown = createKeyEvent(actions/* PRESS_DOWN */.r7);
  const pressEnter = createKeyEvent(actions/* PRESS_ENTER */.bR);
  const currentState = (0,react.useRef)(state);
  const refProps = (0,react.useRef)({
    value: initialState.value,
    onChangeHandler
  });

  // Freshens refs to props and state so that subsequent effects have access
  // to their latest values without their changes causing effect runs.
  (0,react.useLayoutEffect)(() => {
    currentState.current = state;
    refProps.current = {
      value: initialState.value,
      onChangeHandler
    };
  });

  // Propagates the latest state through onChange.
  (0,react.useLayoutEffect)(() => {
    if (currentState.current._event !== undefined && state.value !== refProps.current.value && !state.isDirty) {
      var _state$value;
      refProps.current.onChangeHandler((_state$value = state.value) !== null && _state$value !== void 0 ? _state$value : '', {
        event: currentState.current._event
      });
    }
  }, [state.value, state.isDirty]);

  // Updates the state from props.
  (0,react.useLayoutEffect)(() => {
    if (initialState.value !== currentState.current.value && !currentState.current.isDirty) {
      var _initialState$value;
      dispatch({
        type: actions/* CONTROL */.W3,
        payload: {
          value: (_initialState$value = initialState.value) !== null && _initialState$value !== void 0 ? _initialState$value : ''
        }
      });
    }
  }, [initialState.value]);
  return {
    change,
    commit,
    dispatch,
    drag,
    dragEnd,
    dragStart,
    invalidate,
    pressDown,
    pressEnter,
    pressUp,
    reset,
    state
  };
}
//# sourceMappingURL=reducer.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js
var with_ignore_ime_events = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-field.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






const noop = () => {};
function InputField({
  disabled = false,
  dragDirection = 'n',
  dragThreshold = 10,
  id,
  isDragEnabled = false,
  isPressEnterToChange = false,
  onBlur = noop,
  onChange = noop,
  onDrag = noop,
  onDragEnd = noop,
  onDragStart = noop,
  onKeyDown = noop,
  onValidate = noop,
  size = 'default',
  stateReducer = state => state,
  value: valueProp,
  type,
  ...props
}, ref) {
  const {
    // State.
    state,
    // Actions.
    change,
    commit,
    drag,
    dragEnd,
    dragStart,
    invalidate,
    pressDown,
    pressEnter,
    pressUp,
    reset
  } = useInputControlStateReducer(stateReducer, {
    isDragEnabled,
    value: valueProp,
    isPressEnterToChange
  }, onChange);
  const {
    value,
    isDragging,
    isDirty
  } = state;
  const wasDirtyOnBlur = (0,react.useRef)(false);
  const dragCursor = useDragCursor(isDragging, dragDirection);
  const handleOnBlur = event => {
    onBlur(event);

    /**
     * If isPressEnterToChange is set, this commits the value to
     * the onChange callback.
     */
    if (isDirty || !event.target.validity.valid) {
      wasDirtyOnBlur.current = true;
      handleOnCommit(event);
    }
  };
  const handleOnChange = event => {
    const nextValue = event.target.value;
    change(nextValue, event);
  };
  const handleOnCommit = event => {
    const nextValue = event.currentTarget.value;
    try {
      onValidate(nextValue);
      commit(nextValue, event);
    } catch (err) {
      invalidate(err, event);
    }
  };
  const handleOnKeyDown = event => {
    const {
      key
    } = event;
    onKeyDown(event);
    switch (key) {
      case 'ArrowUp':
        pressUp(event);
        break;
      case 'ArrowDown':
        pressDown(event);
        break;
      case 'Enter':
        pressEnter(event);
        if (isPressEnterToChange) {
          event.preventDefault();
          handleOnCommit(event);
        }
        break;
      case 'Escape':
        if (isPressEnterToChange && isDirty) {
          event.preventDefault();
          reset(valueProp, event);
        }
        break;
    }
  };
  const dragGestureProps = (0,use_gesture_react_esm.useDrag)(dragProps => {
    const {
      distance,
      dragging,
      event,
      target
    } = dragProps;

    // The `target` prop always references the `input` element while, by
    // default, the `dragProps.event.target` property would reference the real
    // event target (i.e. any DOM element that the pointer is hovering while
    // dragging). Ensuring that the `target` is always the `input` element
    // allows consumers of `InputControl` (or any higher-level control) to
    // check the input's validity by accessing `event.target.validity.valid`.
    dragProps.event = {
      ...dragProps.event,
      target
    };
    if (!distance) {
      return;
    }
    event.stopPropagation();

    /**
     * Quick return if no longer dragging.
     * This prevents unnecessary value calculations.
     */
    if (!dragging) {
      onDragEnd(dragProps);
      dragEnd(dragProps);
      return;
    }
    onDrag(dragProps);
    drag(dragProps);
    if (!isDragging) {
      onDragStart(dragProps);
      dragStart(dragProps);
    }
  }, {
    axis: dragDirection === 'e' || dragDirection === 'w' ? 'x' : 'y',
    threshold: dragThreshold,
    enabled: isDragEnabled,
    pointer: {
      capture: false
    }
  });
  const dragProps = isDragEnabled ? dragGestureProps() : {};
  /*
   * Works around the odd UA (e.g. Firefox) that does not focus inputs of
   * type=number when their spinner arrows are pressed.
   */
  let handleOnMouseDown;
  if (type === 'number') {
    handleOnMouseDown = event => {
      props.onMouseDown?.(event);
      if (event.currentTarget !== event.currentTarget.ownerDocument.activeElement) {
        event.currentTarget.focus();
      }
    };
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Input */.pd, {
    ...props,
    ...dragProps,
    className: "components-input-control__input",
    disabled: disabled,
    dragCursor: dragCursor,
    isDragging: isDragging,
    id: id,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onKeyDown: (0,with_ignore_ime_events/* withIgnoreIMEEvents */.n)(handleOnKeyDown),
    onMouseDown: handleOnMouseDown,
    ref: ref,
    inputSize: size
    // Fallback to `''` to avoid "uncontrolled to controlled" warning.
    // See https://github.com/WordPress/gutenberg/pull/47250 for details.
    ,
    value: value !== null && value !== void 0 ? value : '',
    type: type
  });
}
const ForwardedComponent = (0,react.forwardRef)(InputField);
/* harmony default export */ const input_field = (ForwardedComponent);
//# sourceMappingURL=input-field.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const input_control_noop = () => {};
function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(InputControl);
  const id = `inspector-input-control-${instanceId}`;
  return idProp || id;
}
function UnforwardedInputControl(props, ref) {
  const {
    __next40pxDefaultSize,
    __unstableStateReducer: stateReducer = state => state,
    __unstableInputWidth,
    className,
    disabled = false,
    help,
    hideLabelFromVision = false,
    id: idProp,
    isPressEnterToChange = false,
    label,
    labelPosition = 'top',
    onChange = input_control_noop,
    onValidate = input_control_noop,
    onKeyDown = input_control_noop,
    prefix,
    size = 'default',
    style,
    suffix,
    value,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)(props);
  const id = useUniqueId(idProp);
  const classes = (0,clsx/* default */.A)('components-input-control', className);
  const draftHookProps = useDraft({
    value,
    onBlur: restProps.onBlur,
    onChange
  });
  const helpProp = !!help ? {
    'aria-describedby': `${id}__help`
  } : {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    className: classes,
    help: help,
    id: id,
    __nextHasNoMarginBottom: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_base/* default */.A, {
      __next40pxDefaultSize: __next40pxDefaultSize,
      __unstableInputWidth: __unstableInputWidth,
      disabled: disabled,
      gap: 3,
      hideLabelFromVision: hideLabelFromVision,
      id: id,
      justify: "left",
      label: label,
      labelPosition: labelPosition,
      prefix: prefix,
      size: size,
      style: style,
      suffix: suffix,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_field, {
        ...restProps,
        ...helpProp,
        __next40pxDefaultSize: __next40pxDefaultSize,
        className: "components-input-control__input",
        disabled: disabled,
        id: id,
        isPressEnterToChange: isPressEnterToChange,
        onKeyDown: onKeyDown,
        onValidate: onValidate,
        paddingInlineStart: prefix ? (0,space/* space */.x)(2) : undefined,
        paddingInlineEnd: suffix ? (0,space/* space */.x)(2) : undefined,
        ref: ref,
        size: size,
        stateReducer: stateReducer,
        ...draftHookProps
      })
    })
  });
}

/**
 * InputControl components let users enter and edit text. This is an experimental component
 * intended to (in time) merge with or replace `TextControl`.
 *
 * ```jsx
 * import { __experimentalInputControl as InputControl } from '@wordpress/components';
 * import { useState } from 'react';
 *
 * const Example = () => {
 *   const [ value, setValue ] = useState( '' );
 *
 *   return (
 *  	<InputControl
 *  		value={ value }
 *  		onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }
 *  	/>
 *   );
 * };
 * ```
 */
const InputControl = (0,react.forwardRef)(UnforwardedInputControl);
/* harmony default export */ const input_control = (InputControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PL: () => (/* binding */ CHANGE),
/* harmony export */   Qf: () => (/* binding */ DRAG_START),
/* harmony export */   Ry: () => (/* binding */ DRAG_END),
/* harmony export */   Ut: () => (/* binding */ RESET),
/* harmony export */   W3: () => (/* binding */ CONTROL),
/* harmony export */   bR: () => (/* binding */ PRESS_ENTER),
/* harmony export */   cJ: () => (/* binding */ COMMIT),
/* harmony export */   j: () => (/* binding */ DRAG),
/* harmony export */   r7: () => (/* binding */ PRESS_DOWN),
/* harmony export */   uY: () => (/* binding */ INVALIDATE),
/* harmony export */   wX: () => (/* binding */ PRESS_UP)
/* harmony export */ });
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const CHANGE = 'CHANGE';
const COMMIT = 'COMMIT';
const CONTROL = 'CONTROL';
const DRAG_END = 'DRAG_END';
const DRAG_START = 'DRAG_START';
const DRAG = 'DRAG';
const INVALIDATE = 'INVALIDATE';
const PRESS_DOWN = 'PRESS_DOWN';
const PRESS_ENTER = 'PRESS_ENTER';
const PRESS_UP = 'PRESS_UP';
const RESET = 'RESET';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ withIgnoreIMEEvents)
/* harmony export */ });
/**
 * A higher-order function that wraps a keydown event handler to ensure it is not an IME event.
 *
 * In CJK languages, an IME (Input Method Editor) is used to input complex characters.
 * During an IME composition, keydown events (e.g. Enter or Escape) can be fired
 * which are intended to control the IME and not the application.
 * These events should be ignored by any application logic.
 *
 * @param keydownHandler The keydown event handler to execute after ensuring it was not an IME event.
 *
 * @return A wrapped version of the given event handler that ignores IME events.
 */
function withIgnoreIMEEvents(keydownHandler) {
  return event => {
    const {
      isComposing
    } = 'nativeEvent' in event ? event.nativeEvent : event;
    if (isComposing ||
    // Workaround for Mac Safari where the final Enter/Backspace of an IME composition
    // is `isComposing=false`, even though it's technically still part of the composition.
    // These can only be detected by keyCode.
    event.keyCode === 229) {
      return;
    }
    keydownHandler(event);
  };
}
//# sourceMappingURL=with-ignore-ime-events.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/v-stack/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ v_stack_component)
});

// UNUSED EXPORTS: VStack

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/h-stack/hook.js + 1 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/h-stack/hook.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/v-stack/hook.js
/**
 * Internal dependencies
 */



function useVStack(props) {
  const {
    expanded = false,
    alignment = 'stretch',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'VStack');
  const hStackProps = (0,hook/* useHStack */.A)({
    direction: 'column',
    expanded,
    alignment,
    ...otherProps
  });
  return hStackProps;
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/v-stack/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedVStack(props, forwardedRef) {
  const vStackProps = useVStack(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...vStackProps,
    ref: forwardedRef
  });
}

/**
 * `VStack` (or Vertical Stack) is a layout component that arranges child
 * elements in a vertical line.
 *
 * `VStack` can render anything inside.
 *
 * ```jsx
 * import {
 * 	__experimentalText as Text,
 * 	__experimentalVStack as VStack,
 * } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<VStack>
 * 			<Text>Code</Text>
 * 			<Text>is</Text>
 * 			<Text>Poetry</Text>
 * 		</VStack>
 * 	);
 * }
 * ```
 */
const VStack = (0,context_connect/* contextConnect */.KZ)(UnconnectedVStack, 'VStack');
/* harmony default export */ const v_stack_component = (VStack);
//# sourceMappingURL=component.js.map

/***/ })

}]);