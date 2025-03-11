(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ru.morozovit:WebCorrupter'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ru.morozovit:WebCorrupter'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ru.morozovit:WebCorrupter'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ru.morozovit:WebCorrupter'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'ru.morozovit:WebCorrupter'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'ru.morozovit:WebCorrupter'.");
    }
    globalThis['ru.morozovit:WebCorrupter'] = factory(typeof globalThis['ru.morozovit:WebCorrupter'] === 'undefined' ? {} : globalThis['ru.morozovit:WebCorrupter'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var Default_getInstance = kotlin_kotlin.$_$.a1;
  var protoOf = kotlin_kotlin.$_$.s2;
  var numberRangeToNumber = kotlin_kotlin.$_$.r2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var charSequenceGet = kotlin_kotlin.$_$.e2;
  var Char = kotlin_kotlin.$_$.y2;
  var Unit_instance = kotlin_kotlin.$_$.c1;
  var joinToString = kotlin_kotlin.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.o2;
  var ensureNotNull = kotlin_kotlin.$_$.i3;
  var CoroutineImpl = kotlin_kotlin.$_$.a2;
  var toLong = kotlin_kotlin.$_$.t2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l1;
  var until = kotlin_kotlin.$_$.w2;
  var Exception = kotlin_kotlin.$_$.b3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l2;
  var plus = kotlin_kotlin.$_$.k3;
  var THROW_CCE = kotlin_kotlin.$_$.e3;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.q2;
  var initMetadataForLambda = kotlin_kotlin.$_$.n2;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var equals = kotlin_kotlin.$_$.h2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(RandomUtils, 'RandomUtils');
  initMetadataForCoroutine($messUpElementsCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($addRandomTextCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($addRandomStylesCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($randomScrollCOROUTINE$3, CoroutineImpl);
  initMetadataForObject(Payloads, 'Payloads', VOID, VOID, VOID, [0]);
  initMetadataForLambda(Corrupter$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($startCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($loadStyleCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($showCheatActivatedCOROUTINE$6, CoroutineImpl);
  initMetadataForObject(Corrupter, 'Corrupter', VOID, VOID, VOID, [0]);
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(main$lambda$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function RandomUtils() {
  }
  protoOf(RandomUtils).ij = function (min, max) {
    return Default_getInstance().t8(min, max + 1 | 0);
  };
  protoOf(RandomUtils).jj = function () {
    var letters = '0123456789ABCDEF';
    // Inline function 'kotlin.collections.map' call
    var this_0 = numberRangeToNumber(1, 6);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.e9_1;
    var last = this_0.f9_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ru.morozovit.webcorrupter.RandomUtils.randomColor.<anonymous>' call
        var tmp$ret$0 = new Char(charSequenceGet(letters, Default_getInstance().s8(16)));
        destination.d(tmp$ret$0);
      }
       while (!(item === last));
    return '#' + joinToString(destination, '');
  };
  var RandomUtils_instance;
  function RandomUtils_getInstance() {
    return RandomUtils_instance;
  }
  function max($this) {
    return ensureNotNull(document.body).innerHTML.length > 100000 ? 400 : ensureNotNull(document.body).innerHTML.length > 50000 ? 300 : ensureNotNull(document.body).innerHTML.length > 10000 ? 200 : ensureNotNull(document.body).innerHTML.length > 5000 ? 100 : 1000;
  }
  function $messUpElementsCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sj_1 = _this__u8e3s4;
  }
  protoOf($messUpElementsCOROUTINE$0).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 5;
            this.m4_1 = 1;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 3000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            console.log('Messing up elements...');
            this.tj_1 = RandomUtils_instance.ij(10, max(this.sj_1));
            console.log('Number of times: ', this.tj_1);
            var tmp_0 = this;
            tmp_0.uj_1 = this.tj_1;
            this.vj_1 = this.uj_1;
            this.wj_1 = until(0, this.vj_1).f();
            this.m4_1 = 2;
            continue $sm;
          case 2:
            if (!this.wj_1.g()) {
              this.m4_1 = 4;
              continue $sm;
            }

            this.xj_1 = this.wj_1.h();
            var tmp_1 = this;
            tmp_1.yj_1 = this.xj_1;
            this.zj_1 = this.yj_1;
            try {
              randomElement$default(Corrupter_instance).appendChild(randomElement(Corrupter_instance, true));
            } catch ($p) {
              if ($p instanceof Exception) {
                var _unused_var__etf5q3 = $p;
              } else {
                throw $p;
              }
            }

            this.m4_1 = 3;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 500)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m4_1 = 2;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 5) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function $addRandomTextCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ik_1 = _this__u8e3s4;
  }
  protoOf($addRandomTextCOROUTINE$1).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 7;
            this.m4_1 = 1;
            suspendResult = delay(toLong(Default_getInstance().t8(100, max(this.ik_1))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            console.log('Adding random text...');
            this.jk_1 = RandomUtils_instance.ij(10, max(this.ik_1));
            console.log('Number of times: ', this.jk_1);
            var tmp_0 = this;
            tmp_0.kk_1 = this.jk_1;
            this.lk_1 = this.kk_1;
            this.mk_1 = until(0, this.lk_1).f();
            this.m4_1 = 2;
            continue $sm;
          case 2:
            if (!this.mk_1.g()) {
              this.m4_1 = 6;
              continue $sm;
            }

            this.nk_1 = this.mk_1.h();
            var tmp_1 = this;
            tmp_1.ok_1 = this.nk_1;
            this.pk_1 = this.ok_1;
            this.n4_1 = 3;
            var _receiver__tnumb7 = randomElement$default(Corrupter_instance);
            _receiver__tnumb7.textContent = plus(_receiver__tnumb7.textContent, 'error');
            this.n4_1 = 7;
            this.m4_1 = 4;
            continue $sm;
          case 3:
            this.n4_1 = 7;
            var tmp_2 = this.p4_1;
            if (tmp_2 instanceof Exception) {
              this.qk_1 = this.p4_1;
              this.m4_1 = 4;
              continue $sm;
            } else {
              throw this.p4_1;
            }

          case 4:
            this.n4_1 = 7;
            this.m4_1 = 5;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 1000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m4_1 = 2;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 7) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function $addRandomStylesCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zk_1 = _this__u8e3s4;
  }
  protoOf($addRandomStylesCOROUTINE$2).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 7;
            this.m4_1 = 1;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 3000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            console.log('Adding random styles...');
            this.al_1 = RandomUtils_instance.ij(10, max(this.zk_1));
            console.log(this.al_1);
            var tmp_0 = this;
            tmp_0.bl_1 = this.al_1;
            this.cl_1 = this.bl_1;
            this.dl_1 = until(0, this.cl_1).f();
            this.m4_1 = 2;
            continue $sm;
          case 2:
            if (!this.dl_1.g()) {
              this.m4_1 = 6;
              continue $sm;
            }

            this.el_1 = this.dl_1.h();
            var tmp_1 = this;
            tmp_1.fl_1 = this.el_1;
            this.gl_1 = this.fl_1;
            this.n4_1 = 3;
            var tmp_2 = randomElement$default(Corrupter_instance);
            var element = tmp_2 instanceof HTMLElement ? tmp_2 : THROW_CCE();
            switch (RandomUtils_instance.ij(0, 2)) {
              case 0:
                element.style.color = RandomUtils_instance.jj();
                break;
              case 1:
                element.style.backgroundColor = RandomUtils_instance.jj();
                break;
              case 2:
                element.style.transform = 'blur(' + RandomUtils_instance.ij(1, 100) + 'px)';
                break;
            }

            this.n4_1 = 7;
            this.m4_1 = 4;
            continue $sm;
          case 3:
            this.n4_1 = 7;
            var tmp_3 = this.p4_1;
            if (tmp_3 instanceof Exception) {
              this.hl_1 = this.p4_1;
              this.m4_1 = 4;
              continue $sm;
            } else {
              throw this.p4_1;
            }

          case 4:
            this.n4_1 = 7;
            this.m4_1 = 5;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 1000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m4_1 = 2;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 7) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function $randomScrollCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ql_1 = _this__u8e3s4;
  }
  protoOf($randomScrollCOROUTINE$3).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 3;
            this.m4_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m4_1 = 4;
              continue $sm;
            }

            window.scrollTo(0.0, RandomUtils_instance.ij(0, window.innerHeight));
            this.m4_1 = 2;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 10000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m4_1 = 1;
            continue $sm;
          case 3:
            throw this.p4_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 3) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function Payloads() {
  }
  protoOf(Payloads).rl = function ($completion) {
    var tmp = new $messUpElementsCOROUTINE$0(this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(Payloads).sl = function ($completion) {
    var tmp = new $addRandomTextCOROUTINE$1(this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(Payloads).tl = function ($completion) {
    var tmp = new $addRandomStylesCOROUTINE$2(this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(Payloads).ul = function () {
    var tmp0_safe_receiver = document.head;
    if (tmp0_safe_receiver == null)
      null;
    else
      addClass(tmp0_safe_receiver, ['show']);
  };
  protoOf(Payloads).vl = function ($completion) {
    var tmp = new $randomScrollCOROUTINE$3(this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  var Payloads_instance;
  function Payloads_getInstance() {
    return Payloads_instance;
  }
  function randomElement($this, fromBody) {
    var tmp;
    if (fromBody) {
      tmp = document.querySelectorAll('body *');
    } else {
      tmp = document.querySelectorAll('*');
    }
    var elements = tmp;
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements[RandomUtils_instance.ij(0, elements.length - 1 | 0)];
    return tmp_0 instanceof Element ? tmp_0 : THROW_CCE();
  }
  function randomElement$default($this, fromBody, $super) {
    fromBody = fromBody === VOID ? false : fromBody;
    return randomElement($this, fromBody);
  }
  function loadStyle($this, $completion) {
    var tmp = new $loadStyleCOROUTINE$5($this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  }
  function showCheatActivated($this, $completion) {
    var tmp = new $showCheatActivatedCOROUTINE$6($this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  }
  function Corrupter$start$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Corrupter$start$slambda).cn = function ($this$launch, $completion) {
    var tmp = this.dn($this$launch, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(Corrupter$start$slambda).e5 = function (p1, $completion) {
    return this.cn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Corrupter$start$slambda).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 2;
            this.m4_1 = 1;
            suspendResult = Payloads_instance.vl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 2) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  protoOf(Corrupter$start$slambda).dn = function ($this$launch, completion) {
    var i = new Corrupter$start$slambda(completion);
    i.bn_1 = $this$launch;
    return i;
  };
  function Corrupter$start$slambda_0(resultContinuation) {
    var i = new Corrupter$start$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.cn($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $startCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mn_1 = _this__u8e3s4;
  }
  protoOf($startCOROUTINE$4).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 8;
            this.m4_1 = 1;
            suspendResult = loadStyle(this.mn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m4_1 = 2;
            suspendResult = showCheatActivated(this.mn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m4_1 = 3;
            suspendResult = Payloads_instance.rl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (RandomUtils_instance.ij(0, 1) === 1) {
              Payloads_instance.ul();
            }

            if (RandomUtils_instance.ij(0, 1) === 1) {
              var tmp_0 = GlobalScope_instance;
              launch(tmp_0, VOID, VOID, Corrupter$start$slambda_0(null));
            }

            if (RandomUtils_instance.ij(0, 1) === 1) {
              this.m4_1 = 4;
              suspendResult = Payloads_instance.sl(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m4_1 = 5;
              continue $sm;
            }

          case 4:
            this.m4_1 = 5;
            continue $sm;
          case 5:
            if (RandomUtils_instance.ij(0, 1) === 1) {
              this.m4_1 = 6;
              suspendResult = Payloads_instance.tl(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m4_1 = 7;
              continue $sm;
            }

          case 6:
            this.m4_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 8) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function $loadStyleCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.em_1 = _this__u8e3s4;
  }
  protoOf($loadStyleCOROUTINE$5).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 3;
            this.m4_1 = 1;
            suspendResult = await_0(window.fetch('https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fm_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1 = document.createElement('style');
            tmp_0.gm_1 = tmp_1 instanceof HTMLStyleElement ? tmp_1 : THROW_CCE();
            this.m4_1 = 2;
            suspendResult = await_0(this.fm_1.text(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.gm_1.textContent = ARGUMENT;
            var tmp0_safe_receiver = document.head;
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver.appendChild(this.gm_1);
            return Unit_instance;
          case 3:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 3) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  function $showCheatActivatedCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pm_1 = _this__u8e3s4;
  }
  protoOf($showCheatActivatedCOROUTINE$6).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 3;
            this.n4_1 = 2;
            var tmp_0 = this;
            var tmp_1 = document.createElement('div');
            tmp_0.rm_1 = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
            this.rm_1.id = 'cheat_activated';
            this.rm_1.textContent = 'Cheat Activated';
            this.sm_1 = randomElement$default(this.pm_1);
            this.sm_1.appendChild(this.rm_1);
            console.log('Cheat activated');
            this.m4_1 = 1;
            suspendResult = delay(toLong(Default_getInstance().t8(100, 5000)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qm_1 = this.sm_1.removeChild(this.rm_1);
            this.n4_1 = 3;
            this.m4_1 = 4;
            continue $sm;
          case 2:
            this.n4_1 = 3;
            var tmp_2 = this.p4_1;
            if (tmp_2 instanceof Exception) {
              var e = this.p4_1;
              var tmp_3 = this;
              console.warn(e);
              tmp_3.qm_1 = Unit_instance;
              this.m4_1 = 4;
              continue $sm;
            } else {
              throw this.p4_1;
            }

          case 3:
            throw this.p4_1;
          case 4:
            this.n4_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n4_1 === 3) {
          throw e_0;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e_0;
        }
      }
     while (true);
  };
  function Corrupter() {
  }
  protoOf(Corrupter).nn = function ($completion) {
    var tmp = new $startCOROUTINE$4(this, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  var Corrupter_instance;
  function Corrupter_getInstance() {
    return Corrupter_instance;
  }
  function main() {
    var tmp = document.readyState;
    // Inline function 'org.w3c.dom.COMPLETE' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2 = 'complete';
    if (equals(tmp, tmp$ret$2)) {
      var tmp_0 = GlobalScope_instance;
      launch(tmp_0, VOID, VOID, main$slambda_0(null));
    } else {
      var tmp_1 = document;
      tmp_1.addEventListener('DOMContentLoaded', main$lambda);
    }
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).cn = function ($this$launch, $completion) {
    var tmp = this.dn($this$launch, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(main$slambda).e5 = function (p1, $completion) {
    return this.cn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 2;
            this.m4_1 = 1;
            suspendResult = Corrupter_instance.nn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 2) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).dn = function ($this$launch, completion) {
    var i = new main$slambda(completion);
    i.wn_1 = $this$launch;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.cn($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda(it) {
    var tmp = GlobalScope_instance;
    launch(tmp, VOID, VOID, main$lambda$slambda_0(null));
    return Unit_instance;
  }
  function main$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda).cn = function ($this$launch, $completion) {
    var tmp = this.dn($this$launch, $completion);
    tmp.o4_1 = Unit_instance;
    tmp.p4_1 = null;
    return tmp.u4();
  };
  protoOf(main$lambda$slambda).e5 = function (p1, $completion) {
    return this.cn((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$slambda).u4 = function () {
    var suspendResult = this.o4_1;
    $sm: do
      try {
        var tmp = this.m4_1;
        switch (tmp) {
          case 0:
            this.n4_1 = 2;
            this.m4_1 = 1;
            suspendResult = Corrupter_instance.nn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n4_1 === 2) {
          throw e;
        } else {
          this.m4_1 = this.n4_1;
          this.p4_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$lambda$slambda).dn = function ($this$launch, completion) {
    var i = new main$lambda$slambda(completion);
    i.fo_1 = $this$launch;
    return i;
  };
  function main$lambda$slambda_0(resultContinuation) {
    var i = new main$lambda$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.cn($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  RandomUtils_instance = new RandomUtils();
  Payloads_instance = new Payloads();
  Corrupter_instance = new Corrupter();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=WebCorrupter.js.map
