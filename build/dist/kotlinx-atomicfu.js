(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-atomicfu'.");
    }
    globalThis['kotlinx-atomicfu'] = factory(typeof globalThis['kotlinx-atomicfu'] === 'undefined' ? {} : globalThis['kotlinx-atomicfu'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.s2;
  var initMetadataForObject = kotlin_kotlin.$_$.o2;
  var VOID = kotlin_kotlin.$_$.b;
  var initMetadataForClass = kotlin_kotlin.$_$.k2;
  var toString = kotlin_kotlin.$_$.m3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(atomicfu$TraceBase, 'TraceBase');
  initMetadataForObject(None, 'None', VOID, atomicfu$TraceBase);
  initMetadataForClass(AtomicRef, 'AtomicRef');
  initMetadataForClass(AtomicBoolean, 'AtomicBoolean');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  //endregion
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$1 = function (event) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$2 = function (event1, event2) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicRef).m9 = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicRef).n9 = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicRef).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicRef).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicRef).toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic$ref$(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicBoolean).o9 = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicBoolean).n9 = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicBoolean).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicBoolean).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicBoolean).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic$boolean$(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicInt).p9 = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicInt).n9 = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicInt).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$getAndIncrement = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(AtomicInt).atomicfu$getAndDecrement = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz - 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(AtomicInt).atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$addAndGet = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$incrementAndGet = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$decrementAndGet = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic$int$(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicRef(initial);
  }
  function atomic$boolean$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicBoolean(initial);
  }
  function atomic$int$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicInt(initial);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$ref$1;
  _.$_$.c = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
