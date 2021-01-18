[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Errors](../modules/errors.md) / VisitorNotSupportedError

# Class: VisitorNotSupportedError

[Errors](../modules/errors.md).VisitorNotSupportedError

## Hierarchy

- [_VisitorError_](errors.visitorerror.md)

  ↳ **VisitorNotSupportedError**

## Table of contents

### Constructors

- [constructor](errors.visitornotsupportederror.md#constructor)

### Properties

- [message](errors.visitornotsupportederror.md#message)
- [name](errors.visitornotsupportederror.md#name)
- [prepareStackTrace](errors.visitornotsupportederror.md#preparestacktrace)
- [stack](errors.visitornotsupportederror.md#stack)
- [stackTraceLimit](errors.visitornotsupportederror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.visitornotsupportederror.md#capturestacktrace)

## Constructors

### constructor

\+ **new VisitorNotSupportedError**(`message?`: _string_):
[_VisitorNotSupportedError_](errors.visitornotsupportederror.md)

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `message?` | _string_ |

**Returns:** [_VisitorNotSupportedError_](errors.visitornotsupportederror.md)

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
