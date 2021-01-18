[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Errors](../modules/errors.md) / SequelASTError

# Class: SequelASTError

[Errors](../modules/errors.md).SequelASTError

## Hierarchy

- _Error_

  ↳ **SequelASTError**

  ↳↳ [_EmptyJoinError_](errors.emptyjoinerror.md)

  ↳↳ [_VisitorError_](errors.visitorerror.md)

## Table of contents

### Constructors

- [constructor](errors.sequelasterror.md#constructor)

### Properties

- [message](errors.sequelasterror.md#message)
- [name](errors.sequelasterror.md#name)
- [prepareStackTrace](errors.sequelasterror.md#preparestacktrace)
- [stack](errors.sequelasterror.md#stack)
- [stackTraceLimit](errors.sequelasterror.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.sequelasterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new SequelASTError**(`message?`: _string_):
[_SequelASTError_](errors.sequelasterror.md)

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `message?` | _string_ |

**Returns:** [_SequelASTError_](errors.sequelasterror.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

---

### prepareStackTrace

• `Optional` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`:
CallSite[]) => _any_

Optional override for formatting stack traces

**`see`**
https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

---

### stackTraceLimit

• **stackTraceLimit**: _number_

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

Defined in: node_modules/@types/node/globals.d.ts:4
