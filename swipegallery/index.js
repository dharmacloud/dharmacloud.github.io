(() => {
  // node_modules/svelte/internal/index.mjs
  function noop() {
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
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
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
  var current_component;
  function set_current_component(component) {
    current_component = component;
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
  function init(component, options, instance3, create_fragment3, not_equal, props, append_styles, dirty = [-1]) {
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
    $$.ctx = instance3 ? instance3(component, options.props || {}, (i, ret, ...rest) => {
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
    $$.fragment = create_fragment3 ? create_fragment3($$.ctx) : false;
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

  // src/swipeshapes.js
  var swipestart = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#1f1f1f"></path><rect x="113" y="68" width="78" height="900"></svg>';
  var swipeend = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f" ><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path><rect x="853" y="68" width="78" height="900"></svg>';
  var turnleft = '<svg width="150px" height="150px" viewBox="0 0 24 24"  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><path d="M4.71493213,9 L8.06176471,9 C14.65507,9 20,13.0983574 20,19.3875"/> <polyline points="9 14 4 9 9 4 9 4"/></svg>';
  var turnright = '<svg width="150px" height="150px" viewBox="0 0 24 24" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><path d="M3.71493213,19.3875 C3.71493213,13.0983574 9.05986213,9 15.6531674,9 L19,9"/><polyline points="15 4 20 9 15 14 15 14"/></svg>';
  var up1 = '<svg fill="#000000" width="150px" height="150px" viewBox="0 0 32 32" ><path d="M11.25 15.688l-7.656 7.656-3.594-3.688 11.063-11.094 11.344 11.344-3.5 3.5z"></path></svg>';
  var up2 = up1;
  var down1 = '<svg fill="#000000" width="150px" height="150px" viewBox="0 0 32 32"><path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path></svg>';
  var down2 = down1;

  // src/swipevideo.svelte
  function create_if_block(ctx) {
    let span;
    let raw_value = (
      /*swipeshapes*/
      ctx[4][
        /*direction*/
        ctx[3] + 4
      ] + ""
    );
    return {
      c() {
        span = element("span");
        attr(span, "class", "swipe svelte-1vy425u");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        span.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty & /*direction*/
        8 && raw_value !== (raw_value = /*swipeshapes*/
        ctx2[4][
          /*direction*/
          ctx2[3] + 4
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
  function create_fragment(ctx) {
    let div;
    let t0;
    let span;
    let t1_value = 1 + Math.floor(
      /*mp4player*/
      ctx[1]?.currentTime
    ) + "";
    let t1;
    let t2;
    let video;
    let source;
    let source_src_value;
    let mounted;
    let dispose;
    let if_block = (
      /*touching*/
      ctx[2] > -1 && /*direction*/
      ctx[3] && create_if_block(ctx)
    );
    return {
      c() {
        div = element("div");
        if (if_block)
          if_block.c();
        t0 = space();
        span = element("span");
        t1 = text(t1_value);
        t2 = space();
        video = element("video");
        source = element("source");
        attr(span, "class", "pagenumber svelte-1vy425u");
        if (!src_url_equal(source.src, source_src_value = /*src*/
        ctx[0]))
          attr(source, "src", source_src_value);
        attr(source, "type", "video/webm");
        attr(video, "class", "svelte-1vy425u");
        attr(div, "class", "container svelte-1vy425u");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block)
          if_block.m(div, null);
        append(div, t0);
        append(div, span);
        append(span, t1);
        append(div, t2);
        append(div, video);
        append(video, source);
        ctx[9](video);
        if (!mounted) {
          dispose = [
            listen(
              div,
              "touchstart",
              /*ontouchstart*/
              ctx[5],
              { passive: true }
            ),
            listen(
              div,
              "touchmove",
              /*ontouchmove*/
              ctx[6],
              { passive: true }
            ),
            listen(
              div,
              "touchend",
              /*ontouchend*/
              ctx[8],
              { passive: true }
            ),
            listen(
              div,
              "wheel",
              /*mousewheel*/
              ctx[7]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*touching*/
          ctx2[2] > -1 && /*direction*/
          ctx2[3]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(div, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*mp4player*/
        2 && t1_value !== (t1_value = 1 + Math.floor(
          /*mp4player*/
          ctx2[1]?.currentTime
        ) + ""))
          set_data(t1, t1_value);
        if (dirty & /*src*/
        1 && !src_url_equal(source.src, source_src_value = /*src*/
        ctx2[0])) {
          attr(source, "src", source_src_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
        ctx[9](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { src } = $$props;
    let mp4player;
    let touching = -1;
    let touchx = 0, touchy = 0, startx = 0, starty = 0, direction = 0;
    const swipeshapes = [down2, down1, swipeend, turnright, , turnleft, swipestart, up1, up2];
    const ontouchstart = (e) => {
      $$invalidate(3, direction = 0);
      if (e.touches.length == 1) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
        touchx = startx;
        touchy = starty;
        $$invalidate(2, touching = 1);
      }
    };
    const getDirection = () => {
      const deltax = touchx - startx;
      const deltay = touchy - starty;
      if (deltax > 60 && deltay < 20) {
        return deltax > 250 ? -2 : -1;
      } else if (deltax < -60 && deltay < 20) {
        return deltax < -250 ? 2 : 1;
      }
      if (deltax < 20 && deltay > 60) {
        return deltay > 250 ? -4 : -3;
      } else if (deltax < 20 && deltay < -60) {
        return deltay < -250 ? 4 : 3;
      }
      return 0;
    };
    const ontouchmove = (e) => {
      if (touching == -1)
        return;
      if (touching > -1) {
        touchx = e.touches[0].pageX;
        touchy = e.touches[0].pageY;
        $$invalidate(3, direction = getDirection());
      }
    };
    const mousewheel = (e) => {
      if (e.ctrlKey)
        return;
      if (e.deltaY > 0) {
        $$invalidate(1, mp4player.currentTime += 1, mp4player);
      } else {
        $$invalidate(1, mp4player.currentTime += -1, mp4player);
      }
      e.preventDefault();
    };
    const ontouchend = (e) => {
      if (touching !== -1 && direction !== 0) {
        if (direction == 1)
          $$invalidate(1, mp4player.currentTime += -1, mp4player);
        else if (direction == 2)
          $$invalidate(1, mp4player.currentTime = 0, mp4player);
        else if (direction == -1)
          $$invalidate(1, mp4player.currentTime += 1, mp4player);
        else if (direction == -2)
          $$invalidate(1, mp4player.currentTime = mp4player.duration, mp4player);
      } else {
        console.log(touchx, touchy);
      }
      $$invalidate(2, touching = -1);
      $$invalidate(3, direction = 0);
    };
    function video_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        mp4player = $$value;
        $$invalidate(1, mp4player);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(0, src = $$props2.src);
    };
    return [
      src,
      mp4player,
      touching,
      direction,
      swipeshapes,
      ontouchstart,
      ontouchmove,
      mousewheel,
      ontouchend,
      video_binding
    ];
  }
  var Swipevideo = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { src: 0 });
    }
  };
  var swipevideo_default = Swipevideo;

  // ../ptk/platform/pwa.js
  function registerServiceWorker(swfn = "./sw.js") {
    const p = document.location.protocol;
    const h = document.location.hostname;
    const localhost = p == "http:" && (h == "127.0.0.1" || h == "localhost");
    if ("serviceWorker" in navigator && (localhost || p == "https:")) {
      navigator.serviceWorker.register(swfn);
    }
  }

  // src/app.svelte
  function create_fragment2(ctx) {
    let div;
    let swipevideo;
    let current;
    swipevideo = new swipevideo_default({ props: { src: "vcpp.webm" } });
    return {
      c() {
        div = element("div");
        create_component(swipevideo.$$.fragment);
        attr(div, "class", "app svelte-1ifgqm2");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(swipevideo, div, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(swipevideo.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipevideo.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(swipevideo);
      }
    };
  }
  function instance2($$self) {
    registerServiceWorker();
    return [];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, {});
    }
  };
  var app_default = App;

  // src/index.ts
  var app = new app_default({ target: document.body });
  document.querySelector("#bootmessage").innerHTML = "";
  var src_default = app;
})();
