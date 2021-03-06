(function() {
  this.Calendly = {}, this.Calendly._util = {}
}).call(this), Calendly._util.domReady = function(e) {
      var t = !1,
          n = function() {
              document.addEventListener ? (document.removeEventListener("DOMContentLoaded", o), window.removeEventListener("load", o)) : (document.detachEvent("onreadystatechange", o), window.detachEvent("onload", o))
          },
          o = function() {
              t || !document.addEventListener && "load" !== event.type && "complete" !== document.readyState || (t = !0, n(), e())
          };
      if ("complete" === document.readyState) e();
      else if (document.addEventListener) document.addEventListener("DOMContentLoaded", o), window.addEventListener("load", o);
      else {
          document.attachEvent("onreadystatechange", o), window.attachEvent("onload", o);
          var i = !1;
          try {
              i = null == window.frameElement && document.documentElement
          } catch (r) {}
          i && i.doScroll && ! function l() {
              if (!t) {
                  try {
                      i.doScroll("left")
                  } catch (o) {
                      return setTimeout(l, 50)
                  }
                  t = !0, n(), e()
              }
          }()
      }
  }, Calendly._util.assign = function(e) {
      "use strict";
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          if (null != o)
              for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i])
      }
      return t
  },
  function() {
      Calendly._url = {}, Calendly._url.extractQueryStringParams = function(e) {
          var t, n, o, i, r, l, a, d, u, s;
          for (a = document.createElement("a"), a.href = e, r = a.search.substr(1), l = {}, d = r.split("&"), t = 0, o = d.length; o > t; t++) i = d[t], u = i.split("="), n = u[0], s = u[1], void 0 !== s && (l[n.toLowerCase()] = decodeURIComponent(s));
          return l
      }, Calendly._url.stripQuery = function(e) {
          return e.split("?")[0]
      }
  }.call(this),
  function() {
      Calendly._util.snakeCaseKeys = function(e) {
          var t, n, o;
          o = {};
          for (n in e) t = n.split(/(?=[A-Z])/).join("_").toLowerCase(), o[t] = e[n];
          return o
      }, Calendly._util.pick = function(e, t) {
          var n, o, i, r;
          if (e) {
              for (r = {}, n = 0, i = t.length; i > n; n++) o = t[n], e[o] && (r[o] = e[o]);
              return r
          }
      }
  }.call(this),
  function(e, t) {
      if ("function" == typeof define && define.amd) define(["exports"], t);
      else if ("undefined" != typeof exports) t(exports);
      else {
          var n = {
              exports: {}
          };
          t(n.exports), e.bodyScrollLock = n.exports
      }
  }(this, function(e) {
      "use strict";

      function t(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n
          }
          return Array.from(e)
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = !1;
      if ("undefined" != typeof window) {
          var o = {
              get passive() {
                  n = !0
              }
          };
          window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o)
      }
      var i = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
          r = [],
          l = !1,
          a = -1,
          d = void 0,
          u = void 0,
          s = function(e) {
              return r.some(function(t) {
                  return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
              })
          },
          c = function(e) {
              var t = e || window.event;
              return s(t.target) ? !0 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
          },
          p = function(e) {
              setTimeout(function() {
                  if (void 0 === u) {
                      var t = !!e && e.reserveScrollBarGap === !0,
                          n = window.innerWidth - document.documentElement.clientWidth;
                      t && n > 0 && (u = document.body.style.paddingRight, document.body.style.paddingRight = n + "px")
                  }
                  void 0 === d && (d = document.body.style.overflow, document.body.style.overflow = "hidden")
              })
          },
          h = function() {
              setTimeout(function() {
                  void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== d && (document.body.style.overflow = d, d = void 0)
              })
          },
          y = function(e) {
              return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1
          },
          m = function(e, t) {
              var n = e.targetTouches[0].clientY - a;
              return s(e.target) ? !1 : t && 0 === t.scrollTop && n > 0 ? c(e) : y(t) && 0 > n ? c(e) : (e.stopPropagation(), !0)
          };
      e.disableBodyScroll = function(e, o) {
          if (i) {
              if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
              if (e && !r.some(function(t) {
                      return t.targetElement === e
                  })) {
                  var d = {
                      targetElement: e,
                      options: o || {}
                  };
                  r = [].concat(t(r), [d]), e.ontouchstart = function(e) {
                      1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                  }, e.ontouchmove = function(t) {
                      1 === t.targetTouches.length && m(t, e)
                  }, l || (document.addEventListener("touchmove", c, n ? {
                      passive: !1
                  } : void 0), l = !0)
              }
          } else {
              p(o);
              var u = {
                  targetElement: e,
                  options: o || {}
              };
              r = [].concat(t(r), [u])
          }
      }, e.clearAllBodyScrollLocks = function() {
          i ? (r.forEach(function(e) {
              e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
          }), l && (document.removeEventListener("touchmove", c, n ? {
              passive: !1
          } : void 0), l = !1), r = [], a = -1) : (h(), r = [])
      }, e.enableBodyScroll = function(e) {
          if (i) {
              if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
              e.ontouchstart = null, e.ontouchmove = null, r = r.filter(function(t) {
                  return t.targetElement !== e
              }), l && 0 === r.length && (document.removeEventListener("touchmove", c, n ? {
                  passive: !1
              } : void 0), l = !1)
          } else 1 === r.length && r[0].targetElement === e ? (h(), r = []) : r = r.filter(function(t) {
              return t.targetElement !== e
          })
      }
  }),
  function() {
      var e, t, n, o, i;
      Calendly._autoLoadInlineWidgets = function() {
          return Calendly._util.domReady(function() {
              return t()
          })
      }, Calendly.initBadgeWidget = function(t) {
          return Calendly._util.domReady(function() {
              return e(t)
          })
      }, Calendly.destroyBadgeWidget = function() {
          return Calendly.badgeWidget ? (Calendly.badgeWidget.destroy(), delete Calendly.badgeWidget) : void 0
      }, Calendly.initPopupWidget = function(e) {
          return Calendly._util.domReady(function() {
              return Calendly.showPopupWidget(e.url, "PopupText", e)
          })
      }, Calendly.initInlineWidget = function(e) {
          return e.url ? (e.parentElement || (e.parentElement = o()), Calendly._util.domReady(function() {
              return e.embedType = "Inline", new Calendly.Iframe(e)
          })) : void 0
      }, Calendly.showPopupWidget = function(e, t, n) {
          var o;
          return null == t && (t = "PopupText"), null == n && (n = {}), this.closePopupWidget(), o = function() {
              return delete Calendly.popupWidget
          }, Calendly.popupWidget = new Calendly.PopupWidget(e, o, t, n), Calendly.popupWidget.show()
      }, Calendly.closePopupWidget = function() {
          return Calendly.popupWidget ? Calendly.popupWidget.close() : void 0
      }, o = function() {
          var e;
          return e = document.scripts[document.scripts.length - 1], e.parentNode
      }, t = function() {
          var e, t, n, o, r;
          for (t = document.querySelectorAll(".calendly-inline-widget"), r = [], n = 0, o = t.length; o > n; n++) e = t[n], i(e) ? r.push(void 0) : (e.setAttribute("data-processed", !0), r.push(new Calendly.Iframe({
              parentElement: e,
              inlineStyles: !0,
              embedType: "Inline"
          })));
          return r
      }, i = function(e) {
          return e.getAttribute("data-processed") || "false" === e.getAttribute("data-auto-load")
      }, e = function(e) {
          var t, o, i;
          return Calendly.destroyBadgeWidget(), t = n(e), i = function() {
              return Calendly.showPopupWidget(e.url, "PopupWidget", e)
          }, o = Calendly._util.assign({
              onClick: i
          }, t), Calendly.badgeWidget = new Calendly.BadgeWidget(o)
      }, n = function(e) {
          var t, n;
          return t = ["color", "textColor", "text", "branding"], n = {}, t.forEach(function(t) {
              return n[t] = e[t], delete e[t]
          }), n
      }
  }.call(this),
  function() {
      Calendly.Iframe = function() {
          function e(e) {
              this.options = e, this.parseOptions(), this.build(), this.inject()
          }
          return e.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e.prototype.parseOptions = function() {
              var e;
              if (e = {
                      inlineStyles: !1
                  }, this.options = Calendly._util.assign({}, e, this.options), this.parent = this.options.parentElement, !this.parent) throw "Calendly: Parent element not set";
              if (this.parent.jquery && (this.parent = this.parent[0]), this.inlineStyles = this.options.inlineStyles, this.embedType = this.options.embedType, this.url = (this.options.url || this.getUrlFromParent()).split("#")[0], !this.url) throw "Calendly: Widget URL not set"
          }, e.prototype.build = function() {
              return this.node = document.createElement("iframe"), this.node.src = this.getSource(), this.node.width = "100%", this.node.height = "100%", this.node.frameBorder = "0"
          }, e.prototype.inject = function() {
              return this.format(), this.parent.appendChild(this.buildSpinner()), this.parent.appendChild(this.node)
          }, e.prototype.getSource = function() {
              var e;
              return e = Calendly._url.stripQuery(this.url) + "?" + this.getParams(), this.filterConsentParam(e)
          }, e.prototype.getUrlFromParent = function() {
              return this.parent.getAttribute("data-url")
          }, e.prototype.getParams = function() {
              var e, t, n, o;
              t = {
                  embed_domain: this.getDomain(),
                  embed_type: this.embedType
              }, t = Calendly._util.assign(t, this.getUtmParamsFromHost(), this.getParamsFromUrl(), this.getParamsFromOptions()), n = [];
              for (e in t) o = t[e], n.push(e + "=" + encodeURIComponent(o));
              return n.join("&")
          }, e.prototype.getUtmParamsFromHost = function() {
              var e, t;
              return e = ["utm_campaign", "utm_source", "utm_medium", "utm_content", "utm_term"], t = Calendly._url.extractQueryStringParams(window.location.href), Calendly._util.pick(t, e)
          }, e.prototype.getParamsFromUrl = function() {
              return Calendly._url.extractQueryStringParams(this.url)
          }, e.prototype.getParamsFromOptions = function() {
              return Calendly._util.assign({}, this.getPrefillParams(), this.getUtmParams())
          }, e.prototype.getUtmParams = function() {
              var e;
              return this.options.utm ? (e = ["utmCampaign", "utmSource", "utmMedium", "utmContent", "utmTerm"], Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.utm, e))) : null
          }, e.prototype.getPrefillParams = function() {
              var e, t, n, o, i;
              if (!this.options.prefill) return null;
              if (t = ["name", "firstName", "lastName", "email"], n = Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.prefill, t)), this.options.prefill.customAnswers) {
                  o = this.options.prefill.customAnswers;
                  for (e in o) i = o[e], e.match(/^a\d{1,2}$/) && (n[e] = i)
              }
              return n
          }, e.prototype.getDomain = function() {
              return document.location.host
          }, e.prototype.filterConsentParam = function(e) {
              return e.replace(/consent_accept=1&?/g, "")
          }, e.prototype.format = function() {
              return this.isMobile ? this.formatMobile() : this.formatDesktop()
          }, e.prototype.formatDesktop = function() {
              return this.inlineStyles ? this.parent.setAttribute("style", "position: relative;" + this.parent.getAttribute("style")) : void 0
          }, e.prototype.formatMobile = function() {
              return this.inlineStyles ? this.parent.setAttribute("style", "position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;" + this.parent.getAttribute("style")) : this.parent.className += " calendly-mobile"
          }, e.prototype.buildSpinner = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-spinner", e.appendChild(this.buildBounce(1)), e.appendChild(this.buildBounce(2)), e.appendChild(this.buildBounce(3)), e
          }, e.prototype.buildBounce = function(e) {
              var t;
              return t = document.createElement("div"), t.className = "calendly-bounce" + e, t
          }, e
      }()
  }.call(this),
  function() {
      var e = function(e, t) {
          return function() {
              return e.apply(t, arguments)
          }
      };
      Calendly.PopupWidget = function() {
          function t(t, n, o, i) {
              this.url = t, this.onClose = n, this.embedType = o, this.options = null != i ? i : {}, this.close = e(this.close, this)
          }
          return t.prototype.show = function() {
              return this.buildOverlay(), this.insertOverlay(), this.lockPageScroll()
          }, t.prototype.close = function() {
              return this.unlockPageScroll(), this.destroyOverlay(), this.onClose()
          }, t.prototype.buildOverlay = function() {
              return this.overlay = document.createElement("div"), this.overlay.className = "calendly-overlay", this.overlay.appendChild(this.buildCloseOverlay()), this.overlay.appendChild(this.buildPopup()), this.overlay.appendChild(this.buildCloseButton())
          }, t.prototype.insertOverlay = function() {
              return document.body.appendChild(this.overlay)
          }, t.prototype.buildCloseOverlay = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-close-overlay", e.onclick = this.close, e
          }, t.prototype.buildPopup = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-popup", e.appendChild(this.buildPopupContent()), e
          }, t.prototype.buildPopupContent = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-popup-content", e.setAttribute("data-url", this.url), this.options.parentElement = e, this.options.embedType = this.embedType, new Calendly.Iframe(this.options), e
          }, t.prototype.buildCloseButton = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-popup-close", e.onclick = this.close, e
          }, t.prototype.destroyOverlay = function() {
              return this.overlay.parentNode.removeChild(this.overlay)
          }, t.prototype.lockPageScroll = function() {
              return bodyScrollLock.disableBodyScroll(this.overlay), document.addEventListener("touchmove", this.handleLockedTouchmove, {
                  passive: !1
              })
          }, t.prototype.unlockPageScroll = function() {
              return bodyScrollLock.enableBodyScroll(this.overlay), document.removeEventListener("touchmove", this.handleLockedTouchmove, {
                  passive: !1
              })
          }, t.prototype.handleLockedTouchmove = function(e) {
              return e.preventDefault()
          }, t
      }()
  }.call(this),
  function() {
      Calendly.BadgeWidget = function() {
          function e(e) {
              this.options = e, this.buildWidget(), this.insertWidget()
          }
          return e.prototype.destroy = function() {
              return this.widget.parentNode.removeChild(this.widget)
          }, e.prototype.buildWidget = function() {
              return this.widget = document.createElement("div"), this.widget.className = "calendly-badge-widget", this.widget.appendChild(this.buildContent())
          }, e.prototype.insertWidget = function() {
              return document.body.insertBefore(this.widget, document.body.firstChild)
          }, e.prototype.buildContent = function() {
              var e;
              return e = document.createElement("div"), e.className = "calendly-badge-content", "#ffffff" === this.options.color && (e.className += " calendly-white"), e.onclick = this.options.onClick, e.innerHTML = this.options.text, e.style.background = this.options.color, e.style.color = this.options.textColor, this.options.branding && e.appendChild(this.buildBranding()), e
          }, e.prototype.buildBranding = function() {
              var e;
              return e = document.createElement("span"), e.innerHTML = "powered by Calendly", e
          }, e
      }()
  }.call(this), Calendly._autoLoadInlineWidgets();
