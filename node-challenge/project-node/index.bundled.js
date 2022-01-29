(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../example-cjs/index.js
  var require_example_cjs = __commonJS({
    "../example-cjs/index.js"(exports) {
      exports.helloFromCJS = "Hello from CJS";
    }
  });

  // output/Cjs/foreign.cjs
  var require_foreign = __commonJS({
    "output/Cjs/foreign.cjs"(exports) {
      var exampleCjs = require_example_cjs();
      exports.anotherHelloFromCJs = () => exampleCjs.helloFromCJS;
    }
  });

  // output/Main/foreign.js
  var import_example_cjs = __toESM(require_example_cjs(), 1);

  // ../example-esm/index.js
  var helloFromESM = "Hello from ESM";

  // ../example-ps-esm/output/Example.ESM/foreign.js
  var helloFromPSESM = "Hello from Purescript ESM";

  // output/Main/foreign.js
  var helloFromPSESMviaFFI = helloFromPSESM;

  // output/Cjs/foreign.js
  var import_foreign2 = __toESM(require_foreign(), 1);
  var anotherHelloFromCJs = import_foreign2.default.anotherHelloFromCJs;

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Type.Proxy/index.js
  var Proxy3 = /* @__PURE__ */ function() {
    function Proxy32() {
    }
    ;
    Proxy32.value = new Proxy32();
    return Proxy32;
  }();
  var Proxy2 = /* @__PURE__ */ function() {
    function Proxy22() {
    }
    ;
    Proxy22.value = new Proxy22();
    return Proxy22;
  }();
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var functorFn = {
    map: compose(semigroupoidFn)
  };

  // output/Control.Apply/index.js
  var apply = function(dict) {
    return dict.apply;
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    return function(f) {
      return function(a) {
        return apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
      };
    };
  };

  // output/Control.Bind/index.js
  var bind = function(dict) {
    return dict.bind;
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    return function(f) {
      return function(a) {
        return bind(dictMonad.Bind1())(f)(function(f$prime) {
          return bind(dictMonad.Bind1())(a)(function(a$prime) {
            return pure(dictMonad.Applicative0())(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Semiring/index.js
  var semiringProxy3 = {
    add: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    one: Proxy3.value,
    zero: Proxy3.value
  };
  var semiringProxy2 = {
    add: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    one: Proxy2.value,
    zero: Proxy2.value
  };
  var semiringProxy = {
    add: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    one: $$Proxy.value,
    zero: $$Proxy.value
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();
  var semigroupOrdering = {
    append: function(v) {
      return function(v1) {
        if (v instanceof LT) {
          return LT.value;
        }
        ;
        if (v instanceof GT) {
          return GT.value;
        }
        ;
        if (v instanceof EQ) {
          return v1;
        }
        ;
        throw new Error("Failed pattern match at Data.Ordering (line 21, column 1 - line 24, column 18): " + [v.constructor.name, v1.constructor.name]);
      };
    }
  };

  // output/Data.Monoid/index.js
  var monoidOrdering = {
    mempty: EQ.value,
    Semigroup0: function() {
      return semigroupOrdering;
    }
  };

  // output/Effect/index.js
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return applyEffect;
    }
  };
  var applyEffect = {
    apply: ap(monadEffect),
    Functor0: function() {
      return functorEffect;
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return applyEffect;
    }
  };
  var functorEffect = {
    map: liftA1(applicativeEffect)
  };

  // output/Effect.Class/index.js
  var monadEffectEffect = {
    liftEffect: identity(categoryFn),
    Monad0: function() {
      return monadEffect;
    }
  };
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Effect.Console/foreign.js
  var log = function(s) {
    return function() {
      console.log(s);
    };
  };

  // output/Effect.Class.Console/index.js
  var log2 = function(dictMonadEffect) {
    var $30 = liftEffect(dictMonadEffect);
    return function($31) {
      return $30(log($31));
    };
  };

  // output/Example.ESM/foreign.js
  var helloFromPSESM2 = "Hello from Purescript ESM";

  // output/Main/index.js
  var main = function __do() {
    log2(monadEffectEffect)("Hello from my project")();
    log2(monadEffectEffect)(import_example_cjs.helloFromCJS)();
    log2(monadEffectEffect)(helloFromESM)();
    log2(monadEffectEffect)(helloFromPSESM2)();
    log2(monadEffectEffect)(helloFromPSESMviaFFI + " via FFI")();
    var h = anotherHelloFromCJs();
    return log2(monadEffectEffect)("another" + h)();
  };

  // <stdin>
  main();
})();
