(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../ptk/cli/colors.cjs
  var require_colors = __commonJS({
    "../ptk/cli/colors.cjs"(exports) {
      var FORCE_COLOR;
      var NODE_DISABLE_COLORS;
      var NO_COLOR;
      var TERM;
      var isTTY = true;
      if (typeof process !== "undefined") {
        ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
        isTTY = process.stdout && process.stdout.isTTY;
      }
      var $ = exports.$ = {
        enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
      };
      function init2(x, y) {
        let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
        let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
        return function(txt) {
          if (!$.enabled || txt == null)
            return txt;
          return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
        };
      }
      exports.reset = init2(0, 0);
      exports.bold = init2(1, 22);
      exports.dim = init2(2, 22);
      exports.italic = init2(3, 23);
      exports.underline = init2(4, 24);
      exports.inverse = init2(7, 27);
      exports.hidden = init2(8, 28);
      exports.strikethrough = init2(9, 29);
      exports.black = init2(30, 39);
      exports.red = init2(31, 39);
      exports.green = init2(32, 39);
      exports.yellow = init2(33, 39);
      exports.blue = init2(34, 39);
      exports.magenta = init2(35, 39);
      exports.cyan = init2(36, 39);
      exports.white = init2(37, 39);
      exports.gray = init2(90, 39);
      exports.grey = init2(90, 39);
      exports.bgBlack = init2(40, 49);
      exports.bgRed = init2(41, 49);
      exports.bgGreen = init2(42, 49);
      exports.bgYellow = init2(43, 49);
      exports.bgBlue = init2(44, 49);
      exports.bgMagenta = init2(45, 49);
      exports.bgCyan = init2(46, 49);
      exports.bgWhite = init2(47, 49);
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  var ResizeObserverSingleton = class {
    constructor(options) {
      this.options = options;
      this._listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    }
    observe(element2, listener) {
      this._listeners.set(element2, listener);
      this._getObserver().observe(element2, this.options);
      return () => {
        this._listeners.delete(element2);
        this._observer.unobserve(element2);
      };
    }
    _getObserver() {
      var _a;
      return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
        var _a2;
        for (const entry of entries) {
          ResizeObserverSingleton.entries.set(entry.target, entry);
          (_a2 = this._listeners.get(entry.target)) === null || _a2 === void 0 ? void 0 : _a2(entry);
        }
      });
    }
  };
  ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name2) {
    return document.createElement(name2);
  }
  function svg_element(name2) {
    return document.createElementNS("http://www.w3.org/2000/svg", name2);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data)
      return;
    text2.data = data;
  }
  function toggle_class(element2, name2, toggle) {
    element2.classList[toggle ? "add" : "remove"](name2);
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
  }
  var HtmlTag = class {
    constructor(is_svg = false) {
      this.is_svg = false;
      this.is_svg = is_svg;
      this.e = this.n = null;
    }
    c(html) {
      this.h(html);
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        if (this.is_svg)
          this.e = svg_element(target.nodeName);
        else
          this.e = element(target.nodeType === 11 ? "TEMPLATE" : target.nodeName);
        this.t = target.tagName !== "TEMPLATE" ? target : target.content;
        this.c(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  };
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(type, detail, { cancelable });
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = /* @__PURE__ */ Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c2) => fns.indexOf(c2) === -1 ? filtered.push(c2) : targets.push(c2));
    targets.forEach((c2) => c2());
    render_callbacks = filtered;
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  var _boolean_attributes = [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ];
  var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
  function bind(component, name2, callback) {
    const index = component.$$.props[name2];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) {
          component.$$.on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance16, create_fragment15, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance16 ? instance16(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment15 ? create_fragment15($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        if (!is_function(callback)) {
          return noop;
        }
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // ../ptk/offtext/constants.ts
  var OFFTAG_REGEX_G = /\^([#@\/\.\:a-z_\-\d~]+)(<(?:\\.|.)*?>)?/g;
  var QUOTEPREFIX = "";
  var QUOTEPAT = /\u001a(\d+)/g;
  var OFFTAG_NAME_ATTR = /([a-z_\:]+)(.*)/;
  var OFFTAG_COMPACT_ID = /^([a-z\d]+[_a-z\d\-~\.]*)/;
  var QSTRING_REGEX_G = /"((?:\\.|.)*?)"/g;
  var OFFTAG_LEADBYTE = "^";
  var FROMTILL = /^(>\d+)?(<\d+)?(:\d+)?$/;
  var PTK_FROMTILL = /^([a-z\.\d\-_]+\:)(>\d+)?(<\d+)?(:\d+)?$/;
  var PTK_ACTION_FROMTILL = /^([a-z\.\d\-_]+\:)?([^<>\d:]+[^:<>]*)(>\d+)?(<\d+)?(:\d+)?$/;

  // ../ptk/utils/bsearch.ts
  var bsearchNumber = (arr, obj) => {
    let low = 0, high = arr.length - 1, mid;
    while (low < high) {
      mid = low + high >> 1;
      if (arr[mid] === obj) {
        while (mid > -1 && arr[mid - 1] === obj)
          mid--;
        return mid;
      }
      arr[mid] < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };
  var bsearch = (arr, obj) => {
    let low = 0, high = arr.length - 1, mid;
    while (low < high) {
      mid = low + high >> 1;
      if (arr[mid] === obj) {
        while (mid > -1 && arr[mid - 1] === obj)
          mid--;
        return mid;
      }
      arr[mid] < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };
  var bsearchGetter = (getter, obj) => {
    const len = parseInt(getter(-1));
    let low = 0, high = len - 1;
    while (low < high) {
      let mid = low + high >> 1;
      if (getter(mid) === obj) {
        while (mid > -1 && getter(mid - 1) === obj)
          mid--;
        return mid;
      }
      getter(mid) < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // ../ptk/utils/sortedarray.ts
  var alphabetically = (a, b) => a > b ? 1 : a < b ? -1 : 0;
  var alphabetically0 = (a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
  var unique = (arr, sorted = false) => {
    if (!arr || !arr.length)
      return [];
    if (!sorted) {
      arr.sort(typeof arr[0] == "string" ? alphabetically : (a, b) => a - b);
    }
    let prev, out = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev)
        out.push(arr[i]);
      prev = arr[i];
    }
    return out;
  };
  var sortNumberArray = (arr) => {
    const value_id = arr.map((v, idx2) => [v, idx2]);
    value_id.sort((a, b) => a[0] - b[0]);
    const indexes = value_id.map(([v, idx2]) => idx2);
    const newarr = value_id.map(([v, idx2]) => v);
    return [newarr, indexes];
  };

  // ../ptk/utils/array.ts
  var indexOfs = (arr, tofind) => {
    const out = [];
    for (let j2 = 0; j2 < arr.length; j2++) {
      if (~arr[j2].indexOf(tofind)) {
        out.push(j2);
      }
    }
    return out;
  };

  // ../ptk/utils/unpackintarray.ts
  var maxlen2 = 113 * 113;
  var maxlen3 = 113 * 113 * 113;
  var CodeStart = 14;
  var BYTE_MAX = 113;
  var BYTE1_MAX = 45;
  var BYTE2_MAX = 44 * BYTE_MAX + BYTE1_MAX;
  var BYTE2_START = 45;
  var BYTE3_START = 89;
  var BYTE4_START = 105;
  var BYTE5_START = 112;
  var BYTE3_MAX = 16 * BYTE_MAX * BYTE_MAX + BYTE2_MAX;
  var BYTE4_MAX = 6 * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE3_MAX;
  var BYTE5_MAX = 2 * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE4_MAX;
  var SEP2DITEM = 127;
  var SEPARATOR2D = "\x7F";
  var unpackInt = (s, delta = false) => {
    let arr = [];
    if (!s)
      return [];
    let o, i = 0, c2 = 0, prev = 0;
    while (i < s.length) {
      o = s.charCodeAt(i) - CodeStart;
      if (o < BYTE2_START) {
      } else if (o < BYTE3_START) {
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE2_START;
        o = o * BYTE_MAX + i1 + BYTE1_MAX;
      } else if (o < BYTE4_START) {
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE3_START;
        o = o * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE2_MAX;
      } else if (o < BYTE5_START) {
        const i3 = s.charCodeAt(++i) - CodeStart;
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE4_START;
        o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
      } else if (o < SEP2DITEM) {
        const i4 = s.charCodeAt(++i) - CodeStart;
        const i3 = s.charCodeAt(++i) - CodeStart;
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE5_START;
        o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + i4 * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
      } else {
        throw new Error("exit max integer 0x7f," + o);
      }
      arr[c2] = o + (delta ? prev : 0) - 1;
      prev = arr[c2];
      c2++;
      i++;
    }
    return arr;
  };
  var unpackIntDelta = (str) => {
    return unpackInt(str, true);
  };
  var unpackIntDelta2d = (str) => {
    if (!str)
      return [];
    return unpackInt2d(str, true);
  };
  var unpackInt2d = (str, delta = false) => {
    if (!str)
      return [];
    const arr = str.split(SEPARATOR2D);
    if (arr.length == 1)
      return [unpackInt(arr[0])];
    return arr.map((it) => unpackInt(it, delta));
  };

  // ../ptk/utils/packintarray.ts
  var packInt2d = (arr, delta = false) => {
    const o = [];
    for (let i = 0; i < arr.length; i++) {
      o.push(packInt(arr[i], delta));
    }
    return o.join(SEPARATOR2D);
  };
  var packInt = (arr, delta = false) => {
    if (arr.length == 0)
      return "";
    const sz = arr.length * 5;
    let s = new Uint8Array(sz), int = arr[0] + 1, prev = arr[0], idx2 = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (isNaN(int))
        new Error("not an integer at" + i);
      if (int < 0)
        new Error("negative value at" + i + " value" + int);
      if (int < BYTE1_MAX) {
        s[idx2++] = int + CodeStart;
      } else if (int < BYTE2_MAX) {
        int -= BYTE1_MAX;
        let i1, i2;
        i1 = int % BYTE_MAX;
        i2 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i2 + BYTE2_START + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE3_MAX) {
        int -= BYTE2_MAX;
        let i1, i2, i3;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        i3 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i3 + BYTE3_START + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE4_MAX) {
        int -= BYTE3_MAX;
        let i1, i2, i3, i4;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i3 = int % BYTE_MAX;
        i4 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i4 + BYTE4_START + CodeStart;
        s[idx2++] = i3 + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE5_MAX) {
        int -= BYTE4_MAX;
        let i1, i2, i3, i4, i5;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i3 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i4 = int % BYTE_MAX;
        i5 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i5 + BYTE5_START + CodeStart;
        s[idx2++] = i4 + CodeStart;
        s[idx2++] = i3 + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else {
        throw new Error("exist max int boundary " + BYTE5_MAX + " i" + i + ",val:" + arr[i] + " int" + int);
      }
      int = (delta ? arr[i] - prev : arr[i]) + 1;
      prev = arr[i] || 0;
    }
    return new TextDecoder().decode(s.subarray(0, idx2));
  };
  var packIntDelta = (arr) => packInt(arr, true);
  var packIntDelta2d = (arr2d) => packInt2d(arr2d, true);

  // ../ptk/utils/packstr.ts
  var CodeStart2 = 14;
  var CodeEnd = 31;
  var MaxShared = CodeEnd - CodeStart2;
  var SEP = String.fromCharCode(CodeStart2);

  // ../ptk/utils/unicode.ts
  var substrUTF32 = (str, from, n) => {
    if (!str || !n || n < 0)
      return "";
    let i = from;
    while (n > 0 && i < str.length) {
      if (str.codePointAt(i) > 65535) {
        i++;
      }
      n--;
      i++;
    }
    return str.slice(from, i);
  };
  var splitUTF32 = (str) => {
    if (!str) {
      const empty2 = [];
      return empty2;
    }
    let i = 0;
    const out = [];
    while (i < str.length) {
      const code = str.codePointAt(i) || 0;
      out.push(code);
      i++;
      if (code > 65535)
        i++;
    }
    return out;
  };
  var splitUTF32Char = (str) => splitUTF32(str).map((cp) => String.fromCodePoint(cp));

  // ../ptk/utils/stringarray.ts
  var LEMMA_DELIMITER = "\x7F";
  var StringArray = class {
    constructor(buf, opts = {}) {
      this.buf = "";
      this.sep = "";
      this.charpos = [];
      this.middleCache = {};
      this.endCache = {};
      this.findMatches = (rawtext) => {
        let i = 0;
        const out = [];
        while (i < rawtext.length) {
          const tf = rawtext.slice(i);
          const m4 = this.match(tf);
          if (m4.length) {
            i += m4.length;
            out.push([i, m4[0]]);
          } else {
            i++;
          }
        }
        return out;
      };
      this.sequencial = opts.sequencial;
      this.delimiter = opts.delimiter || "";
      this.buf = buf;
      this.sep = opts.sep || "\n";
      this.now = 0;
      if (!this.sequencial)
        this.buildcharpos();
    }
    buildcharpos() {
      let prev = -1, p = 0;
      while (p < this.buf.length) {
        const at = this.buf.indexOf(this.sep, prev);
        if (at == -1) {
          this.charpos.push(this.buf.length);
          break;
        } else {
          this.charpos.push(at + 1);
          prev = at + 1;
        }
      }
    }
    len() {
      return this.charpos.length;
    }
    reset() {
      this.now = 0;
    }
    first() {
      this.reset();
      return this.next();
    }
    next() {
      if (this.now == -1)
        return;
      const at = this.buf.indexOf(this.sep, this.now);
      if (at == -1) {
        if (this.now >= 0) {
          const lastline = this.buf.slice(this.now);
          this.now = -1;
          return lastline;
        } else {
          this.now = -1;
          return;
        }
      }
      const s = this.buf.slice(this.now, at);
      this.now = at + 1;
      return s;
    }
    get(idx2) {
      if (this.sequencial)
        return null;
      if (idx2 == -1)
        return this.charpos.length.toString();
      const from = idx2 == 0 ? 0 : this.charpos[idx2 - 1];
      const to = this.charpos[idx2] - (idx2 == this.charpos.length - 1 ? 0 : 1);
      return this.buf.slice(from, to);
    }
    at(offset) {
      return bsearchNumber(this.charpos, offset);
    }
    //assuming sorted
    find(pat) {
      const getter = this.get.bind(this);
      if (this.delimiter)
        pat += this.delimiter;
      const at = bsearchGetter(getter, pat);
      const found = getter(at);
      return found.endsWith(pat) ? at : -1;
    }
    indexOf(pat) {
      let at;
      at = this.buf.indexOf(pat);
      while (at > -1) {
        if (at == 0)
          return 0;
        if (this.buf.length == pat.length + at)
          return this.len() - 1;
        if (this.buf.charAt(at - 1) == this.sep && this.buf.charAt(at + pat.length) == this.sep) {
          return bsearchNumber(this.charpos, at) + 1;
        } else {
          at = this.buf.indexOf(pat, at + pat.length);
        }
      }
      return -1;
    }
    enumMiddle(infix) {
      if (this.middleCache.hasOwnProperty(infix)) {
        return this.middleCache[infix];
      }
      let idx2 = this.buf.indexOf(infix);
      const out = [];
      while (idx2 > -1) {
        const at = this.at(idx2);
        const lp = at ? this.charpos[at - 1] : 0;
        const lp2 = this.charpos[at] - 1 - infix.length;
        if (idx2 > lp && idx2 < lp2) {
          out.push(at);
        }
        idx2 = this.buf.indexOf(infix, this.charpos[at] + this.sep.length);
      }
      this.middleCache[infix] = out;
      return out;
    }
    enumStart(prefix) {
      const getter = this.get.bind(this);
      let at = bsearchGetter(getter, prefix);
      if (at == -1)
        return [];
      const out = [];
      const len = this.len();
      while (at < len) {
        const found = this.get(at);
        if (found.startsWith(prefix))
          out.push(at);
        else
          break;
        at++;
      }
      return out;
    }
    enumEnd(suffix) {
      if (this.endCache.hasOwnProperty(suffix)) {
        console.log("cache");
        return this.endCache[suffix];
      }
      if (suffix[suffix.length - 1] !== this.sep)
        suffix = suffix + this.sep;
      let idx2 = this.buf.indexOf(suffix);
      const out = [];
      while (idx2 > -1 && this.buf.charAt(idx2 - 1) !== this.sep) {
        const at = this.at(idx2);
        out.push(at);
        idx2 = this.buf.indexOf(suffix, idx2 + this.sep.length);
      }
      this.endCache[suffix] = out;
      return out;
    }
    enumMode(s, mode = 0) {
      if (mode == 0)
        return this.enumStart(s);
      else if (mode == 1)
        return this.enumMiddle(s);
      else if (mode == 2)
        return this.enumEnd(s);
      return [];
    }
    match(text2) {
      const getter = this.get.bind(this);
      const at = bsearchGetter(getter, text2) - 1;
      const out = [];
      let upper = at - 1;
      if (text2.startsWith(this.get(at)))
        out.push(this.get(at));
      let lower = at + 1;
      while (upper > 0) {
        const found = this.get(upper);
        if (text2.startsWith(found))
          out.push(found);
        else if (text2.codePointAt(0) < 256 || text2[0] !== found[0])
          break;
        upper--;
      }
      while (lower < this.len()) {
        const found = this.get(lower);
        if (text2.startsWith(found))
          out.push(found);
        else if (text2.codePointAt(0) < 256 || text2[0] !== found[0])
          break;
        lower++;
      }
      out.sort((a, b) => b.length - a.length);
      return out;
    }
    /* if delimiter is missing, value is the text after key, ie , a fixed with key */
    getValue(key) {
      const at = this.find(key);
      return ~at ? this.get(at).slice(key.length + this.delimiter.length) : "";
    }
  };

  // ../ptk/utils/cjk.ts
  var CJKRanges = {
    "BMP": [19968, 40869],
    "ExtA": [13312, 19967],
    "ExtB": [131072, 173823],
    "ExtC": [173824, 177983],
    "ExtD": [177984, 178207],
    "ExtE": [178208, 183983],
    "ExtF": [183984, 191456],
    "ExtG": [196608, 201551],
    "ExtH": [201552, 205743],
    "ExtZ": [655360, 870399]
  };
  var CJKRangeName = (s) => {
    let cp = 0;
    if (typeof s === "string") {
      const code = parseInt(s, 16);
      if (!isNaN(code)) {
        cp = code;
      } else {
        cp = s.codePointAt(0) || 0;
      }
    }
    for (let rangename in CJKRanges) {
      const [from, to] = CJKRanges[rangename];
      if (cp >= from && cp <= to)
        return rangename;
    }
  };
  var isPunc = (str) => {
    if (!str)
      return false;
    const cp = str.charCodeAt(0);
    return cp >= 12289 && cp <= 12319 || cp > 65280 || cp >= 65040 && cp <= 65131;
  };
  var openBrackets = "(\u300C\u300E\u3014\uFF08\uFE39\uFE35\uFE37\u3010\uFE3B\u300A\u3008\uFE3D\uFE3F\uFE41\uFE43\uFE59\uFE5D\u2018\u201C\u301D";
  var closeBracketOf = (ch) => {
    if (!ch)
      return;
    const at = openBrackets.indexOf(ch.slice(0, 1));
    return ~at ? String.fromCodePoint(1 + (openBrackets.codePointAt(at) || 0)) : "";
  };
  var removeBracket = (str) => {
    const closebracket = closeBracketOf(str);
    if (closebracket && str.slice(str.length - 1) == closebracket) {
      return str.slice(1, str.length - 1);
    }
    return str;
  };
  var VerticalPuncs = {
    "\u300C": "\uFE41",
    "\u300D": "\uFE42",
    "\u300E": "\uFE43",
    "\u300F": "\uFE44"
  };
  var toVerticalPunc = (punc) => {
    return VerticalPuncs[punc] || punc;
  };

  // ../ptk/utils/misc.ts
  var lineBreaksOffset = (str) => {
    let i = 0, at = 0;
    const out = [];
    while (i < str.length) {
      const at2 = str.indexOf("\n", i);
      if (at2 == -1)
        break;
      out.push(at2);
      i = at2 + 1;
    }
    return out;
  };

  // ../ptk/utils/loadscript.ts
  var parseJsonp = (str) => {
    const start = str.indexOf("{");
    const end = str.indexOf("},`") + 1;
    let payload = str.substring(end + 2, str.length - 2);
    if (payload.indexOf("\\\\") > -1)
      payload = payload.replace(/\\\\/g, "\\");
    if (payload.indexOf("\\`") > -1)
      payload = payload.replace(/\\`/g, "`");
    if (payload.indexOf("$\\{") > -1)
      payload = payload.replace(/\$\\\{/g, "${");
    return [JSON.parse(str.substring(start, end)), payload];
  };
  var loadScript = async (src, cb) => {
    if (cb && cb()) {
      return true;
    }
    if (src.slice(0, 2) == "./")
      src = src.slice(2);
    const css = src.endsWith(".css");
    const children2 = document.head.children;
    for (let i = 0; i < children2.length; i++) {
      const ele = children2[i];
      if (css && ele.tagName == "LINK" && ele.href.endsWith("/" + src)) {
        if (i < children2.length - 1) {
          document.head.removeChild(ele);
          document.head.appendChild(ele);
        }
        return true;
      } else if (ele.tagName == "SCRIPT" && ele.src.endsWith("/" + src))
        return true;
    }
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement(css ? "link" : "script");
      script.type = css ? "text/css" : "text/javascript";
      if (css) {
        script.rel = "stylesheet";
        script.href = src;
      } else {
        script.src = src;
      }
      script.onerror = reject;
      script.async = true;
      script.onload = resolve;
      document.head.appendChild(script);
    });
    return promise;
  };

  // ../ptk/utils/bopomofo.ts
  var consonants = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s".split(",");
  var vowels = "a,o,e,e,ai,ei,ao,ou,an,en,ang,eng,er,i,u,v".split(",");

  // ../ptk/utils/cnumber.ts
  var StyledNumber1 = {
    "\u2160": 10,
    "\u2170": 10,
    "\u249C": 26,
    "\u24B6": 26,
    "\u24D0": 26,
    "\u24EB": 10,
    "\u3251": 15,
    "\u3358": 25,
    "\u3359": 24,
    "\u3220": 10,
    "\u3280": 10,
    "\u32C0": 12,
    "\u33E0": 31,
    "\u2460": 50,
    "\u2474": 20,
    "\u2488": 20,
    "\u24F5": 10,
    "\u2776": 10,
    "\u2780": 10,
    "\u278A": 10
  };
  var styledNumber = (n, style = "\u2460", offset = 1) => {
    let max = StyledNumber1[style];
    if (typeof n !== "number")
      n = parseInt(n) || 0;
    if (!max) {
      return n.toString();
    } else {
      if (n - offset >= max) {
        return n.toString();
      }
      if (style == "\u2460") {
        if (n > 35) {
          style = "\u32B1";
          n -= 35;
        } else if (n > 20) {
          style = "\u3251";
          n -= 20;
        }
        if (n == 0)
          return "\u24EA";
      }
      let code = style.charCodeAt(0) + n - offset;
      return String.fromCharCode(code);
    }
  };

  // ../ptk/offtext/parser.ts
  var parseCompactAttr = (str) => {
    const out = {}, arr = str.split(/([@#~])/);
    while (arr.length) {
      let v = arr.shift();
      if (v === "~")
        out["~"] = arr.shift();
      else if (v === "@")
        out["@"] = arr.shift();
      else if (v === "#") {
        v = arr.shift();
        const m4 = v.match(OFFTAG_COMPACT_ID);
        if (m4)
          out.id = m4[1];
      } else {
        out.id = v;
      }
    }
    return out;
  };
  var parseAttributes = (rawAttrs, compactAttr) => {
    let quotes = [];
    const getqstr = (str, withq) => str.replace(QUOTEPAT, (m4, qc) => {
      return (withq ? '"' : "") + quotes[parseInt(qc)] + (withq ? '"' : "");
    });
    let rawattr = rawAttrs ? rawAttrs.slice(1, rawAttrs.length - 1).replace(QSTRING_REGEX_G, (m4, m1) => {
      quotes.push(m1);
      return QUOTEPREFIX + (quotes.length - 1);
    }) : "";
    const attrarr = rawattr.split(/( +)/), attrs = {};
    let i = 0;
    if (compactAttr)
      Object.assign(attrs, parseCompactAttr(compactAttr));
    while (attrarr.length) {
      const it = attrarr.shift();
      let eq = -1, key = "";
      if (it[0] == "~" || it[0] == "#" || it[0] == "@") {
        key = it[0];
        if (key == "#")
          key = "id";
        eq = it[1] == "=" ? 1 : 0;
      } else {
        eq = it.indexOf("=");
        if (eq > 0)
          key = it.slice(0, eq);
      }
      if (eq > -1) {
        attrs[key] = getqstr(it.slice(eq + 1));
        if (attrarr.length && !attrarr[0].trim())
          attrarr.shift();
      } else {
        if (it)
          attrs[it] = true;
      }
      i++;
    }
    return attrs;
  };
  var parseOfftag = (raw, rawAttrs) => {
    if (raw[0] == OFFTAG_LEADBYTE)
      raw = raw.slice(1);
    if (!rawAttrs) {
      const at = raw.indexOf("<");
      if (at > 0) {
        rawAttrs = raw.slice(at);
        raw = raw.slice(0, at);
      }
    }
    const o = raw.match(OFFTAG_NAME_ATTR);
    if (!o) {
      console.log("\ninvalid tag, raw", raw, "attr", rawAttrs);
      return [raw, {}];
    } else {
      let [m22, tagName, compactAttr] = o;
      let attrs = parseAttributes(rawAttrs, compactAttr);
      return [tagName, attrs];
    }
  };
  var resolveEnd = (raw, plain, tags) => {
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      let j2 = i;
      if (tag.end > tag.start && !tag.width) {
        while (j2 < tags.length && tag.end > tags[j2].start)
          j2++;
        if (j2 < tags.length && tags[j2].start > tag.end || j2 == tags.length)
          j2--;
        const closest = j2 < tags.length ? tags[j2] : tag;
        tag.width = tag.end - closest.start;
        tag.width += closest.choff - tag.choff;
      }
    }
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      if (tag.width && tag.end == tag.start) {
        tag.width = substrUTF32(plain, tag.choff, tag.width).length;
        let j2 = i + 1;
        while (j2 < tags.length && tag.choff + tag.width > tags[j2].choff)
          j2++;
        if (j2 < tags.length && tags[j2].choff > tag.choff + tag.width || j2 == tags.length)
          j2--;
        const closest = j2 < tags.length ? tags[j2] : tag;
        if (closest === tag) {
          tag.end += tag.width;
        } else {
          tag.end = closest.start + (tag.choff + tag.width - closest.choff);
        }
      }
    }
  };
  var parseOfftext = (str, line = 0) => {
    if (!str || str.indexOf("^") == -1)
      return [str || "", []];
    let tags = [];
    let choff = 0, prevoff = 0;
    let text2 = str.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
      if (!rawName) {
        console.log(str);
      }
      let [tagName, attrs] = parseOfftag(rawName, rawAttrs);
      let width = 0;
      let start = offset + m4.length, end = start;
      let endch = attrs["~"];
      if (endch) {
        if (isNaN(parseInt(endch))) {
          width = 0;
          let repeat = 0;
          const m5 = endch.match(/\+(\d+)$/);
          if (m5) {
            endch = endch.slice(0, endch.length - m5.length);
            repeat = parseInt(m5[1]);
          }
          let at = str.indexOf(endch, start);
          while (~at && repeat) {
            at = str.indexOf(endch, at + 1);
            repeat--;
          }
          if (~at) {
            end = at + endch.length;
            delete attrs["~"];
          }
        } else {
          width = parseInt(endch);
        }
      } else {
        const closebracket = closeBracketOf(str.charAt(start));
        if (closebracket) {
          const at = str.indexOf(closebracket, start + 1);
          if (~at)
            end = at + closebracket.length;
        }
      }
      const aoffset = offset + rawName.length + 1;
      choff += offset - prevoff;
      let offtag = {
        name: tagName,
        offset,
        aoffset,
        attrs,
        line,
        choff,
        width,
        start,
        end,
        active: false
      };
      tags.push(offtag);
      choff -= m4.length;
      prevoff = offset;
      return "";
    });
    resolveEnd(str, text2, tags);
    if (tags.length && tags[tags.length - 1].choff >= text2.length) {
      text2 += " ";
    }
    return [text2, tags];
  };
  var updateOfftext = (rawtext, tag, newtag) => {
    for (let n in newtag.attrs) {
      if (newtag.attrs[n] != tag.attrs[n]) {
        let newvalue = typeof newtag.attrs[n] !== "string" ? JSON.stringify(newtag.attrs[n]) : newtag.attrs[n];
        if (newvalue.indexOf(" ") > 0) {
          newvalue = '"' + newvalue + '"';
        }
        const regex = new RegExp("\\b" + n + ' *= *"?' + tag.attrs[n] + '"?');
        rawtext = rawtext.replace(regex, n + "=" + newvalue);
      }
    }
    return rawtext;
  };
  var Offtext = class {
    constructor(raw, line = 0) {
      this.raw = raw;
      [this.plain, this.tags] = parseOfftext(raw, line);
    }
    getTag(ntag) {
      return this.tags[ntag];
    }
    tagText(tag, raw = false) {
      if (typeof tag == "number")
        tag = this.tags[tag];
      if (!tag)
        return;
      return raw ? this.raw.slice(tag.start, tag.end) : this.plain.slice(tag.choff, tag.choff + tag.width);
    }
    tagRawText(tag) {
      return this.tagText(tag, true);
    }
  };

  // ../ptk/fts/constants.ts
  var Word_tailspace_Reg = /([\dA-Za-z\u1000-\u1049\u0900-\u0963\u96f\u00c0-\u02af\u1e00-\u1faf]+ ?)/g;

  // ../ptk/fts/tokenize.ts
  function Token(text2, choff, tkoff, type) {
    return { text: text2, choff, tkoff, type };
  }
  var tokenize = (text2) => {
    const out = [];
    let i = 0, tkoff = 0;
    if (typeof text2 !== "string")
      return [];
    while (i < text2.length) {
      let code = text2.codePointAt(i) || 0;
      if (code > 65535) {
        const sur = String.fromCodePoint(code);
        out.push(Token(sur, i, tkoff, 50 /* CJK_SURROGATE */));
        tkoff++;
        i += 2;
        continue;
      } else if (code >= 8192 && code <= 65535) {
        const tt = code >= 2e80 && code <= 12287 || code >= 12353 && code <= 40959 || code >= 54272 && code < 57343 || code >= 57344 && code < 64223 ? 49 /* CJK_BMP */ : 1 /* UNSEARCHABLE */;
        out.push(Token(text2[i], i, tkoff, tt));
        if (tt !== 1 /* UNSEARCHABLE */)
          tkoff++;
        i++;
        continue;
      }
      let s = "", prev = 0;
      let j2 = i;
      while (j2 < text2.length && code < 8192) {
        s += text2[j2];
        code = text2.codePointAt(++j2) || 0;
      }
      s.replace(Word_tailspace_Reg, (m4, m1, offset) => {
        if (offset > prev) {
          out.push(Token(s.substring(prev, offset), prev + i, tkoff, 1 /* UNSEARCHABLE */));
        }
        while (s[offset] == " ")
          offset++;
        out.push(Token(m1, i + offset, tkoff, 32 /* ROMANIZE */));
        tkoff++;
        prev = offset + m4.length;
        return "";
      });
      if (prev < s.length)
        out.push(Token(s.substring(prev), prev + i, tkoff, 1 /* UNSEARCHABLE */));
      i = j2;
    }
    return out;
  };

  // ../lossless-simplified-chinese/sc-tc-map.js
  var sc2tc = `\u3454\u346F
\u3447\u3473
\u3439\u3476
\u523E\u34E8
\u360E\u361A
\u36AF\u3704
\u36E3\u370F
\u37C6\u380F
\u3918\u396E
\u3A2B\u3A5C
\u39D0\u3A73
\u64DC\u3A75
\u3EEA\u3EFD
\u4025\u407B
\u9FCE\u40EE
\u4336\u42B7
\u433A\u42D9
\u433B\u42DA
\u433F\u42F9
\u433E\u42FB
\u43AC\u43B1
\u464C\u4661
\u4727\u4700
\u478D\u477C
\u4982\u4947
\u9FCF\u4951
\u497E\u4971
\u49B6\u499B
\u49B7\u499F
\u4BC5\u4BC0
\u9C83\u4C3E
\u4CA3\u4C77
\u4C9D\u4C7D
\u9CDA\u4C81
\u9CE4\u4C98
\u9E6E\u4D09
\u4E22\u4E1F
\u5E76<\u4F75\u4E26
\u5E72<\u5E79>\u4E7E
\u4E71\u4E82
\u4E9A\u4E9E
\u4F2B\u4F47
\u6765\u4F86
\u4ED1\u4F96
\u4FA3\u4FB6
\u4FE3\u4FC1
\u7CFB<\u7E6B\u4FC2
\u4F23\u4FD4
\u4FA0\u4FE0
\u4F21\u4FE5
\u4F25\u5000
\u4FE9\u5006
\u4FEB\u5008
\u4ED3\u5009
\u4E2A\u500B
\u4EEC\u5011
\u4F26\u502B
\u3448\u5032
\u4F1F\u5049
\u343D\u5051
\u4FA7\u5074
\u4FA6\u5075
\u4F2A\u50DE\u507D
\u3437\u508C
\u6770<\u5091
\u4F27\u5096
\u4F1E\u5098
\u5907\u5099
\u4F63<\u50AD
\u506C\u50AF
\u4F20\u50B3
\u4F1B\u50B4
\u503A\u50B5
\u4F24\u50B7
\u503E\u50BE
\u507B\u50C2
\u4EC5\u50C5
\u4F65\u50C9
\u4FA8\u50D1
\u4EC6<\u50D5
\u4FA5\u50E5
\u507E\u50E8
\u4EF7<\u50F9
\u4EEA\u5100
\u347A\u5101
\u4FAC\u5102
\u4EBF\u5104
\u4FA9\u5108
\u4FED\u5109
\u50A7\u5110
\u4FE6\u5114
\u4FAA\u5115
\u5C3D\u76E1\u5118
\u507F\u511F
\u4F18<\u512A
\u50A8\u5132
\u4FEA\u5137
\u3469\u5138
\u50A9\u513A
\u50A5\u513B
\u4FE8\u513C
\u5151\u514C
\u513F<\u5152
\u5156\u5157
\u5185\u5167
\u4E24\u5169
\u518C\u518A
\u5E42\u51AA
\u51C0\u51C8
\u51BB\u51CD
\u51DB\u51DC
\u51EF\u51F1
\u522B\u5225
\u5220\u522A
\u522D\u5244
\u5219\u5247
\u514B<\u524B
\u5239\u524E
\u522C\u5257
\u521A\u525B
\u5265\u525D
\u5250\u526E
\u5240\u5274
\u521B\u5275
\u5212<\u5283
\u5267\u5287
\u5218\u5289
\u523D\u528A
\u523F\u528C
\u5251\u528D
\u34E5\u528F
\u5242\u5291
\u3509\u529A
\u52B2\u52C1
\u52A8\u52D5
\u52A1\u52D9
\u52CB\u52DB
\u80DC<\u52DD
\u52B3\u52DE
\u52BF\u52E2
\u52DA\u52E9
\u52A2\u52F1
\u52B1\u52F5
\u529D\u52F8
\u5300\u52FB
\u5326\u532D
\u6C47\u5F59\u532F
\u532E\u5331
\u533A\u5340
\u534F\u5354
\u5374\u537B
\u538D\u5399
\u538C\u53AD
\u5389\u53B2
\u53A3\u53B4
\u53C2\u53C3
\u53C1\u53C4
\u4E1B\u53E2
\u54A4>\u5412
\u5434\u5433
\u5450\u5436
\u5415\u5442
\u5459\u54BC
\u5458\u54E1
\u5457\u5504
\u5423\u551A
\u95EE\u554F
\u54D1\u555E
\u542F\u555F
\u5521\u5562
\u359E\u558E
\u5524\u559A
\u4E27\u55AA
\u4E54\u55AC
\u5355\u55AE
\u54DF\u55B2
\u545B\u55C6
\u556C\u55C7
\u551D\u55CA
\u5417\u55CE
\u545C\u55DA
\u5522\u55E9
\u54D4\u55F6
\u53F9\u5606
\u55BD\u560D
\u556F\u5613
\u5455\u5614
\u5567\u5616
\u5C1D\u5617
\u551B\u561C
\u54D7\u5629
\u5520\u562E
\u5578\u562F
\u53FD\u5630
\u54D3\u5635
\u5452\u5638
\u5574\u563D
\u5618\u5653
\u358A\u565A
\u549D\u565D
\u54D2\u5660
\u54DD\u5665
\u54D5\u5666
\u55F3\u566F
\u54D9\u5672
\u55B7\u5674
\u5428<\u5678
\u5F53\u7576\u5679
\u549B\u5680
\u5413\u5687
\u54DC\u568C
\u565C\u5695
\u556E\u5699
\u5456\u56A6
\u5499\u56A8
\u4EB8\u56B2
\u55BE\u56B3
\u4E25\u56B4
\u5624\u56B6
\u556D\u56C0
\u55EB\u56C1
\u56A3\u56C2
\u5181\u56C5
\u5453\u56C8
\u5570\u56C9
\u5631\u56D1
\u56F1\u56EA
\u56F5\u5707
\u56FD\u570B
\u56F4\u570D
\u56ED\u5712
\u5706\u5713
\u56FE\u5716
\u56E2\u5718
\u57EF\u57B5
\u57AD\u57E1
\u91C7<\u63A1\u57F0
\u6267\u57F7
\u575A\u5805
\u57A9\u580A
\u57B4\u5816
\u57DA\u581D
\u5C27\u582F
\u62A5\u5831
\u573A\u5834
\u5757\u584A
\u8314\u584B
\u57B2\u584F
\u57D8\u5852
\u6D82<\u5857
\u575E\u5862
\u57D9\u5864
\u5C18\u5875
\u5811\u5879
\u57AB\u588A
\u5760\u589C
\u5815\u58AE
\u575F\u58B3
\u57AF\u58B6
\u57A6\u58BE
\u575B\u7F48\u58C7
\u57B1\u58CB
\u538B\u58D3
\u5792\u58D8
\u5739\u58D9
\u5786\u58DA
\u574F<\u58DE
\u5784\u58DF
\u5785\u58E0
\u575C\u58E2
\u575D\u58E9
\u5846\u58EA
\u58EE\u58EF
\u58F6\u58FA
\u58F8\u58FC
\u5BFF\u58FD
\u591F\u5920
\u68A6\u5922
\u5939\u593E
\u5942\u5950
\u5965\u5967
\u5941\u5969
\u593A\u596A
\u5968\u596C
\u594B\u596E
\u59F9\u597C
\u5986\u599D
\u59D7\u59CD
\u5978<\u59E6
\u5A31\u5A1B
\u5A04\u5A41
\u5987\u5A66
\u5A05\u5A6D
\u5A32\u5AA7
\u59AB\u5AAF
\u36C0\u5AB0
\u5AAA\u5ABC
\u5988\u5ABD
\u59AA\u5AD7
\u59A9\u5AF5
\u5A34\u5AFB
\u5A73\u5AFF
\u5AAD\u5B03
\u5A06\u5B08
\u5A75\u5B0B
\u5A07\u5B0C
\u5AF1\u5B19
\u5AD2\u5B21
\u5B37\u5B24
\u5AD4\u5B2A
\u5A74\u5B30
\u5A76\u5B38
\u36E4\u5B4B
\u5A08\u5B4C
\u5B59\u5B6B
\u5B66\u5B78
\u5B6A\u5B7F
\u5BAB\u5BAE
\u5BDD\u5BE2
\u5B9E\u5BE6
\u5B81<\u5BE7
\u5BA1\u5BE9
\u5199\u5BEB
\u5BBD\u5BEC
\u3766\u5BEF
\u5BA0\u5BF5
\u5B9D\u5BF6
\u5C06\u5C07
\u4E13\u5C08
\u5BFB\u5C0B
\u5BF9\u5C0D
\u5BFC\u5C0E
\u5C34\u5C37
\u5C4A\u5C46
\u5C38<\u5C4D
\u5C43\u5C53
\u5C49\u5C5C
\u5C61\u5C62
\u5C42\u5C64
\u5C66\u5C68
\u5C5E\u5C6C
\u5188\u5CA1
\u5C98\u5CF4
\u5C9B\u5CF6
\u5CE1\u5CFD
\u5D03\u5D0D
\u5C97\u5D17
\u5CE5\u5D22
\u5CBD\u5D2C
\u5C9A\u5D50
\u37E5\u5D7E
\u5D5D\u5D81
\u5D2D\u5D84
\u5C96\u5D87
\u5D5A\u5D94
\u5D02\u5D97
\u5CE4\u5DA0
\u5CE3\u5DA2
\u5CC4\u5DA7
\u5D04\u5DAE
\u5C99\u5DB4
\u5D58\u5DB8
\u5CAD<\u5DBA
\u5C7F\u5DBC
\u5CBF\u5DCB
\u5CE6\u5DD2
\u5DC5\u5DD4
\u5DEF\u5DF0
\u5E05\u5E25
\u5E08\u5E2B
\u5E10\u5E33
\u5E26\u5E36
\u5E27\u5E40
\u5E0F\u5E43
\u384E\u5E53
\u5E3C\u5E57
\u5E3B\u5E58
\u5E1C\u5E5F
\u5E01\u5E63
\u5E2E\u5E6B
\u5E31\u5E6C
\u4E48<\u9EBC>\u5E7A>\u9EBD
\u51E0<\u5E7E
\u5E93\u5EAB
\u5395\u5EC1
\u53A2\u5EC2
\u53A9\u5EC4
\u53A6\u5EC8
\u53A8\u5EDA
\u53AE\u5EDD
\u5E99\u5EDF
\u5382<\u5EE0
\u5E91\u5EE1
\u5E9F\u5EE2
\u5E7F\u5EE3
\u5EEA\u5EE9
\u5E90\u5EEC
\u5385\u5EF3
\u5F11\u5F12
\u5F2A\u5F33
\u5F20\u5F35
\u5F3A\u5F37
\u5F39\u5F48
\u5F25\u5F4C
\u5F2F\u5F4E
\u5F5D<\u5F5E
\u5F5F\u5F60
\u5F66\u5F65
\u5F68\u5F72
\u540E<>\u5F8C
\u5F84\u5F91
\u4ECE\u5F9E
\u5F95\u5FA0
\u590D<\u8907\u5FA9>\u8986
\u5F81<>\u5FB5
\u5F7B\u5FB9
\u6052\u6046
\u803B\u6065
\u60A6\u6085
\u60AE\u609E
\u6005\u60B5
\u95F7\u60B6
\u6076\u60E1
\u607C\u60F1
\u607D\u60F2
\u607B\u60FB
\u7231\u611B
\u60EC\u611C
\u60AB\u6128
\u6006\u6134
\u607A\u6137
\u5FFE\u613E
\u6817<\u6144
\u6001\u614B
\u6120\u614D
\u60E8\u6158
\u60ED\u615A
\u6078\u615F
\u60EF\u6163
\u6004\u616A
\u6002\u616B
\u8651\u616E
\u60AD\u6173
\u5E86\u6176
\u396A\u617A
\u5FE7\u6182
\u60EB\u618A
\u392D\u618D
\u601C<\u6190
\u51ED\u6191
\u6126\u6192
\u616D\u6196
\u60EE\u619A
\u6124\u61A4
\u60AF\u61AB
\u6003\u61AE
\u5BAA\u61B2
\u5FC6\u61B6
\u6073\u61C7
\u5E94\u61C9
\u603F\u61CC
\u61D4\u61CD
\u603C\u61DF
\u61D1\u61E3
\u393D\u61E4
\u3916\u61E7
\u6079\u61E8
\u60E9\u61F2
\u61D2\u61F6
\u6000<\u61F7
\u60AC\u61F8
\u5FCF<\u61FA
\u60E7\u61FC
\u6151\u61FE
\u604B\u6200
\u6206\u6207
\u620B\u6214
\u6217\u6227
\u622C\u6229
\u6218\u6230
\u622F\u6231
\u620F\u6232
\u6237\u6236
\u629B\u62CB
\u635D\u6329
\u631F\u633E
\u820D<\u6368
\u626A\u636B
\u626B\u6383
\u62A1\u6384
\u39CF\u6386
\u631C\u6397
\u6323\u6399
\u6302<\u639B
\u62E3\u63C0
\u626C\u63DA
\u6362\u63DB
\u6325\u63EE
\u635F\u640D
\u6447\u6416
\u6363\u6417
\u63FE\u6435
\u62A2\u6436
\u63B4\u6451
\u63BC\u645C
\u6402\u645F
\u631A\u646F
\u62A0\u6473
\u629F\u6476
\u63BA\u647B
\u635E\u6488
\u6326\u648F
\u6491\u6490
\u6320\u6493
\u39D1\u649D
\u6322\u649F
\u63B8\u64A3
\u62E8\u64A5
\u629A\u64AB
\u6251<\u64B2
\u63FF\u64B3
\u631E\u64BB
\u631D\u64BE
\u6361\u64BF
\u62E5\u64C1
\u63B3\u64C4
\u62E9\u64C7
\u51FB\u64CA
\u6321\u64CB
\u39DF\u64D3
\u62C5\u64D4
\u636E<\u64DA
\u6324\u64E0
\u39DB\u64E5
\u62DF\u64EC
\u6448\u64EF
\u62E7\u64F0
\u6401\u64F1
\u63B7\u64F2
\u6269\u64F4
\u64B7\u64F7
\u6446\u64FA
\u64DE\u64FB
\u64B8\u64FC
\u39F0\u64FD
\u6270<\u64FE
\u6445\u6504
\u64B5\u6506
\u62E2\u650F
\u62E6\u6514
\u6484\u6516
\u6400\u6519
\u64BA\u651B
\u643A\u651C
\u6444\u651D
\u6512\u6522
\u631B\u6523
\u644A\u6524
\u6405\u652A
\u63FD\u652C
\u8D25\u6557
\u53D9\u6558
\u654C\u6575
\u6570\u6578
\u655B\u6582
\u6BD9\u6583
\u6569\u6586
\u6593\u6595
\u65A9\u65AC
\u65AD\u65B7
\u4E8E<>\u65BC
\u65F6\u6642
\u664B\u6649
\u663C\u665D
\u6655\u6688
\u6656\u6689
\u65F8\u6698
\u7545\u66A2
\u6682\u66AB
\u6654\u66C4
\u5386\u6B77\u66C6
\u6619\u66C7
\u6653\u66C9
\u5411<\u66CF
\u66A7\u66D6
\u65F7\u66E0
\u663D\u66E8
\u6652<\u66EC
\u4E66\u66F8
\u4F1A\u6703
\u80E7\u6727
\u4E1C\u6771
\u6805\u67F5
\u6746<\u687F
\u6800\u6894
\u67A7\u6898
\u6761\u689D
\u67AD\u689F
\u68C1\u68B2
\u5F03\u68C4
\u67A8\u68D6
\u67A3\u68D7
\u680B\u68DF
\u3B4E\u68E1
\u6808\u68E7
\u6816<\u68F2
\u68BE\u68F6
\u6860\u690F
\u3B4F\u6932
\u6768\u694A
\u67AB\u6953
\u6862\u6968
\u4E1A\u696D
\u6781<\u6975
\u6769\u69AA
\u8363\u69AE
\u6985\u69B2
\u6864\u69BF
\u6784<\u69CB
\u67AA\u69CD
\u68BF\u69E4
\u6920\u69E7
\u6901\u69E8
\u692E\u69EE
\u6868\u69F3
\u6922\u69F6
\u691D\u69FC
\u6869\u6A01
\u4E50\u6A02
\u679E\u6A05
\u697C\u6A13
\u6807\u6A19
\u67A2\u6A1E
\u3B64\u6A22
\u6837\u6A23
\u3B74\u6A2B
\u686A\u6A33
\u6734<\u6A38
\u6811\u6A39
\u6866\u6A3A
\u692B\u6A3F
\u6861\u6A48
\u6865\u6A4B
\u673A<\u6A5F
\u692D\u6A62
\u6A2A\u6A6B
\u6AA9\u6A81
\u67FD\u6A89
\u6863\u6A94
\u6867\u6A9C
\u69DA\u6A9F
\u68C0\u6AA2
\u6A2F\u6AA3
\u68BC\u6AAE
\u53F0<\u98B1\u81FA\u6AAF
\u69DF\u6AB3
\u67E0\u6AB8
\u69DB\u6ABB
\u67DC<\u6AC3
\u6A79\u6AD3
\u6988\u6ADA
\u6809\u6ADB
\u691F\u6ADD
\u6A7C\u6ADE
\u680E\u6ADF
\u6A71\u6AE5
\u69E0\u6AE7
\u680C\u6AE8
\u67A5\u6AEA
\u6A65\u6AEB
\u6987\u6AEC
\u8616\u6AF1
\u680A\u6AF3
\u6989\u6AF8
\u6A31\u6AFB
\u680F\u6B04
\u6743\u6B0A
\u6924\u6B0F
\u683E\u6B12
\u6984\u6B16
\u68C2\u6B1E
\u94A6\u6B3D
\u6B27\u6B50
\u6B24\u6B5F
\u6B22\u6B61
\u5C81\u6B72
\u5F52\u6B78
\u6B81\u6B7F
\u6B8B\u6B98
\u6B92\u6B9E
\u6B87\u6BA4
\u3C6E\u6BA8
\u6B9A\u6BAB
\u6B93\u6BAE
\u6BA1\u6BAF
\u3C69\u6BB0
\u6B7C\u6BB2
\u6740\u6BBA
\u58F3\u6BBC
\u6BC1\u6BC0
\u6BB4\u6BC6
\u6BF5\u6BFF
\u7266\u6C02
\u6BE1\u6C08
\u6C07\u6C0C
\u6C14<\u6C23
\u6C22\u6C2B
\u6C29\u6C2C
\u6C32\u6C33
\u51B3\u6C7A
\u6CA1\u6C92
\u51B2\u885D\u6C96
\u51B5\u6CC1
\u6C79\u6D36
\u6D43\u6D79
\u6CFE\u6D87
\u51C9\u6DBC
\u6CEA\u6DDA
\u6E0C\u6DE5
\u6CA6\u6DEA
\u6E0A\u6DF5
\u6D9E\u6DF6
\u6D45\u6DFA
\u6DA3\u6E19
\u51CF\u6E1B
\u6CA8\u6E22
\u6DA1\u6E26
\u6D4B\u6E2C
\u6D51\u6E3E
\u51D1\u6E4A
\u6D48\u6E5E
\u6C64\u6E6F
\u6CA9\u6E88
\u51C6<\u6E96
\u6C9F\u6E9D
\u6E29\u6EAB
\u6D49\u6EAE
\u6DA2\u6EB3
\u6CA7\u6EC4
\u706D\u6EC5
\u6DA4\u6ECC
\u8365\u6ECE
\u6CAA\u6EEC
\u6EDE\u6EEF
\u6E17\u6EF2
\u6D52\u6EF8
\u6D50\u6EFB
\u6EDA\u6EFE
\u6EE1\u6EFF
\u6E14\u6F01
\u6E87\u6F0A
\u6CA4\u6F1A
\u6C49\u6F22
\u6D9F\u6F23
\u6E0D\u6F2C
\u6DA8\u6F32
\u6E86\u6F35
\u6E10\u6F38
\u6D46\u6F3F
\u988D\u6F41
\u6CFC\u6F51
\u6D01<\u6F54
\u3D0B\u6F5A
\u6F5C\u6F5B
\u6DA6\u6F64
\u6D54\u6F6F
\u6E83\u6F70
\u6ED7\u6F77
\u6DA0\u6F7F
\u6DA9\u6F80
\u6D47\u6F86
\u6D9D\u6F87
\u6DA7\u6F97
\u6E11\u6FA0
\u6CFD\u6FA4
\u6EEA\u6FA6
\u6CF6\u6FA9
\u6D4D\u6FAE
\u6DC0<\u6FB1
\u3CE0\u6FBE
\u6D4A\u6FC1
\u6D53\u6FC3
\u3CE1\u6FC4
\u6E7F\u6FD5
\u6CDE<\u6FD8
\u6E81\u6FDA
\u6D55\u6FDC
\u6D4E\u6FDF
\u6D9B\u6FE4
\u3CD4\u6FE7
\u6EE5\u6FEB
\u6F4D\u6FF0
\u6EE8\u6FF1
\u6E85\u6FFA
\u6CFA\u6FFC
\u6EE4\u6FFE
\u6F9B\u7002
\u6EE2\u7005
\u6E0E\u7006
\u3CBF\u7007
\u6CFB\u7009
\u6C88<\u700B
\u6D4F\u700F
\u6FD2\u7015
\u6CF8\u7018
\u6CA5\u701D
\u6F47\u701F
\u6F46\u7020
\u6F74\u7026
\u6CF7\u7027
\u6FD1\u7028
\u3CFD\u7030
\u6F4B\u7032
\u6F9C\u703E
\u6CA3\u7043
\u6EE0\u7044
\u6D12<\u7051
\u6F13<\u7055
\u6EE9\u7058
\u704F\u705D
\u6F24\u7060
\u3CD5\u7061
\u6E7E\u7063
\u6EE6\u7064
\u6EDF\u7067
\u707E\u707D
\u4E3A\u70BA
\u4E4C\u70CF
\u70C3\u70F4
\u65E0\u7121
\u70BC\u7149
\u709C\u7152
\u70DF\u7159
\u8315\u7162
\u7115\u7165
\u70E6\u7169
\u7080\u716C
\u3DBD\u7171
\u7174\u7185
\u8367\u7192
\u709D\u7197
\u70ED\u71B1
\u988E\u71B2
\u70BD\u71BE
\u70E8\u71C1
\u706F\u71C8
\u70E7\u71D2
\u70EB\u71D9
\u7116\u71DC
\u8425\u71DF
\u707F\u71E6
\u70DB\u71ED
\u70E9\u71F4
\u3DB6\u71F6
\u70EC\u71FC
\u7118\u71FE
\u70C1\u720D
\u7089\u7210
\u70C2\u721B
\u4E89\u722D
\u7237\u723A
\u5C14\u723E
\u5899\u7246
\u724D\u7258
\u7275\u727D
\u8366\u7296
\u728A\u72A2
\u727A\u72A7
\u72B6\u72C0
\u72ED\u72F9
\u72C8\u72FD
\u72F0\u7319
\u72B9\u7336
\u72F2\u733B
\u72B8\u7341
\u72F1\u7344
\u72EE\u7345
\u5956\u734E
\u72EC\u7368
\u72EF\u736A
\u7303\u736B
\u72DD\u736E
\u72DE\u7370
\u3E8D\u7371
\u83B7\u7A6B\u7372
\u730E\u7375
\u72B7\u7377
\u517D\u7378
\u736D\u737A
\u732E\u737B
\u7315\u737C
\u7321\u7380
\u73B0\u73FE
\u73D0\u743A
\u73F2\u743F
\u73AE\u744B
\u739A\u7452
\u7410\u7463
\u7476\u7464
\u83B9\u7469
\u739B\u746A
\u73B1\u7472
\u740F\u7489
\u740E\u74A1
\u7391\u74A3
\u7477\u74A6
\u73F0\u74AB
\u3EC5\u74AF
\u73AF\u74B0
\u7399\u74B5
\u7478\u74B8
\u73BA\u74BD
\u743C\u74CA
\u73D1\u74CF
\u748E\u74D4
\u74D2\u74DA
\u74EF\u750C
\u4EA7\u7522
\u4EA9\u755D
\u6BD5\u7562
\u753B\u756B
\u5F02<\u7570
\u7574\u7587
\u53E0\u758A
\u75C9\u75D9
\u75B4\u75FE
\u75D6\u7602
\u75AF\u760B
\u75A1\u760D
\u75EA\u7613
\u7617\u761E
\u75AE\u7621
\u759F\u7627
\u7606\u762E
\u75AD\u7632
\u7618\u763A
\u7597\u7642
\u75E8\u7646
\u75EB\u7647
\u7605\u7649
\u75A0\u7658
\u762A\u765F
\u75D2<\u7662
\u7596\u7664
\u75C7<\u7665
\u75AC\u7667
\u765E\u7669
\u7663\u766C
\u763F\u766D
\u763E\u766E
\u75C8\u7670
\u762B\u7671
\u766B\u7672
\u53D1\u9AEE\u767C
\u7691\u769A
\u75B1\u76B0
\u76B2\u76B8
\u76B1\u76BA
\u76D7\u76DC
\u76CF\u76DE
\u76D1\u76E3
\u76D8\u76E4
\u5362\u76E7
\u8361\u8569\u76EA
\u7726\u7725
\u4F17\u773E
\u56F0<\u774F
\u7741\u775C
\u7750\u775E
\u770D\u7798
\u4056\u779C
\u7792\u779E
\u7786\u77B6
\u7751\u77BC
\u772C\u77D3
\u77A9\u77DA
\u77EB\u77EF
\u7841\u785C
\u7856\u7864
\u7817\u7868
\u781A\u786F
\u7855\u78A9
\u7800\u78AD
\u781C\u78B8
\u786E<\u78BA
\u7801\u78BC
\u40B5\u78BD
\u7859\u78D1
\u7816\u78DA
\u7875\u78E0
\u789C\u78E3
\u789B\u78E7
\u77F6\u78EF
\u7857\u78FD
\u40C5\u78FE
\u785A\u7904
\u7877\u9E7C\u7906
\u7840\u790E
\u788D\u7919
\u77FF\u7926
\u783A\u792A
\u783E\u792B
\u77FE\u792C
\u783B\u7931
\u7984\u797F
\u7978\u798D
\u796F\u798E
\u794E\u7995
\u7943\u79A1
\u5FA1<\u79A6
\u7985\u79AA
\u793C\u79AE
\u7962\u79B0
\u7977\u79B1
\u79C3\u79BF
\u7C7C\u79C8
\u7A0E\u7A05
\u79C6\u7A08
\u4149\u7A0F
\u7980\u7A1F
\u79CD<\u7A2E
\u79F0\u7A31
\u8C37<\u7A40
\u415F\u7A47
\u7A23\u7A4C
\u79EF\u7A4D
\u9896\u7A4E
\u79FE\u7A60
\u7A51\u7A61
\u79FD\u7A62
\u7A33\u7A69
\u7A06\u7A6D
\u7A9D\u7AA9
\u6D3C<\u7AAA
\u7A77\u7AAE
\u7A91\u7AAF
\u7A8E\u7AB5
\u7AAD\u7AB6
\u7AA5\u7ABA
\u7A9C\u7AC4
\u7A8D\u7AC5
\u7AA6\u7AC7
\u7A83\u7ACA
\u7ADE\u7AF6
\u7B14\u7B46
\u7B0B\u7B4D
\u7B15\u7B67
\u41F2\u7B74
\u7B3A\u7B8B
\u7B5D\u7B8F
\u8282\u7BC0
\u8303<\u7BC4
\u7B51<\u7BC9
\u7BA7\u7BCB
\u7B7C\u7BD4
\u7B03\u7BE4
\u7B5B\u7BE9
\u7B5A\u7BF3
\u7BA6\u7C00
\u7BD3\u7C0D
\u7BAA\u7C1E
\u7B80\u7C21
\u7BD1\u7C23
\u7BAB\u7C2B
\u7B5C\u7C39
\u7B7E\u7C3D
\u5E18<\u7C3E
\u7BEE\u7C43
\u7B79\u7C4C
\u4264\u7C54
\u7B93\u7C59
\u7BEF\u7C5B
\u7BA8\u7C5C
\u7C41\u7C5F
\u7B3C\u7C60
\u7B3E\u7C69
\u7C16\u7C6A
\u7BF1<\u7C6C
\u7BA9\u7C6E
\u7CA4\u7CB5
\u7CC1\u7CDD
\u7CAA\u7CDE
\u7CAE\u7CE7
\u7C9D\u7CF2
\u7C74\u7CF4
\u7C9C\u7CF6
\u7E9F\u7CF9
\u7EA0\u7CFE
\u7EAA\u7D00
\u7EA3\u7D02
\u7EA6\u7D04
\u7EA2\u7D05
\u7EA1\u7D06
\u7EA5\u7D07
\u7EA8\u7D08
\u7EAB\u7D09
\u7EB9\u7D0B
\u7EB3\u7D0D
\u7EBD\u7D10
\u7EBE\u7D13
\u7EAF\u7D14
\u7EB0\u7D15
\u7EBC\u7D16
\u7EB1\u7D17
\u7EAE\u7D18
\u7EB8\u7D19
\u7EA7\u7D1A
\u7EB7\u7D1B
\u7EAD\u7D1C
\u7EB4\u7D1D
\u7EBA\u7D21
\u4337\u7D2C
\u7EC6\u7D30
\u7EC2\u7D31
\u7EC1\u7D32
\u7EC5\u7D33
\u7EBB\u7D35
\u7ECD\u7D39
\u7EC0\u7D3A
\u7ECB\u7D3C
\u7ED0\u7D3F
\u7ECC\u7D40
\u7EC8\u7D42
\u7EC4\u7D44
\u4339\u7D45
\u7ECA\u7D46
\u7ED7\u7D4E
\u7ED3\u7D50
\u7EDD\u7D55
\u7EE6\u7E27\u7D5B
\u7ED4\u7D5D
\u7EDE\u7D5E
\u7EDC\u7D61
\u7EDA\u7D62
\u7ED9\u7D66
\u7ED2\u7D68
\u7ED6\u7D70
\u7EDF\u7D71
\u4E1D\u7D72
\u7EDB\u7D73
\u7EE2\u7D79
\u7ED1\u7D81
\u7EE1\u7D83
\u7EE0\u7D86
\u7EE8\u7D88
\u7EE4\u7D8C
\u7EE5\u7D8F
\u433C\u7D90
\u7ECF\u7D93
\u7EFC\u7D9C
\u7F0D\u7D9E
\u7EFF\u7DA0
\u7EF8\u7DA2
\u7EFB\u7DA3
\u7EF6\u7DAC
\u7EF4\u7DAD
\u7EF9\u7DAF
\u7EFE\u7DB0
\u7EB2\u7DB1
\u7F51<\u7DB2
\u7F00\u7DB4
\u433D\u7DB5
\u7EB6\u7DB8
\u7EFA\u7DB9
\u7EEE\u7DBA
\u7EFD\u7DBB
\u7EF0\u7DBD
\u7EEB\u7DBE
\u7EF5\u7DBF
\u7EF2\u7DC4
\u7F01\u7DC7
\u7D27\u7DCA
\u7EEF\u7DCB
\u7EEA\u7DD2
\u7EEC\u7DD3
\u7EF1\u979D\u7DD4
\u7F03\u7DD7
\u7F04\u7DD8
\u7F02\u7DD9
\u7EBF\u7DDA
\u7F09\u7DDD
\u7F0E\u7DDE
\u7F14\u7DE0
\u7F17\u7DE1
\u7F18\u7DE3
\u7F0C\u7DE6
\u7F16\u7DE8
\u7F13\u7DE9
\u7F05\u7DEC
\u7EAC\u7DEF
\u7F11\u7DF1
\u7F08\u7DF2
\u7EC3\u7DF4
\u7F0F\u7DF6
\u7F07\u7DF9
\u81F4<\u7DFB
\u8426\u7E08
\u7F19\u7E09
\u7F22\u7E0A
\u7F12\u7E0B
\u7EC9\u7E10
\u7F23\u7E11
\u7F0A\u7E15
\u7F1E\u7E17
\u7F1A\u7E1B
\u7F1C\u7E1D
\u7F1F\u7E1E
\u7F1B\u7E1F
\u53BF\u7E23
\u7F1D\u7E2B
\u7F21\u7E2D
\u7F29\u7E2E
\u7EB5\u7E31
\u7F27\u7E32
\u4338\u7E33
\u7F26\u7E35
\u7D77\u7E36
\u7F15\u7E37
\u7F25\u7E39
\u603B\u7E3D
\u7EE9\u7E3E
\u7EF7\u7E43
\u7F2B\u7E45
\u7F2A\u7E46
\u7F2F\u7E52
\u7EC7\u7E54
\u7F2E\u7E55
\u7F2D\u7E5A
\u7ED5\u7E5E
\u7EE3\u7E61
\u7F0B\u7E62
\u7EF3\u7E69
\u7ED8\u7E6A
\u8327<\u7E6D
\u7F30\u97C1\u7E6E
\u7F33\u7E6F
\u7F32\u7E70
\u7F34\u7E73
\u4341\u7E78
\u7ECE\u7E79
\u7EE7\u7E7C
\u7F24\u7E7D
\u7F31\u7E7E
\u4340\u7E7F
\u98A3\u7E87
\u7F2C\u7E88
\u7EA9\u7E8A
\u7EED\u7E8C
\u7D2F<\u7E8D
\u7F20\u7E8F
\u7F28\u7E93
\u7EA4\u7E96
\u7F35\u7E98
\u7F06\u7E9C
\u94B5\u7F3D
\u7F42\u7F4C
\u7F5A\u7F70
\u9A82\u7F75
\u7F62\u7F77
\u7F57\u7F85
\u7F74\u7F86
\u7F81\u7F88
\u8288\u7F8B
\u7F9F\u7FA5
\u4E49\u7FA9
\u4E60\u7FD2
\u7FDA\u7FEC
\u7FD8\u7FF9
\u7FD9\u7FFD
\u8027\u802C
\u8022\u802E
\u5723<\u8056
\u95FB\u805E
\u8054\u806F
\u806A\u8070
\u58F0\u8072
\u8038\u8073
\u8069\u8075
\u8042\u8076
\u804C\u8077
\u804D\u8079
\u542C<\u807D
\u804B\u807E
\u8083\u8085
\u80C1\u8105
\u8109\u8108
\u80EB\u811B
\u8131\u812B
\u80C0\u8139
\u80BE\u814E
\u80E8\u8156
\u8136\u8161
\u8111\u8166
\u80BF\u816B
\u811A\u8173
\u80A0\u8178
\u817D\u8183
\u8158\u8195
\u80A4\u819A
\u43DD\u819E
\u80F6\u81A0
\u817B\u81A9
\u80C6\u81BD
\u810D\u81BE
\u8113\u81BF
\u442A\u81C7
\u8138\u81C9
\u8110\u81CD
\u8191\u81CF
\u814A<\u81D8
\u80EA\u81DA
\u810F\u9AD2\u81DF
\u8114\u81E0
\u81DC\u81E2
\u4E34\u81E8
\u4E0E<\u8207
\u5174\u8208
\u4E3E\u8209
\u65E7\u820A
\u8231\u8259
\u8223\u8264
\u8230\u8266
\u823B\u826B
\u8270\u8271
\u8273\u8277
\u520D\u82BB
\u82CE\u82E7
\u5179\u8332
\u8346\u834A
\u5E84<\u838A
\u830E\u8396
\u835A\u83A2
\u82CB\u83A7
\u534E\u83EF
\u82CC\u8407
\u83B1\u840A
\u4E07<\u842C
\u835D\u8434
\u83B4\u8435
\u53F6\u8449
\u836D\u8452
\u7740>\u8457
\u836E\u8464
\u82C7\u8466
\u8364\u8477
\u83B3\u8494
\u8385\u849E
\u82CD\u84BC
\u836A\u84C0
\u76D6\u84CB
\u83B2\u84EE
\u82C1\u84EF
\u83BC\u84F4
\u835C\u84FD
\u848C\u851E
\u848B\u8523
\u8471\u8525
\u8311\u8526
\u836B\u852D
\u8368\u8541
\u8487\u8546
\u835E\u854E
\u836C\u8552
\u82B8<\u8553
\u83B8\u8555
\u835B\u8558
\u8489\u8562
\u829C\u856A
\u8427\u856D
\u84E3\u8577
\u8570\u8580
\u835F\u8588
\u84DF\u858A
\u8297\u858C
\u8537\u8594
\u8359\u8598
\u83B6\u859F
\u8350<\u85A6
\u8428\u85A9
\u44D5\u85B3
\u82E7<\u85B4
\u44D3\u85B5
\u8360\u85BA
\u84DD\u85CD
\u8369\u85CE
\u827A\u85DD
\u836F\u85E5
\u85AE\u85EA
\u82C8\u85F6
\u853C\u85F9
\u853A\u85FA
\u841A\u8600
\u8572\u8604
\u82A6\u8606
\u82CF\u8607
\u8574\u860A
\u82F9<\u860B
\u85D3\u861A
\u8539\u861E
\u830F\u8622
\u5170\u862D
\u84E0\u863A
\u841D\u863F
\u8502<\u8646
\u5904\u8655
\u865A\u865B
\u864F\u865C
\u53F7\u865F
\u4E8F\u8667
\u866C\u866F
\u86F1\u86FA
\u8715\u86FB
\u86AC\u8706
\u8680\u8755
\u732C\u875F
\u867E\u8766
\u8717\u8778
\u86F3\u8784
\u8682\u879E
\u8424\u87A2
\u45D6\u87AE
\u877C\u87BB
\u8780\u87BF
\u86F0\u87C4
\u8748\u87C8
\u87A8\u87CE
\u866E<\u87E3
\u8749\u87EC
\u86F2\u87EF
\u866B<\u87F2
\u86CF\u87F6
\u8681\u87FB
\u8683\u8801
\u8747\u8805
\u867F\u8806
\u86F4\u8810
\u877E\u8811
\u8721<\u881F
\u86CE\u8823
\u87CF\u8828
\u86CA\u8831
\u8695<\u8836
\u86EE\u883B
\u672F\u8853
\u540C<\u8855
\u80E1<\u9B0D\u885A
\u536B\u885B
\u886E\u889E
\u8885\u88CA
\u8865\u88DC
\u88C5\u88DD
\u91CC<\u88E1
\u5236<\u88FD
\u88C8\u890C
\u8886\u8918
\u88E4\u8932
\u88E2\u8933
\u891B\u8938
\u4EB5\u893B
\u88E5\u8947
\u891D\u894C
\u88AF\u894F
\u8884\u8956
\u88E3\u895D
\u88C6\u8960
\u8934\u8964
\u889C\u896A
\u4653\u896C
\u886C\u896F
\u88AD\u8972
\u8955\u8974
\u89C1\u898B
\u89C3\u898E
\u89C4\u898F
\u89C5\u8993
\u89C6\u8996
\u89C7\u8998
\u89CB\u89A1
\u89CD\u89A5
\u89CE\u89A6
\u4EB2\u89AA
\u89CA\u89AC
\u89CF\u89AF
\u89D0\u89B2
\u89D1\u89B7
\u89C9\u89BA
\u89C8\u89BD
\u89CC\u89BF
\u89C2\u89C0
\u89DE\u89F4
\u89EF\u89F6
\u89E6<\u89F8
\u8BA0\u8A01
\u8BA2\u8A02
\u8BA3\u8A03
\u8BA1\u8A08
\u8BAF\u8A0A
\u8BA7\u8A0C
\u8BA8\u8A0E
\u8BA6\u8A10
\u8BB1\u8A12
\u8BAD\u8A13
\u8BAA\u8A15
\u8BAB\u8A16
\u8BAC\u8A17
\u8BB0\u8A18
\u8BB9\u8A1B
\u8BB6\u8A1D
\u8BBC\u8A1F
\u4723\u8A22
\u8BC0\u8A23
\u8BB7\u8A25
\u8BBB\u8A29
\u8BBF\u8A2A
\u8BBE\u8A2D
\u8BB8\u8A31
\u8BC9\u8A34
\u8BC3\u8A36
\u8BCA\u8A3A
\u6CE8<\u8A3B
\u8BC2\u8A41
\u8BCB\u8A46
\u8BB5\u8A4E
\u8BC8\u8A50
\u8BD2\u8A52
\u8BCF\u8A54
\u8BC4\u8A55
\u8BD0\u8A56
\u8BC7\u8A57
\u8BCE\u8A58
\u8BC5\u8A5B
\u8BCD\u8A5E
\u548F\u8A60
\u8BE9\u8A61
\u8BE2\u8A62
\u8BE3\u8A63
\u8BD5\u8A66
\u8BD7\u8A69
\u8BE7\u8A6B
\u8BDF\u8A6C
\u8BE1\u8A6D
\u8BE0\u8A6E
\u8BD8\u8A70
\u8BDD\u8A71
\u8BE5\u8A72
\u8BE6\u8A73
\u8BDC\u8A75
\u8BD9\u8A7C
\u8BD6\u8A7F
\u8BD4\u8A84
\u8BDB\u8A85
\u8BD3\u8A86
\u5938<\u8A87
\u5FD7<\u8A8C
\u8BA4\u8A8D
\u8BF3\u8A91
\u8BF6\u8A92
\u8BDE\u8A95
\u8BF1\u8A98
\u8BEE\u8A9A
\u8BED\u8A9E
\u8BDA\u8AA0
\u8BEB\u8AA1
\u8BEC\u8AA3
\u8BEF\u8AA4
\u8BF0\u8AA5
\u8BF5\u8AA6
\u8BF2\u8AA8
\u8BF4\u8AAA
\u8C01\u8AB0
\u8BFE\u8AB2
\u8C07\u8AB6
\u8BFD\u8AB9
\u8C0A\u8ABC
\u8A1A\u8ABE
\u8C03\u8ABF
\u8C04\u8AC2
\u8C06\u8AC4
\u8C08\u8AC7
\u8BFF\u8AC9
\u8BF7\u8ACB
\u8BE4\u8ACD
\u8BF9\u8ACF
\u8BFC\u8AD1
\u8C05\u8AD2
\u8BBA\u8AD6
\u8C02\u8AD7
\u8C00\u8ADB
\u8C0D\u8ADC
\u8C1E\u8ADD
\u8C1D\u8ADE
\u8BE8\u8AE2
\u8C14\u8AE4
\u8C1B\u8AE6
\u8C10\u8AE7
\u8C0F\u8AEB
\u8C15\u8AED
\u8C18\u8AEE
\u8BB3\u8AF1
\u8C19\u8AF3
\u8C0C\u8AF6
\u8BBD\u8AF7
\u8BF8\u8AF8
\u8C1A\u8AFA
\u8C16\u8AFC
\u8BFA\u8AFE
\u8C0B\u8B00
\u8C12\u8B01
\u8C13\u8B02
\u8A8A\u8B04
\u8BCC\u8B05
\u8C0E\u8B0A
\u8C1C\u8B0E
\u8C27\u8B10
\u8C11\u8B14
\u8C21\u8B16
\u8C24\u8B17
\u8C26\u8B19
\u8C25\u8B1A
\u8BB2\u8B1B
\u8C22\u8B1D
\u8C23\u8B20
\u8C1F\u8B28
\u8C2A\u8B2B
\u8C2C\u8B2C
\u8C2B\u8B7E\u8B2D
\u8BB4\u8B33
\u8C28\u8B39
\u8C29\u8B3E
\u8BC1\u8B49
\u8C32\u8B4E
\u8BA5\u8B4F
\u8C2E\u8B56
\u8BC6\u8B58
\u8C2F\u8B59
\u8C2D\u8B5A
\u8C31\u8B5C
\u8C35\u8B6B
\u8BD1\u8B6F
\u8BAE\u8B70
\u8C34\u8B74
\u62A4\u8B77
\u8BEA\u8B78
\u46D3\u8B7C
\u8A89\u8B7D
\u8BFB\u8B80
\u8C09\u8B85
\u53D8\u8B8A
\u8A5F\u8B8B
\u4729\u8B8C
\u96E0\u8B8E
\u8C17\u8B92
\u8BA9\u8B93
\u8C30\u8B95
\u8C36\u8B96
\u8C20\u8B9C
\u8C33\u8B9E
\u5C82\u8C48
\u7AD6\u8C4E
\u4E30<\u8C50
\u732A\u8C6C
\u8C6E\u8C76
\u732B\u8C93
\u4759\u8C99
\u8D1D\u8C9D
\u8D1E\u8C9E
\u8D20\u8C9F
\u8D1F\u8CA0
\u8D22\u8CA1
\u8D21\u8CA2
\u8D2B\u8CA7
\u8D27\u8CA8
\u8D29\u8CA9
\u8D2A\u8CAA
\u8D2F\u8CAB
\u8D23\u8CAC
\u8D2E\u8CAF
\u8D33\u8CB0
\u8D40\u8CB2
\u8D30\u8CB3
\u8D35\u8CB4
\u8D2C\u8CB6
\u4E70\u8CB7
\u8D37\u8CB8
\u8D36\u8CBA
\u8D39\u8CBB
\u8D34\u8CBC
\u8D3B\u8CBD
\u8D38\u8CBF
\u8D3A\u8CC0
\u8D32\u8CC1
\u8D42\u8CC2
\u8D41\u8CC3
\u8D3F\u8CC4
\u8D45\u8CC5
\u8D44\u8CC7
\u8D3E\u8CC8
\u8D3C\u8CCA
\u8D48\u8CD1
\u8D4A\u8CD2
\u5BBE\u8CD3
\u8D47\u8CD5
\u8D52\u8CD9
\u8D49\u8CDA
\u8D50\u8CDC
\u8D4F\u8CDE
\u8D54\u8CE0
\u8D53\u8CE1
\u8D24\u8CE2
\u5356\u8CE3
\u8D31\u8CE4
\u8D4B\u8CE6
\u8D55\u8CE7
\u8D28\u8CEA
\u8D26\u8CEC
\u8D4C\u8CED
\u4790\u8CF0
\u8D56\u8CF4
\u8D57\u8CF5
\u8D5A\u8CFA
\u8D59\u8CFB
\u8D2D\u8CFC
\u8D5B\u8CFD
\u8D5C\u8CFE
\u8D3D\u8D04
\u8D58\u8D05
\u8D5F\u8D07
\u8D60\u8D08
\u8D5E\u8D0A
\u8D5D\u8D17\u8D0B
\u8D61\u8D0D
\u8D62\u8D0F
\u8D46\u8D10
\u8D43\u8D13
\u8D51\u8D14
\u8D4E\u8D16
\u8D63\u8D1B
\u8D6A\u8D6C
\u8D76<\u8D95
\u8D75\u8D99
\u8D8B\u8DA8
\u8DB1\u8DB2
\u8FF9\u8DE1
\u8DF5\u8E10
\u8E0A<\u8E34
\u8DC4\u8E4C
\u8DF8\u8E55
\u8E52\u8E63
\u8E2A\u8E64
\u8DF7\u8E7A
\u8DF6\u8E82
\u8DB8\u8E89
\u8E0C\u8E8A
\u8DFB\u8E8B
\u8DC3\u8E8D
\u47E2\u8E8E
\u8E2F\u8E91
\u8DDE\u8E92
\u8E2C\u8E93
\u8E70\u8E95
\u8DF9\u8E9A
\u8E51\u8EA1
\u8E7F\u8EA5
\u8E9C\u8EA6
\u8E8F\u8EAA
\u8EAF\u8EC0
\u8F66\u8ECA
\u8F67\u8ECB
\u8F68\u8ECC
\u519B\u8ECD
\u8F6A\u8ED1
\u8F69\u8ED2
\u8F6B\u8ED4
\u8F6D\u8EDB
\u8F6F\u8EDF
\u8F77\u8EE4
\u8F78\u8EEB
\u8F71\u8EF2
\u8F74\u8EF8
\u8F75\u8EF9
\u8F7A\u8EFA
\u8F72\u8EFB
\u8F76\u8EFC
\u8F7C\u8EFE
\u8F83\u8F03
\u8F82\u8F05
\u8F81\u8F07
\u8F80\u8F08
\u8F7D\u8F09
\u8F7E\u8F0A
\u8F84\u8F12
\u633D<\u8F13
\u8F85\u8F14
\u8F7B\u8F15
\u8F86\u8F1B
\u8F8E\u8F1C
\u8F89\u8F1D
\u8F8B\u8F1E
\u8F8D\u8F1F
\u8F8A\u8F25
\u8F87\u8F26
\u8F88\u8F29
\u8F6E\u8F2A
\u8F8C\u8F2C
\u8F91\u8F2F
\u8F8F\u8F33
\u8F93\u8F38
\u8F90\u8F3B
\u8F97\u8F3E
\u8206\u8F3F
\u8F92\u8F40
\u6BC2\u8F42
\u8F96\u8F44
\u8F95\u8F45
\u8F98\u8F46
\u8F6C\u8F49
\u8F99\u8F4D
\u8F7F\u8F4E
\u8F9A\u8F54
\u8F70\u8F5F
\u8F94\u8F61
\u8F79\u8F62
\u8F73\u8F64
\u529E\u8FA6
\u8F9E\u8FAD
\u8FAB\u8FAE
\u8FA9\u8FAF
\u519C\u8FB2
\u8FF3\u9015
\u8FD9\u9019
\u8FDE\u9023
\u8FDB\u9032
\u8FD0\u904B
\u8FC7\u904E
\u8FBE\u9054
\u8FDD\u9055
\u9065\u9059
\u900A\u905C
\u9012\u905E
\u8FDC\u9060
\u9002<\u9069
\u8FDF\u9072
\u8FC1\u9077
\u9009\u9078
\u9057\u907A
\u8FBD\u907C
\u8FC8\u9081
\u8FD8\u9084
\u8FE9\u9087
\u8FB9\u908A
\u903B\u908F
\u9026\u9090
\u90CF\u90DF
\u90AE\u90F5
\u90D3\u9106
\u4E61\u9109
\u90B9\u9112
\u90AC\u9114
\u90E7\u9116
\u9093\u9127
\u90D1\u912D
\u90BB\u9130
\u90F8\u9132
\u90BA\u9134
\u90D0\u9136
\u909D\u913A
\u9142\u9147
\u90E6\u9148
\u4E11<\u919C
\u915D\u919E
\u533B\u91AB
\u9171\u91AC
\u9166\u91B1
\u917F\u91C0
\u8845\u91C1
\u917E\u91C3
\u917D\u91C5
\u91CA\u91CB
\u5398<\u91D0
\u9485\u91D2
\u9486\u91D3
\u9487\u91D4
\u948C\u91D5
\u948A\u91D7
\u9489\u91D8
\u948B\u91D9
\u9488\u91DD
\u9493\u91E3
\u9490\u91E4
\u948F\u91E7
\u9492\u91E9
\u9497\u91F5
\u948D\u91F7
\u9495\u91F9
\u948E\u91FA
\u497A\u91FE
\u94AF\u9200
\u94AB\u9201
\u9498\u9203
\u94AD\u9204
\u949A\u9208
\u94A0\u9209
\u949D\u920D
\u94A9\u9264\u920E
\u94A4\u9210
\u94A3\u9211
\u9491\u9212
\u949E\u9214
\u94AE\u9215
\u94A7\u921E
\u9499\u9223
\u94AC\u9225
\u949B\u9226
\u94AA\u9227
\u94CC\u922E
\u94C8\u9230
\u94B6\u9233
\u94C3\u9234
\u94B4\u9237
\u94B9\u9238
\u94CD\u9239
\u94B0\u923A
\u94B8\u923D
\u94C0\u923E
\u94BF\u923F
\u94BE\u9240
\u949C\u9245
\u94CA\u9248
\u94C9\u9249
\u94C7\u924B
\u94CB\u924D
\u94C2\u9251
\u94B7\u9255
\u94B3\u9257
\u94C6\u925A
\u94C5\u925B
\u94BA\u925E
\u94B2\u9266
\u9FED\u9448\u9268
\u94BC\u926C
\u94BD\u926D
\u94CF\u9276
\u94F0\u9278
\u94D2\u927A
\u94EC\u927B
\u94EA\u927F
\u94F6\u9280
\u94F3\u9283
\u94DC\u9285
\u94DA\u928D
\u94E3\u9291
\u94E8\u9293
\u94E2\u9296
\u94ED\u9298
\u94EB\u929A
\u94E6\u929B
\u8854\u929C
\u94D1\u92A0
\u94F7\u92A3
\u94F1\u92A5
\u94DF\u92A6
\u94F5\u92A8
\u94E5\u92A9
\u94D5\u92AA
\u94EF\u92AB
\u94D0\u92AC
\u94DE\u92B1
\u9510\u92B3
\u9500\u92B7
\u9508\u93FD\u92B9
\u9511\u92BB
\u9509\u92BC
\u94DD\u92C1
\u9512\u92C3
\u950C\u92C5
\u94A1\u92C7
\u94E4\u92CC
\u94D7\u92CF
\u950B\u92D2
\u94FB\u92D9
\u950A\u92DD
\u9513\u92DF
\u94D8\u92E3
\u9504\u92E4
\u9503\u92E5
\u9514\u92E6
\u9507\u92E8
\u94D3\u92E9
\u94FA\u92EA
\u94D6\u92EE
\u9506\u92EF
\u9502\u92F0
\u94FD\u92F1
\u950D\u92F6
\u952F\u92F8
\u94A2\u92FC
\u951E\u9301
\u5F55\u9304
\u9516\u9306
\u952B\u9307
\u9529\u9308
\u94D4\u930F
\u9525\u9310
\u9515\u9312
\u951F\u9315
\u9524\u9318
\u9531\u9319
\u94EE\u931A
\u951B\u931B
\u952C\u931F
\u952D\u9320
\u951C\u9321
\u94B1\u9322
\u9526\u9326
\u951A\u9328
\u9520\u9329
\u9521\u932B
\u9522\u932E
\u9519\u932F
\u9530\u9333
\u8868<\u9336
\u94FC\u9338
\u951D\u9340
\u9528\u9341
\u952A\u9343
\u9494\u9346
\u9534\u9347
\u9533\u9348
\u9505\u934B
\u9540\u934D
\u9537\u9354
\u94E1\u9358
\u9496\u935A
\u953B\u935B
\u953D\u9360
\u9538\u9364
\u9532\u9365
\u9518\u9369
\u9539\u936C
\u953E\u9370
\u952E\u9375
\u9536\u9376
\u9517\u937A
\u949F\u9418\u937E
\u9541\u9382
\u953F\u9384
\u9545\u9387
\u9551\u938A
\u9555\u9394
\u9501\u9396
\u9549\u9398
\u9548\u939B
\u9543\u93A1
\u94A8\u93A2
\u84E5\u93A3
\u954F\u93A6
\u94E0\u93A7
\u94E9\u93A9
\u953C\u93AA
\u9550\u93AC
\u9547\u93AE
\u9552\u93B0
\u954B\u93B2
\u954D\u93B3
\u9553\u93B5
\u9FD4\u93B6
\u954E\u93BF
\u955E\u93C3
\u955F\u93C7
\u94FE\u93C8
\u9546\u93CC
\u9559\u93CD
\u9560\u93D0
\u955D\u93D1
\u94FF\u93D7
\u9535\u93D8
\u9557\u93DC
\u9558\u93DD
\u955B\u93DE
\u94F2\u93DF
\u955C\u93E1
\u9556\u93E2
\u9542\u93E4
\u933E\u93E8
\u955A\u93F0
\u94E7\u93F5
\u9564\u93F7
\u956A\u93F9
\u497D\u93FA
\u94D9\u9403
\u94F4\u940B
\u9563\u9410
\u94F9\u9412
\u9566\u9413
\u9561\u9414
\u956B\u9419
\u9562\u941D
\u9568\u9420
\u4985\u9425
\u950E\u9426
\u950F\u9427
\u9544\u9428
\u954C\u942B
\u9570\u942E
\u4983\u942F
\u956F\u9432
\u956D\u9433
\u94C1\u9435
\u956E\u9436
\u94CE\u9438
\u94DB\u943A
\u9571\u943F
\u94F8\u9444
\u956C\u944A
\u9554\u944C
\u9274\u9452
\u9572\u9454
\u9527\u9455
\u9574\u945E
\u94C4\u9460
\u9573\u9463
\u9565\u9465
\u9567\u946D
\u94A5\u9470
\u9575\u9471
\u9576\u9472
\u954A\u9477
\u9569\u9479
\u9523\u947C
\u94BB\u947D
\u92AE\u947E
\u51FF\u947F
\u4986\u9481
\u957F\u9577
\u95E8\u9580
\u95E9\u9582
\u95EA\u9583
\u95EB\u9586
\u95EC\u9588
\u95ED\u9589
\u5F00\u958B
\u95F6\u958C
\u95F3\u958E
\u95F0\u958F
\u95F2\u9592\u9591
\u95F4\u9593
\u95F5\u9594
\u95F8\u9598
\u9602\u95A1
\u9601\u95A3
\u9600\u95A5
\u95FA\u95A8
\u95FD\u95A9
\u9603\u95AB
\u9606\u95AC
\u95FE\u95AD
\u9605\u95B1
\u960A\u95B6
\u9609\u95B9
\u960E\u95BB
\u960F\u95BC
\u960D\u95BD
\u9608\u95BE
\u960C\u95BF
\u9612\u95C3
\u677F<\u95C6
\u95F1\u95C8
\u9614\u95CA
\u9615\u95CB
\u9611\u95CC
\u9607\u95CD
\u9617\u95D0
\u9618\u95D2
\u95FF\u95D3
\u9616\u95D4
\u9619\u95D5
\u95EF\u95D6
\u5173\u95DC
\u961A\u95DE
\u9613\u95E0
\u9610\u95E1
\u8F9F<\u95E2
\u961B\u95E4
\u95FC\u95E5
\u5742>\u962A
\u9649\u9658
\u9655\u965D
\u9635\u9663
\u9634\u9670
\u9648\u9673
\u9646\u9678
\u9633\u967D
\u9667\u9689
\u961F\u968A
\u9636\u968E
\u9668\u9695
\u9645\u969B
\u968F\u96A8
\u9669\u96AA
\u9666\u96AF
\u9690\u96B1
\u9647\u96B4
\u96B6\u96B8
\u53EA<\u96BB
\u96BD\u96CB
\u867D\u96D6
\u53CC\u96D9
\u96CF\u96DB
\u6742\u96DC
\u9E21\u96DE
\u79BB<\u96E2
\u96BE\u96E3
\u4E91<\u96F2
\u7535\u96FB
\u9721\u9722
\u96FE\u9727
\u9701\u973D
\u96F3\u9742
\u972D\u9744
\u53C7\u9746
\u7075\u9748
\u53C6\u9749
\u9753\u975A
\u9759\u975C
\u4A44\u9766
\u9765\u9768
\u9F17\u9780
\u5DE9\u978F
\u9792\u97BD
\u9791\u97C3
\u97AF\u97C9
\u97E6\u97CB
\u97E7\u97CC
\u97E8\u97CD
\u97E9\u97D3
\u97EA\u97D9
\u97EC\u97DC
\u97EB\u97DE
\u97F5\u97FB
\u54CD\u97FF
\u9875\u9801
\u9876\u9802
\u9877\u9803
\u9879\u9805
\u987A\u9806
\u9878\u9807
\u987B\u9B1A\u9808
\u987C\u980A
\u9882\u980C
\u9880\u980E
\u9883\u980F
\u9884\u9810
\u987D\u9811
\u9881\u9812
\u987F\u9813
\u9887\u9817
\u9886\u9818
\u988C\u981C
\u9889\u9821
\u9890\u9824
\u988F\u9826
\u5934\u982D
\u9892\u982E
\u988A\u9830
\u988B\u9832
\u9895\u9834
\u9894\u9837
\u9888\u9838
\u9893\u9839
\u9891\u983B
\u9897\u9846
\u9898\u984C
\u989D\u984D
\u989A\u984E
\u989C\u984F
\u9899\u9852
\u989B\u9853
\u613F<\u9858
\u98A1\u9859
\u98A0\u985B
\u7C7B\u985E
\u989F\u9862
\u98A2\u9865
\u987E\u9867
\u98A4\u986B
\u98A5\u986C
\u663E\u986F
\u98A6\u9870
\u9885\u9871
\u989E\u9873
\u98A7\u9874
\u98CE\u98A8
\u98D0\u98AD
\u98D1\u98AE
\u98D2\u98AF
\u522E<\u98B3
\u98D3\u98B6
\u98D4\u98B8
\u98CF\u98BA
\u98D6\u98BB
\u98D5\u98BC
\u98D7\u98C0
\u98D8\u98C4
\u98D9\u98C6
\u98DA\u98C8
\u98DE\u98DB
\u9963\u98E0
\u9965\u98E2
\u9964\u98E3
\u9966\u98E5
\u9968\u98E9
\u996A\u98EA
\u996B\u98EB
\u996C\u98ED
\u996D\u98EF
\u996E\u98F2
\u9974\u98F4
\u9972\u98FC
\u9971\u98FD
\u9970\u98FE
\u9973\u98FF
\u997A\u9903
\u9978\u9904
\u997C\u9905
\u9977\u9909
\u517B\u990A
\u9975\u990C
\u9979\u990E
\u997B\u990F
\u997D\u9911
\u9981\u9912
\u997F\u9913
\u9982\u9915
\u997E\u9916
\u4F59<\u9918
\u80B4<\u991A
\u9984\u991B
\u9983\u991C
\u996F\u991E
\u9985\u9921
\u9986\u9928
\u7CC7\u9931
\u9967\u9933
\u9989\u9936
\u9987\u9937
\u998E\u993A
\u9969\u993C
\u998F\u993E
\u998A\u993F
\u998C\u9941
\u998D\u9943
\u9992\u9945
\u9990\u9948
\u9991\u9949
\u9993\u994A
\u9988\u994B
\u9994\u994C
\u9976\u9952
\u98E8\u9957
\u990D\u995C
\u998B\u995E
\u9995\u9962
\u9A6C\u99AC
\u9A6D\u99AD
\u51AF\u99AE
\u9A6E\u99B1
\u9A70\u99B3
\u9A6F\u99B4
\u9A72\u99B9
\u9A73\u99C1
\u9A7B\u99D0
\u9A7D\u99D1
\u9A79\u99D2
\u9A75\u99D4
\u9A7E\u99D5
\u9A80\u99D8
\u9A78\u99D9
\u9A76\u99DB
\u9A7C\u99DD
\u9A77\u99DF
\u9A88\u99E2
\u9A87\u99ED
\u9A83\u99F0
\u9A86\u99F1
\u9A8E\u99F8
\u9A8F\u99FF
\u9A8B\u9A01
\u9A8D\u9A02
\u9A93\u9A05
\u9A94\u9A0C
\u9A92\u9A0D
\u9A91\u9A0E
\u9A90\u9A0F
\u9A9B\u9A16
\u9A97\u9A19
\u9A99\u9A24
\u4BC4\u9A27
\u9A9E\u9A2B
\u9A98\u9A2D
\u9A9D\u9A2E
\u817E\u9A30
\u9A7A\u9A36
\u9A9A\u9A37
\u9A9F\u9A38
\u9AA1\u9A3E
\u84E6\u9A40
\u9A9C\u9A41
\u9A96\u9A42
\u9AA0\u9A43
\u9AA2\u9A44
\u9A71\u9A45
\u9A85\u9A4A
\u9A95\u9A4C
\u9A81\u9A4D
\u9AA3\u9A4F
\u9A84\u9A55
\u9A8C\u9A57
\u60CA<\u9A5A
\u9A7F\u9A5B
\u9AA4\u9A5F
\u9A74\u9A62
\u9AA7\u9A64
\u9AA5\u9A65
\u9AA6\u9A66
\u9A8A\u9A6A
\u9A89\u9A6B
\u80AE<\u9AAF
\u9AC5\u9ACF
\u4F53<\u9AD4
\u9ACC\u9AD5
\u9ACB\u9AD6
\u677E<\u9B06
\u9B13\u9B22
\u6597<\u9B25
\u95F9\u9B27
\u960B\u9B29
\u9604\u9B2E
\u90C1<\u9B31
\u9B36\u9B39
\u9B49\u9B4E
\u9B47\u9B58
\u9C7C\u9B5A
\u9C7D\u9B5B
\u9C7E\u9B62
\u9C80\u9B68
\u9C81\u9B6F
\u9C82\u9B74
\u9C7F\u9B77
\u9C84\u9B7A
\u9C85\u9B81
\u9C86\u9B83
\u9C8C\u9B8A
\u9C89\u9B8B
\u9C8F\u9B8D
\u9C87\u9B8E
\u9C90\u9B90
\u9C8D\u9B91
\u9C8B\u9B92
\u9C8A\u9B93
\u9C92\u9B9A
\u9C98\u9B9C
\u9C95\u9B9E
\u4C9F\u9BA3
\u9C96\u9BA6
\u9C94\u9BAA
\u9C9B\u9BAB
\u9C91\u9BAD
\u9C9C\u9BAE
\u9C93\u9BB3
\u9CAA\u9BB6
\u9C9D\u9BBA
\u9CA7\u9BC0
\u9CA0\u9BC1
\u9CA9\u9BC7
\u9CA4\u9BC9
\u9CA8\u9BCA
\u9CAC\u9BD2
\u9CBB\u9BD4
\u9CAF\u9BD5
\u9CAD\u9BD6
\u9C9E\u9BD7
\u9CB7\u9BDB
\u9CB4\u9BDD
\u9CB1\u9BE1
\u9CB5\u9BE2
\u9CB2\u9BE4
\u9CB3\u9BE7
\u9CB8\u9BE8
\u9CAE\u9BEA
\u9CB0\u9BEB
\u9CB6\u9BF0
\u9CBA\u9BF4
\u9CC0\u9BF7
\u9CAB\u9BFD
\u9CCA\u9BFF
\u9CC8\u9C01
\u9C97\u9C02
\u9CC2\u9C03
\u4CA0\u9C06
\u9CBD\u9C08
\u9CC7\u9C09
\u4CA1\u9C0C
\u9CC5\u9C0D
\u9CBE\u9C0F
\u9CC4\u9C77\u9C10
\u9CC6\u9C12
\u9CC3\u9C13
\u9CD2\u9C1C
\u9CD1\u9C1F
\u9CCB\u9C20
\u9CA5\u9C23
\u9CCF\u9C25
\u4CA2\u9C27
\u9CCE\u9C28
\u9CD0\u9C29
\u9CCD\u9C2D
\u9CC1\u9C2E
\u9CA2\u9C31
\u9CCC\u9C32
\u9CD3\u9C33
\u9CD8\u9C35
\u9CA6\u9C37
\u9CA3\u9C39
\u9CB9\u9C3A
\u9CD7\u9C3B
\u9CDB\u9C3C
\u9CD4\u9C3E
\u9CC9\u9C42
\u9CD9\u9C45
\u9CD5\u9C48
\u9CD6\u9C49
\u9CDF\u9C52
\u9CDD\u9C54
\u9CDC\u9C56
\u9CDE\u9C57
\u9C9F\u9C58
\u9CBC\u9C5D
\u9C8E\u9C5F
\u9C99\u9C60
\u9CE3\u9C63
\u9CE1\u9C64
\u9CE2\u9C67
\u9CBF\u9C68
\u9C9A\u9C6D
\u9CE0\u9C6F
\u9C88\u9C78
\u9CA1\u9C7A
\u9E1F\u9CE5
\u51EB\u9CE7
\u9E20\u9CE9
\u9E24\u9CF2
\u51E4\u9CF3
\u9E23\u9CF4
\u9E22\u9CF6
\u4D13\u9CFE
\u9E29\u9D06
\u9E28\u9D07
\u9E26\u9D09
\u9E30\u9D12
\u9E35\u9D15
\u9E33\u9D1B
\u9E32\u9D1D
\u9E2E\u9D1E
\u9E31\u9D1F
\u9E2A\u9D23
\u9E2F\u9D26
\u9E2D\u9D28
\u9E38\u9D2F
\u9E39\u9D30
\u9E3B\u9D34
\u4D15\u9D37
\u9E3F\u9D3B
\u9E3D\u9D3F
\u4D14\u9D41
\u9E3A\u9D42
\u9E3C\u9D43
\u9E40\u9D50
\u9E43\u9D51
\u9E46\u9D52
\u9E41\u9D53
\u9E48\u9D5C
\u9E45\u9D5D
\u9E44\u9D60
\u9E49\u9D61
\u9E4C\u9D6A
\u9E4F\u9D6C
\u9E50\u9D6E
\u9E4E\u9D6F
\u9E4A\u9D72
\u9E53\u9D77
\u9E4D\u9D7E
\u4D16\u9D84
\u9E2B\u9D87
\u9E51\u9D89
\u9E52\u9D8A
\u9E4B\u9D93
\u9E59\u9D96
\u9E55\u9D98
\u9E57\u9D9A
\u9E56\u9DA1
\u9E5B\u9DA5
\u9E5C\u9DA9
\u4D17\u9DAA
\u9E27\u9DAC
\u83BA\u9DAF
\u9E5F\u9DB2
\u9E64\u9DB4
\u9E60\u9DB9
\u9E61\u9DBA
\u9E58\u9DBB
\u9E63\u9DBC
\u9E5A\u9DC0
\u9E62\u9DC1
\u9E5E\u9DC2
\u4D18\u9DC9\u9DC8
\u9E5D\u9DCA
\u9E67\u9DD3
\u9E65\u9DD6
\u9E25\u9DD7
\u9E37\u9DD9
\u9E68\u9DDA
\u9E36\u9DE5
\u9E6A\u9DE6
\u9E54\u9DEB
\u9E69\u9DEF
\u9E6B\u9DF2
\u9E47\u9DF3
\u9E6C\u9DF8
\u9E70\u9DF9
\u9E6D\u9DFA
\u9E34\u9DFD
\u4D19\u9E0A\u9DFF
\u3D89\u9E02
\u9E6F\u9E07
\u9E71\u9E0C
\u9E72\u9E0F
\u9E2C\u9E15
\u9E74\u9E18
\u9E66\u9E1A
\u9E73\u9E1B
\u9E42\u9E1D
\u9E3E\u9E1E
\u5364\u9E75
\u54B8<\u9E79
\u9E7E\u9E7A
\u76D0\u9E7D
\u4E3D\u9E97
\u9EA6\u9EA5
\u9EB8\u9EA9
\u66F2<\u9EAF
\u9EB9>\u9EB4
\u9762<\u9EB5
\u9EC4\u9EC3
\u9EC9\u9ECC
\u70B9\u9EDE
\u515A<\u9EE8
\u9EEA\u9EF2
\u9EE1\u9EF6
\u9EE9\u9EF7
\u9EFE\u9EFD
\u9F0B\u9EFF
\u9F0D\u9F09
\u9F39\u9F34
\u9F50\u9F4A
\u658B\u9F4B
\u8D4D\u9F4E
\u9F51\u9F4F
\u9F7F\u9F52
\u9F80\u9F54
\u9F81\u9F55
\u9F82\u9F57
\u9F85\u9F59
\u9F87\u9F5C
\u9F83\u9F5F
\u9F86\u9F60
\u9F84\u9F61
\u51FA<\u9F63
\u9F88\u9F66
\u9F8A\u9F6A
\u9F89\u9F6C
\u9F8B\u9F72
\u816D\u9F76
\u9F8C\u9F77
\u9F99\u9F8D
\u5390\u9F8E
\u5E9E\u9F90
\u4DAE\u9F91
\u9F9A\u9F94
\u9F9B\u9F95
\u9F9F\u9F9C
\u4724\u9FC1
\u4CA4\u9FD0
\u9FD3\u9FD2`;

  // ../lossless-simplified-chinese/index.js
  var mapping = sc2tc.split(/\r?\n/);
  mapping.push("\u201C\u300C");
  mapping.push("\u2018\u300E");
  mapping.push("\u201D\u300D");
  mapping.push("\u2019\u300F");
  var overwrite = {
    "\u83B7": "\u7372\u7A6B",
    "\u7F30": "\u7E6E\u97C1",
    "\u8D5D": "\u8D0B\u8D17",
    "\u4F2A": "\u50DE\u507D",
    "\u6C47": "\u532F\u5F59",
    "\u575B": "\u58C7\u7F48",
    "\u53F0": "\u81FA\u98B1\u6AAF",
    "\u51B2": "\u6C96\u885D",
    "\u7877": "\u7906\u9E7C",
    "\u7EF1": "\u7DD4\u979D",
    "\u810F": "\u81DF\u9AD2",
    "\u8C2B": "\u8B2D\u8B7E",
    "\u94A9": "\u920E\u9264",
    "\u9FED": "\u9268\u9448",
    "\u9508": "\u92B9\u93FD",
    "\u95F2": "\u9591\u9592",
    "\u987B": "\u9808\u9B1A",
    "\u9CC4": "\u9C10\u9C77"
  };
  var t2s = {};
  var t2s_unsafe1 = {};
  var s2t = {};
  mapping.forEach((line, idx2) => {
    const r = line.match(/(.)(<?)(.+)/u);
    if (!r)
      throw "wrong data format " + idx2;
    let [m4, sc, op, tc] = r;
    let oldtc = tc;
    if (overwrite[sc])
      tc = overwrite[sc];
    if (op == "") {
      if (tc.length == 1) {
        t2s[tc] = sc;
      } else {
        if (tc[0] == ">") {
          t2s_unsafe1[tc.substring(1)] = sc;
        } else {
          t2s[tc[0]] = sc;
          tc = tc.substring(1);
          for (let i = 0; i < tc.length; i++) {
            const cp = tc.codePointAt(i);
            if (!cp)
              break;
            t2s_unsafe1[String.fromCodePoint(cp)] = sc;
          }
        }
      }
    } else {
      if (tc.length == 1) {
        t2s_unsafe1[tc] = sc;
      } else {
        while (tc && tc[0] !== ">") {
          const ch = String.fromCodePoint(tc.codePointAt(0));
          t2s_unsafe1[ch] = sc;
          tc = tc.substring(ch.length);
        }
      }
    }
    tc = oldtc.replace(/\>/g, "");
    if (op == "<") {
      s2t[sc] = tc.replace(sc, "") + sc;
    } else
      s2t[sc] = tc;
  });
  var fromSim = (s, mode = 1) => {
    let out = "", i = 0;
    if (!mode || !s)
      return s;
    while (i < s.length && s[i]) {
      const cp = s.codePointAt(i);
      const ucs4 = String.fromCodePoint(cp);
      if (!ucs4)
        break;
      let tc = s2t[ucs4];
      if (!tc) {
        out += ucs4;
      } else if (mode == 1 && !tc.codePointAt(1)) {
        out += tc;
      } else if (mode == 2) {
        out += String.fromCodePoint(tc.codePointAt(0));
      } else if (mode == 3) {
        if (tc.codePointAt(1))
          out += "[" + tc + "]";
        else
          out += tc;
      } else
        out += ucs4;
      i++;
      if (cp > 65535)
        i++;
    }
    return out;
  };

  // ../ptk/fts/inverted.ts
  var Inverted = class {
    constructor(section, postingStart) {
      this.words = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      this.bmpwithposting = unpackIntDelta(section.shift());
      this.tokenlinepos = unpackIntDelta(section.shift());
      this.postings = [];
      this.postingStart = postingStart;
      this.bmppostingcount = 0;
      for (let i = 1; i < 65536; i++) {
        if (this.bmpwithposting[i])
          this.bmppostingcount++;
      }
    }
    nPostingOf(s) {
      const out = [];
      const tokens = tokenize(s);
      for (let i = 0; i < tokens.length; i++) {
        const { type, text: text2 } = tokens[i];
        let at = -1;
        if (type == 49 /* CJK_BMP */) {
          const cp = text2.charCodeAt(0);
          at = bsearchNumber(this.bmpwithposting, cp);
          if (this.bmpwithposting[at] !== cp) {
            const cpsim = fromSim(text2).charCodeAt(0);
            at = bsearchNumber(this.bmpwithposting, cpsim);
            if (this.bmpwithposting[at] !== cpsim)
              continue;
          }
        } else if (type >= 16 /* SEARCHABLE */) {
          if (~at)
            at += this.bmppostingcount;
          else {
            let at2 = this.words.find(s);
            if (~at2)
              at = at2 + this.bmppostingcount;
          }
          ;
        }
        out.push(at);
      }
      return out;
    }
  };

  // ../ptk/fts/posting.ts
  var counter = 0;
  var maxspeed = 0;
  var plFind = (arr, v, p = 0) => {
    let speed = 1;
    let p2 = p;
    while (p2 < arr.length) {
      if (v > arr[p2]) {
        speed++;
        if (speed > maxspeed)
          maxspeed = speed;
      } else {
        if (speed <= 1)
          break;
        p2 -= speed;
        speed = 1;
      }
      p2 += speed;
      counter++;
    }
    return p2;
  };
  var plAnd = (pl1, pl2, dist = 1) => {
    let p2 = 0, c2 = 0;
    if (!pl1 || !pl2 || pl1.length == 0 || pl2.length == 0)
      return [];
    const sz = Math.min(pl1.length, pl2.length);
    let out = [];
    for (let p1 = 0; p1 < pl1.length; p1++) {
      let v1 = pl1[p1] + dist;
      let v2 = pl2[p2];
      while (v1 > v2 && p2 < pl2.length)
        v2 = pl2[++p2];
      if (v1 === v2) {
        out[c2++] = v1 - dist;
      }
    }
    return out.slice(0, c2);
  };
  var plCount = (pl, plgroup) => {
    let p = 0, start = 0, end = 0;
    const out = [];
    for (let i = 0; i < plgroup.length; i++) {
      const [from, to] = plgroup[i];
      start = p;
      if (from > pl[p])
        start = plFind(pl, from, p);
      end = start;
      while (pl[end] < to && end < pl.length)
        end++;
      if (end > start) {
        out[i] = end - start;
      }
      p = end;
    }
    for (let i = 0; i < out.length; i++) {
      if (typeof out[i] !== "number")
        out[i] = 0;
    }
    return out;
  };
  var plRanges = (posting, ranges) => {
    if (!ranges || !ranges.length)
      return posting;
    const out = [];
    let j2 = 0, r = ranges[j2];
    for (let i = 0; i < posting.length; i++) {
      const p = posting[i];
      if (p >= r[0] && r[1] >= p)
        out.push(p);
      while (p > r[0] && j2 < ranges.length - 1) {
        r = ranges[++j2];
      }
      if (j2 >= ranges.length)
        break;
    }
    return out;
  };
  var plContain = (posting, ltp, withHits = false) => {
    let p, i = 0, j2 = 0;
    const lines = [], hits = [];
    while (i < posting.length) {
      let p2 = posting[i];
      let at = bsearchNumber(ltp, p2);
      if (at >= 0 && at < ltp.length) {
        if (lines[lines.length - 1] !== at) {
          lines.push(at);
        }
        if (withHits) {
          if (!hits[lines.length - 1])
            hits[lines.length - 1] = [];
          hits[lines.length - 1].push(p2 - ltp[at - 1]);
        }
        p2 = posting[i];
      }
      i++;
    }
    return [lines, hits];
  };

  // ../node_modules/diff/lib/index.mjs
  function Diff() {
  }
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = options.callback;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      this.options = options;
      var self = this;
      function done(value) {
        if (callback) {
          setTimeout(function() {
            callback(void 0, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      }
      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length, oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      if (options.maxEditLength) {
        maxEditLength = Math.min(maxEditLength, options.maxEditLength);
      }
      var bestPath = [{
        newPos: -1,
        components: []
      }];
      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      }
      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;
          var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
          if (addPath) {
            bestPath[diagonalPath - 1] = void 0;
          }
          var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
          if (!canAdd && !canRemove) {
            bestPath[diagonalPath] = void 0;
            continue;
          }
          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, void 0, true);
          } else {
            basePath = addPath;
            basePath.newPos++;
            self.pushComponent(basePath.components, true, void 0);
          }
          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);
          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            bestPath[diagonalPath] = basePath;
          }
        }
        editLength++;
      }
      if (callback) {
        (function exec() {
          setTimeout(function() {
            if (editLength > maxEditLength) {
              return callback();
            }
            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();
          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];
      if (last && last.added === added && last.removed === removed) {
        components[components.length - 1] = {
          count: last.count + 1,
          added,
          removed
        };
      } else {
        components.push({
          count: 1,
          added,
          removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }
      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }
      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }
      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize2(value) {
      return value.split("");
    },
    join: function join(chars) {
      return chars.join("");
    }
  };
  function buildValues(diff2, components, newString, oldString, useLongestToken) {
    var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];
      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = diff2.join(value);
        } else {
          component.value = diff2.join(newString.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff2.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    }
    var lastComponent = components[componentLen - 1];
    if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff2.equals("", lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }
    return components;
  }
  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }
  var characterDiff = new Diff();
  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();
  wordDiff.equals = function(left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }
    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };
  wordDiff.tokenize = function(value) {
    var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
    for (var i = 0; i < tokens.length - 1; i++) {
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }
    return tokens;
  };
  var lineDiff = new Diff();
  lineDiff.tokenize = function(value) {
    var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    }
    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];
      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }
        retLines.push(line);
      }
    }
    return retLines;
  };
  var sentenceDiff = new Diff();
  sentenceDiff.tokenize = function(value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var cssDiff = new Diff();
  cssDiff.tokenize = function(value) {
    return value.split(/([{}:;,]|\s+)/);
  };
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff();
  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;
  jsonDiff.castInput = function(value) {
    var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
      return typeof v === "undefined" ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
  };
  jsonDiff.equals = function(left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
  };
  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    if (replacer) {
      obj = replacer(key, obj);
    }
    var i;
    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }
    var canonicalizedObj;
    if ("[object Array]" === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);
      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }
      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }
    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }
    if (_typeof(obj) === "object" && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [], _key;
      for (_key in obj) {
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }
      sortedKeys.sort();
      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }
      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }
    return canonicalizedObj;
  }
  var arrayDiff = new Diff();
  arrayDiff.tokenize = function(value) {
    return value.slice();
  };
  arrayDiff.join = arrayDiff.removeEmpty = function(value) {
    return value;
  };

  // ../ptk/platform/chromefs.ts
  var m = typeof navigator !== "undefined" && navigator.userAgent.match(/Chrome\/(\d+)/);
  var supprtedBrowser = m && parseInt(m[1]) >= 86;

  // ../ptk/basket/pool.ts
  var _pool = {};
  var poolGet = (name2) => _pool[name2];
  var poolAdd = (name2, inst) => _pool[name2] = inst;
  var poolDel = (name2) => delete _pool[name2];
  var poolGetAll = () => {
    const out = [];
    for (const name2 in _pool) {
      out.push(_pool[name2]);
    }
    return out;
  };
  var poolParallelPitakas = (ptk) => {
    let align = ptk.attributes?.align;
    if (!align)
      align = ptk.name.replace(/\-[^-]+$/, "");
    const out = [];
    for (const n in _pool) {
      if (_pool[n].attributes.align == align || n.replace(/\-[^-]+$/, "") == align) {
        if (ptk.name !== _pool[n].name)
          out.push(n);
      }
    }
    return out;
  };

  // ../ptk/linebase/loadpage.ts
  var pagefilename = (page) => page.toString().padStart(3, "0") + ".js";
  var makePageURI = (folder, page) => {
    const fn = folder + "/" + pagefilename(page);
    return fn;
  };
  async function loadNodeJs(page) {
    let fn = makePageURI(this.name, page);
    if (!fs.existsSync(fn) && fs.existsSync("../" + this.name + "/" + this.name)) {
      fn = makePageURI("../" + this.name + "/" + this.name, page);
    }
    try {
      const data = await fs.promises.readFile(fn, "utf8");
      this.setPage(page, ...parseJsonp(data));
    } catch (e) {
      console.error("readFile failed,", fn, e);
    }
  }
  async function loadRemoteZip(page) {
    throw "not implement yet";
  }
  async function loadInMemoryZipStore(page) {
    let content;
    const fn = this.name + "/" + pagefilename(page);
    for (let i = 0; i < this.zipstore.files.length; i++) {
      if (this.zipstore.files[i].name == fn) {
        content = new TextDecoder().decode(this.zipstore.files[i].content);
      }
    }
    content && this.setPage(page, ...parseJsonp(content));
  }
  async function loadFetch(page) {
    if (this.zip) {
      const data = await this.zip.readTextFile(this.name + "/" + pagefilename(page));
      this.setPage(page, ...parseJsonp(data));
      return;
    }
    const uri = makePageURI(this.name, page);
    try {
      const res = await fetch(uri);
      const text2 = await res.text();
      const arr = parseJsonp(text2);
      this.setPage(page, ...arr);
    } catch (e) {
      this.failed = true;
    }
  }
  var jsonp = (page, header, _payload) => {
    const ptk = poolGet(header.name);
    ptk.setPage(page, header, _payload);
  };
  function isLoaded(page) {
    return page == 0 ? this.pagestarts.length : this._pages[page - 1];
  }
  async function loadJSONP(page) {
    if (isLoaded.call(this, page))
      return;
    if (!typeof window.jsonp !== "function") {
      window.jsonp = jsonp;
    }
    let tried = 0, timer;
    const that = this;
    try {
      const status = await loadScript(makePageURI(that.name, page), () => {
        if (isLoaded.call(that, page))
          return true;
        timer = setInterval(() => {
          tried++;
          if (tried > 10 || isLoaded.call(that, page)) {
            if (tried > 10)
              console.error("failed loading page", page, that.name);
            clearInterval(timer);
          }
        }, 10);
      });
    } catch (e) {
      this.failed = true;
    }
  }

  // ../ptk/linebase/linebase.ts
  var instancecount = 0;
  var combineRange = (range) => {
    const combined = [];
    let from = 0;
    range = range.filter((it) => !!it);
    if (Array.isArray(range[0]) && range.length) {
      range.sort((a, b) => a - b);
      from = range[0][0];
      for (let i = 1; i < range.length; i++) {
        if (range[i][0] > range[i - 1][1]) {
          combined.push([from, range[i - 1][1]]);
          from = range[i][0];
        }
      }
      if (range[range.length - 1][1] > from)
        combined.push([from, range[range.length - 1][1]]);
    } else {
      return range;
    }
    return combined;
  };
  var LineBase = class {
    constructor(opts = {}) {
      this.pageOfLine = (line) => {
        if (line >= this.pagestarts[this.pagestarts.length - 1])
          return this.pagestarts.length - 1;
        return bsearchNumber(this.pagestarts, line, true);
      };
      this.stamp = ++instancecount;
      this._pages = [];
      this._lineoffsets = [];
      this.pagestarts = [];
      this.header = { starts: [], sectionnames: [], sectionstarts: [], sectiontypes: [] };
      this.name = opts.name || "";
      this.zip = opts.zip;
      this.zipstore = opts.zipstore;
      this.payload;
      let protocol = typeof chrome !== "undefined" ? "chrome-extension:" : "";
      this._loader = () => {
      };
      if (typeof window !== "undefined") {
        protocol = window.location.protocol;
      }
      if (this.zipstore) {
        this._loader = loadInMemoryZipStore;
      } else if (protocol === "http:" || protocol === "https:" || protocol === "chrome-extension:") {
        this._loader = loadFetch;
      } else if (protocol == "file:") {
        this._loader = loadJSONP;
      } else {
        this._loader = this.zip ? loadRemoteZip : loadNodeJs;
      }
      this.failed = false;
      if (!opts.inmemory) {
        this._loader.call(this, 0);
      }
    }
    async loadAll() {
      await this.loadLines([[0, this.pagestarts[this.pagestarts.length - 1]]]);
    }
    inMem() {
      return this.inmemory || this.zipstore;
    }
    pageOfRange([from, to]) {
      if (from < 0)
        return [];
      if (from > to)
        to += from;
      const cstart = this.pageOfLine(from);
      const cend = this.pageOfLine(to);
      const notloaded = [];
      for (let i = cstart; i < cend + 1; i++) {
        if (!this._pages[i])
          notloaded.push(i);
      }
      return notloaded;
    }
    async loadLines(_range) {
      const that = this;
      let toload = [], range = combineRange(_range);
      const notincache = {};
      for (let i = 0; i < range.length; i++) {
        if (Array.isArray(range[i])) {
          const [from, to] = range[i];
          toload.push(...this.pageOfRange([from, to]));
        } else {
          notincache[this.pageOfLine(range[i])] = true;
        }
      }
      toload.push(...Object.keys(notincache).map((it) => parseInt(it)));
      toload = unique(toload.filter((it) => !that._pages[it]));
      const jobs = [];
      for (let i = 0; i < toload.length; i++) {
        jobs.push(this._loader.call(this, toload[i] + 1));
      }
      await Promise.all(jobs);
    }
    lineCount() {
      return this.header.starts[this.header.starts.length - 1];
    }
    getPageLineOffset(page, line) {
      if (page > this._pages.length)
        return 0;
      if (line == 0)
        return 0;
      if (line > this._lineoffsets[page].length)
        return this._pages[page].length;
      return this._lineoffsets[page][line - 1];
    }
    getLines(nlines) {
      if (!nlines.length)
        return [];
      let out = Array();
      let pline = nlines[0];
      let start = pline;
      for (let i = 1; i < nlines.length; i++) {
        if (pline + 1 !== nlines[i]) {
          out = out.concat(this.slice(start, i));
          start = nlines[i];
        }
        pline = nlines[i];
      }
      out = out.concat(this.slice(start, pline + 1));
      return out;
    }
    getLine(nline) {
      return this.slice(nline, nline + 1)[0];
    }
    slice(nline, to) {
      if (!to)
        to = nline + 1;
      const p1 = this.pageOfLine(nline, this.pagestarts);
      const p2 = this.pageOfLine(to, this.pagestarts);
      let out = "";
      for (let i = p1; i <= p2; i++) {
        if (!this._pages[i])
          return out.split("\n");
        if (i == p1 || i == p2) {
          let slicefrom = this.getPageLineOffset(i, nline - (p1 > 0 ? this.pagestarts[p1 - 1] : 0));
          if (nline)
            slicefrom++;
          const sliceto = this.getPageLineOffset(i, to - (p2 > 0 ? this.pagestarts[p2 - 1] : 0));
          if (p2 > p1) {
            if (i == p1)
              out = this._pages[i].slice(slicefrom);
            else
              out += (out ? "\n" : "") + this._pages[i].slice(0, sliceto);
          } else {
            out += this._pages[i].slice(slicefrom, sliceto);
          }
        } else
          out += "\n" + this._pages[i];
      }
      return out.split("\n");
    }
    setPage(page, header, payload) {
      if (page == 0) {
        this.header = header;
        this.name = this.header.name;
        this.pagestarts = header.starts;
        this.payload = payload || "nopayload";
        this.opened = true;
      } else if (page > 0) {
        this._pages[page - 1] = payload;
        this._lineoffsets[page - 1] = lineBreaksOffset(payload);
      }
    }
    isReady() {
      if (this.payload)
        return true;
      const that = this;
      let timer = 0;
      return new Promise((resolve) => {
        timer = setInterval(() => {
          if (that.failed)
            resolve(false);
          else if (that.payload) {
            clearInterval(timer);
            resolve(true);
          }
        }, 50);
      });
    }
    getSection(name2) {
      const [from, to] = this.sectionRange(name2);
      if (from == to)
        return [];
      return this.slice(from, to);
    }
    sectionRange(sname) {
      const notfound = [0, 0];
      const { sectionnames, sectionstarts } = this.header;
      if (!sectionnames || !sectionnames.length)
        return notfound;
      for (let i = 0; i < sectionnames.length; i++) {
        const name2 = sectionnames[i];
        if (sname && name2 == sname) {
          const endoflastsection = i < sectionstarts.length - 1 ? sectionstarts[i + 1] : this.pagestarts[this.pagestarts.length - 1];
          return [sectionstarts[i], endoflastsection];
        }
      }
      return notfound;
    }
  };

  // ../ptk/compiler/error.ts
  var MAX_VERROR = 3;
  var VError2 = /* @__PURE__ */ ((VError3) => {
    VError3["NoKeys"] = "NO_KEYS";
    VError3["NoKey"] = "NO_KEY";
    VError3["NotANumber"] = "NOT_NUMBER";
    VError3["Empty"] = "EMPTY_BUFFER";
    VError3["Pattern"] = "PATTERN_MISMATCH";
    VError3["NotUnique"] = "NOT_UNIQUE";
    VError3["Mandatory"] = "MANDANTORY";
    VError3["TypeRedef"] = "TYPE_REDEF";
    VError3["MissingTagName"] = "MISSING_TAGNAME";
    VError3["UnknownType"] = "UNKNOWN_TYPE";
    VError3["ExcessiveField"] = "EXCESSIVE_FIELD";
    VError3["PtkNamed"] = "PTK_NAMED";
    VError3["PtkNoName"] = "PTK_NONAME";
    VError3["RedefineChunkTag"] = "REDEFINE_CHUNK_CHUNK_TAG";
    VError3["InvalidLinkAddress"] = "INVALID_LINK_ADDRESS";
    return VError3;
  })(VError2 || {});
  var VErrorMessage = {
    ["NO_KEYS" /* NoKeys */]: "missing keys $1",
    ["NO_KEY" /* NoKey */]: "missing key $1 for string",
    ["NOT_NUMBER" /* NotANumber */]: "not a number",
    ["PATTERN_MISMATCH" /* Pattern */]: "pattern mismatch",
    ["NOT_UNIQUE" /* NotUnique */]: "not unique",
    ["MANDANTORY" /* Mandatory */]: "mandatory field",
    ["TYPE_REDEF" /* TypeRedef */]: "redefine type",
    [VError2.MissingTypedef]: "mssing typedef",
    ["EXCESSIVE_FIELD" /* ExcessiveField */]: "excessive field",
    ["UNKNOWN_TYPE" /* UnknownType */]: "unknown type",
    ["PTK_NAMED" /* PtkNamed */]: "ptk already named",
    ["PTK_NONAME" /* PtkNoName */]: "ptk not named",
    ["EMPTY_BUFFER" /* Empty */]: "Empty buffer"
  };

  // ../ptk/compiler/basefield.ts
  var Field = class {
    constructor(name2, def) {
      this.name = name2;
      this.foreign = def.foreign || "";
      this.pattern = def.pattern || null;
      this.keys = def.keys || [];
      this.unique = null;
      this.optional = true;
      this.caption = "";
      this.type = def.type || "string";
      this.values = [];
      this.sortedIndex;
      for (let n in def) {
        if (!this.hasOwnProperty(n)) {
          console.log("unknown defining attr", n, "of", name2, def);
        }
        this[n] = def[n];
      }
      if (def.unique)
        this.unique = {};
    }
    resetUnique() {
      if (this.unique)
        this.unique = {};
    }
    validate(value, line) {
      if (this.unique) {
        if (this.unique[value]) {
          return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
        } else {
          this.unique[value] = line;
        }
      }
      return [0, value];
    }
    find() {
      return -1;
    }
  };

  // ../ptk/lineview/interfaces.ts
  var ACTIONPAGESIZE = 5;

  // ../ptk/basket/address.ts
  var BRANCH_SEP = ".";
  var parseAction = (action) => {
    const branches = action.split(BRANCH_SEP);
    const out = [];
    for (let i = 0; i < branches.length; i++) {
      const m1 = branches[i].match(/^([a-z_\-]+)#([a-z\d_-]+)$/);
      const m22 = branches[i].match(/^([a-z_\-]+)(\d+[a-z\d_-]+)$/);
      const m32 = branches[i].match(/^([a-z_\-]+)(\d*)$/);
      if (m1) {
        out.push([m1[1], m1[2]]);
      } else if (m22) {
        out.push([m22[1], m22[2]]);
      } else if (m32) {
        out.push([m32[1], m32[2]]);
      } else {
        const at = branches[i].indexOf("#");
        if (at > 0) {
          out.push([branches[i].slice(0, at), branches[i].slice(at + 1)]);
        } else {
          out.push(["ck", branches[i]]);
        }
      }
    }
    return out;
  };
  var makeAddress = (ptkname = "", action = "", from = 0, till = 0, lineoff = -1) => {
    return (ptkname ? ptkname + ":" : "") + action + (from ? ">" + from : "") + (till ? "<" + till : "") + (lineoff > 0 ? ":" + lineoff : "");
  };
  var parseAddress = (address) => {
    let m0, ptkname = "", action = "", from = "", till = "", highlightline = "";
    let m4 = address.match(PTK_ACTION_FROMTILL);
    if (m4) {
      [m0, ptkname, action, from, till, highlightline] = m4;
    } else {
      m4 = address.match(PTK_FROMTILL);
      if (m4) {
        [m0, ptkname, from, till, highlightline] = m4;
      } else {
        m4 = address.match(FROMTILL);
        if (m4)
          [m0, from, till, highlightline] = m4;
        else
          return null;
      }
    }
    from = (from || "").slice(1);
    till = (till || "").slice(1);
    highlightline = (highlightline || "").slice(1);
    if (!from && !till && highlightline) {
      if (highlightline > ACTIONPAGESIZE) {
        from = highlightline - Math.floor(ACTIONPAGESIZE / 2);
        till = from + ACTIONPAGESIZE;
      }
    }
    ptkname = ptkname || "";
    ptkname = ptkname.slice(0, ptkname.length - 1);
    return {
      ptkname,
      action,
      from: Math.abs(parseInt(from)) || 0,
      till: Math.abs(parseInt(till)) || 0,
      highlightline: Math.abs(parseInt(highlightline)) || -1
    };
  };
  function rangeOfElementId(eleidarr) {
    const out = [], ptk = this;
    let from = 0, to = ptk.header.eot;
    for (let i = 0; i < eleidarr.length; i++) {
      const [ele, id] = eleidarr[i];
      if (ptk.defines[ele]) {
        const idtype = ptk.defines[ele].fields?.id;
        const _id = idtype?.type == "number" ? parseInt(id) : id;
        const startfrom = bsearchNumber(ptk.defines[ele].linepos, from);
        const at = idtype.values.indexOf(_id, startfrom);
        const first = ptk.defines[ele].linepos[at] || ptk.defines[ele].linepos[0];
        const last = ptk.defines[ele].linepos[at + 1] || ptk.header.eot;
        if (first >= from && last <= to) {
          from = first;
          to = last;
          out.push([first, last]);
        } else {
          out.push([0, 0]);
        }
      } else {
        const at = ptk.defines.bk?.fields.id.values.indexOf(ele);
        const at2 = at == -1 ? ptk.defines.ak?.fields.id.values.indexOf(ele) : -1;
        if (i == 0 && (~at || ~at2)) {
          const first = ptk.defines.bk.linepos[at] || ptk.defines.ak.linepos[at2];
          let last = ptk.defines.bk.linepos[at + 1] || ptk.defines.ak.linepos[at2 + 1];
          if (!last)
            last = ptk.header.eot;
          out.push([first, last]);
          from = first;
        }
      }
    }
    return out;
  }
  function rangeOfAddress(address) {
    let addr = address;
    if (typeof address == "string") {
      addr = parseAddress(address);
    }
    const { from, till, action, highlightline } = addr;
    const eleid = parseAction(action);
    const ranges = rangeOfElementId.call(this, eleid);
    if (ranges.length) {
      const [first, last] = ranges[ranges.length - 1];
      return [first, last, from, till, highlightline];
    } else {
      const end = till ? till : from + 1;
      return [0, end, from, till, highlightline];
    }
  }
  async function fetchAddress(eleid) {
    const r = rangeOfAddress.call(this, eleid);
    if (!r || r[0] == r[1])
      return [];
    await this.loadLines([r]);
    const lines = this.slice(r[0], r[1]);
    return lines;
  }
  function innertext(address) {
    let addr = address;
    if (typeof address == "string") {
      addr = parseAddress(address);
    }
    const { action } = addr;
    const defines = this.defines;
    const eleidarr = parseAction(action);
    const out = [];
    for (let i = 0; i < eleidarr.length; i++) {
      const [ele, id] = eleidarr[i];
      if (!defines[ele] || !defines[ele].fields.id)
        return "";
      const at = defines[ele].fields.id.values.indexOf(id);
      out.push(defines[ele]?.innertext?.get(at));
    }
    return out.join("/");
  }
  function makeElementId(ele, id) {
    return ele + (!isNaN(parseInt(id)) ? "" : "#") + id;
  }

  // ../ptk/compiler/linkfield.ts
  var LinkField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.invertlinks = {};
      this.type = "link";
      this.count = 0;
    }
    validate(value, line) {
      const addr = parseAddress(value);
      const act = parseAction(addr.action);
      if (!this.invertlinks[addr.ptkname])
        this.invertlinks[addr.ptkname] = {};
      let invertlinks = this.invertlinks[addr.ptkname];
      if (act.length !== 2) {
      }
      for (let i = 0; i < act.length; i++) {
        let [ele, id] = act[i];
        if (i == 0 && !act[i][1]) {
          ele = "bk";
          id = act[i][0];
        }
        const eleid = makeElementId(ele, id);
        if (i == act.length - 1) {
          if (!invertlinks[ele])
            invertlinks[ele] = {};
          if (!invertlinks[ele][id])
            invertlinks[ele][id] = [];
          invertlinks[ele][id].push(this.count);
          this.count++;
        } else {
          if (!invertlinks[eleid]) {
            invertlinks[eleid] = {};
          }
          invertlinks = invertlinks[eleid];
        }
      }
      return [0, value];
    }
    serializeLinks(bklinks) {
      const out = [];
      for (let bk in bklinks) {
        const links = bklinks[bk];
        for (let targettag in links) {
          const arr = [];
          for (let id in links[targettag]) {
            arr.push([id, links[targettag][id]]);
          }
          arr.sort(alphabetically0);
          const chunks = arr.map((it) => it[0]);
          const idxarr = arr.map((it) => it[1]);
          out.push(bk);
          out.push(targettag);
          out.push(chunks.join(LEMMA_DELIMITER));
          out.push(packInt2d(idxarr));
        }
      }
      return out;
    }
    serialize() {
      const attrs = {};
      let section = [].concat(this.values);
      for (let ptkname in this.invertlinks) {
        const out = this.serializeLinks(this.invertlinks[ptkname]);
        attrs[ptkname] = out.length;
        section = section.concat(out);
      }
      attrs["*"] = this.values.length;
      section.push(JSON.stringify(attrs));
      return section;
    }
    deserialize(section, ptk) {
      const attrs = JSON.parse(section.pop());
      const valuelen = attrs["*"];
      let offset = 0;
      for (let db in attrs) {
        if (db == "*")
          continue;
        const datalen = attrs[db];
        while (offset < datalen) {
          const bk = section[valuelen + offset];
          const targettagname = section[valuelen + offset + 1];
          const chunks = new StringArray(section[valuelen + offset + 2], { sep: LEMMA_DELIMITER });
          const idxarr = unpackInt2d(section[valuelen + offset + 3]);
          ptk.addBacklinks(this.name, db, bk, targettagname, chunks, idxarr);
          offset += 4;
        }
      }
      const values = section.slice(0, valuelen);
      section.length = 0;
      return values;
    }
  };

  // ../ptk/compiler/keyfield.ts
  var KeyField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "key";
    }
    validate(value, line) {
      const keys = this.keys;
      if (!keys)
        return ["NO_KEYS" /* NoKeys */, value];
      if (!value) {
        return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
      }
      const at = bsearch(keys, value);
      if (keys[at] !== value) {
        return ["NO_KEY" /* NoKey */, []];
      } else {
        return [0, at];
      }
    }
  };

  // ../ptk/compiler/keysfield.ts
  var KeysField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "keys";
    }
    validate(value, line) {
      const keys = this.keys;
      if (!keys)
        return ["NO_KEYS" /* NoKeys */, value];
      if (!value) {
        return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
      }
      const items = value.split(",").map((it) => {
        if (!it)
          return 0;
        const at = bsearch(keys, it);
        if (keys[at] === it) {
          return at;
        } else {
          return -1;
        }
      }).filter((it) => !!it).sort((a, b) => a - b);
      if (items.filter((it) => it === -1).length) {
        return ["NO_KEY" /* NoKey */, []];
      } else {
        return [0, items];
      }
    }
  };

  // ../ptk/compiler/textfield.ts
  var TextField = class extends Field {
    //multiline 
    constructor(name2, def) {
      super(name2, def);
      this.type = "text";
    }
  };

  // ../ptk/compiler/numberfield.ts
  var NumberField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "number";
      this.name = name2;
      this.sortedIndex = null;
    }
    _sort() {
      [this.values, this.sortedIndex] = sortNumberArray(this.values);
    }
    find(value) {
      if (!this.values.length)
        return -1;
      if (!this.sortedIndex)
        this._sort();
      const at = bsearch(this.values, value);
      return this.values[at] == value ? this.sortedIndex[at] : -1;
    }
    validate(value, line) {
      const n = parseInt(value);
      if (n.toString() !== value && value.length) {
        return ["NOT_NUMBER" /* NotANumber */, line];
      }
      if (this.pattern && !value.match(this.pattern)) {
        return ["PATTERN_MISMATCH" /* Pattern */, 0];
      }
      if (this.unique && n >= 0) {
        if (this.unique[value]) {
          return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
        } else {
          this.unique[value] = line;
        }
      }
      return [0, parseInt(value)];
    }
  };

  // ../ptk/compiler/numbersfield.ts
  var NumbersField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "numbers";
    }
    validate(value, line) {
      if (typeof value == "undefined") {
        console.log("undefined", line);
      }
      const items = value.split(",");
      const out = [];
      for (let i = 0; i < items.length; i++) {
        const v = items[i];
        const n = parseInt(items[i]);
        if (n.toString() !== v && v.length) {
          return ["NOT_NUMBER" /* NotANumber */, line];
        }
        if (this.pattern && !v.match(this.pattern)) {
          return ["PATTERN_MISMATCH" /* Pattern */, line];
        }
        out.push(n);
      }
      return [0, out];
    }
  };

  // ../ptk/compiler/groupfield.ts
  var GroupField = class extends Field {
    //multiline 
    constructor(name2, def) {
      super(name2, def);
      this.type = def.type || "range";
      this.ranges = {};
    }
    validate(value, line) {
      if (!value) {
        return [this.optional ? 0 : VError.Mandatory, []];
      }
      if (!this.ranges[value])
        this.ranges[value] = [];
      this.ranges[value].push(line);
      if (isNaN(value)) {
        throw "group index should be numeric";
      }
      return [0, parseInt(value)];
    }
    serialize(out) {
      const keys = Object.keys(this.ranges);
      keys.sort(alphabetically);
      out.push(keys.join(LEMMA_DELIMITER));
      const delta2d = [];
      for (let i = 0; i < keys.length; i++) {
        delta2d.push(this.ranges[keys[i]]);
      }
      out.push(packIntDelta2d(delta2d));
      out.push();
    }
    deserialize(section) {
      const keys = (section.shift() || "").split(LEMMA_DELIMITER);
      const arr = unpackIntDelta2d(section.shift());
      for (let i = 0; i < keys.length; i++) {
        this.ranges[keys[i]] = arr[i];
      }
    }
  };

  // ../ptk/compiler/fielder.ts
  function createField(name2, def, primarykeys, ownkeys) {
    if (typeof def !== "string") {
      return new Field(name2, def);
    }
    let v;
    const m4 = def.match(/([a-z_]+):?([a-z_]*)\/?(.*)/);
    if (!m4) {
      return;
    }
    const typename = m4[1], foreign = m4[2];
    let pat = m4[3], pattern;
    if (pat) {
      const at2 = pat.lastIndexOf("/");
      let regopts = "";
      if (at2 > 0) {
        regopts = pat.slice(at2 + 1);
        pat = pat.slice(0, at2);
      }
      pattern = new RegExp(pat, regopts);
    }
    if (typename === "number")
      v = new NumberField(name2, { pattern, foreign });
    else if (typename === "numbers")
      v = new NumbersField(name2, { pattern, foreign });
    else if (typename === "unique_number")
      v = new NumberField(name2, { pattern, unique: true, optional: false, foreign });
    else if (typename === "unique")
      v = new TextField(name2, { pattern, unique: true, optional: false, foreign });
    else if (typename === "string")
      v = new Field(name2, { pattern, foreign });
    else if (typename === "link")
      v = new LinkField(name2, { pattern, foreign });
    else if (typename === "text")
      v = new TextField(name2, { pattern });
    else if (typename === "key") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new KeyField(name2, { keys, pattern, foreign, optional: false });
    } else if (typename === "keys") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new KeysField(name2, { keys, pattern, foreign });
    } else if (typename === "group") {
      v = new GroupField(name2, { type: typename });
    } else if (typename === "note") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new Field(name2, { type: typename, keys, pattern, foreign });
    } else if (typename === "confer") {
      v = new Field(name2, { type: typename, foreign });
    }
    if (!v)
      v = new Field(name2, {});
    return v;
  }
  function validate_z(offtext, tag) {
    const depth = parseInt(tag.name.slice(1, 2), 36) - 10;
    if (isNaN(depth))
      return;
    if (!(depth == this.prevdepth || depth == this.prevdepth + 1 || depth < this.prevdepth)) {
      const msg = "\u76EE\u5F54\u6DF1\u5EA6\u9519\u8BEF " + this.prevdepth + "+1!=" + depth;
      this.errors.push({ msg, offset: tag.offset, prev: this.prevzline });
    }
    let text2 = offtext.tagText(tag);
    const closebracket = closeBracketOf(text2);
    if (text2.slice(text2.length - 1) == closebracket)
      text2 = text2.slice(1, text2.length - 1);
    const line = this.compiledLine + this.line;
    this.toc.push({ depth, text: text2, key: this.zcount, line });
    this.zcount++;
    this.prevzline = line;
    this.prevdepth = depth;
  }

  // ../ptk/compiler/typedef.ts
  var reservedAttributes = {
    //是指令不是屬性名, 
    caption: true,
    lazy: false,
    key: true,
    field: true,
    text: true,
    type: true
    //name of painter
  };
  var Typedef = class {
    constructor(attrs, tagname, primarykeys, typedefs) {
      this.fields = {};
      this.mandatory = {};
      this.tagname = tagname;
      this.linepos = [];
      this.innertext = [];
      this.typedefs = typedefs;
      for (let aname in attrs) {
        const def = attrs[aname];
        const opts = typeof def == "string" ? def : { optional: false };
        const V = createField(tagname, opts, primarykeys);
        if (V)
          this.fields[aname] = V;
        if (V && !V.optional && !reservedAttributes[aname])
          this.mandatory[aname] = true;
      }
      this.attrs = attrs;
      this.column = "";
      this.count = 0;
      if (this.attrs.resetby) {
        const resettingparents = this.attrs.resetby.split(",");
        for (let i = 0; i < resettingparents.length; i++) {
          const parent = this.typedefs[resettingparents[i]];
          if (parent) {
            if (!parent.attrs.reset) {
              parent.attrs.reset = tagname;
            } else {
              const arr = parent.attrs.reset.split(",");
              arr.push(tagname);
              parent.attrs.reset = unique(arr).join(",");
            }
          } else {
            console.log("not such parent tag", resettingparents[i]);
          }
        }
      }
    }
    resetChildTag() {
      if (this.attrs.reset) {
        const resetting = this.attrs.reset.split(",");
        for (let i = 0; i < resetting.length; i++) {
          const childtypedef = this.typedefs[resetting[i]];
          if (childtypedef) {
            for (let fieldname in childtypedef.fields) {
              const field = childtypedef.fields[fieldname];
              if (field.unique) {
                field.resetUnique();
              }
            }
          }
        }
      }
    }
    validateFields(tag, line, onError) {
      let touched = false, newtag;
      this.count++;
      for (let aname in tag.attrs) {
        const V = this.fields[aname];
        let value = tag.attrs[aname];
        if (V && !V.foreign)
          V.values.push(tag.attrs[aname]);
        let [err, newvalue, refline] = V && V.validate(tag.attrs[aname], line) || [0, value, -1];
        if (err) {
          onError(err, newvalue, refline);
        } else if (newvalue != value) {
          if (!touched) {
            newtag = Object.assign({}, tag);
            newtag.attrs = Object.assign({}, tag.attrs);
          }
          if (Array.isArray(newvalue))
            newvalue = newvalue.join(",");
          newtag.attrs[aname] = newvalue;
          touched = true;
        }
      }
      return newtag;
    }
    validateTag(offtext, tag, line, compiledLine, onError) {
      if (this.fields.id || this.fields["@"] || this.attrs.savelinepos) {
        this.linepos.push(compiledLine + line);
      }
      if (this.attrs.bracket) {
        let tagtext = offtext.tagText(tag);
        if (!tagtext) {
          tagtext = offtext.plain.trim().slice(0, 10);
        }
        if (this.attrs.bracket !== "true")
          tagtext = removeBracket(tagtext);
        this.innertext.push(tagtext);
      }
      for (let aname in this.mandatory) {
        if (!tag.attrs.hasOwnProperty(aname) && this.mandatory[aname]) {
          onError("MANDANTORY" /* Mandatory */, tag.name + " " + aname);
        }
      }
      this.resetChildTag();
      const newtag = this.validateFields(tag, line, onError);
      return newtag;
    }
    deserialize(section, ptk) {
      const attrline = section.shift();
      const attrs = attrline ? attrline.split(LEMMA_DELIMITER) : [];
      if (section.length > attrs.length) {
        this.linepos = unpackIntDelta(section.shift());
      }
      this.innertext = null;
      if (!section.length)
        return;
      if (this.fields.bracket) {
        this.innertext = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      }
      for (let i = 0; i < attrs.length; i++) {
        const aname = attrs[i];
        const V = this.fields[aname];
        if (!V) {
          console.error("unknown type " + aname);
          continue;
        }
        if (V?.type === "number") {
          V.values = unpackInt(section.shift());
        } else if (V?.type === "text") {
          V.values = section.length ? section.shift().split("	") : [];
        } else if (V?.deserialize) {
          V.values = V.deserialize(section, ptk);
        }
      }
      if (section.length) {
        console.log("unconsumed section lines", section.length);
      }
    }
    serialize() {
      const attrs = [], out = [];
      if (!this.count)
        return null;
      if (this.linepos.length || this.fields.bracket) {
        out.push(packIntDelta(this.linepos));
      }
      if (this.fields.bracket) {
        out.push(this.innertext.join(LEMMA_DELIMITER));
      }
      for (let aname in this.fields) {
        const V = this.fields[aname];
        if (V.foreign)
          continue;
        if (V.type == "number") {
          attrs.push(aname);
          out.push(packInt(V.values.map((it) => parseInt(it))));
        } else if (V.type == "text") {
          attrs.push(aname);
          out.push(V.values.join("	"));
        } else if (V.serialize) {
          attrs.push(aname);
          const arr = V.serialize();
          for (let i = 0; i < arr.length; i++) {
            out.push(arr[i]);
          }
        }
      }
      out.unshift(attrs.join(LEMMA_DELIMITER));
      return out.length ? out.join("\n") : null;
    }
  };

  // ../ptk/compiler/predefines.ts
  var predefines = {
    generic: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck,juan>
^:ck<id=unique heading=text bracket=false>
^:p<id=text>
^:n<id=number>
^:o<@=link>
^:j<@=link>
^:k<id=text>
^:ad
^:bc
^:ver<savelinepos=true>
^:f<id=text>
^:sponsor<savelinepos=true>
^:https<bracket=false onclick=gourl>
^:fn<id=number>`,
    cbeta: `^:ak<id=unique bracket=false>
^:bk<id=unique heading=text bracket=false reset=ck,p>
^:ck<id=unique heading=text bracket=false>
^:https<bracket=false onclick=gourl>
^:p<id=text>
^:f<id=text>
^:ver<savelinepos=true>
^:fn<id=number>
^:fm<id=text>
^:k<id=text>
^:j<@=link>
^:v
^:h
^:mc
^:l`,
    cs: `^:ak<id=unique bracket=false reset=ck>
^:bk<id=unique heading=text bracket=false reset=n>
^:ck<id=unique heading=text bracket=false>
^:n
^:h
^:sz
^:https<bracket=false onclick=gourl>
`,
    zidian: `^:ak<id=unique bracket=false reset=ck>
^:bk<id=unique heading=text bracket=false reset=n>
^:ck<id=unique heading=text bracket=false>
^:f<id=number>
^:https<bracket=false onclick=gourl>
^:j<@=link>
^:o<@=link>
`,
    subtitle: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck>
^:ck<id=unique heading=text bracket=false>
^:mpeg<id=text savelinepos=true>
^:ts<id=range>
^:ver<savelinepos=true>`
  };

  // ../ptk/compiler/compiler.ts
  var sourceType = (firstline, filename) => {
    const at = firstline.indexOf("\n");
    firstline = at > -1 ? firstline.slice(0, at) : firstline;
    const [text2, tags] = parseOfftext(firstline);
    let lazy = true, sourcetype, name2, caption2;
    let consumed = false;
    sourcetype = filename?.endsWith(".tsv") ? "tsv" /* TSV */ : "txt" /* Offtext */;
    if (tags.length && tags[0].name == ":") {
      const attrs = tags[0].attrs;
      if (attrs.hasOwnProperty(lazy))
        lazy = !!attrs.lazy;
      sourcetype = tags[0].attrs.type?.toLowerCase() || sourcetype;
      name2 = attrs.name;
      caption2 = attrs.caption;
      consumed = true;
      if (sourcetype == "tsv") {
        consumed = false;
        lazy = false;
      }
    }
    return { sourcetype, tag: tags[0], lazy, name: name2, caption: caption2, consumed };
  };
  var Compiler2 = class {
    constructor(opts = {}) {
      this.reset(opts);
    }
    reset(opts = {}) {
      this.ptkname = "";
      this.compilingname = "";
      this.line = 0;
      this.compiledLine = 0;
      this.compiledFiles = {};
      this.primarykeys = {};
      this.errors = [];
      this.typedefs = {};
      this.stopcompile = false;
      this.toc = [];
      this.zcount = 0;
      this.prevzline = 0;
      this.prevdepth = 0;
      this.tagdefs = [];
    }
    onError(code, msg, refline = -1, line) {
      this.errors.push({ name: this.compilingname, line: line || this.line, code, msg, refline });
      if (this.errors.length >= MAX_VERROR)
        this.stopcompile = true;
    }
    setPredefine(name2 = "generic") {
      const predefine = predefines[name2] || "";
      this.compileOfftext(predefine, this.tagdefs);
    }
    compileOfftext(str, tagdefs) {
      const at = str.indexOf("^");
      if (at == -1)
        return str;
      const ot = new Offtext(str);
      let updated = false;
      for (let i = 0; i < ot.tags.length; i++) {
        const tag = ot.tags[i];
        if (tag.name[0] == ":" && tag.name.length > 1) {
          const newtagname = tag.name.slice(1);
          if (this.typedefs[newtagname]) {
            this.onError("TYPE_REDEF" /* TypeRedef */, newtagname);
          } else {
            this.typedefs[newtagname] = new Typedef(tag.attrs, newtagname, this.primarykeys, this.typedefs);
          }
          tagdefs.push(str);
          str = null;
        } else {
          if (tag.name[0] == "z") {
            validate_z.call(this, ot, tag);
          } else {
            const typedef = this.typedefs[tag.name];
            if (!typedef) {
              console.error("unknown tag\n", str, tag.name);
            } else {
              const newtag = typedef.validateTag(ot, tag, this.line, this.compiledLine, this.onError.bind(this));
              if (newtag) {
                str = updateOfftext(str, tag, newtag);
                updated = true;
              }
            }
          }
        }
      }
      return str;
    }
    clearCompiled(filename) {
      delete this.compiledFiles[filename];
    }
    compileBuffer(buffer, filename) {
      if (!buffer)
        return this.onError("EMPTY_BUFFER" /* Empty */);
      if (!filename)
        return this.onError("PTK_NONAME" /* PtkNoName */);
      let processed, samepage = false, tagdefs = [], attributes = {};
      const sa = new StringArray(buffer, { sequencial: true });
      const firstline = sa.first();
      const { sourcetype, tag, lazy, name: name2, caption: caption2, consumed } = sourceType(firstline, filename);
      if (sourcetype == "txt" && consumed)
        tagdefs.push(firstline);
      let compiledname = name2 || filename;
      let textstart = 0;
      this.compilingname = filename;
      this.stopcompile = false;
      if (tag?.name == ":") {
        if (tag.attrs.ptk) {
          if (this.ptkname && this.ptkname !== tag.attrs.ptk) {
            this.onError("PTK_NAMED" /* PtkNamed */, this.ptkname);
          } else {
            this.ptkname = tag.attrs.ptk;
          }
        }
        if (tag.attrs.type === "txt" || filename == "0.off")
          this.setPredefine(tag.attrs.define || tag.attrs.template);
        attributes = tag.attrs;
      }
      if (sourcetype === "tsv" /* TSV */) {
        const [text2, tags] = parseOfftext(firstline);
        const attrs = tags[0].attrs;
        const typedef = text2.split("	");
        const columns = new Column({ typedef, primarykeys: this.primarykeys, onError: this.onError.bind(this) });
        const [serialized, _textstart] = columns.fromStringArray(sa, attrs, 1);
        textstart = _textstart;
        if (serialized) {
          compiledname = attrs.name || filename;
          serialized.unshift(firstline);
          if (attrs.name)
            this.primarykeys[attrs.name] = columns.keys;
          this.compiledLine += serialized.length;
          processed = serialized;
          textstart++;
          samepage = true;
        } else {
          processed = [];
        }
      } else {
        const out = [];
        let linetext = sa.first();
        if (consumed)
          linetext = sa.next();
        this.line = 0;
        while (linetext || linetext === "") {
          const o = this.compileOfftext(linetext, tagdefs);
          if (o || o == "") {
            out.push(o);
            this.line++;
          }
          linetext = sa.next();
          if (this.stopcompile)
            break;
        }
        this.compiledLine += out.length;
        processed = out;
      }
      this.compiledFiles[filename] = {
        name: compiledname,
        caption: caption2,
        lazy,
        sourcetype,
        processed,
        textstart,
        errors: this.errors,
        samepage,
        tagdefs,
        attributes
      };
      return this.compiledFiles[filename];
    }
  };

  // ../ptk/compiler/toc.ts
  var TableOfContent = class {
    constructor(section, name2) {
      this.lines = unpackIntDelta(section.shift());
      this.depths = unpackInt(section.shift());
      this.texts = new StringArray(section.shift());
    }
  };
  var depthOfId = (str) => {
    return str.split(/(\d+)/).filter((it) => !!it).length;
  };
  function buildTocTag(toctags) {
    for (let i = 0; i < toctags.length; i++) {
      const toctag = toctags[i];
      const out = [];
      if (!this.defines[toctag]) {
        console.log("not such tag", toctag);
        continue;
      }
      const values = this.defines[toctag].fields.id.values;
      for (let j2 = 0; j2 < values.length; j2++) {
        out.push(depthOfId(values[j2]));
      }
      this.defines[toctag].depths = out;
    }
  }

  // ../ptk/linebase/column.ts
  var Column = class {
    constructor(opts = {}) {
      this.fieldvalues = [];
      this.fieldnames = [];
      this.fieldsdef = [];
      this.attrs;
      this.name = "";
      this.keys = null;
      this.primarykeys = opts.primarykeys || {};
      this.onError = opts.onError;
      this.typedef = opts.typedef;
      this.tokenfield = -1;
      this.tokentable = null;
    }
    //lexicon :: key(sorted primary key) = payload
    addColumn(name2) {
      this.fieldnames.push(name2);
      this.fieldvalues.push([]);
    }
    tokenizeField(value) {
      const tokenized = tokenize(value);
      for (let i = 0; i < tokenized.length; i++) {
        const { text: text2, type } = tokenized[i];
        if (type > 16 /* SEARCHABLE */ && !this.tokentable[text2]) {
          this.tokentable[text2] = true;
        }
      }
    }
    addRow(fields, nrow, skipFirstField) {
      let i = 0;
      if (skipFirstField)
        i++;
      for (; i < this.fieldsdef.length; i++) {
        const F = this.fieldsdef[i];
        const [err, value] = F.validate(fields[i], nrow);
        if (err) {
          this.onError && this.onError(err, this.fieldnames[i] + " " + fields[i], -1, nrow);
        }
        this.fieldvalues[i].push(value || "");
        if (i + 1 == this.tokenfield)
          this.tokenizeField(value);
      }
    }
    createFields(typedef) {
      if (typedef)
        for (let idx2 in typedef) {
          const fieldtype = typedef[idx2] || "key=string";
          const [name2, def] = fieldtype.split("=");
          this.addColumn(name2);
          const field = createField(name2, def || {}, this.primarykeys, this.keys);
          this.fieldsdef.push(field);
        }
    }
    deserialize(section) {
      if (!section.length)
        return;
      const firstline = section.shift();
      const [text2, tags] = parseOfftext(firstline);
      if (!section.length)
        return;
      this.attrs = tags[0]?.attrs;
      this.name = this.attrs.name;
      this.caption = this.attrs.caption;
      const typedef = text2.split("	");
      this.createFields(typedef);
      if (this.attrs.keytype == "serial") {
        this.keys = null;
      } else {
        this.keys = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      }
      if (this.attrs.tokenfield) {
        this.tokenfield = parseInt(this.attrs.tokenfield);
        this.tokentable = section.shift()?.split(LEMMA_DELIMITER);
        this.tokentable.sort(alphabetically);
      }
      let idx2 = 0, usesection = false;
      for (let fieldname in this.fieldsdef) {
        const field = this.fieldsdef[fieldname];
        if (field.type === "number") {
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "numbers") {
          this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
        } else if (field.type === "keys") {
          this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
        } else if (field.type === "key") {
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "string") {
          this.fieldvalues[idx2] = section.shift().split(LEMMA_DELIMITER);
        } else if (field.type === "group") {
          field.deserialize(section);
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "text") {
          usesection = true;
          this.fieldvalues[idx2] = section;
        }
        if (!this[field.name]) {
          this[field.name] = this.fieldvalues[idx2];
        }
        idx2++;
      }
      if (!usesection && section.length) {
        console.log("section not consumed");
      }
    }
    fromStringArray(sa, attrs = {}, from = 1) {
      const allfields = [];
      let line = sa.first();
      let textstart = 0;
      let skipFirstField = false;
      while (from > 0) {
        line = sa.next();
        from--;
      }
      while (line || line === "") {
        const fields = line.split("	");
        allfields.push(fields);
        line = sa.next();
      }
      if (attrs.keytype !== "serial") {
        allfields.sort(alphabetically0);
        skipFirstField = true;
        this.keys = allfields.map((it) => it[0]);
      }
      this.createFields(this.typedef);
      if (attrs.tokenfield) {
        this.tokenfield = parseInt(attrs.tokenfield || -1);
        this.tokentable = {};
        if (this.tokenfield === 0)
          this.tokenizeField(this.keys.join(LEMMA_DELIMITER));
      }
      if (!this.fieldnames.length) {
        throw "missing typedef";
        return;
      }
      for (let i = 0; i < allfields.length; i++) {
        this.addRow(allfields[i], i + 1, skipFirstField);
      }
      const out = [];
      if (this.keys)
        out.push(this.keys.join(LEMMA_DELIMITER));
      if (this.tokenfield > -1) {
        out.push(Object.keys(this.tokentable).join(LEMMA_DELIMITER));
      }
      for (let i = 0; i < this.fieldnames.length; i++) {
        const V = this.fieldsdef[i];
        if (V.type == "number" || V.type == "line") {
          const numbers = this.fieldvalues[i].map((it) => parseInt(it) || 0) || [];
          out.push(packInt(numbers));
        } else if (V.type == "numbers") {
          const numbers = this.fieldvalues[i] || [];
          out.push(packIntDelta2d(numbers));
        } else if (V.type == "keys") {
          const numnums = this.fieldvalues[i] || [];
          out.push(packIntDelta2d(numnums));
        } else if (V.type == "key") {
          const nums = this.fieldvalues[i] || [];
          out.push(packInt(nums));
        } else if (V.type == "string") {
          out.push(this.fieldvalues[i].join(LEMMA_DELIMITER));
        } else if (V.type == "group") {
          V.serialize(out);
          out.push(packInt(this.fieldvalues[i]));
        } else if (V.type == "text") {
          if (i !== this.fieldnames.length - 1) {
            throw "multiline text fieldtype must be the last, " + this.fieldnames[i];
          }
          textstart = out.length;
          for (let j2 = 0; j2 < this.fieldvalues[i].length; j2++) {
            out.push(this.fieldvalues[i][j2]);
          }
        } else if (V.type) {
          this.onError && this.onError("UNKNOWN_TYPE" /* UnknownType */, V.type);
        }
      }
      if (textstart == 0)
        textstart = out.length;
      return [out, textstart];
    }
    fromTSV(buffer, attrs, from = 1) {
      const sa = new StringArray(buffer, { sequencial: true });
      return this.fromStringArray(sa, attrs, from);
    }
    findKey(key) {
      if (this.keys) {
        return this.keys.find(key);
      } else {
        return parseInt(key) - 1;
      }
    }
    getKey(i) {
      if (this.keys) {
        return this.keys.get(i);
      } else {
        return (i + 1).toString();
      }
    }
  };

  // ../ptk/basket/columns.ts
  function columnField(name2, field, idx2) {
    const column = this.columns[name2];
    const at = column.fieldnames.indexOf(field);
    return column.fieldvalues[at][idx2];
  }
  async function inlineNote(tagname, noteid) {
    const typedef = this.defines[tagname];
    const col = this.columns[typedef.fields.type.foreign];
    if (!col)
      return;
    const at = col.findKey(noteid);
    const textfield = typedef.attrs.text;
    const at2 = col.fieldnames.indexOf(textfield);
    const values = col.fieldvalues[at2];
    return values && values[at] || "";
  }
  function rowOf(rowname, idx2, field = -1) {
    const column = this.columns[rowname];
    if (typeof field == "string") {
      field = column.fieldnames.indexOf(field);
    }
    const out = [];
    if (field > 0) {
      out.push({ name, typedef: column.fieldsdef[field], value: column.fieldvalues[field][idx2] });
    } else {
      for (let i = 0; i < column.fieldnames.length; i++) {
        const name2 = column.fieldnames[i];
        out.push({ name: name2, typedef: column.fieldsdef[i], value: column.fieldvalues[i][idx2] });
      }
    }
    return out;
  }
  var getCacheKey = (name2, field, tofind) => {
    return name2 + ":" + field + "=" + tofind;
  };
  function searchColumnField(name2, field, tofind) {
    const simtofind = fromSim(tofind);
    let cachekey = getCacheKey(name2, field, tofind);
    let cache = this.scanCache[cachekey];
    if (!cache && simtofind !== tofind) {
      cache = this.scanCache[getCacheKey(name2, field, simtofind)];
    }
    if (!cache) {
      const array = this.columns[name2][field];
      if (!array) {
        console.log("missing field", field, "in column", name2);
        return null;
      }
      let contain = indexOfs(array, tofind);
      if (!contain.length && simtofind !== tofind) {
        contain = indexOfs(array, simtofind);
        if (contain.length) {
          cachekey = getCacheKey(name2, field, simtofind);
        }
      }
      const caption2 = this.columns[name2].caption || name2;
      cache = { name: name2, field, caption: caption2, contain };
      this.scanCache[cachekey] = cache;
    }
    return cache;
  }
  function scanColumnFields(tofind) {
    const out = [];
    if (!tofind)
      return [];
    for (let name2 in this.columns) {
      if (!this.columns[name2].attrs.scan)
        continue;
      const scans = this.columns[name2].attrs.scan.split(",");
      for (let i = 0; i < scans.length; i++) {
        const cache = searchColumnField.call(this, name2, scans[i], tofind);
        out.push(cache);
      }
    }
    for (let name2 in this.primarykeys) {
      if (!this.columns[name2].attrs.bme)
        continue;
      const cachekey = name2 + "=" + tofind;
      let cache = this.scanCache[cachekey];
      if (!cache) {
        const sa = this.primarykeys[name2];
        const start = sa.enumStart(tofind);
        const middle = sa.enumMiddle(tofind);
        const end = sa.enumEnd(tofind);
        const caption2 = this.columns[name2].caption || name2;
        cache = { name: name2, caption: caption2, start, middle, end };
        this.scanCache[cachekey] = cache;
      }
      out.push(cache);
    }
    return out;
  }

  // ../ptk/fts/query.ts
  var MAX_PHRASE = 5;
  var scoreMatch = (matching, weights) => {
    if (matching.length == 0)
      return 0;
    let score = 0, matchcount = 0;
    for (let j2 = 0; j2 < weights.length; j2++) {
      if (matching[j2]) {
        matchcount++;
        score += weights[j2] * (matching[j2] > 1 ? Math.sqrt(matching[j2]) : 1);
      }
    }
    let boost = matchcount / weights.length;
    boost *= boost;
    return score * boost;
  };
  function scoreLine(postings, chunklinepos, tlp) {
    tlp = tlp || this.inverted.tokenlinepos, tlplast = tlp[tlp.length - 1];
    chunklinepos = chunklinepos || this.defines.ck.linepos;
    const averagelinelen = tlplast / tlp.length;
    const allhits = postings.reduce((acc, i2) => i2.length + acc, 0);
    const weights = postings.map((pl) => Math.sqrt(allhits / pl.length));
    let i = 0, scoredLine = [];
    const ptr = new Array(postings.length);
    ptr.fill(0);
    let prev = 0;
    while (i < tlp.length - 1) {
      let nearest = tlplast;
      const from = tlp[i], to = tlp[i + 1];
      let matching = [];
      prev = 0;
      for (let j2 = 0; j2 < postings.length; j2++) {
        const pl = postings[j2];
        let v = pl[ptr[j2]];
        while (v < from && ptr[j2] < pl.length) {
          ptr[j2]++;
          v = pl[ptr[j2]];
        }
        while (v >= from && v < to) {
          if (!matching[j2])
            matching[j2] = 0;
          matching[j2]++;
          if (j2 == 0)
            prev = v;
          else {
            const dist = v - prev - j2;
            if (dist == 0) {
              matching[j2] += 3;
            } else {
              matching[j2] += 1 / dist;
            }
          }
          ptr[j2]++;
          v = pl[ptr[j2]];
        }
        if (nearest > v)
          nearest = v;
      }
      const score = scoreMatch(matching, weights);
      let shortpara = 10 * (averagelinelen / (to - from + 1));
      if (shortpara < 10)
        shortpara = 10;
      const boost = Math.log(shortpara);
      if (score > 0) {
        const chunk = bsearchNumber(chunklinepos, i) - 1;
        scoredLine.push([i + 1, score * boost, chunk]);
      }
      i++;
      while (nearest > tlp[i + 1])
        i++;
    }
    scoredLine = scoredLine.sort((a, b) => b[1] - a[1]);
    return scoredLine;
  }
  async function phraseQuery(phrase) {
    phrase = phrase.trim();
    const qkey = this.name + "@" + phrase;
    let out = this.queryCache[qkey];
    if (out)
      return out;
    const tokens = await this.loadPostings(phrase);
    if (!tokens)
      return [];
    out = tokens[0];
    for (let i = 1; i < tokens.length; i++) {
      let pl1 = out;
      out = plAnd(pl1, tokens[i], i);
    }
    this.queryCache[qkey] = out || [];
    return this.queryCache[qkey];
  }
  async function parseQuery(tofind, opts) {
    opts = opts || {};
    const phrases = tofind.split(/[, 　]/);
    if (phrases.length > MAX_PHRASE)
      phrases.length = MAX_PHRASE;
    const outphrases = [], postings = [];
    for (let i = 0; i < phrases.length; i++) {
      if (!phrases[i].trim())
        continue;
      let posting = await phraseQuery.call(this, phrases[i]);
      if ((!posting || !posting.length) && this.attributes.lang == "zh") {
        posting = await phraseQuery.call(this, fromSim(phrases[i]));
      }
      if (opts.ranges && opts.ranges.length) {
        posting = plRanges(posting, opts.ranges);
      }
      outphrases.push(phrases[i]);
      postings.push(posting || []);
    }
    return [outphrases, postings];
  }
  async function scanText(tofind, opts) {
    const ptk = this;
    const [phrases, postings] = await ptk.parseQuery(tofind, opts);
    if (!postings.length || !ptk.inverted)
      return [];
    const tagname = opts?.groupby || "ak";
    const groupby = ptk.defines[tagname];
    const tlp = [], TLP = ptk.inverted.tokenlinepos;
    if (groupby) {
      for (let i = 0; i < groupby.linepos.length; i++) {
        const nextstart = TLP[groupby.linepos[i + 1]] || TLP[TLP.length - 1];
        tlp.push([TLP[groupby.linepos[i]], nextstart]);
      }
      const res = plCount(postings[0], tlp).map((count, idx2) => {
        const id = groupby.fields.id.values[idx2];
        return {
          count,
          caption: groupby.innertext.get(idx2),
          scope: tagname + (parseInt(id) ? id : "#" + id)
        };
      });
      return res;
    } else {
      return [{ count: postings.length, caption: "-", name: "-" }];
    }
  }

  // ../ptk/basket/footnote.ts
  function findFootmarkInBook(ptk, id, line) {
    const ck = ptk.nearestChunk(line);
    const fntag = ptk.defines.fn;
    const closestfn = ptk.findClosestTag(fntag, "id", id, line);
    if (~closestfn) {
      return ptk.name + ":bk#" + ck.bk.id + ".fm" + id;
    }
  }
  function footNoteAddress(id, line) {
    const ptk = this;
    const fnaddr = findFootmarkInBook(ptk, id, line);
    if (fnaddr)
      return fnaddr;
    const ck = ptk.nearestChunk(line);
    const chunktag = ptk.defines.ck;
    const bktag = ptk.defines.bk;
    const footbk = "fn_" + ck.bkid;
    const at = bktag.fields.id.values.indexOf(footbk);
    if (at == -1)
      return ptk.name + ":" + ck.bk.id + ".fm" + id;
    const booknotebkline = bktag.linepos[at];
    const closestchunk = ptk.findClosestTag(chunktag, "id", ck.id, booknotebkline);
    const chunk = chunktag.fields.id.values[closestchunk];
    const address = ptk.name + ":" + footbk + ".ck" + (parseInt(chunk) ? chunk : "#" + chunk) + ".fn" + id;
    return address;
  }
  function footNoteByAddress(id, line) {
    const ptk = this;
    const ck = ptk.nearestChunk(line);
    const chunktag = ptk.defines.ck;
    const bktag = ptk.defines.ck;
    const footnotetag = ptk.defines.f;
    let footbk = ck.bkid.replace("_fn", "");
    const at = bktag.fields.id.values.indexOf(footbk);
    if (at == 0)
      footbk = "";
    else
      footbk += ".";
    const booknotebkline = bktag.linepos[at];
    const closestchunk = ptk.findClosestTag(chunktag, "id", ck.id, booknotebkline);
    const chunk = chunktag.fields.id.values[closestchunk];
    const footnoteat = ptk.findClosestTag(footnotetag, "id", parseInt(id), chunktag.linepos[closestchunk]);
    const footnoteline = footnotetag.linepos[footnoteat];
    const highlightline = footnoteline - chunktag.linepos[closestchunk];
    const address = footbk + "ck" + chunk + (highlightline ? ":" + highlightline : "");
    return address;
  }

  // ../ptk/compiler/template.ts
  var nop = () => {
    return [];
  };
  var addTemplate = (name2, template) => {
    Templates[name2] = template;
    if (!template.getFilters)
      template.getFilters = nop;
    if (!template.runFilter)
      template.runFilter = nop;
    if (!template.getCorrespondence)
      template.getCorrespondence = nop;
  };
  var Templates = {};
  addTemplate("generic", {});

  // ../ptk/basket/parallel.ts
  var bookPrefix = (bookname) => {
    let prefix = bookname;
    const at = bookname.lastIndexOf("_");
    if (~at)
      prefix = bookname.slice(0, at);
    return prefix;
  };
  function getParallelLine(sourceptk, line) {
    const chunk = sourceptk.nearestChunk(line + 1);
    if (!chunk)
      return [];
    const bk = this.defines.bk;
    const books = this.getParallelBook(chunk.bkid);
    const bookats = books.map((id) => bk.fields.id.values.indexOf(id));
    const bookstart = sourceptk.defines.bk.linepos[chunk.bkat];
    const sourcelineoff = line - bookstart;
    const out = [];
    for (let i = 0; i < bookats.length; i++) {
      const bkid = bk.fields.id.values[bookats[i]];
      const [start, end] = this.rangeOfAddress("bk#" + bkid + ".ck#" + chunk.id);
      const bookstart2 = bk.linepos[bookats[i]];
      const theline = bookstart2 + sourcelineoff;
      if (theline <= end) {
        out.push([this, start - bookstart2, theline]);
      }
    }
    return out;
  }
  function getParallelBook(bookname) {
    if (typeof bookname == "number") {
      bookname = this.defines.bk.fields.id.values[bookname];
    }
    if (!bookname)
      return [];
    const prefix = bookPrefix(bookname);
    return this.defines.bk.fields.id.values.filter((it) => bookPrefix(it) == prefix && bookname !== it);
  }
  function foreignLinksAtTag(tagname, line) {
    const tag = this.defines[tagname];
    const linepos = tag?.linepos;
    if (!tag || !linepos)
      return [];
    const at = bsearchNumber(linepos, line);
    const val = tag.fields.id.values[at].toString();
    const out = [];
    for (let sptkname in this.foreignlinks) {
      const sptk = poolGet(sptkname);
      const linkarr = this.foreignlinks[sptkname];
      for (let i = 0; i < linkarr.length; i++) {
        const [srctag, bk, targettagname, idStrArr, idxarr] = linkarr[i];
        if (targettagname !== tagname)
          continue;
        const srclinepos = sptk.defines[srctag].linepos;
        const at2 = idStrArr.find(val);
        const tagvalues = this.defines[srctag].fields["@"].values;
        const arr = idxarr[at2];
        for (let j2 = 0; j2 < arr?.length; j2++) {
          const address = tagvalues[arr[j2]];
          const line2 = srclinepos[arr[j2]];
          const ck = sptk.nearestChunk(line2 + 1);
          out.push({ text: address, line: line2, ck, basket: sptkname });
        }
      }
    }
    return out;
  }

  // ../ptk/basket/links.ts
  function addBacklinks(tagname, tptk, bk, targettagname, chunks, nlinks) {
    if (!tptk)
      tptk = "*";
    if (!this.backlinks[tptk])
      this.backlinks[tptk] = {};
    if (!this.backlinks[tptk][this.name]) {
      this.backlinks[tptk][this.name] = [];
    }
    this.backlinks[tptk][this.name].push([tagname, bk, targettagname, chunks, nlinks]);
  }
  function addForeignLinks(fptk) {
    for (let tptk in fptk.backlinks) {
      if (tptk == this.name || tptk === "*") {
        for (let sptk in fptk.backlinks[tptk]) {
          this.foreignlinks[sptk] = fptk.backlinks[tptk][sptk];
        }
      }
    }
  }

  // ../ptk/basket/chunk.ts
  function getCaption(at, short = false) {
    const chunktag = this.defines.ck;
    let caption2 = chunktag?.innertext.get(at);
    const id = chunktag?.fields?.id?.values[at];
    const onChunkCaption = this.template.onChunkCaption;
    if (!caption2) {
      caption2 = this.columns[chunktag?.column]?.keys?.get(at) || "";
      if (!caption2 && onChunkCaption)
        caption2 = onChunkCaption(id);
    }
    const at2 = caption2?.indexOf(";");
    let shortcaption = caption2 || "";
    if (~at2) {
      shortcaption = caption2.slice(at2);
      caption2 = caption2.slice(0, at2);
    }
    return short ? shortcaption : caption2;
  }
  function caption(at) {
    let caption2 = this.getCaption(at);
    let depth = 0;
    while (caption2 && caption2.endsWith("-")) {
      depth++;
      caption2 = caption2.slice(0, caption2.length - 1);
    }
    let at2 = at, parents = [];
    while (at2 > 0 && depth) {
      at2--;
      const par = this.getCaption(at2).split(/[- ]+/);
      const pdepth = par.length;
      while (!par[par.length - 1])
        par.pop();
      if (pdepth - 1 > depth) {
      } else if (par.length > 1 || pdepth == 1) {
        while (par.length && depth) {
          parents.unshift("-" + par.pop());
          depth--;
        }
      }
    }
    return caption2 + parents.join("");
  }
  function nearestChunk(line) {
    const chunktag = this.defines.ck;
    const at = this.nearestTag(line, chunktag) - 1;
    return this.getChunk(at);
  }
  function getBookInfo(at) {
    const booktag = this.defines.bk;
    const bkid = booktag.fields.id.values[at];
    let bkcaption = booktag?.innertext.get(at);
    let short = bkcaption.slice(0, 2);
    const bkheading = booktag?.fields.heading?.values[at] || booktag?.innertext?.get(at);
    const at2 = bkcaption.indexOf(";");
    if (~at2) {
      short = bkcaption.slice(at2 + 1);
      bkcaption = bkcaption.slice(0, at2);
    }
    return { id: bkid, caption: bkcaption, short, heading: bkheading, at };
  }
  function getChunk(at) {
    const chunktag = this.defines.ck;
    const booktag = this.defines.bk;
    if (at < 0)
      return null;
    if (at >= chunktag.fields.id.values.length)
      return null;
    const line = chunktag.linepos[at];
    const bkat = this.nearestTag(line, booktag) - 1;
    const bk = getBookInfo.call(this, bkat);
    const bkid = bk.id;
    const id = chunktag.fields.id.values[at];
    const innertext2 = chunktag.innertext.get(at);
    const caption2 = this.caption(at);
    const depth = chunktag.depths ? chunktag.depths[at] || 1 : 1;
    return {
      bk,
      bkid,
      bkat,
      caption: caption2,
      at: at + 1,
      id,
      depth,
      line: chunktag.linepos[at],
      innertext: innertext2
    };
  }
  var resetBy = (ptk, tagname) => {
    for (let t in ptk.defines) {
      const tag = ptk.defines[t];
      if (tag.attrs.reset?.split(",").indexOf(tagname) > -1) {
        return t;
      }
    }
    return null;
  };
  function ancestorChunks(at, start) {
    const chunktag = this.defines.ck;
    if (!chunktag.depths)
      return [];
    let line = chunktag.linepos[at];
    let depth = chunktag.depths[at];
    const out = [];
    while (line > start && depth > 1) {
      if (depth > chunktag.depths[at]) {
        out.unshift(at);
        depth--;
      }
      at--;
      line = chunktag.linepos[at];
    }
    return out;
  }
  function prevsiblingChunk(at, start) {
    let p = at - 1;
    const chunktag = this.defines.ck;
    if (!chunktag.depths && at > 0)
      return at - 1;
    while (p > 0) {
      if (chunktag.depths[p] == chunktag.depths[at])
        return p;
      else if (chunktag.depths[p] < chunktag.depths[at])
        break;
      p--;
      if (start < chunktag.linepos[p])
        break;
    }
    return -1;
  }
  function nextsiblingChunk(at, end) {
    let p = at + 1;
    const chunktag = this.defines.ck;
    if (!chunktag.depths && at < end)
      return at + 1;
    while (p < chunktag.linepos.length) {
      if (chunktag.depths[p] == chunktag.depths[at])
        return p;
      else if (chunktag.depths[p] < chunktag.depths[at])
        break;
      p++;
      if (chunktag.linepos[p] >= end)
        break;
    }
    return -1;
  }
  function firstChildChunk(at) {
    const chunktag = this.defines.ck;
    if (!chunktag.depths)
      return -1;
    if (chunktag.depths[at + 1] == chunktag.depths[at] + 1)
      return at + 1;
    return -1;
  }
  function neighborChunks(at) {
    const ptk = this;
    const resettag = this.defines[resetBy(this, "ck")];
    const nearest = resettag ? this.nearestTag(at, resettag) - 1 : 0;
    const start = resettag ? resettag.linepos[nearest] : 0;
    const end = resettag ? resettag.linepos[nearest + 1] || ptk.header.eot : ptk.header.eot;
    const ancestors = ancestorChunks.call(this, at, start);
    const out = ancestors.map((it) => ptk.getChunk.call(ptk, it));
    const prev = prevsiblingChunk.call(this, at);
    if (prev > -1 && (!ancestors.length || ancestors[ancestors.length - 1] < prev)) {
      out.push(this.getChunk(prev));
    }
    out.push(this.getChunk(at));
    const first = firstChildChunk.call(this, at, start);
    if (first > -1)
      out.push(this.getChunk(first));
    const next = nextsiblingChunk.call(this, at, end);
    if (next > -1)
      out.push(this.getChunk(next));
    return out;
  }

  // ../ptk/basket/pitaka.ts
  var Pitaka = class extends LineBase {
    constructor(opts) {
      super(opts);
      this.defines = {};
      this.primarykeys = {};
      this.columns = {};
      this.tocs = {};
      this.rangeOfAddress = rangeOfAddress;
      this.innertext = innertext;
      this.scanColumnFields = scanColumnFields;
      this.searchColumnField = searchColumnField;
      this.scanText = scanText;
      this.parseQuery = parseQuery;
      this.scoreLine = scoreLine;
      this.scanCache = {};
      this.queryCache = {};
      this.columnField = columnField;
      this.inlineNote = inlineNote;
      this.footNoteAddress = footNoteAddress;
      this.footNoteByAddress = footNoteByAddress;
      this.foreignLinksAtTag = foreignLinksAtTag;
      this.getParallelBook = getParallelBook;
      this.getParallelLine = getParallelLine;
      this.taggedLines = {};
      this.foreignlinks = {};
      this.backlinks = {};
      this.rowOf = rowOf;
      this.inverted = null;
      this.parallels = {};
      this.lang = "";
      this.preprocessor = null;
      this.addForeignLinks = addForeignLinks;
      this.addBacklinks = addBacklinks;
      this.getCaption = getCaption;
      this.caption = caption;
      this.nearestChunk = nearestChunk;
      this.getChunk = getChunk;
      this.neighborChunks = neighborChunks;
      this.fetchAddress = fetchAddress;
    }
    async init() {
      if (!this.payload)
        return;
      const compiler = new Compiler2();
      compiler.compileBuffer(this.payload, "0.off");
      this.defines = compiler.typedefs;
      this.attributes = compiler.compiledFiles["0.off"]?.attributes;
      this.lang = this.attributes.lang || "zh";
      this.template = Templates[this.attributes.template] || Templates.generic;
      const ranges = [];
      for (let i = 0; i < this.header.preload.length; i++) {
        const r = this.sectionRange(this.header.preload[i]);
        if (r && r[1] > r[0])
          ranges.push(r);
      }
      for (let n in this.defines) {
        if (!this.defines[n].fields.lazy) {
          const r = this.sectionRange("^" + n);
          if (r && r[1] > r[0])
            ranges.push(r);
        }
      }
      await this.loadLines(ranges);
      for (let i = 0; i < this.header.preload.length; i++) {
        const section = this.getSection(this.header.preload[i]);
        if (section.length)
          this.deserialize(section, this.header.preload[i]);
      }
      for (const n in this.defines) {
        if (!this.defines[n].fields.lazy) {
          const section = this.getSection("^" + n);
          if (section && section.length) {
            this.defines[n].deserialize(section, this);
          } else {
            this.defines[n].empty = true;
          }
        }
        for (let attr2 in this.defines[n].fields) {
          const A = this.defines[n].fields[attr2];
          if (A.foreign && this.primarykeys[A.foreign]) {
            A.keys = this.primarykeys[A.foreign];
          }
        }
      }
      for (const n in this.defines) {
        if (this.defines[n].empty)
          delete this.defines[n];
      }
      for (const n in this.columns) {
        const tagname = this.columns[n].attrs?.tagname;
        if (tagname && this.defines[tagname]) {
          this.defines[tagname].column = n;
        }
      }
      if (this.attributes.toctag) {
        const toctags = this.attributes.toctag.split(",");
        buildTocTag.call(this, toctags);
      }
    }
    deserialize(section, sectionname) {
      if (!section.length)
        return;
      if (!section[0])
        section.shift();
      if (!section.length)
        return;
      const firstline = section[0];
      const { name: name2 } = sourceType(firstline);
      const at = this.header.sectionnames.indexOf(sectionname);
      const sourcetype = this.header.sectiontypes[at];
      if (sourcetype === "tsv") {
        const column = new Column();
        column.deserialize(section);
        this.columns[column.name] = column;
        this.primarykeys[column.name] = column.keys;
      } else if (sourcetype === "tokens") {
        section.shift();
        const postingstart = this.sectionRange("_postings")[0];
        this.inverted = new Inverted(section, postingstart);
      } else if (sourcetype === "toc") {
        section.shift();
        this.tocs[name2 || "*"] = new TableOfContent(section, name2);
      }
    }
    async loadPostings(s) {
      if (!this.inverted)
        return;
      const nPostings = this.inverted.nPostingOf(s);
      const postinglines = [];
      const that = this;
      for (let i = 0; i < nPostings.length; i++) {
        if (nPostings[i] < 0)
          continue;
        const line = this.inverted.postingStart + nPostings[i];
        postinglines.push([line, line + 1]);
      }
      postinglines.sort((a, b) => a[0] - b[0]);
      await that.loadLines(postinglines);
      for (let i = 0; i < nPostings.length; i++) {
        const at = nPostings[i];
        if (at == -1)
          continue;
        const line = this.inverted.postingStart + nPostings[i];
        if (!this.inverted.postings[at]) {
          const packedline = that.getLine(line);
          this.inverted.postings[at] = unpackIntDelta(packedline);
        }
      }
      return this.getPostings(s);
    }
    getHeading(line) {
      if (!line)
        return "";
      const chunktag = this.defines.ck;
      const booktag = this.defines.bk;
      const linepos = chunktag?.linepos || [];
      const at = bsearchNumber(linepos, line + 1) - 1;
      const lineoff = line - linepos[at];
      const id = chunktag?.fields?.id?.values[at];
      const bkat = this.nearestTag(line, booktag) - 1;
      const bk = getBookInfo.call(this, bkat);
      const bkid = bk?.id;
      const caption2 = this.caption(at);
      return { id, tagname: "ck", caption: caption2, lineoff, bk, bkid };
    }
    getPostings(s) {
      const nPostings = this.inverted.nPostingOf(s);
      const postings = this.inverted.postings;
      return nPostings.map((np) => postings[np]);
    }
    nearestTag(line, tag, fieldname = "") {
      if (typeof tag == "string")
        tag = this.defines[tag];
      if (!tag)
        return -1;
      const linepos = tag.linepos;
      if (!linepos)
        return null;
      const at = bsearchNumber(linepos, line);
      if (!fieldname)
        return line < linepos[linepos.length - 1] ? at : at + 1;
      else if (at > 0)
        return tag.fields[fieldname].values[at - 1];
    }
    findClosestTag(typedef, key, value, from = 0) {
      let at = typedef.fields[key].values.indexOf(value);
      while (at >= 0 && typedef.linepos[at] < from) {
        at = typedef.fields[key].values.indexOf(value, at + 1);
      }
      return at;
    }
    postingLine(posting) {
      return plContain(posting, this.inverted.tokenlinepos)[0];
    }
    validId(tagname, id) {
      const V = this.defines[tagname]?.fields;
      if (!V || !V.id)
        return false;
      if (V.id.type == "number" && typeof id !== "number")
        id = parseInt(id);
      return ~V.id.values.indexOf(id);
    }
    typedefOf(tagname) {
      return this.defines[tagname];
    }
    humanName(short, lang = "zh") {
      let n = this.attributes[lang] || this.name;
      const at = n.indexOf("|");
      if (at == -1)
        return n;
      return short ? n.slice(0, at) : n.slice(at + 1);
    }
    getSectionStart(name2) {
      const at = this.header.sectionnames.indexOf(name2);
      if (~at) {
        return this.header.sectionstarts[at] || -1;
      }
      return -1;
    }
    async fetchAddress(address) {
      const range = this.rangeOfAddress.call(this, address);
      await this.loadLines([range]);
      const out = [];
      for (let i = range[0]; i < range[1]; i++) {
        out.push(this.getLine(i));
      }
      return out;
    }
    async fetchTag(ele, id) {
      const range = rangeOfElementId.call(this, [[ele, id]]);
      if (range.length) {
        const [start, end] = range[0];
        const line = await this.getLine(start);
        const [text2, tags] = parseOfftext(line);
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].name == ele && tags[i].attrs.id == id) {
            return tags[i];
          }
        }
      }
      return null;
    }
  };

  // ../ptk/zip/utils.ts
  var makeUint8Array = (thing) => new Uint8Array(thing.buffer || thing);
  var wasm = "AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBwkCAW0CAAFjAAEIAQAKlQECSQEDfwNAIAEhAEEAIQIDQCAAQQF2IABBAXFBoIbi7X5scyEAIAJBAWoiAkEIRw0ACyABQQJ0IAA2AgAgAUEBaiIBQYACRw0ACwtJAQF/IAFBf3MhAUGAgAQhAkGAgAQgAGohAANAIAFB/wFxIAItAABzQQJ0KAIAIAFBCHZzIQEgAkEBaiICIABJDQALIAFBf3O4Cw";
  var instance = new WebAssembly.Instance(
    new WebAssembly.Module(Uint8Array.from(atob(wasm), (c2) => c2.charCodeAt(0)))
  );
  var { c, m: m2 } = instance.exports;
  var pageSize = 65536;
  var crcBuffer = makeUint8Array(m2).subarray(pageSize);

  // ../ptk/basket/openptk.ts
  var openPtk = async (name2) => {
    let ptk = usePtk(name2);
    if (ptk)
      return ptk;
    if (!name2)
      return null;
    ptk = new Pitaka({ name: name2 });
    poolAdd(name2, ptk);
    if (await ptk.isReady()) {
      await ptk.init();
      const poolptk = poolGetAll();
      for (let i = 0; i < poolptk.length; i++) {
        poolptk[i].addForeignLinks(ptk);
      }
      return ptk;
    } else {
      poolDel(name2);
    }
  };
  var usePtk = (name2) => {
    return poolGet(name2);
  };

  // ../ptk/basket/folio.ts
  var fetchFolioText = async (ptk, bk, pb) => {
    const [from, to] = ptk.rangeOfAddress("bk#" + bk + ".pb#" + pb);
    if (from == to)
      return ["", from, to];
    await ptk.loadLines([from, to]);
    const lines = ptk.slice(from, to + 1);
    let firstline = lines[0];
    let lastline = lines[lines.length - 1];
    let m4 = firstline.match(/(\^pb\d+)/);
    lines[0] = firstline.slice(m4.index + m4[1].length);
    m4 = lastline.match(/(\^pb\d+)/);
    const remain = lines[lines.length - 1].slice(m4.index);
    lines[lines.length - 1] = lastline.slice(0, m4.index);
    const text2 = lines.join("	").replace(/\^ck(\d+)【([^】]+?)】/g, "^ck$1<caption=$2>").split("^lb");
    text2.push(remain);
    return [text2, from, to];
  };
  var getConreatePos = (linetext, nth, nextline) => {
    let [text2, tags] = parseOfftext(linetext);
    const isgatha = !!tags.filter((it) => it.name == "gatha").length;
    let ntag = 0;
    const chars = splitUTF32Char(text2);
    let pos = 0, i = 0, tagstart = 0;
    if (ntag < tags.length && pos > tags[ntag].choff)
      tagstart = tags[ntag].start;
    while (nth && i < chars.length) {
      const r = CJKRangeName(chars[i]);
      if (r) {
        nth--;
      } else {
        if (isgatha && ~"\uFF0C\u3001\uFF0E\uFF1B\u3002".indexOf(chars[i])) {
          nth--;
        }
      }
      pos += chars[i].codePointAt(0) >= 131072 ? 2 : 1;
      if (ntag < tags.length && pos > tags[ntag].choff) {
        ntag++;
        if (ntag < tags.length)
          tagstart = tags[ntag].start;
      }
      i++;
    }
    while (i < chars.length) {
      const r = CJKRangeName(chars[i]);
      if (!r) {
        pos++;
      } else
        break;
      i++;
    }
    let textbefore = "";
    let s = text2.slice(pos);
    if (pos > 0) {
      const befores = splitUTF32Char(text2.slice(0, pos));
      let back = befores.length - 1;
      while (pos > 0 && back > 0 && CJKRangeName(befores[back])) {
        textbefore = befores[back] + textbefore;
        back--;
        pos--;
      }
    }
    if (textbefore)
      textbefore = textbefore + "^";
    if (nextline) {
      const [nextlinetext] = parseOfftext(nextline);
      s = s + nextlinetext;
    }
    return [textbefore + s, pos + tagstart];
  };
  var folio2ChunkLine = async (ptk, foliotext, from, cx, pos) => {
    const out = [];
    for (let i = 0; i <= cx; i++) {
      if (i == cx) {
        out.push(foliotext[i].slice(0, pos));
      } else {
        out.push(foliotext[i]);
      }
    }
    let startline = from;
    let s = out.join("");
    out.length = 0;
    let at = s.lastIndexOf("^ck");
    if (~at)
      s = s.slice(at);
    else {
      while (startline > 0) {
        startline--;
        await ptk.loadLines([startline]);
        const line = ptk.getLine(startline);
        out.unshift(line);
        if (out.length > 100)
          break;
        if (~line.indexOf("^ck"))
          break;
      }
      const at2 = out[0].indexOf("^ck");
      out[0] = out[0].slice(at2);
      s = out.join("	") + "	" + s;
    }
    const lines = s.split("	");
    const m4 = lines[0].match(/\^ck#?([a-z\d\-_]+)/);
    if (!m4)
      return "";
    const ck = m4[1];
    const lineoff = lines.length - 1;
    return "ck#" + ck + (lineoff ? ":" + lineoff : "");
  };
  var extractPuncPos = (foliotext, foliolines = 5, validpuncs = "\u300C\u300D\u300E\u300F\u3002\uFF0C\uFF1B\uFF1A\u3001\uFF01\uFF1F") => {
    const puncs = [];
    for (let i = 0; i < foliotext.length; i++) {
      let ch = 0, ntag = 0, textsum = 0;
      const [text2, tags] = parseOfftext(foliotext[i]);
      const isgatha = !!tags.filter((it) => it.name == "gatha").length;
      if (i >= foliolines)
        break;
      const chars = splitUTF32Char(text2);
      for (let j2 = 0; j2 < chars.length; j2++) {
        while (ntag < tags.length && textsum > tags[ntag].choff) {
          if (tags[ntag].name == "ck") {
            puncs.push({ line: i, ch, text: styledNumber(parseInt(tags[ntag].attrs.id), "\u2460") });
          }
          ntag++;
        }
        textsum += chars[j2].length;
        if (~validpuncs.indexOf(chars[j2])) {
          let text3 = toVerticalPunc(chars[j2]);
          puncs.push({ line: i, ch, text: text3 });
        }
        const r = CJKRangeName(chars[j2]);
        if (r) {
          ch++;
        } else {
          if (isgatha && ~validpuncs.indexOf(chars[i])) {
            ch++;
          }
        }
      }
    }
    return puncs;
  };

  // ../ptk/align/parallels.ts
  var parallelWithDiff = (ptk, line, includeself = false) => {
    const out = [];
    if (!ptk)
      return out;
    const bk = ptk.nearestTag(line, "bk") - 1;
    const bookstart = ptk.defines.bk.linepos[bk];
    if (includeself) {
      out.push([ptk, bookstart, line]);
    }
    const lineoff = line - bookstart;
    const books = ptk.getParallelBook(bk);
    for (let i = 0; i < books.length; i++) {
      const [start, end] = ptk.rangeOfAddress("bk#" + books[i]);
      if (lineoff <= end - start) {
        out.push([ptk, start - bookstart, start + lineoff]);
      }
    }
    const parallelPitakas = poolParallelPitakas(ptk);
    for (let i = 0; i < parallelPitakas.length; i++) {
      const pptk = usePtk(parallelPitakas[i]);
      const lines = pptk.getParallelLine(ptk, line);
      lines.forEach((it) => out.push([...it]));
    }
    return out;
  };
  var getParallelLines = async (ptk, line, _out) => {
    const lines = parallelWithDiff(ptk, line, true);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
      const [ptk2, bookstart, line2] = lines[i];
      await ptk2.loadLines([line2]);
      const linetext = ptk2.getLine(line2);
      const heading = ptk2.getHeading(line2);
      out.push({ ptk: ptk2, heading, linetext, line: line2 });
    }
    if (_out)
      _out.push(...out);
    return out;
  };

  // ../ptk/lexicon/entry.ts
  var guessEntry = (sentence, values) => {
    const at = sentence.indexOf("^");
    let textbefore = "";
    if (~at) {
      textbefore = sentence.slice(0, at);
      sentence = sentence.slice(at + 1);
    }
    for (let j2 = 0; j2 <= textbefore.length; j2++) {
      for (let i = 0; i < values.length; i++) {
        const tf = (textbefore.slice(textbefore.length - j2) + sentence).slice(0, values[i].length);
        if (tf == values[i] && j2 < values[i].length) {
          return values[i];
        }
      }
    }
    const chars = splitUTF32Char(sentence);
    return chars[0];
  };

  // ../ptk/denote/tokenizers.ts
  var isIASTToken = (w) => w.match(/^[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*$/);
  var tokenizeIAST = (str, opts = {}) => {
    const pattern = opts.pattern || /([a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*)/ig;
    let o = str.split(pattern).filter((it) => !!it);
    if (opts.removeBlank)
      o = o.filter(isIASTToken);
    if (opts.tokenOnly)
      return o;
    else
      return o.map((raw) => {
        return [raw, null];
      });
  };
  tokenizeIAST.splitPunc = (str) => str;
  tokenizeIAST.isToken = isIASTToken;
  var tokenizeIASTPunc = (str, opts = {}) => {
    opts.pattern = /([“‘]*[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*[’।॥\.,;?\!…”–]* *)/ig;
    return tokenizeIAST(str, opts);
  };
  tokenizeIASTPunc.splitPunc = (token) => {
    const mlead = token.match(/^([“‘]*)/);
    let lead, tail;
    if (mlead) {
      lead = mlead[1];
      token = token.slice(lead.length);
    }
    const mtail = token.match(/(\d*[’।॥\.,;?\!…”–]* *)$/);
    if (mtail) {
      tail = mtail[1];
      token = token.slice(0, token.length - tail.length);
    }
    return [lead, token, tail];
  };
  tokenizeIASTPunc.isToken = (w) => w.match(/^([“‘]*[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*[’।॥\.,;?\!…”–]* *)$/);

  // src/punclayer.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    return child_ctx;
  }
  function create_each_block(ctx) {
    let span;
    let t_value = (
      /*punc*/
      ctx[8].text + ""
    );
    let t;
    let span_style_value;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "punc svelte-pz7dv");
        attr(span, "style", span_style_value = /*puncStyle*/
        ctx[3](
          /*punc*/
          ctx[8].line,
          /*punc*/
          ctx[8].ch,
          /*punc*/
          ctx[8].text
        ));
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*puncs*/
        2 && t_value !== (t_value = /*punc*/
        ctx2[8].text + ""))
          set_data(t, t_value);
        if (dirty & /*puncs*/
        2 && span_style_value !== (span_style_value = /*puncStyle*/
        ctx2[3](
          /*punc*/
          ctx2[8].line,
          /*punc*/
          ctx2[8].ch,
          /*punc*/
          ctx2[8].text
        ))) {
          attr(span, "style", span_style_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_fragment(ctx) {
    let div;
    let div_style_value;
    let each_value = (
      /*puncs*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "puncs svelte-pz7dv");
        attr(div, "style", div_style_value = /*stylestring*/
        ctx[2](
          /*frame*/
          ctx[0]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*puncStyle, puncs*/
        10) {
          each_value = /*puncs*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & /*frame*/
        1 && div_style_value !== (div_style_value = /*stylestring*/
        ctx2[2](
          /*frame*/
          ctx2[0]
        ))) {
          attr(div, "style", div_style_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let { frame = {} } = $$props;
    let { puncs = [] } = $$props;
    let { folioChars = 17, folioLines = 5 } = $$props;
    const unitw = frame.width / folioLines, unith = frame.height / folioChars;
    const stylestring = (f) => {
      return `left:${f.left}px;width:${f.width}px;top:${f.top}px;height:${f.height}px`;
    };
    const puncStyle = (line, ch, text2) => {
      let fontsize = unith * 0.9, yinc = unith * 0.2, xinc = -unitw * 0.1;
      if (text2 == "\uFF1F" || text2 == "\uFF01") {
        fontsize = fontsize / 1.5;
        yinc += unith * 0.4;
      } else if (text2 == "\uFE41" || text2 == "\uFE43") {
        xinc += -unitw * 0.3;
        yinc += unith * 0.45;
      } else if (text2 == "\uFE44" || text2 == "\uFE42") {
        xinc += -unitw * 0.6;
        yinc += unith * 0.4;
      } else if (!isPunc(text2[0])) {
        yinc += unith;
        fontsize = fontsize / 1.5;
      }
      const style = "left:" + Math.floor(xinc + unitw * (folioLines - line) - unitw * 0.25) + "px; top:" + Math.floor(frame.top + yinc + unith * (ch - 1) - unith * 0.2) + "px;font-size:" + fontsize + "px";
      return style;
    };
    $$self.$$set = ($$props2) => {
      if ("frame" in $$props2)
        $$invalidate(0, frame = $$props2.frame);
      if ("puncs" in $$props2)
        $$invalidate(1, puncs = $$props2.puncs);
      if ("folioChars" in $$props2)
        $$invalidate(4, folioChars = $$props2.folioChars);
      if ("folioLines" in $$props2)
        $$invalidate(5, folioLines = $$props2.folioLines);
    };
    return [frame, puncs, stylestring, puncStyle, folioChars, folioLines];
  }
  var Punclayer = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment, safe_not_equal, {
        frame: 0,
        puncs: 1,
        folioChars: 4,
        folioLines: 5
      });
    }
  };
  var punclayer_default = Punclayer;

  // node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }

  // src/store.js
  var activePtk = writable("dc");
  var activebook = writable(1);
  var activebookid = writable("vcpp_kumarajiva");
  var activefolio = writable(0);
  var autoplay = writable(0);
  var maxfolio = writable(0);
  var isAndroid = writable(false);

  // src/swipeshapes.js
  var swipestart = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#1f1f1f"></path><rect x="113" y="68" width="78" height="900"></svg>';
  var swipeend = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f" ><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path><rect x="853" y="68" width="78" height="900"></svg>';
  var turnleft = '<svg width="150px" height="150px" viewBox="0 0 24 24"  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><path d="M4.71493213,9 L8.06176471,9 C14.65507,9 20,13.0983574 20,19.3875"/> <polyline points="9 14 4 9 9 4 9 4"/></svg>';
  var turnright = '<svg width="150px" height="150px" viewBox="0 0 24 24" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><path d="M3.71493213,19.3875 C3.71493213,13.0983574 9.05986213,9 15.6531674,9 L19,9"/><polyline points="15 4 20 9 15 14 15 14"/></svg>';
  var up1 = '<svg fill="#000000" width="150px" height="150px" viewBox="0 0 32 32"><path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path></svg>';
  var up2 = up1;
  var down1 = "";
  var down2 = down1;

  // src/swipevideo.svelte
  function create_if_block_1(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        div.textContent = "\u4E2D\u90E8\u5168\u570B\u4F9B\u4F5B\u9F4B\u50E7\u5927\u6703";
        attr(div, "class", "sponsor svelte-1lz6db3");
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block(ctx) {
    let span;
    let raw_value = (
      /*swipeshapes*/
      ctx[8][
        /*direction*/
        ctx[5] + 4
      ] + ""
    );
    return {
      c() {
        span = element("span");
        attr(span, "class", "swipe svelte-1lz6db3");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        span.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*direction*/
        32 && raw_value !== (raw_value = /*swipeshapes*/
        ctx2[8][
          /*direction*/
          ctx2[5] + 4
        ] + ""))
          span.innerHTML = raw_value;
        ;
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_key_block_1(ctx) {
    let video;
    let source;
    let source_src_value;
    let source_type_value;
    let mounted;
    let dispose;
    return {
      c() {
        video = element("video");
        source = element("source");
        if (!src_url_equal(source.src, source_src_value = /*src*/
        ctx[0]))
          attr(source, "src", source_src_value);
        attr(source, "type", source_type_value = "video/" + /*$isAndroid*/
        (ctx[7] ? "webm" : "mp4"));
        video.loop = true;
        video.autoplay = true;
        attr(video, "class", "svelte-1lz6db3");
      },
      m(target, anchor) {
        insert(target, video, anchor);
        append(video, source);
        ctx[20](video);
        if (!mounted) {
          dispose = listen(
            video,
            "loadeddata",
            /*videoloaded*/
            ctx[15]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*src*/
        1 && !src_url_equal(source.src, source_src_value = /*src*/
        ctx2[0])) {
          attr(source, "src", source_src_value);
        }
        if (dirty[0] & /*$isAndroid*/
        128 && source_type_value !== (source_type_value = "video/" + /*$isAndroid*/
        (ctx2[7] ? "webm" : "mp4"))) {
          attr(source, "type", source_type_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(video);
        ctx[20](null);
        mounted = false;
        dispose();
      }
    };
  }
  function create_key_block(ctx) {
    let punclayer;
    let current;
    punclayer = new punclayer_default({
      props: {
        frame: (
          /*videoFrame*/
          ctx[14]()
        ),
        folioChars: (
          /*folioChars*/
          ctx[1]
        ),
        folioLines: (
          /*folioLines*/
          ctx[2]
        ),
        puncs: (
          /*puncs*/
          ctx[6]
        )
      }
    });
    return {
      c() {
        create_component(punclayer.$$.fragment);
      },
      m(target, anchor) {
        mount_component(punclayer, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const punclayer_changes = {};
        if (dirty[0] & /*folioChars*/
        2)
          punclayer_changes.folioChars = /*folioChars*/
          ctx2[1];
        if (dirty[0] & /*folioLines*/
        4)
          punclayer_changes.folioLines = /*folioLines*/
          ctx2[2];
        if (dirty[0] & /*puncs*/
        64)
          punclayer_changes.puncs = /*puncs*/
          ctx2[6];
        punclayer.$set(punclayer_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(punclayer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(punclayer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(punclayer, detaching);
      }
    };
  }
  function create_fragment2(ctx) {
    let t0;
    let div;
    let t1;
    let span;
    let t2_value = 1 + Math.floor(
      /*mp4player*/
      ctx[3]?.currentTime
    ) + "";
    let t2;
    let t3;
    let previous_key = (
      /*src*/
      ctx[0]
    );
    let t4;
    let previous_key_1 = (
      /*puncs*/
      ctx[6]
    );
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*mp4player*/
      ctx[3]?.currentTime < 1 && create_if_block_1(ctx)
    );
    let if_block1 = (
      /*touching*/
      ctx[4] > -1 && /*direction*/
      ctx[5] && create_if_block(ctx)
    );
    let key_block0 = create_key_block_1(ctx);
    let key_block1 = create_key_block(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        div = element("div");
        if (if_block1)
          if_block1.c();
        t1 = space();
        span = element("span");
        t2 = text(t2_value);
        t3 = space();
        key_block0.c();
        t4 = space();
        key_block1.c();
        attr(span, "class", "pagenumber svelte-1lz6db3");
        attr(div, "class", "container svelte-1lz6db3");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div, anchor);
        if (if_block1)
          if_block1.m(div, null);
        append(div, t1);
        append(div, span);
        append(span, t2);
        append(div, t3);
        key_block0.m(div, null);
        append(div, t4);
        key_block1.m(div, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div,
              "touchstart",
              /*ontouchstart*/
              ctx[9],
              { passive: true }
            ),
            listen(
              div,
              "touchmove",
              /*ontouchmove*/
              ctx[10],
              { passive: true }
            ),
            listen(
              div,
              "touchend",
              /*ontouchend*/
              ctx[13],
              { passive: true }
            ),
            listen(
              div,
              "click",
              /*onclick*/
              ctx[12]
            ),
            listen(
              div,
              "wheel",
              /*mousewheel*/
              ctx[11]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (
          /*mp4player*/
          ctx2[3]?.currentTime < 1
        ) {
          if (if_block0) {
          } else {
            if_block0 = create_if_block_1(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*touching*/
          ctx2[4] > -1 && /*direction*/
          ctx2[5]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block(ctx2);
            if_block1.c();
            if_block1.m(div, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if ((!current || dirty[0] & /*mp4player*/
        8) && t2_value !== (t2_value = 1 + Math.floor(
          /*mp4player*/
          ctx2[3]?.currentTime
        ) + ""))
          set_data(t2, t2_value);
        if (dirty[0] & /*src*/
        1 && safe_not_equal(previous_key, previous_key = /*src*/
        ctx2[0])) {
          key_block0.d(1);
          key_block0 = create_key_block_1(ctx2);
          key_block0.c();
          key_block0.m(div, t4);
        } else {
          key_block0.p(ctx2, dirty);
        }
        if (dirty[0] & /*puncs*/
        64 && safe_not_equal(previous_key_1, previous_key_1 = /*puncs*/
        ctx2[6])) {
          group_outros();
          transition_out(key_block1, 1, 1, noop);
          check_outros();
          key_block1 = create_key_block(ctx2);
          key_block1.c();
          transition_in(key_block1, 1);
          key_block1.m(div, null);
        } else {
          key_block1.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block1);
        current = true;
      },
      o(local) {
        transition_out(key_block1);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div);
        if (if_block1)
          if_block1.d();
        key_block0.d(detaching);
        key_block1.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let $autoplay;
    let $activefolio;
    let $activebookid;
    let $activePtk;
    let $isAndroid;
    component_subscribe($$self, autoplay, ($$value) => $$invalidate(29, $autoplay = $$value));
    component_subscribe($$self, activefolio, ($$value) => $$invalidate(18, $activefolio = $$value));
    component_subscribe($$self, activebookid, ($$value) => $$invalidate(19, $activebookid = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(30, $activePtk = $$value));
    component_subscribe($$self, isAndroid, ($$value) => $$invalidate(7, $isAndroid = $$value));
    let { src } = $$props;
    let mp4player;
    let touching = -1;
    let touchx = 0, touchy = 0, startx = 0, starty = 0, direction = 0;
    const swipeshapes = [down2, down1, swipeend, turnright, , turnleft, swipestart, up1, up2];
    let { folioChars = 17, folioLines = 5 } = $$props;
    let { onTapText = function() {
    } } = $$props;
    let { onMainmenu = function() {
    } } = $$props;
    let ptk = usePtk($activePtk);
    let foliotext = "", foliofrom = 0, puncs = [];
    const videoRect = () => {
      if (!mp4player)
        return [0, 0, 0, 0];
      const r = mp4player.clientHeight / mp4player.videoHeight;
      const w = mp4player.videoWidth * r;
      const left = Math.floor((mp4player.clientWidth - w) / 2);
      const right = left + w;
      return [left, 0, right, mp4player.clientHeight];
    };
    const inVideoRect = (x) => {
      const [left, top, right] = videoRect();
      return x > left && x < right;
    };
    const ontouchstart = (e) => {
      $$invalidate(5, direction = 0);
      if (e.touches.length == 1) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
        if (!inVideoRect(startx))
          return;
        touchx = startx;
        touchy = starty;
        $$invalidate(4, touching = 1);
      }
    };
    const getDirection = () => {
      const deltax = touchx - startx;
      const deltay = touchy - starty;
      const w = mp4player.videoWidth / 2;
      if (deltax > 30 && Math.abs(deltay) < Math.abs(deltax) / 2) {
        return deltax > w ? -2 : -1;
      } else if (deltax < -30 && Math.abs(deltay) < Math.abs(deltax) / 2) {
        return deltax < -w ? 2 : 1;
      }
      if (Math.abs(deltax) < Math.abs(deltay) / 2 && deltay > 30) {
        return deltay > w ? -4 : -3;
      } else if (Math.abs(deltax) < Math.abs(deltay) / 2 && deltay < -30) {
        return deltay < -w ? 4 : 3;
      }
      return 0;
    };
    const ontouchmove = (e) => {
      if (touching == -1)
        return;
      if (touching > -1) {
        touchx = e.touches[0].pageX;
        touchy = e.touches[0].pageY;
        $$invalidate(5, direction = getDirection());
      }
    };
    const mousewheel = (e) => {
      if (e.ctrlKey)
        return;
      if (e.deltaY > 0) {
        $$invalidate(3, mp4player.currentTime += 1, mp4player);
      } else {
        $$invalidate(3, mp4player.currentTime += -1, mp4player);
      }
      e.preventDefault();
      updateFolioText();
    };
    const getCharXY = (div, x, y) => {
      const [left, top, right] = videoRect();
      const cx = folioLines - Math.floor((x - left) / (right - left) * folioLines) - 1;
      const cy = Math.floor(y / (div.clientHeight - div.clientTop) * folioChars);
      return [cx, cy];
    };
    const onclick = async (e, _x, _y) => {
      const x = _x || e.clientX;
      const y = _y || e.clientY;
      if (!inVideoRect(x))
        return;
      const [cx, cy] = getCharXY(mp4player, x, y);
      const [t, pos] = getConreatePos(foliotext[cx], cy, foliotext[cx + 1]);
      const address = "bk#" + $activebookid + "." + await folio2ChunkLine(ptk, foliotext, foliofrom, cx, pos);
      await onTapText(t, address, ptk.name);
    };
    const autoplayfolio = () => {
      $$invalidate(3, mp4player.currentTime += 1.001, mp4player);
      if (mp4player.currentTime >= mp4player.duration) {
        $$invalidate(3, mp4player.currentTime = 0, mp4player);
      }
      updateFolioText();
    };
    const ontouchend = async (e) => {
      if (touching !== -1 && direction !== 0) {
        if (direction == 1)
          $$invalidate(3, mp4player.currentTime += -1.001, mp4player);
        else if (direction == 2)
          $$invalidate(3, mp4player.currentTime = 0, mp4player);
        else if (direction == -1)
          $$invalidate(3, mp4player.currentTime += 1.001, mp4player);
        else if (direction == -2)
          $$invalidate(3, mp4player.currentTime = mp4player.duration, mp4player);
        else if (direction == 3 || direction == 4) {
          onMainmenu();
        }
        updateFolioText();
      } else {
      }
      $$invalidate(4, touching = -1);
      $$invalidate(5, direction = 0);
    };
    const updateFolioText = async () => {
      [foliotext, foliofrom] = await fetchFolioText(ptk, $activebookid, 1 + Math.floor(mp4player?.currentTime || 0));
      $$invalidate(6, puncs = extractPuncPos(foliotext, folioLines));
      activefolio.set(Math.floor(mp4player.currentTime));
    };
    const gotoFolio = async (t) => {
      if (Math.floor(t) !== Math.floor(mp4player?.currentTime)) {
        setTimeout(
          () => {
            $$invalidate(3, mp4player.currentTime = (t || 0) + 1e-3, mp4player);
            updateFolioText();
          },
          500
        );
      } else {
        updateFolioText();
      }
    };
    const videoFrame = () => {
      const frame = videoRect();
      return {
        left: frame[0],
        top: frame[1],
        width: frame[2] - frame[0],
        height: frame[3] - frame[1]
      };
    };
    const videoloaded = () => {
      gotoFolio($activefolio);
      maxfolio.set(mp4player.duration);
    };
    let timer;
    let seconds = 0;
    onMount(() => {
      timer = setInterval(
        () => {
          if ($autoplay && seconds > $autoplay) {
            autoplayfolio();
            seconds = 0;
          }
          seconds++;
        },
        1e3
      );
    });
    onDestroy(() => {
      clearInterval(timer);
    });
    function video_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        mp4player = $$value;
        $$invalidate(3, mp4player);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(0, src = $$props2.src);
      if ("folioChars" in $$props2)
        $$invalidate(1, folioChars = $$props2.folioChars);
      if ("folioLines" in $$props2)
        $$invalidate(2, folioLines = $$props2.folioLines);
      if ("onTapText" in $$props2)
        $$invalidate(16, onTapText = $$props2.onTapText);
      if ("onMainmenu" in $$props2)
        $$invalidate(17, onMainmenu = $$props2.onMainmenu);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*$activefolio, $activebookid*/
      786432) {
        $:
          gotoFolio($activefolio, $activebookid);
      }
    };
    return [
      src,
      folioChars,
      folioLines,
      mp4player,
      touching,
      direction,
      puncs,
      $isAndroid,
      swipeshapes,
      ontouchstart,
      ontouchmove,
      mousewheel,
      onclick,
      ontouchend,
      videoFrame,
      videoloaded,
      onTapText,
      onMainmenu,
      $activefolio,
      $activebookid,
      video_binding
    ];
  }
  var Swipevideo = class extends SvelteComponent {
    constructor(options) {
      super();
      init(
        this,
        options,
        instance3,
        create_fragment2,
        safe_not_equal,
        {
          src: 0,
          folioChars: 1,
          folioLines: 2,
          onTapText: 16,
          onMainmenu: 17
        },
        null,
        [-1, -1]
      );
    }
  };
  var swipevideo_default = Swipevideo;

  // src/foliolist.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    return child_ctx;
  }
  function create_each_block2(ctx) {
    let div;
    let span;
    let t_value = (
      /*getBookName*/
      ctx[3](
        /*nbk*/
        ctx[8]
      ) + ""
    );
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[6](
          /*nbk*/
          ctx[8]
        )
      );
    }
    return {
      c() {
        div = element("div");
        span = element("span");
        t = text(t_value);
        toggle_class(
          span,
          "selecteditem",
          /*$activebook*/
          ctx[0] == /*nbk*/
          ctx[8]
        );
        attr(div, "class", "book");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span);
        append(span, t);
        if (!mounted) {
          dispose = listen(div, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*$activebook, books*/
        3) {
          toggle_class(
            span,
            "selecteditem",
            /*$activebook*/
            ctx[0] == /*nbk*/
            ctx[8]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment3(ctx) {
    let each_1_anchor;
    let each_value = (
      /*books*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*selectbook, books, $activebook, getBookName*/
        15) {
          each_value = /*books*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    let $activebook;
    component_subscribe($$self, activebook, ($$value) => $$invalidate(0, $activebook = $$value));
    let { ptk } = $$props;
    let { onclose = function() {
    } } = $$props;
    const getBookList = () => {
      const folio = ptk.defines.folio;
      const bk = ptk.defines.bk;
      const out = [];
      for (let i = 0; i < folio.linepos.length; i++) {
        const id = folio.fields.id.values[i];
        const at = bk.fields.id.values.indexOf(id);
        if (~at) {
          out.push(at);
        }
      }
      return out;
    };
    const books = getBookList();
    const selectbook = (nbk) => {
      const bk = ptk.defines.bk;
      activebook.set(nbk);
      activebookid.set(bk.fields.id.values[nbk]);
      activefolio.set(0);
      onclose();
    };
    const getBookName = (nbk) => {
      const bk = ptk.defines.bk;
      const bookname = bk.innertext.get(nbk);
      return bk.fields.heading.values[nbk] + "-" + bookname;
    };
    const click_handler = (nbk) => selectbook(nbk);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(4, ptk = $$props2.ptk);
      if ("onclose" in $$props2)
        $$invalidate(5, onclose = $$props2.onclose);
    };
    return [$activebook, books, selectbook, getBookName, ptk, onclose, click_handler];
  }
  var Foliolist = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment3, safe_not_equal, { ptk: 4, onclose: 5 });
    }
  };
  var foliolist_default = Foliolist;

  // src/3rd/slider.js
  function handle(node) {
    const onDown = getOnDown(node);
    node.addEventListener("touchstart", onDown);
    node.addEventListener("mousedown", onDown);
    return {
      destroy() {
        node.removeEventListener("touchstart", onDown);
        node.removeEventListener("mousedown", onDown);
      }
    };
  }
  function getOnDown(node) {
    const onMove = getOnMove(node);
    return function(e) {
      e.preventDefault();
      node.dispatchEvent(new CustomEvent("dragstart"));
      const moveevent = "touches" in e ? "touchmove" : "mousemove";
      const upevent = "touches" in e ? "touchend" : "mouseup";
      document.addEventListener(moveevent, onMove);
      document.addEventListener(upevent, onUp);
      function onUp(e2) {
        e2.stopPropagation();
        document.removeEventListener(moveevent, onMove);
        document.removeEventListener(upevent, onUp);
        node.dispatchEvent(new CustomEvent("dragend"));
      }
      ;
    };
  }
  function getOnMove(node) {
    const track = node.parentNode;
    return function(e) {
      const { left, width } = track.getBoundingClientRect();
      const clickOffset = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clickPos = Math.min(Math.max((clickOffset - left) / width, 0), 1) || 0;
      node.dispatchEvent(new CustomEvent("drag", { detail: clickPos }));
    };
  }

  // src/3rd/thumb.svelte
  function create_fragment4(ctx) {
    let div1;
    let div0;
    let div1_style_value;
    let handle_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = (
      /*#slots*/
      ctx[4].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[3],
      null
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        attr(div0, "class", "thumb-content svelte-8w8x88");
        toggle_class(
          div0,
          "active",
          /*active*/
          ctx[1]
        );
        attr(div1, "class", "thumb svelte-8w8x88");
        attr(div1, "style", div1_style_value = `left: ${/*pos*/
        ctx[0] * 100}%;`);
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(handle_action = handle.call(null, div1)),
            listen(
              div1,
              "dragstart",
              /*dragstart_handler*/
              ctx[5]
            ),
            listen(
              div1,
              "drag",
              /*drag_handler*/
              ctx[6]
            ),
            listen(
              div1,
              "dragend",
              /*dragend_handler*/
              ctx[7]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[3],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[3]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[3],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (!current || dirty & /*active*/
        2) {
          toggle_class(
            div0,
            "active",
            /*active*/
            ctx2[1]
          );
        }
        if (!current || dirty & /*pos*/
        1 && div1_style_value !== (div1_style_value = `left: ${/*pos*/
        ctx2[0] * 100}%;`)) {
          attr(div1, "style", div1_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (default_slot)
          default_slot.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance5($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const dispatch = createEventDispatcher();
    let active;
    let { pos } = $$props;
    const dragstart_handler = () => ($$invalidate(1, active = true), dispatch("active", true));
    const drag_handler = ({ detail: v }) => $$invalidate(0, pos = v);
    const dragend_handler = () => ($$invalidate(1, active = false), dispatch("active", false));
    $$self.$$set = ($$props2) => {
      if ("pos" in $$props2)
        $$invalidate(0, pos = $$props2.pos);
      if ("$$scope" in $$props2)
        $$invalidate(3, $$scope = $$props2.$$scope);
    };
    return [
      pos,
      active,
      dispatch,
      $$scope,
      slots,
      dragstart_handler,
      drag_handler,
      dragend_handler
    ];
  }
  var Thumb = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment4, safe_not_equal, { pos: 0 });
    }
  };
  var thumb_default = Thumb;

  // src/3rd/rangeslider.svelte
  var get_left_slot_changes = (dirty) => ({});
  var get_left_slot_context = (ctx) => ({});
  function fallback_block_1(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        attr(div, "class", "thumb svelte-3gztlv");
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function fallback_block(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[13],
      null
    );
    const default_slot_or_fallback = default_slot || fallback_block_1(ctx);
    return {
      c() {
        if (default_slot_or_fallback)
          default_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8192)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[13],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[13]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[13],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (default_slot_or_fallback)
          default_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_default_slot(ctx) {
    let current;
    const left_slot_template = (
      /*#slots*/
      ctx[10].left
    );
    const left_slot = create_slot(
      left_slot_template,
      ctx,
      /*$$scope*/
      ctx[13],
      get_left_slot_context
    );
    const left_slot_or_fallback = left_slot || fallback_block(ctx);
    return {
      c() {
        if (left_slot_or_fallback)
          left_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (left_slot_or_fallback) {
          left_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (left_slot) {
          if (left_slot.p && (!current || dirty & /*$$scope*/
          8192)) {
            update_slot_base(
              left_slot,
              left_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[13],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[13]
              ) : get_slot_changes(
                left_slot_template,
                /*$$scope*/
                ctx2[13],
                dirty,
                get_left_slot_changes
              ),
              get_left_slot_context
            );
          }
        } else {
          if (left_slot_or_fallback && left_slot_or_fallback.p && (!current || dirty & /*$$scope*/
          8192)) {
            left_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(left_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(left_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (left_slot_or_fallback)
          left_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_fragment5(ctx) {
    let input;
    let input_value_value;
    let input_name_value;
    let t0;
    let div1;
    let div0;
    let t1;
    let thumb;
    let updating_pos;
    let current;
    function thumb_pos_binding(value) {
      ctx[11](value);
    }
    let thumb_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    };
    if (
      /*pos*/
      ctx[2][0] !== void 0
    ) {
      thumb_props.pos = /*pos*/
      ctx[2][0];
    }
    thumb = new thumb_default({ props: thumb_props });
    binding_callbacks.push(() => bind(thumb, "pos", thumb_pos_binding));
    thumb.$on(
      "active",
      /*active_handler*/
      ctx[12]
    );
    return {
      c() {
        input = element("input");
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        t1 = space();
        create_component(thumb.$$.fragment);
        attr(input, "type", "number");
        input.value = input_value_value = /*value*/
        ctx[0][0];
        attr(input, "name", input_name_value = /*name*/
        ctx[1][0]);
        attr(input, "class", "svelte-3gztlv");
        attr(div0, "class", "progress svelte-3gztlv");
        attr(
          div0,
          "style",
          /*progress*/
          ctx[4]
        );
        attr(div1, "class", "track svelte-3gztlv");
      },
      m(target, anchor) {
        insert(target, input, anchor);
        insert(target, t0, anchor);
        insert(target, div1, anchor);
        append(div1, div0);
        append(div1, t1);
        mount_component(thumb, div1, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*value*/
        1 && input_value_value !== (input_value_value = /*value*/
        ctx2[0][0]) && input.value !== input_value_value) {
          input.value = input_value_value;
        }
        if (!current || dirty & /*name*/
        2 && input_name_value !== (input_name_value = /*name*/
        ctx2[1][0])) {
          attr(input, "name", input_name_value);
        }
        if (!current || dirty & /*progress*/
        16) {
          attr(
            div0,
            "style",
            /*progress*/
            ctx2[4]
          );
        }
        const thumb_changes = {};
        if (dirty & /*$$scope*/
        8192) {
          thumb_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_pos && dirty & /*pos*/
        4) {
          updating_pos = true;
          thumb_changes.pos = /*pos*/
          ctx2[2][0];
          add_flush_callback(() => updating_pos = false);
        }
        thumb.$set(thumb_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(thumb.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(thumb.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(input);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div1);
        destroy_component(thumb);
      }
    };
  }
  function checkPos(pos) {
    return [Math.min(...pos), Math.max(...pos)];
  }
  function instance6($$self, $$props, $$invalidate) {
    let progress;
    let { $$slots: slots = {}, $$scope } = $$props;
    const dispatch = createEventDispatcher();
    let { name: name2 = [] } = $$props;
    let { range = false } = $$props;
    let { min = 0 } = $$props;
    let { max = 100 } = $$props;
    let { step = 1 } = $$props;
    let { value = [min, max] } = $$props;
    let pos;
    let active = false;
    let { order = false } = $$props;
    function setValue(pos2) {
      const offset = min % step;
      const width = max - min;
      $$invalidate(0, value = pos2.map((v) => min + v * width).map((v) => Math.round((v - offset) / step) * step + offset));
      dispatch("input", value);
    }
    function setPos(value2) {
      $$invalidate(2, pos = value2.map((v) => Math.min(Math.max(v, min), max)).map((v) => (v - min) / (max - min)));
    }
    function clamp() {
      setPos(value);
      setValue(pos);
    }
    function thumb_pos_binding(value2) {
      if ($$self.$$.not_equal(pos[0], value2)) {
        pos[0] = value2;
        $$invalidate(2, pos), $$invalidate(5, range), $$invalidate(9, order), $$invalidate(3, active);
      }
    }
    const active_handler = ({ detail: v }) => $$invalidate(3, active = v);
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(1, name2 = $$props2.name);
      if ("range" in $$props2)
        $$invalidate(5, range = $$props2.range);
      if ("min" in $$props2)
        $$invalidate(6, min = $$props2.min);
      if ("max" in $$props2)
        $$invalidate(7, max = $$props2.max);
      if ("step" in $$props2)
        $$invalidate(8, step = $$props2.step);
      if ("value" in $$props2)
        $$invalidate(0, value = $$props2.value);
      if ("order" in $$props2)
        $$invalidate(9, order = $$props2.order);
      if ("$$scope" in $$props2)
        $$invalidate(13, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*range, order, active, pos*/
      556) {
        $:
          if (range && order && active)
            $$invalidate(2, pos = checkPos(pos));
      }
      if ($$self.$$.dirty & /*active, pos*/
      12) {
        $:
          if (active)
            setValue(pos);
      }
      if ($$self.$$.dirty & /*active, value*/
      9) {
        $:
          if (!active)
            setPos(value);
      }
      if ($$self.$$.dirty & /*min, max*/
      192) {
        $:
          min, max, clamp();
      }
      if ($$self.$$.dirty & /*range, pos*/
      36) {
        $:
          $$invalidate(4, progress = `
    left: ${range ? Math.min(pos[0], pos[1]) * 100 : 0}%;
    right: ${100 - Math.max(pos[0], range ? pos[1] : pos[0]) * 100}%;
  `);
      }
    };
    return [
      value,
      name2,
      pos,
      active,
      progress,
      range,
      min,
      max,
      step,
      order,
      slots,
      thumb_pos_binding,
      active_handler,
      $$scope
    ];
  }
  var Rangeslider = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment5, safe_not_equal, {
        name: 1,
        range: 5,
        min: 6,
        max: 7,
        step: 8,
        value: 0,
        order: 9
      });
    }
  };
  var rangeslider_default = Rangeslider;

  // src/setting.svelte
  function create_if_block2(ctx) {
    let t0_value = (
      /*value*/
      ctx[0][0] + ""
    );
    let t0;
    let t1;
    return {
      c() {
        t0 = text(t0_value);
        t1 = text(" \u79D2");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*value*/
        1 && t0_value !== (t0_value = /*value*/
        ctx2[0][0] + ""))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_fragment6(ctx) {
    let div;
    let t0;
    let t1_value = (
      /*folio*/
      (ctx[1][0] || 0) + 1 + ""
    );
    let t1;
    let t2;
    let slider0;
    let updating_value;
    let t3;
    let if_block_anchor;
    let slider1;
    let updating_value_1;
    let current;
    function slider0_value_binding(value) {
      ctx[5](value);
    }
    let slider0_props = { max: (
      /*$maxfolio*/
      ctx[2]
    ), min: 0 };
    if (
      /*folio*/
      ctx[1] !== void 0
    ) {
      slider0_props.value = /*folio*/
      ctx[1];
    }
    slider0 = new rangeslider_default({ props: slider0_props });
    binding_callbacks.push(() => bind(slider0, "value", slider0_value_binding));
    slider0.$on(
      "input",
      /*setFolio*/
      ctx[4]
    );
    let if_block = (
      /*value*/
      ctx[0][0] && create_if_block2(ctx)
    );
    function slider1_value_binding(value) {
      ctx[6](value);
    }
    let slider1_props = { max: 10, min: 0 };
    if (
      /*value*/
      ctx[0] !== void 0
    ) {
      slider1_props.value = /*value*/
      ctx[0];
    }
    slider1 = new rangeslider_default({ props: slider1_props });
    binding_callbacks.push(() => bind(slider1, "value", slider1_value_binding));
    slider1.$on(
      "input",
      /*setValue*/
      ctx[3]
    );
    return {
      c() {
        div = element("div");
        t0 = text("\u8DF3\u5230\u7B2C");
        t1 = text(t1_value);
        t2 = text("\u9801 ");
        create_component(slider0.$$.fragment);
        t3 = text("\n\u81EA\u52D5\u7FFB\u9801 ");
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        create_component(slider1.$$.fragment);
        attr(div, "class", "toctext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        append(div, t2);
        mount_component(slider0, div, null);
        append(div, t3);
        if (if_block)
          if_block.m(div, null);
        append(div, if_block_anchor);
        mount_component(slider1, div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & /*folio*/
        2) && t1_value !== (t1_value = /*folio*/
        (ctx2[1][0] || 0) + 1 + ""))
          set_data(t1, t1_value);
        const slider0_changes = {};
        if (dirty & /*$maxfolio*/
        4)
          slider0_changes.max = /*$maxfolio*/
          ctx2[2];
        if (!updating_value && dirty & /*folio*/
        2) {
          updating_value = true;
          slider0_changes.value = /*folio*/
          ctx2[1];
          add_flush_callback(() => updating_value = false);
        }
        slider0.$set(slider0_changes);
        if (
          /*value*/
          ctx2[0][0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block2(ctx2);
            if_block.c();
            if_block.m(div, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        const slider1_changes = {};
        if (!updating_value_1 && dirty & /*value*/
        1) {
          updating_value_1 = true;
          slider1_changes.value = /*value*/
          ctx2[0];
          add_flush_callback(() => updating_value_1 = false);
        }
        slider1.$set(slider1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(slider0.$$.fragment, local);
        transition_in(slider1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(slider0.$$.fragment, local);
        transition_out(slider1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(slider0);
        if (if_block)
          if_block.d();
        destroy_component(slider1);
      }
    };
  }
  function instance7($$self, $$props, $$invalidate) {
    let $autoplay;
    let $activefolio;
    let $maxfolio;
    component_subscribe($$self, autoplay, ($$value) => $$invalidate(7, $autoplay = $$value));
    component_subscribe($$self, activefolio, ($$value) => $$invalidate(8, $activefolio = $$value));
    component_subscribe($$self, maxfolio, ($$value) => $$invalidate(2, $maxfolio = $$value));
    let value = [$autoplay, 0];
    let folio = [$activefolio];
    let mp4player;
    const setValue = (e) => {
      const v = e.detail[0];
      if (v != $autoplay)
        autoplay.set(v);
    };
    const setFolio = (e) => {
      const v = e.detail[0];
      activefolio.set(v);
    };
    function slider0_value_binding(value2) {
      folio = value2;
      $$invalidate(1, folio);
    }
    function slider1_value_binding(value$1) {
      value = value$1;
      $$invalidate(0, value);
    }
    return [
      value,
      folio,
      $maxfolio,
      setValue,
      setFolio,
      slider0_value_binding,
      slider1_value_binding
    ];
  }
  var Setting = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment6, safe_not_equal, {});
    }
  };
  var setting_default = Setting;

  // src/mainmenu.svelte
  function create_fragment7(ctx) {
    let div3;
    let div0;
    let span0;
    let t1;
    let span1;
    let t3;
    let div1;
    let foliolist;
    let t4;
    let div2;
    let setting;
    let current;
    let mounted;
    let dispose;
    foliolist = new foliolist_default({
      props: {
        ptk: (
          /*ptk*/
          ctx[0]
        ),
        onclose: (
          /*onclose*/
          ctx[1]
        )
      }
    });
    setting = new setting_default({});
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        span0 = element("span");
        span0.textContent = "\u7D93\u9304";
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u8A2D\u7F6E";
        t3 = space();
        div1 = element("div");
        create_component(foliolist.$$.fragment);
        t4 = space();
        div2 = element("div");
        create_component(setting.$$.fragment);
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "selected",
          /*thetab*/
          ctx[2] == "list"
        );
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*thetab*/
          ctx[2] == "setting"
        );
        attr(div0, "class", "tabs");
        attr(div1, "class", "tab-content");
        toggle_class(
          div1,
          "visible",
          /*thetab*/
          ctx[2] == "list"
        );
        attr(div2, "class", "tab-content");
        toggle_class(
          div2,
          "visible",
          /*thetab*/
          ctx[2] == "setting"
        );
        attr(div3, "class", "popup");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, span0);
        append(div0, t1);
        append(div0, span1);
        append(div3, t3);
        append(div3, div1);
        mount_component(foliolist, div1, null);
        append(div3, t4);
        append(div3, div2);
        mount_component(setting, div2, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*click_handler*/
              ctx[3]
            ),
            listen(
              span1,
              "click",
              /*click_handler_1*/
              ctx[4]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span0,
            "selected",
            /*thetab*/
            ctx2[2] == "list"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span1,
            "selected",
            /*thetab*/
            ctx2[2] == "setting"
          );
        }
        const foliolist_changes = {};
        if (dirty & /*ptk*/
        1)
          foliolist_changes.ptk = /*ptk*/
          ctx2[0];
        if (dirty & /*onclose*/
        2)
          foliolist_changes.onclose = /*onclose*/
          ctx2[1];
        foliolist.$set(foliolist_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div1,
            "visible",
            /*thetab*/
            ctx2[2] == "list"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div2,
            "visible",
            /*thetab*/
            ctx2[2] == "setting"
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(foliolist.$$.fragment, local);
        transition_in(setting.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(foliolist.$$.fragment, local);
        transition_out(setting.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div3);
        destroy_component(foliolist);
        destroy_component(setting);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance8($$self, $$props, $$invalidate) {
    let { ptk } = $$props;
    let { onclose } = $$props;
    let thetab = "list";
    const click_handler = () => $$invalidate(2, thetab = "list");
    const click_handler_1 = () => $$invalidate(2, thetab = "setting");
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(0, ptk = $$props2.ptk);
      if ("onclose" in $$props2)
        $$invalidate(1, onclose = $$props2.onclose);
    };
    return [ptk, onclose, thetab, click_handler, click_handler_1];
  }
  var Mainmenu = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment7, safe_not_equal, { ptk: 0, onclose: 1 });
    }
  };
  var mainmenu_default = Mainmenu;

  // ../ptk/platform/pwa.js
  function registerServiceWorker(swfn = "./sw.js") {
    const p = document.location.protocol;
    const h = document.location.hostname;
    const localhost = p == "http:" && (h == "127.0.0.1" || h == "localhost");
    if ("serviceWorker" in navigator && (localhost || p == "https:")) {
      navigator.serviceWorker.register(swfn);
    }
  }

  // src/dictpopup.svelte
  function create_else_block(ctx) {
    let span0;
    let t0_value = (
      /*e*/
      ctx[4]?.attrs.id + ""
    );
    let t0;
    let t1;
    let span1;
    let mounted;
    let dispose;
    return {
      c() {
        span0 = element("span");
        t0 = text(t0_value);
        t1 = space();
        span1 = element("span");
        attr(span0, "class", "dictentry");
        toggle_class(span0, "clickable", !!/*e*/
        ctx[4]?.attrs.wiki);
        attr(span1, "class", "dicttext");
      },
      m(target, anchor) {
        insert(target, span0, anchor);
        append(span0, t0);
        insert(target, t1, anchor);
        insert(target, span1, anchor);
        span1.innerHTML = /*rendertext*/
        ctx[5];
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*gowikipedia*/
              ctx[0]
            ),
            listen(
              span1,
              "click",
              /*gorefer*/
              ctx[1]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*e*/
        16 && t0_value !== (t0_value = /*e*/
        ctx2[4]?.attrs.id + ""))
          set_data(t0, t0_value);
        if (dirty & /*e*/
        16) {
          toggle_class(span0, "clickable", !!/*e*/
          ctx2[4]?.attrs.wiki);
        }
        if (dirty & /*rendertext*/
        32)
          span1.innerHTML = /*rendertext*/
          ctx2[5];
        ;
      },
      d(detaching) {
        if (detaching)
          detach(span0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(span1);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block3(ctx) {
    let iframe;
    let iframe_src_value;
    return {
      c() {
        iframe = element("iframe");
        attr(iframe, "class", "iframe svelte-jp8tgd");
        attr(iframe, "title", "wiki");
        if (!src_url_equal(iframe.src, iframe_src_value = /*src*/
        ctx[2]))
          attr(iframe, "src", iframe_src_value);
      },
      m(target, anchor) {
        insert(target, iframe, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*src*/
        4 && !src_url_equal(iframe.src, iframe_src_value = /*src*/
        ctx2[2])) {
          attr(iframe, "src", iframe_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(iframe);
      }
    };
  }
  function create_fragment8(ctx) {
    let div;
    function select_block_type(ctx2, dirty) {
      if (
        /*showwiki*/
        ctx2[3]
      )
        return create_if_block3;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "dictpopup svelte-jp8tgd");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_block.m(div, null);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(div, null);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if_block.d();
      }
    };
  }
  function instance9($$self, $$props, $$invalidate) {
    let text2;
    let tags;
    let rendertext;
    let e;
    let { def = "", ptk } = $$props;
    let src = "", showwiki = false;
    const gowikipedia = () => {
      if (!e?.attrs.wiki)
        return;
      $$invalidate(2, src = "https://zh.wikipedia.org/zh-tw/" + (e?.attrs.wiki !== "true" ? e?.attrs.wiki : e?.attrs.id));
      $$invalidate(3, showwiki = true);
    };
    const gorefer = async (e2) => {
      if (e2.target.className !== "refer")
        return;
      let entry = e2.target.innerText;
      const defs = await ptk.fetchAddress("e#" + entry);
      $$invalidate(6, def = defs.join("\n"));
    };
    $$self.$$set = ($$props2) => {
      if ("def" in $$props2)
        $$invalidate(6, def = $$props2.def);
      if ("ptk" in $$props2)
        $$invalidate(7, ptk = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*def*/
      64) {
        $:
          $$invalidate(9, [text2, tags] = parseOfftext(def), text2, ($$invalidate(8, tags), $$invalidate(6, def)));
      }
      if ($$self.$$.dirty & /*text*/
      512) {
        $:
          $$invalidate(5, rendertext = text2.replace(/\[\[([^\]]+)\]\]/g, "<span class=refer>$1</span>"));
      }
      if ($$self.$$.dirty & /*tags*/
      256) {
        $:
          $$invalidate(4, e = tags.filter((it) => it.name == "e")[0]);
      }
    };
    return [gowikipedia, gorefer, src, showwiki, e, rendertext, def, ptk, tags, text2];
  }
  var Dictpopup = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment8, safe_not_equal, {
        def: 6,
        ptk: 7,
        gowikipedia: 0,
        gorefer: 1
      });
    }
    get gowikipedia() {
      return this.$$.ctx[0];
    }
    get gorefer() {
      return this.$$.ctx[1];
    }
  };
  var dictpopup_default = Dictpopup;

  // ../ptk/align/breaker.ts
  var SENTENCESEP = String.fromCodePoint(12287);
  var SENTENCESEP1 = String.fromCodePoint(12286);

  // ../ptk/utils/diff.ts
  var import_colors = __toESM(require_colors(), 1);

  // src/sentencenav.svelte
  function create_key_block2(ctx) {
    let div;
    let span0;
    let t1;
    let t2;
    let t3;
    let span1;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        span0 = element("span");
        span0.textContent = "\u2190";
        t1 = space();
        t2 = text(
          /*humanaddr*/
          ctx[0]
        );
        t3 = space();
        span1 = element("span");
        span1.textContent = "\u2192";
        attr(span0, "class", "toctext");
        attr(span1, "class", "toctext");
        attr(div, "class", "nav svelte-82p8iw");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(div, t1);
        append(div, t2);
        append(div, t3);
        append(div, span1);
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*prevSentence*/
              ctx[2]
            ),
            listen(
              span1,
              "click",
              /*nextSentence*/
              ctx[1]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*humanaddr*/
        1)
          set_data(
            t2,
            /*humanaddr*/
            ctx2[0]
          );
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment9(ctx) {
    let previous_key = (
      /*humanaddr*/
      ctx[0]
    );
    let key_block_anchor;
    let key_block = create_key_block2(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*humanaddr*/
        1 && safe_not_equal(previous_key, previous_key = /*humanaddr*/
        ctx2[0])) {
          key_block.d(1);
          key_block = create_key_block2(ctx2);
          key_block.c();
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function instance10($$self, $$props, $$invalidate) {
    let { ptk } = $$props;
    let { address } = $$props;
    let humanaddr = "", hl, addr, act, chunklines, ckid;
    let maxchunk = 0;
    const getHumanAddress = async (address2) => {
      addr = parseAddress(address2);
      hl = addr.highlightline;
      act = parseAction(addr.action);
      const r = ptk.rangeOfAddress(act[0].join("#"));
      const ck = ptk.defines.ck;
      const at = bsearchNumber(ck.linepos, r[1]) - 1;
      maxchunk = parseInt(ck.fields.id.values[at]);
      ckid = parseInt(act[act.length - 1][1]);
      $$invalidate(0, humanaddr = styledNumber(ckid) + (hl ? hl : ""));
      chunklines = await ptk.fetchAddress(addr.action);
    };
    const nextSentence = () => {
      let action = addr.action;
      if (hl < chunklines.length - 1) {
        hl++;
      } else {
        if (ckid < maxchunk) {
          action = act[0].join("#") + ".ck#" + (ckid + 1);
          hl = 1;
        }
      }
      $$invalidate(3, address = makeAddress("", action, 0, 0, hl));
    };
    const prevSentence = async () => {
      let action = addr.action;
      if (hl > 1) {
        hl--;
      } else {
        if (ckid > 1) {
          action = act[0].join("#") + ".ck#" + (ckid - 1);
          chunklines = await ptk.fetchAddress(action);
          hl = chunklines.length - 1;
        }
      }
      $$invalidate(3, address = makeAddress("", action, 0, 0, hl));
    };
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(4, ptk = $$props2.ptk);
      if ("address" in $$props2)
        $$invalidate(3, address = $$props2.address);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*address*/
      8) {
        $:
          getHumanAddress(address);
      }
    };
    return [humanaddr, nextSentence, prevSentence, address, ptk];
  }
  var Sentencenav = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment9, safe_not_equal, { ptk: 4, address: 3 });
    }
  };
  var sentencenav_default = Sentencenav;

  // src/translations.svelte
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    return child_ctx;
  }
  function create_each_block3(ctx) {
    let div0;
    let span;
    let t0_value = (
      /*getBookTitle*/
      ctx[4](
        /*item*/
        ctx[18].ptk,
        /*item*/
        ctx[18].heading?.bk?.at
      ) + ""
    );
    let t0;
    let t1_value = (
      /*hasfolio*/
      ctx[6](
        /*item*/
        ctx[18].ptk
      ) ? "\u2190" : " "
    );
    let t1;
    let t2_value = (
      /*puretext*/
      ctx[7](
        /*item*/
        ctx[18].linetext
      ) + ""
    );
    let t2;
    let t3;
    let div1;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[10](
          /*item*/
          ctx[18]
        )
      );
    }
    return {
      c() {
        div0 = element("div");
        span = element("span");
        t0 = text(t0_value);
        t1 = text(t1_value);
        t2 = text(t2_value);
        t3 = space();
        div1 = element("div");
        attr(span, "class", "clickable author");
        toggle_class(
          div0,
          "selecteditem",
          /*item*/
          ctx[18].heading?.bk?.at == /*$activebook*/
          ctx[3]
        );
        attr(div1, "class", "hr");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, span);
        append(span, t0);
        append(span, t1);
        append(div0, t2);
        insert(target, t3, anchor);
        insert(target, div1, anchor);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*translations*/
        4 && t0_value !== (t0_value = /*getBookTitle*/
        ctx[4](
          /*item*/
          ctx[18].ptk,
          /*item*/
          ctx[18].heading?.bk?.at
        ) + ""))
          set_data(t0, t0_value);
        if (dirty & /*translations*/
        4 && t1_value !== (t1_value = /*hasfolio*/
        ctx[6](
          /*item*/
          ctx[18].ptk
        ) ? "\u2190" : " "))
          set_data(t1, t1_value);
        if (dirty & /*translations*/
        4 && t2_value !== (t2_value = /*puretext*/
        ctx[7](
          /*item*/
          ctx[18].linetext
        ) + ""))
          set_data(t2, t2_value);
        if (dirty & /*translations, $activebook*/
        12) {
          toggle_class(
            div0,
            "selecteditem",
            /*item*/
            ctx[18].heading?.bk?.at == /*$activebook*/
            ctx[3]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(div1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment10(ctx) {
    let div2;
    let sentencenav0;
    let updating_address;
    let t0;
    let div0;
    let t1;
    let t2;
    let sentencenav1;
    let updating_address_1;
    let t3;
    let div1;
    let current;
    function sentencenav0_address_binding(value) {
      ctx[9](value);
    }
    let sentencenav0_props = { ptk: (
      /*ptk*/
      ctx[1]
    ) };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      sentencenav0_props.address = /*address*/
      ctx[0];
    }
    sentencenav0 = new sentencenav_default({ props: sentencenav0_props });
    binding_callbacks.push(() => bind(sentencenav0, "address", sentencenav0_address_binding));
    let each_value = (
      /*translations*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
    }
    function sentencenav1_address_binding(value) {
      ctx[11](value);
    }
    let sentencenav1_props = { ptk: (
      /*ptk*/
      ctx[1]
    ) };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      sentencenav1_props.address = /*address*/
      ctx[0];
    }
    sentencenav1 = new sentencenav_default({ props: sentencenav1_props });
    binding_callbacks.push(() => bind(sentencenav1, "address", sentencenav1_address_binding));
    return {
      c() {
        div2 = element("div");
        create_component(sentencenav0.$$.fragment);
        t0 = space();
        div0 = element("div");
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        create_component(sentencenav1.$$.fragment);
        t3 = space();
        div1 = element("div");
        div1.textContent = "\u203B\u203B\u203B";
        attr(div0, "class", "hr");
        attr(div1, "class", "endmarker");
        attr(div2, "class", "paralleltext");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        mount_component(sentencenav0, div2, null);
        append(div2, t0);
        append(div2, div0);
        append(div2, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div2, null);
          }
        }
        append(div2, t2);
        mount_component(sentencenav1, div2, null);
        append(div2, t3);
        append(div2, div1);
        current = true;
      },
      p(ctx2, [dirty]) {
        const sentencenav0_changes = {};
        if (dirty & /*ptk*/
        2)
          sentencenav0_changes.ptk = /*ptk*/
          ctx2[1];
        if (!updating_address && dirty & /*address*/
        1) {
          updating_address = true;
          sentencenav0_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address = false);
        }
        sentencenav0.$set(sentencenav0_changes);
        if (dirty & /*translations, $activebook, puretext, goFolio, hasfolio, getBookTitle*/
        252) {
          each_value = /*translations*/
          ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context3(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block3(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div2, t2);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        const sentencenav1_changes = {};
        if (dirty & /*ptk*/
        2)
          sentencenav1_changes.ptk = /*ptk*/
          ctx2[1];
        if (!updating_address_1 && dirty & /*address*/
        1) {
          updating_address_1 = true;
          sentencenav1_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address_1 = false);
        }
        sentencenav1.$set(sentencenav1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sentencenav0.$$.fragment, local);
        transition_in(sentencenav1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sentencenav0.$$.fragment, local);
        transition_out(sentencenav1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        destroy_component(sentencenav0);
        destroy_each(each_blocks, detaching);
        destroy_component(sentencenav1);
      }
    };
  }
  function instance11($$self, $$props, $$invalidate) {
    let start;
    let end;
    let _from;
    let _till;
    let lineoff;
    let $activebook;
    component_subscribe($$self, activebook, ($$value) => $$invalidate(3, $activebook = $$value));
    let { closePopup = function() {
    } } = $$props;
    let { address } = $$props;
    let { ptk } = $$props;
    let translations = [];
    const getBookTitle = (ptk2, nbk) => {
      const bk = ptk2.defines.bk;
      const heading = bk.fields.heading.values[nbk];
      return heading;
    };
    const goFolio = (ptk2, line) => {
      const pb = ptk2.defines.pb;
      const bk = ptk2.defines.bk;
      const folio = ptk2.defines.folio;
      if (!pb)
        return;
      const pbat = ptk2.nearestTag(line + 1, "pb") - 1;
      const bkat = ptk2.nearestTag(line + 1, "bk") - 1;
      const folioat = ptk2.nearestTag(line + 1, "folio") - 1;
      const pbid = pb.fields.id.values[pbat];
      activebook.set(bkat);
      activebookid.set(folio.fields.id.values[folioat]);
      activefolio.set(parseInt(pbid) - 1);
      activePtk.set(ptk2.name);
      closePopup();
    };
    const hasfolio = (ptk2, line) => {
      const folioat = ptk2.nearestTag(line + 1, "folio");
      return folioat > -1;
    };
    const puretext = (_text) => {
      const [text2] = parseOfftext(_text);
      return text2;
    };
    const updateTranslation = async (address2) => {
      $$invalidate(2, translations = await getParallelLines(ptk, start + lineoff));
    };
    function sentencenav0_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    const click_handler = (item) => goFolio(item.ptk, item.line);
    function sentencenav1_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(8, closePopup = $$props2.closePopup);
      if ("address" in $$props2)
        $$invalidate(0, address = $$props2.address);
      if ("ptk" in $$props2)
        $$invalidate(1, ptk = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*ptk, address*/
      3) {
        $:
          [start, end, _from, _till, lineoff] = ptk.rangeOfAddress(address);
      }
      if ($$self.$$.dirty & /*address*/
      1) {
        $:
          updateTranslation(address);
      }
    };
    return [
      address,
      ptk,
      translations,
      $activebook,
      getBookTitle,
      goFolio,
      hasfolio,
      puretext,
      closePopup,
      sentencenav0_address_binding,
      click_handler,
      sentencenav1_address_binding
    ];
  }
  var Translations = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment10, safe_not_equal, { closePopup: 8, address: 0, ptk: 1 });
    }
  };
  var translations_default = Translations;

  // src/variorum.svelte
  function create_fragment11(ctx) {
    let div1;
    let sentencenav0;
    let updating_address;
    let t0;
    let html_tag;
    let t1;
    let sentencenav1;
    let updating_address_1;
    let t2;
    let div0;
    let current;
    function sentencenav0_address_binding(value) {
      ctx[3](value);
    }
    let sentencenav0_props = { ptk: (
      /*ptk*/
      ctx[1]
    ) };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      sentencenav0_props.address = /*address*/
      ctx[0];
    }
    sentencenav0 = new sentencenav_default({ props: sentencenav0_props });
    binding_callbacks.push(() => bind(sentencenav0, "address", sentencenav0_address_binding));
    function sentencenav1_address_binding(value) {
      ctx[4](value);
    }
    let sentencenav1_props = { ptk: (
      /*ptk*/
      ctx[1]
    ) };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      sentencenav1_props.address = /*address*/
      ctx[0];
    }
    sentencenav1 = new sentencenav_default({ props: sentencenav1_props });
    binding_callbacks.push(() => bind(sentencenav1, "address", sentencenav1_address_binding));
    return {
      c() {
        div1 = element("div");
        create_component(sentencenav0.$$.fragment);
        t0 = space();
        html_tag = new HtmlTag(false);
        t1 = space();
        create_component(sentencenav1.$$.fragment);
        t2 = space();
        div0 = element("div");
        div0.textContent = "\u203B\u203B\u203B";
        html_tag.a = t1;
        attr(div0, "class", "endmarker");
        attr(div1, "class", "toctext");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        mount_component(sentencenav0, div1, null);
        append(div1, t0);
        html_tag.m(
          /*text*/
          ctx[2],
          div1
        );
        append(div1, t1);
        mount_component(sentencenav1, div1, null);
        append(div1, t2);
        append(div1, div0);
        current = true;
      },
      p(ctx2, [dirty]) {
        const sentencenav0_changes = {};
        if (dirty & /*ptk*/
        2)
          sentencenav0_changes.ptk = /*ptk*/
          ctx2[1];
        if (!updating_address && dirty & /*address*/
        1) {
          updating_address = true;
          sentencenav0_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address = false);
        }
        sentencenav0.$set(sentencenav0_changes);
        if (!current || dirty & /*text*/
        4)
          html_tag.p(
            /*text*/
            ctx2[2]
          );
        const sentencenav1_changes = {};
        if (dirty & /*ptk*/
        2)
          sentencenav1_changes.ptk = /*ptk*/
          ctx2[1];
        if (!updating_address_1 && dirty & /*address*/
        1) {
          updating_address_1 = true;
          sentencenav1_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address_1 = false);
        }
        sentencenav1.$set(sentencenav1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(sentencenav0.$$.fragment, local);
        transition_in(sentencenav1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sentencenav0.$$.fragment, local);
        transition_out(sentencenav1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_component(sentencenav0);
        destroy_component(sentencenav1);
      }
    };
  }
  function instance12($$self, $$props, $$invalidate) {
    let { ptk } = $$props;
    let { address } = $$props;
    let text2 = "";
    const updateVariorum = async (address2) => {
      const r = ptk.defines.r;
      if (!r)
        return;
      const addr = parseAddress(address2);
      const act = parseAction(addr.action);
      const id = act[act.length - 1][1] + ":" + addr.highlightline;
      let at = r.fields.id.values.indexOf(id);
      if (~at) {
        const from = r.linepos[at];
        let to = r.linepos[at + 1];
        at++;
        while (to == from) {
          at++;
          to = r.linepos[at];
        }
        await ptk.loadLines([[from, to + 1]]);
        const lines = ptk.slice(from, to + 1);
        if (lines[lines.length - 1].indexOf("^ck"))
          lines.pop();
        lines[0] = '<div class="sourcetext">' + lines[0].replace(/\^r(\d+):/g, (m4, m1) => styledNumber(m1)) + "</div>";
        $$invalidate(2, text2 = lines.join("<br/>"));
      }
    };
    function sentencenav0_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    function sentencenav1_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(1, ptk = $$props2.ptk);
      if ("address" in $$props2)
        $$invalidate(0, address = $$props2.address);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*address*/
      1) {
        $:
          updateVariorum(address);
      }
    };
    return [address, ptk, text2, sentencenav0_address_binding, sentencenav1_address_binding];
  }
  var Variorum = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment11, safe_not_equal, { ptk: 1, address: 0 });
    }
  };
  var variorum_default = Variorum;

  // src/toc.svelte
  function get_each_context4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
  }
  function create_each_block4(ctx) {
    let div;
    let t_value = styledNumber(
      /*item*/
      ctx[9].id,
      "\u2460"
    ) + /*item*/
    ctx[9].caption + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[6](
          /*item*/
          ctx[9]
        )
      );
    }
    return {
      c() {
        div = element("div");
        t = text(t_value);
        attr(div, "class", "tocitem");
        toggle_class(
          div,
          "selecteditem",
          /*cknow*/
          ctx[1] == /*item*/
          ctx[9].id
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
        if (!mounted) {
          dispose = listen(div, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*tocitems*/
        1 && t_value !== (t_value = styledNumber(
          /*item*/
          ctx[9].id,
          "\u2460"
        ) + /*item*/
        ctx[9].caption + ""))
          set_data(t, t_value);
        if (dirty & /*cknow, tocitems*/
        3) {
          toggle_class(
            div,
            "selecteditem",
            /*cknow*/
            ctx[1] == /*item*/
            ctx[9].id
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment12(ctx) {
    let div1;
    let t0;
    let div0;
    let each_value = (
      /*tocitems*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
    }
    return {
      c() {
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        div0 = element("div");
        div0.textContent = "\u203B\u203B\u203B";
        attr(div0, "class", "endmarker");
        attr(div1, "class", "toctext");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div1, t0);
        append(div1, div0);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*cknow, tocitems, gofolio, styledNumber*/
        7) {
          each_value = /*tocitems*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context4(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block4(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div1, t0);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance13($$self, $$props, $$invalidate) {
    let { ptk } = $$props;
    let { address } = $$props;
    let { closePopup } = $$props;
    let tocitems = [], cknow;
    const getTocItems = (address2) => {
      const m4 = address2.match(/(bk#?[a-z_\d]+)/);
      const out = [];
      const [from, to] = ptk.rangeOfAddress(m4[1]);
      const ck = ptk.defines.ck;
      const at = bsearchNumber(ck.linepos, from);
      const at2 = bsearchNumber(ck.linepos, to);
      for (let i = at; i < at2; i++) {
        out.push({
          caption: ck.innertext.get(i),
          at: i,
          id: ck.fields.id.values[i]
        });
      }
      return out;
    };
    const gofolio = (at) => {
      const ck = ptk.defines.ck;
      const pb = ptk.defines.pb;
      const ckline = ck.linepos[at];
      const pbtag = ptk.nearestTag(ckline + 1, "pb") - 1;
      const pbid = pb.fields.id.values[pbtag];
      activefolio.set(parseInt(pbid) - 1);
      closePopup();
    };
    const getCk = (address2) => {
      const m4 = address2.match(/ck#?(\d+)/);
      if (m4)
        return m4[1];
    };
    const click_handler = (item) => gofolio(item.at);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(3, ptk = $$props2.ptk);
      if ("address" in $$props2)
        $$invalidate(4, address = $$props2.address);
      if ("closePopup" in $$props2)
        $$invalidate(5, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*address*/
      16) {
        $:
          $$invalidate(0, tocitems = getTocItems(address));
      }
      if ($$self.$$.dirty & /*address*/
      16) {
        $:
          $$invalidate(1, cknow = getCk(address));
      }
    };
    return [tocitems, cknow, gofolio, ptk, address, closePopup, click_handler];
  }
  var Toc = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment12, safe_not_equal, { ptk: 3, address: 4, closePopup: 5 });
    }
  };
  var toc_default = Toc;

  // src/taptext.svelte
  function create_if_block_12(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = "\u8A5E";
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "dict"
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_3*/
            ctx[10]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx2[2] == "dict"
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block4(ctx) {
    let div;
    let dictpopup;
    let current;
    dictpopup = new dictpopup_default({
      props: { def: (
        /*def*/
        ctx[3]
      ), ptk: (
        /*ptk*/
        ctx[4]
      ) }
    });
    return {
      c() {
        div = element("div");
        create_component(dictpopup.$$.fragment);
        attr(div, "class", "tab-content");
        toggle_class(
          div,
          "visible",
          /*thetab*/
          ctx[2] == "dict"
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(dictpopup, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const dictpopup_changes = {};
        if (dirty & /*def*/
        8)
          dictpopup_changes.def = /*def*/
          ctx2[3];
        if (dirty & /*ptk*/
        16)
          dictpopup_changes.ptk = /*ptk*/
          ctx2[4];
        dictpopup.$set(dictpopup_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div,
            "visible",
            /*thetab*/
            ctx2[2] == "dict"
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(dictpopup.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(dictpopup.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(dictpopup);
      }
    };
  }
  function create_fragment13(ctx) {
    let div4;
    let div0;
    let span0;
    let t1;
    let span1;
    let t3;
    let span2;
    let t5;
    let t6;
    let div1;
    let toc;
    let t7;
    let div2;
    let translations;
    let updating_address;
    let t8;
    let div3;
    let variorum;
    let updating_address_1;
    let t9;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*def*/
      ctx[3] && create_if_block_12(ctx)
    );
    toc = new toc_default({
      props: {
        address: (
          /*address*/
          ctx[0]
        ),
        closePopup: (
          /*closePopup*/
          ctx[1]
        ),
        ptk: (
          /*ptk*/
          ctx[4]
        )
      }
    });
    function translations_address_binding(value) {
      ctx[11](value);
    }
    let translations_props = {
      closePopup: (
        /*closePopup*/
        ctx[1]
      ),
      ptk: (
        /*ptk*/
        ctx[4]
      )
    };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      translations_props.address = /*address*/
      ctx[0];
    }
    translations = new translations_default({ props: translations_props });
    binding_callbacks.push(() => bind(translations, "address", translations_address_binding));
    function variorum_address_binding(value) {
      ctx[12](value);
    }
    let variorum_props = {
      closePopup: (
        /*closePopup*/
        ctx[1]
      ),
      ptk: (
        /*ptk*/
        ctx[4]
      )
    };
    if (
      /*address*/
      ctx[0] !== void 0
    ) {
      variorum_props.address = /*address*/
      ctx[0];
    }
    variorum = new variorum_default({ props: variorum_props });
    binding_callbacks.push(() => bind(variorum, "address", variorum_address_binding));
    let if_block1 = (
      /*def*/
      ctx[3] && create_if_block4(ctx)
    );
    return {
      c() {
        div4 = element("div");
        div0 = element("div");
        span0 = element("span");
        span0.textContent = "\u5206";
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u8B6F";
        t3 = space();
        span2 = element("span");
        span2.textContent = "\u8A3B";
        t5 = space();
        if (if_block0)
          if_block0.c();
        t6 = space();
        div1 = element("div");
        create_component(toc.$$.fragment);
        t7 = space();
        div2 = element("div");
        create_component(translations.$$.fragment);
        t8 = space();
        div3 = element("div");
        create_component(variorum.$$.fragment);
        t9 = space();
        if (if_block1)
          if_block1.c();
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "selected",
          /*thetab*/
          ctx[2] == "toc"
        );
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*thetab*/
          ctx[2] == "translations"
        );
        attr(span2, "class", "clickable");
        toggle_class(
          span2,
          "selected",
          /*thetab*/
          ctx[2] == "variorum"
        );
        attr(div0, "class", "tabs");
        attr(div1, "class", "tab-content");
        toggle_class(
          div1,
          "visible",
          /*thetab*/
          ctx[2] == "toc"
        );
        attr(div2, "class", "tab-content");
        toggle_class(
          div2,
          "visible",
          /*thetab*/
          ctx[2] == "translations"
        );
        attr(div3, "class", "tab-content");
        toggle_class(
          div3,
          "visible",
          /*thetab*/
          ctx[2] == "variorum"
        );
        attr(div4, "class", "popup");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div0);
        append(div0, span0);
        append(div0, t1);
        append(div0, span1);
        append(div0, t3);
        append(div0, span2);
        append(div0, t5);
        if (if_block0)
          if_block0.m(div0, null);
        append(div4, t6);
        append(div4, div1);
        mount_component(toc, div1, null);
        append(div4, t7);
        append(div4, div2);
        mount_component(translations, div2, null);
        append(div4, t8);
        append(div4, div3);
        mount_component(variorum, div3, null);
        append(div4, t9);
        if (if_block1)
          if_block1.m(div4, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*click_handler*/
              ctx[7]
            ),
            listen(
              span1,
              "click",
              /*click_handler_1*/
              ctx[8]
            ),
            listen(
              span2,
              "click",
              /*click_handler_2*/
              ctx[9]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span0,
            "selected",
            /*thetab*/
            ctx2[2] == "toc"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span1,
            "selected",
            /*thetab*/
            ctx2[2] == "translations"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span2,
            "selected",
            /*thetab*/
            ctx2[2] == "variorum"
          );
        }
        if (
          /*def*/
          ctx2[3]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_12(ctx2);
            if_block0.c();
            if_block0.m(div0, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        const toc_changes = {};
        if (dirty & /*address*/
        1)
          toc_changes.address = /*address*/
          ctx2[0];
        if (dirty & /*closePopup*/
        2)
          toc_changes.closePopup = /*closePopup*/
          ctx2[1];
        if (dirty & /*ptk*/
        16)
          toc_changes.ptk = /*ptk*/
          ctx2[4];
        toc.$set(toc_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div1,
            "visible",
            /*thetab*/
            ctx2[2] == "toc"
          );
        }
        const translations_changes = {};
        if (dirty & /*closePopup*/
        2)
          translations_changes.closePopup = /*closePopup*/
          ctx2[1];
        if (dirty & /*ptk*/
        16)
          translations_changes.ptk = /*ptk*/
          ctx2[4];
        if (!updating_address && dirty & /*address*/
        1) {
          updating_address = true;
          translations_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address = false);
        }
        translations.$set(translations_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div2,
            "visible",
            /*thetab*/
            ctx2[2] == "translations"
          );
        }
        const variorum_changes = {};
        if (dirty & /*closePopup*/
        2)
          variorum_changes.closePopup = /*closePopup*/
          ctx2[1];
        if (dirty & /*ptk*/
        16)
          variorum_changes.ptk = /*ptk*/
          ctx2[4];
        if (!updating_address_1 && dirty & /*address*/
        1) {
          updating_address_1 = true;
          variorum_changes.address = /*address*/
          ctx2[0];
          add_flush_callback(() => updating_address_1 = false);
        }
        variorum.$set(variorum_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div3,
            "visible",
            /*thetab*/
            ctx2[2] == "variorum"
          );
        }
        if (
          /*def*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & /*def*/
            8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block4(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div4, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(toc.$$.fragment, local);
        transition_in(translations.$$.fragment, local);
        transition_in(variorum.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(toc.$$.fragment, local);
        transition_out(translations.$$.fragment, local);
        transition_out(variorum.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div4);
        if (if_block0)
          if_block0.d();
        destroy_component(toc);
        destroy_component(translations);
        destroy_component(variorum);
        if (if_block1)
          if_block1.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance14($$self, $$props, $$invalidate) {
    let $activePtk;
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(6, $activePtk = $$value));
    let { tofind = "" } = $$props;
    let { address = "" } = $$props;
    let { closePopup } = $$props;
    let thetab = "translations";
    let def = "", ptk;
    const onDict = async (t) => {
      const entry = guessEntry(t, ptk.defines.e.fields.id.values);
      const defs = await ptk.fetchAddress("e#" + entry);
      if (defs.length) {
        $$invalidate(3, def = defs.join("\n"));
        showdict = true;
        showmainmenu = false;
        $$invalidate(2, thetab = "dict");
      }
    };
    const click_handler = () => $$invalidate(2, thetab = "toc");
    const click_handler_1 = () => $$invalidate(2, thetab = "translations");
    const click_handler_2 = () => $$invalidate(2, thetab = "variorum");
    const click_handler_3 = () => $$invalidate(2, thetab = "dict");
    function translations_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    function variorum_address_binding(value) {
      address = value;
      $$invalidate(0, address);
    }
    $$self.$$set = ($$props2) => {
      if ("tofind" in $$props2)
        $$invalidate(5, tofind = $$props2.tofind);
      if ("address" in $$props2)
        $$invalidate(0, address = $$props2.address);
      if ("closePopup" in $$props2)
        $$invalidate(1, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$activePtk*/
      64) {
        $:
          $$invalidate(4, ptk = usePtk($activePtk));
      }
      if ($$self.$$.dirty & /*tofind*/
      32) {
        $:
          onDict(tofind);
      }
    };
    return [
      address,
      closePopup,
      thetab,
      def,
      ptk,
      tofind,
      $activePtk,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      translations_address_binding,
      variorum_address_binding
    ];
  }
  var Taptext = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance14, create_fragment13, safe_not_equal, { tofind: 5, address: 0, closePopup: 1 });
    }
  };
  var taptext_default = Taptext;

  // src/app.svelte
  function create_else_block2(ctx) {
    let t;
    return {
      c() {
        t = text("LOADING");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block5(ctx) {
    let swipevideo;
    let t0;
    let t1;
    let current_block_type_index;
    let if_block1;
    let if_block1_anchor;
    let current;
    swipevideo = new swipevideo_default({
      props: {
        src: (
          /*$activebookid*/
          ctx[7] + /*$isAndroid*/
          (ctx[6] ? ".webm" : ".mp4")
        ),
        ptk: (
          /*ptk*/
          ctx[0]
        ),
        onTapText: (
          /*onTapText*/
          ctx[10]
        ),
        onMainmenu: (
          /*onMainmenu*/
          ctx[9]
        )
      }
    });
    let if_block0 = (
      /*showdict*/
      (ctx[2] || /*showmainmenu*/
      ctx[5]) && create_if_block_3(ctx)
    );
    const if_block_creators = [create_if_block_13, create_if_block_2];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (
        /*showdict*/
        ctx2[2]
      )
        return 0;
      if (
        /*showmainmenu*/
        ctx2[5] && /*ptk*/
        ctx2[0]
      )
        return 1;
      return -1;
    }
    if (~(current_block_type_index = select_block_type_1(ctx, -1))) {
      if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    return {
      c() {
        create_component(swipevideo.$$.fragment);
        t0 = space();
        if (if_block0)
          if_block0.c();
        t1 = space();
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      m(target, anchor) {
        mount_component(swipevideo, target, anchor);
        insert(target, t0, anchor);
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t1, anchor);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].m(target, anchor);
        }
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const swipevideo_changes = {};
        if (dirty & /*$activebookid, $isAndroid*/
        192)
          swipevideo_changes.src = /*$activebookid*/
          ctx2[7] + /*$isAndroid*/
          (ctx2[6] ? ".webm" : ".mp4");
        if (dirty & /*ptk*/
        1)
          swipevideo_changes.ptk = /*ptk*/
          ctx2[0];
        swipevideo.$set(swipevideo_changes);
        if (
          /*showdict*/
          ctx2[2] || /*showmainmenu*/
          ctx2[5]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_3(ctx2);
            if_block0.c();
            if_block0.m(t1.parentNode, t1);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if (~current_block_type_index) {
            if_blocks[current_block_type_index].p(ctx2, dirty);
          }
        } else {
          if (if_block1) {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, () => {
              if_blocks[previous_block_index] = null;
            });
            check_outros();
          }
          if (~current_block_type_index) {
            if_block1 = if_blocks[current_block_type_index];
            if (!if_block1) {
              if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
              if_block1.c();
            } else {
              if_block1.p(ctx2, dirty);
            }
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          } else {
            if_block1 = null;
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(swipevideo.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(swipevideo.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        destroy_component(swipevideo, detaching);
        if (detaching)
          detach(t0);
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t1);
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].d(detaching);
        }
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  function create_if_block_3(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = "\u2573";
        attr(span, "class", "closepopup svelte-1nttugc");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*closePopup*/
            ctx[8]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_2(ctx) {
    let mainmenu;
    let current;
    mainmenu = new mainmenu_default({
      props: {
        ptk: (
          /*ptk*/
          ctx[0]
        ),
        onclose: (
          /*closePopup*/
          ctx[8]
        )
      }
    });
    return {
      c() {
        create_component(mainmenu.$$.fragment);
      },
      m(target, anchor) {
        mount_component(mainmenu, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const mainmenu_changes = {};
        if (dirty & /*ptk*/
        1)
          mainmenu_changes.ptk = /*ptk*/
          ctx2[0];
        mainmenu.$set(mainmenu_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(mainmenu.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(mainmenu.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(mainmenu, detaching);
      }
    };
  }
  function create_if_block_13(ctx) {
    let taptext;
    let current;
    taptext = new taptext_default({
      props: {
        address: (
          /*address*/
          ctx[3]
        ),
        tofind: (
          /*tofind*/
          ctx[4]
        ),
        closePopup: (
          /*closePopup*/
          ctx[8]
        )
      }
    });
    return {
      c() {
        create_component(taptext.$$.fragment);
      },
      m(target, anchor) {
        mount_component(taptext, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const taptext_changes = {};
        if (dirty & /*address*/
        8)
          taptext_changes.address = /*address*/
          ctx2[3];
        if (dirty & /*tofind*/
        16)
          taptext_changes.tofind = /*tofind*/
          ctx2[4];
        taptext.$set(taptext_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(taptext.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(taptext.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(taptext, detaching);
      }
    };
  }
  function create_fragment14(ctx) {
    let div;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block5, create_else_block2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*loaded*/
        ctx2[1]
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "app svelte-1nttugc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_blocks[current_block_type_index].m(div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function instance15($$self, $$props, $$invalidate) {
    let $isAndroid;
    let $activebookid;
    component_subscribe($$self, isAndroid, ($$value) => $$invalidate(6, $isAndroid = $$value));
    component_subscribe($$self, activebookid, ($$value) => $$invalidate(7, $activebookid = $$value));
    let ptk;
    registerServiceWorker();
    isAndroid.set(!!navigator.userAgent.match(/Android/i));
    console.log($isAndroid);
    let loaded = false;
    onMount(async () => {
      $$invalidate(0, ptk = await openPtk("dc"));
      await openPtk("dc_sanskrit");
      $$invalidate(1, loaded = true);
    });
    let showdict2 = false, address = "", tofind = "", showmainmenu2 = false;
    const closePopup = () => {
      $$invalidate(2, showdict2 = false);
      $$invalidate(5, showmainmenu2 = false);
    };
    const onMainmenu = () => {
      $$invalidate(2, showdict2 = false);
      $$invalidate(5, showmainmenu2 = true);
    };
    const onTapText = (t, _address, ptkname) => {
      $$invalidate(2, showdict2 = true);
      $$invalidate(4, tofind = t);
      $$invalidate(5, showmainmenu2 = false);
      $$invalidate(3, address = _address);
      $$invalidate(0, ptk = usePtk(ptkname));
    };
    return [
      ptk,
      loaded,
      showdict2,
      address,
      tofind,
      showmainmenu2,
      $isAndroid,
      $activebookid,
      closePopup,
      onMainmenu,
      onTapText
    ];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance15, create_fragment14, safe_not_equal, {});
    }
  };
  var app_default = App;

  // src/index.ts
  var app = new app_default({ target: document.body });
  document.querySelector("#bootmessage").innerHTML = "";
  var src_default = app;
})();
