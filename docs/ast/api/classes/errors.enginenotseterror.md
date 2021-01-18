[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Errors](../modules/errors.md) / EngineNotSetError

# Class: EngineNotSetError

[Errors](../modules/errors.md).EngineNotSetError

## Hierarchy

- [_VisitorError_](errors.visitorerror.md)

  ↳ **EngineNotSetError**

## Table of contents

### Constructors

- [constructor](errors.enginenotseterror.md#constructor)

### Properties

- [message](errors.enginenotseterror.md#message)
- [name](errors.enginenotseterror.md#name)
- [prepareStackTrace](errors.enginenotseterror.md#preparestacktrace)
- [stack](errors.enginenotseterror.md#stack)
- [stackTraceLimit](errors.enginenotseterror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.enginenotseterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new EngineNotSetError**(`message?`: _string_):
[_EngineNotSetError_](errors.enginenotseterror.md)

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `message?` | _string_ |

**Returns:** [_EngineNotSetError_](errors.enginenotseterror.md)

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
