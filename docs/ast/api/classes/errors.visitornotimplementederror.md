[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Errors](../modules/errors.md) / VisitorNotImplementedError

# Class: VisitorNotImplementedError

## Hierarchy

- [_VisitorError_](errors.visitorerror.md)

  ↳ **VisitorNotImplementedError**

## Index

### Constructors

- [constructor](errors.visitornotimplementederror.md#constructor)

### Properties

- [message](errors.visitornotimplementederror.md#message)
- [name](errors.visitornotimplementederror.md#name)
- [prepareStackTrace](errors.visitornotimplementederror.md#preparestacktrace)
- [stack](errors.visitornotimplementederror.md#stack)
- [stackTraceLimit](errors.visitornotimplementederror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.visitornotimplementederror.md#capturestacktrace)

## Constructors

### constructor

\+ **new VisitorNotImplementedError**(`message?`: _string_):
[_VisitorNotImplementedError_](errors.visitornotimplementederror.md)

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `message?` | _string_ |

**Returns:**
[_VisitorNotImplementedError_](errors.visitornotimplementederror.md)

Inherited from: [VisitorError](errors.visitorerror.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: _string_

Inherited from:
[VisitorError](errors.visitorerror.md).[message](errors.visitorerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_

Inherited from:
[VisitorError](errors.visitorerror.md).[name](errors.visitorerror.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

---

### prepareStackTrace

• `Optional` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`:
CallSite[]) => _any_

Optional override for formatting stack traces

**`see`**
https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from:
[VisitorError](errors.visitorerror.md).[prepareStackTrace](errors.visitorerror.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Inherited from:
[VisitorError](errors.visitorerror.md).[stack](errors.visitorerror.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### stackTraceLimit

• **stackTraceLimit**: _number_

Inherited from:
[VisitorError](errors.visitorerror.md).[stackTraceLimit](errors.visitorerror.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: _object_, `constructorOpt?`: Function):
_void_

Create .stack property on a target object

#### Parameters:

| Name              | Type     |
| ----------------- | -------- |
| `targetObject`    | _object_ |
| `constructorOpt?` | Function |

**Returns:** _void_

Inherited from: [VisitorError](errors.visitorerror.md)

Defined in: node_modules/@types/node/globals.d.ts:4
