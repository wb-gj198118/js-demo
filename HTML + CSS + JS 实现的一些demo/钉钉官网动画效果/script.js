const svgElements = {
    scrollAnimation: "animation--scrollAnimation--OP1nkK9",
    container: "animation--container--xBPkCt1",
    DD: "animation--DD--TXpK1af",
    resolveTitle: "animation--resolveTitle--cCLSci5",
    whyTitleActive: "animation--whyTitleActive--dFEhOTb",
    whyTitle: "animation--whyTitle--kg0Tuw1",
    whyBg: "animation--whyBg--eNUY3lw",
    modalBg: "animation--modalBg--bg3T1qS",
    modalBgGradient: "animation--modalBgGradient--XqzcRHt",
    cardBox: "animation--cardBox--v5vdO9y",
    cardBg: "animation--cardBg--ViAi9Ot",
    cardItemActive: "animation--cardItemActive--R0867da",
    cardIcon: "animation--cardIcon--P3QD_a_",
    cardTitle: "animation--cardTitle--OMUlGSq",
    cardItem: "animation--cardItem--b_KE0xf",
    Icon: "animation--Icon--bqqTV1B",
    title: "animation--title--R69oLfa",
    ColorBox1: "animation--ColorBox1--wSkwbZ9",
    ColorBox2: "animation--ColorBox2--k6fmLAa",
    ColorBox3: "animation--ColorBox3--T53vr4k",
    ColorBox4: "animation--ColorBox4--WY0E44j",
    ColorBox5: "animation--ColorBox5--GCM1yDk",
    ColorBox6: "animation--ColorBox6--QEJEYQH",
    ColorBox7: "animation--ColorBox7--gKWXzif",
    ColorBox8: "animation--ColorBox8--RtqNGiX",
    ColorBox9: "animation--ColorBox9--wCii4pb",
    ColorBox10: "animation--ColorBox10--z8yDjcM",
    ColorBox11: "animation--ColorBox11--vcQgjI6",
    ColorBox12: "animation--ColorBox12--dotaMdN",
    ColorBox13: "animation--ColorBox13--WKCNT0s",
    ColorBox14: "animation--ColorBox14--ZZIxYQn",
    ColorBox15: "animation--ColorBox15--GxJAbfO",
    ColorBox16: "animation--ColorBox16--NnfZPCt",
    ColorBox17: "animation--ColorBox17--DLzQMsb",
    ColorBox18: "animation--ColorBox18--zd4qncL",
    ColorBox19: "animation--ColorBox19--G84ixTe",
    ColorBox20: "animation--ColorBox20--Zz0xI7I",
    ColorBox21: "animation--ColorBox21--vC51awA",
    ColorBox22: "animation--ColorBox22--_YDGMxY",
    miniContainer: "animation--miniContainer--nsAIKJI",
    contentTop: "animation--contentTop--bAjH2qs",
    miniIcon: "animation--miniIcon--awN5TO4",
    miniTitle: "animation--miniTitle--ZUYy8zV",
    contentCenter: "animation--contentCenter--hay45yu",
    miniWhyTitle: "animation--miniWhyTitle--vczcnJP",
    miniWhyText: "animation--miniWhyText--ildDMzS",
    miniResolveTitle: "animation--miniResolveTitle--BicHpD4",
    contentBottom: "animation--contentBottom--buyGpRT",
    miniCardBox: "animation--miniCardBox--sr6vkZy",
    miniCardBg: "animation--miniCardBg--M3sg2v1",
    miniCardItem: "animation--miniCardItem--PphFOeF",
    miniCardIcon: "animation--miniCardIcon--BQWgdu4",
    miniCardTitle: "animation--miniCardTitle--N1Tb_A7",
    customVideo: "animation--customVideo--JUm_BI6",
    customModal: "animation--customModal--tJY9HVU",
    customerModalX: "animation--customerModalX--q6AUbcz",
    basePosition: "animation--basePosition--FGeKxsr",
  };
  
  function af(e) {
    if (!e) return 0;
    for (
      var t = "string" == typeof e ? document.querySelector(e) : e,
        n = null == t ? void 0 : t.offsetTop,
        r = null == t ? void 0 : t.offsetParent;
      r;
  
    ) {
      var i, a;
      (n += null === (i = r) || void 0 === i ? void 0 : i.offsetTop),
        (r = null === (a = r) || void 0 === a ? void 0 : a.offsetParent);
    }
    return n;
  }
  function of(e) {
    return cf(e) || uf(e) || lf(e) || sf();
  }
  
  function sf() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function lf(e, t) {
    if (e) {
      if ("string" == typeof e) return ff(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ff(e, t)
          : void 0
      );
    }
  }
  function uf(e) {
    if (
      ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e["@@iterator"]
    )
      return Array.from(e);
  }
  function cf(e) {
    if (Array.isArray(e)) return ff(e);
  }
  function ff(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  
  function dingtalkAnimation(call, sHeight) {
    //   df(this, e);
    // let screenHeight = sHeight || 944;
    let screenHeight = 944;
    let eleTop = 900;
    let preStatus = 0;
    let callBack = call || 0;
    let timer = null;
  
    function initLax() {
      lax.init();
      lax.addDriver(
        "scrollY",
        function () {
          return window.scrollY;
        },
        {
          frameStep: 1,
        }
      );
      //添加动画元素
      addElements();
  
      window.addEventListener("scroll", function () {
        var e = 2 * screenHeight + eleTop,
          t = document.documentElement.scrollTop;
        (timer = null), t > e + 10 || window.requestAnimationFrame(lax.onAnimationFrame);
      });
    }
  
    function getOptions() {
      var e,
        t = af(".".concat(svgElements.scrollAnimation));
      eleTop = t;
      var n = document.querySelector(".cardItem1"),
        i = null !== (e = null == n ? void 0 : n.clientWidth) && void 0 !== e ? e : 0,
        a = "",
        o = "",
        s = screenHeight,
        l = Array.from(
          {
            length: 14,
          },
          function (e, n) {
            var l = n + 1,
              u,
              c;
            l <= 7 && ((u = 4 - l), (c = 0.87)), l > 7 && ((u = 11 - l), (c = -0.87));
            var f = 0 === u ? 0.6 : ((0.5 / Math.abs(u)) * 100).toFixed(0) / 100;
            return (
              1 === l && (a = "".concat(t, "+").concat(s, "*1+").concat(f)),
              2 === l && (o = "".concat(t, "+").concat(s, "*1+").concat(f)),
              {
                id: "cardItem".concat(l),
                scrollY: {
                  translateX: [
                    [
                      t,
                      "".concat(t, "+").concat(s, "*(+").concat(f, ")"),
                      "".concat(t, "+").concat(s, "*1+").concat(f),
                    ],
                    ["".concat(i, "*").concat(u), "".concat(i, "*").concat(u), 0],
                  ],
                  translateY: [
                    [
                      t,
                      "".concat(t, "+").concat(s, "*(+").concat(f, ")"),
                      "".concat(t, "+").concat(s, "*1+").concat(f),
                    ],
                    ["elHeight*".concat(c), "".concat(i, "*").concat(c), 1],
                  ],
                  opacity: [
                    [
                      t,
                      "".concat(t, "+").concat(s, "*(+").concat(f, ")"),
                      "".concat(t, "+").concat(s, "*1+").concat(f),
                    ],
                    [0, 0, 1],
                    {
                      cssFn: function e(t) {
                        if (4 === l) {
                          var n = t < 0.7;
                          n !== preStatus && ((preStatus = n), update(false, t));
                        }
                        return t;
                      },
                    },
                  ],
                  scale: [
                    [
                      t,
                      "".concat(t, "+").concat(s, "*(+").concat(f, ")"),
                      "".concat(t, "+").concat(s, "*1+").concat(f),
                    ],
                    [0, 0.5, 1],
                  ],
                  translateZ: [[0], [10]],
                },
              }
            );
          }
        ),
        u;
      return [
        {
          id: svgElements.title,
          scrollY: {
            opacity: [
              [
                0,
                t,
                "".concat(t, "+").concat(s, "*.28"),
                "".concat(t, "+").concat(s, "*.4"),
              ],
              [0.2, 1, 1, 0],
            ],
            scale: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.2, 1, 2],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-800, 10, 800],
            ],
            translateY: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [100, 0, "-".concat(s)],
            ],
          },
        },
        {
          id: svgElements.Icon,
          scrollY: {
            opacity: [
              [
                0,
                t,
                "".concat(t, "+").concat(s, "*.1"),
                "".concat(t, "+").concat(s, "*.275"),
              ],
              [0.1, 1, 1, 0],
            ],
            scale: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1.5],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-800, 10, 800],
            ],
            translateY: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [200, 0, "-".concat(s, "-200")],
            ],
          },
        },
        {
          id: svgElements.ColorBox1,
          scrollY: {
            opacity: [
              [t, "".concat(t, "+").concat(s, "*1")],
              [0.4, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox2,
          scrollY: {
            opacity: [
              [0, t],
              [0.1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox3,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.8, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox4,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.8, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox5,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.3, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox6,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.4, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox7,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.3, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox8,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.3, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox9,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.32, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox10,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox11,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.28, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox12,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.39, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox13,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.45, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox14,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.3, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox15,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.7, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox16,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox17,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.2, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox18,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox19,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox20,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 1, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox21,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.5, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0.2, 800],
            ],
          },
        },
        {
          id: svgElements.ColorBox22,
          scrollY: {
            opacity: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [0.1, 0.2, 1],
            ],
            translateZ: [
              [0, t, "".concat(t, "+").concat(s, "*1")],
              [-200, 0.2, 800],
            ],
          },
        },
        {
          id: svgElements.cardBg,
          scrollY: {
            opacity: [
              ["".concat(t, "+").concat(s, "*.75"), a],
              [0, 1],
            ],
            scale: [
              ["".concat(t, "+").concat(s, "*.75"), a],
              [0.8, 1],
            ],
            translateZ: [[0], [10]],
          },
        },
        {
          id: svgElements.cardTitle,
          scrollY: {
            opacity: [
              ["".concat(t, "+").concat(s, "*.75"), o],
              [0, 1],
            ],
            translateY: [
              ["".concat(t, "+").concat(s, "*.75"), "".concat(t, "+").concat(s, "*1.25")],
              ["elHeight", 0],
            ],
            translateZ: [[0], [10]],
          },
        },
        {
          id: svgElements.resolveTitle,
          scrollY: {
            opacity: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              [0, 1],
            ],
            scale: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              [0.3, 1],
            ],
            translateY: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              ["elHeight*5", 0],
            ],
            translateZ: [[0], [10]],
          },
        },
        {
          id: svgElements.whyTitle,
          scrollY: {
            opacity: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              [0, 1],
            ],
            scale: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              [0.3, 1],
            ],
            translateY: [
              ["".concat(t, "+").concat(s, "*.2"), "".concat(t, "+").concat(s, "*1")],
              ["elHeight*13", 0],
            ],
            translateZ: [[0], [10]],
          },
        },
        {
          id: svgElements.modalBg,
          scrollY: {
            opacity: [
              ["".concat(t, "+").concat(s, "*.75"), "".concat(t, "+").concat(s, "*1")],
              [0, 1],
            ],
            translateZ: [[0], [-1]],
          },
        },
      ].concat(of(l));
    }
  
    function addElements() {
      getOptions().forEach(function (e) {
        lax.addElements(".".concat(e.id), {
          scrollY: e.scrollY,
        });
      });
    }
  
    function update(stop, t) {
      // screenHeight = t || 0;
      stop
        ? removeElements()
        : (removeElements(), addElements(), requestAnimationFrame(lax.onAnimationFrame));
    }
  
    function removeElements() {
      getOptions().forEach(function (e) {
        lax.removeElements(".".concat(e.id));
      });
    }
  
    initLax();
  }
  
  window.onload = function () {
    //初始化动画
    dingtalkAnimation();
  };
  