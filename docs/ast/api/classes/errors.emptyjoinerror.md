---
id: 'errors.emptyjoinerror'
title: 'Class: EmptyJoinError'
sidebar_label: 'EmptyJoinError'
hide_title: true
---

# Class: EmptyJoinError

[Errors](../modules/errors.md).EmptyJoinError

## Hierarchy

- [_SequelASTError_](errors.sequelasterror.md)

  ↳ **EmptyJoinError**

## Constructors

### constructor

\+ **new EmptyJoinError**(`message?`: _string_):
[_EmptyJoinError_](errors.emptyjoinerror.md)

#### Parameters:

| Name       | Type     |
| ---------- | -------- |
| `message?` | _string_ |

**Returns:** [_EmptyJoinError_](errors.emptyjoinerror.md)

Inherited from: [SequelASTError](errors.sequelasterror.md)

Defined in: typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: _string_

Inherited from:
[SequelASTError](errors.sequelasterror.md).[message](errors.sequelasterror.md#message)

Defined in: typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_

Inherited from:
[SequelASTError](errors.sequelasterror.md).[name](errors.sequelasterror.md#name)

Defined in: typescript/lib/lib.es5.d.ts:973

---

### prepareStackTrace

• `Optional` **prepareStackTrace**: _undefined_ \| (`err`: Error, `stackTraces`:
CallSite[]) => _any_

Optional override for formatting stack traces

**`see`**
https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from:
[SequelASTError](errors.sequelasterror.md).[prepareStackTrace](errors.sequelasterror.md#preparestacktrace)

Defined in: @types/node/globals.d.ts:11

---

### stack

• `Optional` **stack**: _undefined_ \| _string_

Inherited from:
[SequelASTError](errors.sequelasterror.md).[stack](errors.sequelasterror.md#stack)

Defined in: typescript/lib/lib.es5.d.ts:975

---

### stackTraceLimit

• **stackTraceLimit**: _number_

Inherited from:
[SequelASTError](errors.sequelasterror.md).[stackTraceLimit](errors.sequelasterror.md#stacktracelimit)

Defined in: @types/node/globals.d.ts:13

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

Inherited from: [SequelASTError](errors.sequelasterror.md)

Defined in: @types/node/globals.d.ts:4
