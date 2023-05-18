(() => {
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
  function element(name) {
    return document.createElement(name);
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
  var crossorigin;
  function is_crossorigin() {
    if (crossorigin === void 0) {
      crossorigin = false;
      try {
        if (typeof window !== "undefined" && window.parent) {
          void window.parent.document;
        }
      } catch (error) {
        crossorigin = true;
      }
    }
    return crossorigin;
  }
  function add_iframe_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === "static") {
      node.style.position = "relative";
    }
    const iframe = element("iframe");
    iframe.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
    iframe.setAttribute("aria-hidden", "true");
    iframe.tabIndex = -1;
    const crossorigin2 = is_crossorigin();
    let unsubscribe;
    if (crossorigin2) {
      iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>";
      unsubscribe = listen(window, "message", (event) => {
        if (event.source === iframe.contentWindow)
          fn();
      });
    } else {
      iframe.src = "about:blank";
      iframe.onload = () => {
        unsubscribe = listen(iframe.contentWindow, "resize", fn);
        fn();
      };
    }
    append(node, iframe);
    return () => {
      if (crossorigin2) {
        unsubscribe();
      } else if (unsubscribe && iframe.contentWindow) {
        unsubscribe();
      }
      detach(iframe);
    };
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
  }
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
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
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
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
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
  function init(component, options, instance5, create_fragment5, not_equal, props, append_styles, dirty = [-1]) {
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
    $$.ctx = instance5 ? instance5(component, options.props || {}, (i, ret, ...rest) => {
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
    $$.fragment = create_fragment5 ? create_fragment5($$.ctx) : false;
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

  // src/3rd/swipe.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[45] = list[i];
    child_ctx[47] = i;
    return child_ctx;
  }
  function create_if_block(ctx) {
    let div;
    let each_value = (
      /*indicators*/
      ctx[2]
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
        attr(div, "class", "swipe-indicator swipe-indicator-inside svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*activeIndicator, changeItem, indicators*/
        38) {
          each_value = /*indicators*/
          ctx2[2];
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
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block(ctx) {
    let span;
    let span_class_value;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[21](
          /*i*/
          ctx[47]
        )
      );
    }
    return {
      c() {
        span = element("span");
        attr(span, "class", span_class_value = "dot " + /*activeIndicator*/
        (ctx[1] == /*i*/
        ctx[47] ? "is-active" : "") + " svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*activeIndicator*/
        2 && span_class_value !== (span_class_value = "dot " + /*activeIndicator*/
        (ctx[1] == /*i*/
        ctx[47] ? "is-active" : "") + " svelte-17g4ceu")) {
          attr(span, "class", span_class_value);
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
  function create_fragment(ctx) {
    let div4;
    let div2;
    let div1;
    let div0;
    let t0;
    let div3;
    let t1;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = (
      /*#slots*/
      ctx[19].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[18],
      null
    );
    let if_block = (
      /*showIndicators*/
      ctx[0] && create_if_block(ctx)
    );
    return {
      c() {
        div4 = element("div");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        t0 = space();
        div3 = element("div");
        t1 = space();
        if (if_block)
          if_block.c();
        attr(div0, "class", "swipeable-slot-wrapper svelte-17g4ceu");
        attr(div1, "class", "swipeable-total_elements svelte-17g4ceu");
        attr(div2, "class", "swipe-item-wrapper svelte-17g4ceu");
        attr(div3, "class", "swipe-handler svelte-17g4ceu");
        attr(div4, "class", "swipe-panel svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div2);
        append(div2, div1);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        ctx[20](div2);
        append(div4, t0);
        append(div4, div3);
        append(div4, t1);
        if (if_block)
          if_block.m(div4, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div3,
              "touchstart",
              /*onMoveStart*/
              ctx[4]
            ),
            listen(
              div3,
              "mousedown",
              /*onMoveStart*/
              ctx[4]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[0] & /*$$scope*/
          262144)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[18],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[18]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[18],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (
          /*showIndicators*/
          ctx2[0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(div4, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
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
          detach(div4);
        if (default_slot)
          default_slot.d(detaching);
        ctx[20](null);
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { transitionDuration = 200 } = $$props;
    let { showIndicators = false } = $$props;
    let { autoplay = false } = $$props;
    let { delay = 1e3 } = $$props;
    let { defaultIndex = 0 } = $$props;
    let { active_item = 0 } = $$props;
    let { is_vertical = false } = $$props;
    let { allow_infinite_swipe = false } = $$props;
    let activeIndicator = 0, indicators, total_elements = 0, availableSpace = 0, availableMeasure = 0, swipeElements, availableDistance = 0, swipeItemsWrapper, swipeWrapper, pos_axis = 0, page_axis = is_vertical ? "pageY" : "pageX", axis, longTouch, last_axis_pos;
    let played;
    let run_interval = false;
    let fire = createEventDispatcher();
    function init2() {
      swipeItemsWrapper = swipeWrapper.querySelector(".swipeable-slot-wrapper");
      swipeElements = swipeItemsWrapper.querySelectorAll(".swipeable-item");
      $$invalidate(16, total_elements = swipeElements.length);
      if (allow_infinite_swipe) {
        swipeItemsWrapper.prepend(swipeElements[total_elements - 1].cloneNode(true));
        swipeItemsWrapper.append(swipeElements[0].cloneNode(true));
        swipeElements = swipeItemsWrapper.querySelectorAll(".swipeable-item");
      }
      update2();
    }
    function update2() {
      let { offsetWidth, offsetHeight } = swipeWrapper.querySelector(".swipeable-total_elements");
      availableSpace = is_vertical ? offsetHeight : offsetWidth;
      setElementsPosition({
        init: true,
        elems: [...swipeElements],
        availableSpace,
        has_infinite_loop: allow_infinite_swipe
      });
      availableDistance = 0;
      availableMeasure = availableSpace * (total_elements - 1);
      if (defaultIndex) {
        changeItem(defaultIndex);
      }
    }
    function setElementsPosition({ elems = [], availableSpace: availableSpace2 = 0, pos_axis: pos_axis2 = 0, has_infinite_loop = false, distance = 0, moving = false, init: init3 = false, end = false, reset = false }) {
      elems.forEach((element2, i) => {
        let idx = has_infinite_loop ? i - 1 : i;
        if (init3) {
          element2.style.transform = generateTranslateValue(availableSpace2 * idx);
        }
        if (moving) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx - distance);
        }
        if (end) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx - pos_axis2, true);
        }
        if (reset) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx - pos_axis2);
        }
      });
    }
    function eventDelegate(type) {
      let delegationTypes = {
        add: "addEventListener",
        remove: "removeEventListener"
      };
      if (typeof window !== "undefined") {
        window[delegationTypes[type]]("mousemove", onMove);
        window[delegationTypes[type]]("mouseup", onEnd);
        window[delegationTypes[type]]("touchmove", onMove, { passive: false });
        window[delegationTypes[type]]("touchend", onEnd, { passive: false });
      }
    }
    function generateTranslateValue(value) {
      return is_vertical ? `translate3d(0, ${value}px, 0)` : `translate3d(${value}px, 0, 0)`;
    }
    function generateTouchPosCss(value, touch_end = false) {
      let transformString = generateTranslateValue(value);
      let _css = `
-webkit-transition-duration: ${touch_end ? transitionDuration : "0"}ms;
transition-duration: ${touch_end ? transitionDuration : "0"}ms;
-webkit-transform: ${transformString};
-ms-transform: ${transformString};`;
      return _css;
    }
    onMount(() => {
      init2();
      if (typeof window !== "undefined") {
        window.addEventListener("resize", update2);
      }
    });
    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", update2);
      }
    });
    let touch_active = false;
    function onMove(e) {
      if (touch_active) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        let _axis = e.touches ? e.touches[0][page_axis] : e[page_axis], distance = axis - _axis + pos_axis;
        if (!allow_infinite_swipe) {
          if (pos_axis == 0 && axis < _axis || pos_axis == availableMeasure && axis > _axis) {
            return;
          }
        }
        e.preventDefault();
        if (distance <= availableMeasure && distance >= 0) {
        }
        setElementsPosition({
          moving: true,
          elems: [...swipeElements],
          availableSpace,
          distance,
          has_infinite_loop: allow_infinite_swipe
        });
        availableDistance = distance;
        last_axis_pos = _axis;
      }
    }
    function onMoveStart(e) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      touch_active = true;
      longTouch = false;
      setTimeout(
        function() {
          longTouch = true;
        },
        250
      );
      axis = e.touches ? e.touches[0][page_axis] : e[page_axis];
      eventDelegate("add");
    }
    function onEnd(e) {
      if (e && e.cancelable) {
        e.preventDefault();
      }
      e && e.stopImmediatePropagation();
      e && e.stopPropagation();
      let direction = axis < last_axis_pos;
      touch_active = false;
      let _as = availableSpace;
      let accidental_touch = Math.round(availableSpace / 50) > Math.abs(axis - last_axis_pos);
      if (longTouch || accidental_touch) {
        availableDistance = Math.round(availableDistance / _as) * _as;
      } else {
        availableDistance = direction ? Math.floor(availableDistance / _as) * _as : Math.ceil(availableDistance / _as) * _as;
      }
      axis = null;
      last_axis_pos = null;
      pos_axis = availableDistance;
      $$invalidate(1, activeIndicator = availableDistance / _as);
      $$invalidate(7, active_item = activeIndicator);
      $$invalidate(6, defaultIndex = active_item);
      setElementsPosition({
        end: true,
        elems: [...swipeElements],
        availableSpace: _as,
        pos_axis,
        has_infinite_loop: allow_infinite_swipe
      });
      if (allow_infinite_swipe) {
        if (active_item === -1) {
          pos_axis = _as * (total_elements - 1);
        }
        if (active_item === total_elements) {
          pos_axis = 0;
        }
        $$invalidate(1, activeIndicator = pos_axis / _as);
        $$invalidate(7, active_item = activeIndicator);
        $$invalidate(6, defaultIndex = active_item);
        setTimeout(
          () => {
            setElementsPosition({
              reset: true,
              elems: [...swipeElements],
              availableSpace: _as,
              pos_axis,
              has_infinite_loop: allow_infinite_swipe
            });
          },
          transitionDuration
        );
      }
      eventDelegate("remove");
      let swipe_direction = direction ? "right" : "left";
      fire("change", {
        active_item,
        swipe_direction,
        active_element: swipeElements[active_item]
      });
    }
    function changeItem(item) {
      let max = availableSpace;
      availableDistance = max * item;
      $$invalidate(1, activeIndicator = item);
      onEnd();
    }
    function changeView() {
      changeItem(played);
      played = played < total_elements - 1 + allow_infinite_swipe ? ++played : 0;
    }
    const mod = (n, m) => (n % m + m) % m;
    function goTo(step) {
      let item = allow_infinite_swipe ? step : Math.max(0, Math.min(step, indicators.length - 1));
      changeItem(item);
    }
    function prevItem() {
      let step = activeIndicator - 1;
      goTo(step);
    }
    function nextItem() {
      let step = activeIndicator + 1;
      goTo(step);
    }
    function div2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        swipeWrapper = $$value;
        $$invalidate(3, swipeWrapper);
      });
    }
    const click_handler = (i) => {
      changeItem(i);
    };
    $$self.$$set = ($$props2) => {
      if ("transitionDuration" in $$props2)
        $$invalidate(8, transitionDuration = $$props2.transitionDuration);
      if ("showIndicators" in $$props2)
        $$invalidate(0, showIndicators = $$props2.showIndicators);
      if ("autoplay" in $$props2)
        $$invalidate(9, autoplay = $$props2.autoplay);
      if ("delay" in $$props2)
        $$invalidate(10, delay = $$props2.delay);
      if ("defaultIndex" in $$props2)
        $$invalidate(6, defaultIndex = $$props2.defaultIndex);
      if ("active_item" in $$props2)
        $$invalidate(7, active_item = $$props2.active_item);
      if ("is_vertical" in $$props2)
        $$invalidate(11, is_vertical = $$props2.is_vertical);
      if ("allow_infinite_swipe" in $$props2)
        $$invalidate(12, allow_infinite_swipe = $$props2.allow_infinite_swipe);
      if ("$$scope" in $$props2)
        $$invalidate(18, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*total_elements*/
      65536) {
        $:
          $$invalidate(2, indicators = Array(total_elements));
      }
      if ($$self.$$.dirty[0] & /*autoplay, run_interval, defaultIndex, active_item, delay*/
      132800) {
        $: {
          if (autoplay && !run_interval) {
            played = defaultIndex || active_item;
            $$invalidate(17, run_interval = setInterval(changeView, delay));
          }
          if (!autoplay && run_interval) {
            clearInterval(run_interval);
            $$invalidate(17, run_interval = false);
          }
        }
      }
    };
    return [
      showIndicators,
      activeIndicator,
      indicators,
      swipeWrapper,
      onMoveStart,
      changeItem,
      defaultIndex,
      active_item,
      transitionDuration,
      autoplay,
      delay,
      is_vertical,
      allow_infinite_swipe,
      goTo,
      prevItem,
      nextItem,
      total_elements,
      run_interval,
      $$scope,
      slots,
      div2_binding,
      click_handler
    ];
  }
  var Swipe = class extends SvelteComponent {
    constructor(options) {
      super();
      init(
        this,
        options,
        instance,
        create_fragment,
        safe_not_equal,
        {
          transitionDuration: 8,
          showIndicators: 0,
          autoplay: 9,
          delay: 10,
          defaultIndex: 6,
          active_item: 7,
          is_vertical: 11,
          allow_infinite_swipe: 12,
          goTo: 13,
          prevItem: 14,
          nextItem: 15
        },
        null,
        [-1, -1]
      );
    }
    get goTo() {
      return this.$$.ctx[13];
    }
    get prevItem() {
      return this.$$.ctx[14];
    }
    get nextItem() {
      return this.$$.ctx[15];
    }
  };
  var swipe_default = Swipe;

  // src/3rd/swipeitem.svelte
  function create_fragment2(ctx) {
    let div1;
    let div0;
    let div1_class_value;
    let div1_resize_listener;
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[7].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[6],
      null
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        attr(div0, "class", "swipeable-item-inner");
        attr(div1, "class", div1_class_value = "swipeable-item " + /*classes*/
        ctx[1] + " " + /*active*/
        (ctx[0] ? "is-active" : "") + " svelte-13ik1fy");
        attr(
          div1,
          "style",
          /*style*/
          ctx[2]
        );
        add_render_callback(() => (
          /*div1_elementresize_handler*/
          ctx[9].call(div1)
        ));
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        ctx[8](div0);
        div1_resize_listener = add_iframe_resize_listener(
          div1,
          /*div1_elementresize_handler*/
          ctx[9].bind(div1)
        );
        current = true;
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          64)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[6],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[6]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[6],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (!current || dirty & /*classes, active*/
        3 && div1_class_value !== (div1_class_value = "swipeable-item " + /*classes*/
        ctx2[1] + " " + /*active*/
        (ctx2[0] ? "is-active" : "") + " svelte-13ik1fy")) {
          attr(div1, "class", div1_class_value);
        }
        if (!current || dirty & /*style*/
        4) {
          attr(
            div1,
            "style",
            /*style*/
            ctx2[2]
          );
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
        ctx[8](null);
        div1_resize_listener();
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { active = false } = $$props;
    let { classes = "" } = $$props;
    let { style = "" } = $$props;
    let { allow_dynamic_height = false } = $$props;
    let swipeItemInner = null;
    let _height = 0;
    const fire = createEventDispatcher();
    function firehHeightChange() {
      if (swipeItemInner) {
        let { scrollHeight, clientHeight } = swipeItemInner;
        fire("swipe_item_height_change", {
          height: Math.max(scrollHeight, clientHeight)
        });
      }
    }
    onMount(() => {
      setTimeout(
        () => {
          allow_dynamic_height && requestAnimationFrame(firehHeightChange);
        },
        100
      );
    });
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        swipeItemInner = $$value;
        $$invalidate(4, swipeItemInner);
      });
    }
    function div1_elementresize_handler() {
      _height = this.clientHeight;
      $$invalidate(3, _height);
    }
    $$self.$$set = ($$props2) => {
      if ("active" in $$props2)
        $$invalidate(0, active = $$props2.active);
      if ("classes" in $$props2)
        $$invalidate(1, classes = $$props2.classes);
      if ("style" in $$props2)
        $$invalidate(2, style = $$props2.style);
      if ("allow_dynamic_height" in $$props2)
        $$invalidate(5, allow_dynamic_height = $$props2.allow_dynamic_height);
      if ("$$scope" in $$props2)
        $$invalidate(6, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*active, allow_dynamic_height, _height*/
      41) {
        $:
          active, allow_dynamic_height && active && _height && requestAnimationFrame(firehHeightChange);
      }
    };
    return [
      active,
      classes,
      style,
      _height,
      swipeItemInner,
      allow_dynamic_height,
      $$scope,
      slots,
      div0_binding,
      div1_elementresize_handler
    ];
  }
  var Swipeitem = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, {
        active: 0,
        classes: 1,
        style: 2,
        allow_dynamic_height: 5
      });
    }
  };
  var swipeitem_default = Swipeitem;

  // src/swipegallery.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  }
  function create_default_slot_1(ctx) {
    let img;
    let img_src_value;
    let t;
    return {
      c() {
        img = element("img");
        t = space();
        if (!src_url_equal(img.src, img_src_value = /*item*/
        ctx[2]))
          attr(img, "src", img_src_value);
        attr(img, "alt", "");
        attr(img, "class", "svelte-lgmlo6");
      },
      m(target, anchor) {
        insert(target, img, anchor);
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*items*/
        1 && !src_url_equal(img.src, img_src_value = /*item*/
        ctx2[2])) {
          attr(img, "src", img_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(img);
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block2(ctx) {
    let swipeitem;
    let current;
    swipeitem = new swipeitem_default({
      props: {
        allow_infinite_swipe: true,
        $$slots: { default: [create_default_slot_1] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(swipeitem.$$.fragment);
      },
      m(target, anchor) {
        mount_component(swipeitem, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const swipeitem_changes = {};
        if (dirty & /*$$scope, items*/
        33) {
          swipeitem_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeitem.$set(swipeitem_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(swipeitem.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipeitem.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(swipeitem, detaching);
      }
    };
  }
  function create_default_slot(ctx) {
    let each_1_anchor;
    let current;
    let each_value = (
      /*items*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
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
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*items*/
        1) {
          each_value = /*items*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment3(ctx) {
    let div;
    let swipe;
    let current;
    const swipe_spread_levels = [
      /*swipeConfig*/
      ctx[1]
    ];
    let swipe_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    };
    for (let i = 0; i < swipe_spread_levels.length; i += 1) {
      swipe_props = assign(swipe_props, swipe_spread_levels[i]);
    }
    swipe = new swipe_default({ props: swipe_props });
    return {
      c() {
        div = element("div");
        create_component(swipe.$$.fragment);
        attr(div, "class", "swipe-holder svelte-lgmlo6");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(swipe, div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const swipe_changes = dirty & /*swipeConfig*/
        2 ? get_spread_update(swipe_spread_levels, [get_spread_object(
          /*swipeConfig*/
          ctx2[1]
        )]) : {};
        if (dirty & /*$$scope, items*/
        33) {
          swipe_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipe.$set(swipe_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(swipe.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipe.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(swipe);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let { items = [] } = $$props;
    const swipeConfig = {
      autoplay: false,
      delay: 2e3,
      //   showIndicators: true,
      transitionDuration: 1e3,
      defaultIndex: items.length - 1
    };
    $$self.$$set = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(0, items = $$props2.items);
    };
    return [items, swipeConfig];
  }
  var Swipegallery = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment3, safe_not_equal, { items: 0 });
    }
  };
  var swipegallery_default = Swipegallery;

  // src/app.svelte
  function create_fragment4(ctx) {
    let div;
    let swipegallery;
    let current;
    swipegallery = new swipegallery_default({ props: { items: (
      /*items*/
      ctx[0]
    ) } });
    return {
      c() {
        div = element("div");
        create_component(swipegallery.$$.fragment);
        attr(div, "class", "app svelte-1ypjrgx");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(swipegallery, div, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(swipegallery.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipegallery.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(swipegallery);
      }
    };
  }
  function instance4($$self) {
    const items = [];
    for (let i = 62; i > 0; i--) {
      items.push("vcpp/" + i.toString().padStart(2, "0") + ".jpg");
    }
    return [items];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment4, safe_not_equal, {});
    }
  };
  var app_default = App;

  // src/index.ts
  var app = new app_default({ target: document.body });
  document.querySelector("#bootmessage").innerHTML = "";
  var src_default = app;
})();
