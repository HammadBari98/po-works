/**
 * @package SP Page Builder
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2022 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */
! function(t) {
    "use strict";
    var e = '[data-dismiss="sppb-alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        var i = t(this),
            n = i.attr("data-target");
        n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(n);

        function s() {
            o.detach().trigger("closed.sppb.alert").remove()
        }
        e && e.preventDefault(), o.length || (o = i.hasClass("sppb-alert") ? i : i.parent()), o.trigger(e = t.Event("close.sppb.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("sppb-fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s())
    };
    var n = t.fn.spbalert;
    t.fn.spbalert = function(e) {
        return this.each((function() {
            var n = t(this),
                o = n.data("sppb.alert");
            o || n.data("sppb.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        }))
    }, t.fn.spbalert.Constructor = i, t.fn.spbalert.noConflict = function() {
        return t.fn.spbalert = n, this
    }, t(document).on("click.sppb.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e).on("keydown.sppb.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".sppb-carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.sppb.carousel", t.proxy(this.pause, this)).on("mouseleave.sppb.carousel", t.proxy(this.cycle, this))
    };

    function i(i) {
        return this.each((function() {
            var n = t(this),
                o = n.data("sppb.carousel"),
                s = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                r = "string" == typeof i ? i : s.slide;
            o || n.data("sppb.carousel", o = new e(this, s)), "number" == typeof i ? o.to(i) : r ? o[r]() : s.interval && o.pause().cycle()
        }))
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".sppb-item"), this.$items.index(t || this.$active)
    }, e.prototype.to = function(e) {
        var i = this,
            n = this.getItemIndex(this.$active = this.$element.find(".sppb-item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.sppb.carousel", (function() {
            i.to(e)
        })) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function(e, i) {
        var n = this.$element.find(".sppb-item.active"),
            o = i || n[e](),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            p = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".sppb-item")[a]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var l = o[0],
            h = t.Event("slide.sppb.carousel", {
                relatedTarget: l,
                direction: r
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(o)]);
                c && c.addClass("active")
            }
            var d = t.Event("slid.sppb.carousel", {
                relatedTarget: l,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("sppb-slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", (function() {
                o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), p.sliding = !1, setTimeout((function() {
                    p.$element.trigger(d)
                }), 0)
            })).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var n = t.fn.sppbcarousel;
    t.fn.sppbcarousel = i, t.fn.sppbcarousel.Constructor = e, t.fn.sppbcarousel.noConflict = function() {
        return t.fn.sppbcarousel = n, this
    }, t(document).ready((function() {
        t(".sppb-carousel").each((function(e) {
            var i = t(this).find(".sppb-item"),
                n = "sppb-carousel" + (e + 1),
                o = "";
            t(this).attr("id", n);
            for (var s = 0; s < i.length; s++) o += 0 == s ? '<li data-sppb-target="#' + n + '" class="active" data-sppb-slide-to="0"></li>' : '\n<li data-sppb-target="#' + n + '" data-sppb-slide-to="' + s + '"></li>';
            t(this).find(">.sppb-carousel-indicators").html(o), t(this).find(".sppb-carousel-control").attr("href", "#" + n), t(this).find(".sppb-item").first().addClass("active")
        }))
    })), t(document).on("click.sppb.carousel.data-api", "[data-slide], [data-sppb-slide-to]", (function(e) {
        var n, o = t(this),
            s = t(o.attr("data-sppb-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("sppb-carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-sppb-slide-to");
            a && (r.interval = !1), i.call(s, r), a && s.data("sppb.carousel").to(a), e.preventDefault()
        }
    })), t(window).on("load", (function() {
        t('[data-sppb-ride="sppb-carousel"]').each((function() {
            var e = t(this);
            i.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    t(document).on("click", ".sppb-panel-heading", (function(e) {
        e.preventDefault();
        var i = t(this),
            n = i.closest(".sppb-panel-group").find(">div"),
            o = n.find(".sppb-panel-heading"),
            s = n.find(".sppb-panel-collapse");
        t(this).hasClass("active") ? (t(this).removeClass("active"), i.next().slideUp()) : (o.removeClass("active"), s.slideUp(), t(this).addClass("active").next().slideDown((function() {
            i[0].getBoundingClientRect().top < 0 && t("html,body").animate({
                scrollTop: i.offset().top
            }, 400)
        })))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };

    function i(i) {
        return this.each((function() {
            var n = t(this),
                o = n.data("sppb.tab");
            o || n.data("sppb.tab", o = new e(this)), "string" == typeof i && o[i]()
        }))
    }
    e.VERSION = "3.2.0", e.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a")[0],
                s = t.Event("show.sppb.tab", {
                    relatedTarget: o
                });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var r = t(n);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), (function() {
                    e.trigger({
                        type: "shown.sppb.tab",
                        relatedTarget: o
                    })
                }))
            }
        }
    }, e.prototype.activate = function(e, i, n) {
        var o = i.find("> .active"),
            s = n && t.support.transition && o.hasClass("sppb-fade");

        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("sppb-fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
        }
        s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), o.removeClass("in")
    };
    var n = t.fn.sppbtab;
    t.fn.sppbtab = i, t.fn.sppbtab.Constructor = e, t.fn.sppbtab.noConflict = function() {
        return t.fn.sppbtab = n, this
    }, t(document).ready((function() {
        t(".sppb-tab").each((function(e) {
            var i = "sppb-tab" + (e + 1);
            t(this).find(">.sppb-nav").children().each((function(e) {
                t(this).find(">a").attr("href", "#" + i + "-" + (e + 1))
            })), t(this).find(">.sppb-tab-content").children().each((function(e) {
                t(this).attr("id", i + "-" + (e + 1))
            }))
        }))
    })), t(document).on("click.sppb.tab.data-api", '[data-toggle="sppb-tab"], [data-toggle="sppb-pill"]', (function(e) {
        e.preventDefault(), i.call(t(this), "show")
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("sppbtooltip", t, e)
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="sppb-tooltip" role="tooltip"><div class="sppb-tooltip-arrow"></div><div class="sppb-tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, n) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    p = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(p + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, (function(t, n) {
            i[t] != n && (e[t] = n)
        })), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("sppb." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout((function() {
            "in" == i.hoverState && i.show()
        }), i.options.delay.show)
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("sppb." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
        i.timeout = setTimeout((function() {
            "out" == i.hoverState && i.hide()
        }), i.options.delay.hide)
    }, e.prototype.show = function() {
        var e = t.Event("show.sppb." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("sppb-fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                p = a.test(r);
            p && (r = r.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("sppb." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var l = this.getPosition(),
                h = o[0].offsetWidth,
                c = o[0].offsetHeight;
            if (p) {
                var d = r,
                    u = this.$element.parent(),
                    f = this.getPosition(u);
                r = "bottom" == r && l.top + l.height + c - f.scroll > f.height ? "top" : "top" == r && l.top - f.scroll - c < 0 ? "bottom" : "right" == r && l.right + h > f.width ? "left" : "left" == r && l.left - h < f.left ? "right" : r, o.removeClass(d).addClass(r)
            }
            var v = this.getCalculatedOffset(r, l, h, c);
            this.applyPlacement(v, r);
            var b = function() {
                n.$element.trigger("shown.sppb." + n.type), n.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("sppb-") ? o.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            s = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var p = n[0].offsetWidth,
            l = n[0].offsetHeight;
        "top" == i && l != s && (e.top = e.top + s - l);
        var h = this.getViewportAdjustedDelta(i, e, p, l);
        h.left ? e.left += h.left : e.top += h.top;
        var c = h.left ? 2 * h.left - o + p : 2 * h.top - s + l,
            d = h.left ? "left" : "top",
            u = h.left ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(c, n[0][u], d)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".sppb-tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("sppb-fade in top bottom left right")
    }, e.prototype.hide = function() {
        var e = this,
            i = this.tip(),
            n = t.Event("hide.sppb." + this.type);

        function o() {
            "in" != e.hoverState && i.detach(), e.$element.trigger("hidden.sppb." + e.type)
        }
        if (this.$element.removeAttr("aria-describedby"), this.$element.trigger(n), !n.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("sppb-fade") ? i.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: n ? t(window).width() : e.outerWidth(),
            height: n ? t(window).height() : e.outerHeight()
        }, n ? {
            top: 0,
            left: 0
        } : e.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                p = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : p > r.top + r.height && (o.top = r.top + r.height - p)
        } else {
            var l = e.left - s,
                h = e.left + s + i;
            l < r.left ? o.left = r.left - l : h > r.width && (o.left = r.left + r.width - h)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".sppb-tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("sppb." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("sppb." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("sppb." + this.type)
    };
    var i = t.fn.sppbtooltip;
    t.fn.sppbtooltip = function(i) {
        return this.each((function() {
            var n = t(this),
                o = n.data("sppb.tooltip"),
                s = "object" == typeof i && i;
            (o || "destroy" != i) && (o || n.data("sppb.tooltip", o = new e(this, s)), "string" == typeof i && o[i]())
        }))
    }, t.fn.sppbtooltip.Constructor = e, t.fn.sppbtooltip.noConflict = function() {
        return t.fn.sppbtooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("sppbpopover", t, e)
    };
    if (!t.fn.sppbtooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.2.0", e.DEFAULTS = t.extend({}, t.fn.sppbtooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="sppb-popover" role="tooltip"><div class="arrow"></div><h3 class="sppb-popover-title"></h3><div class="sppb-popover-content"></div></div>'
    }), (e.prototype = t.extend({}, t.fn.sppbtooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".sppb-popover-title")[this.options.html ? "html" : "text"](e), t.find(".sppb-popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("sppb-fade top bottom left right in"), t.find(".sppb-popover-title").html() || t.find(".sppb-popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.sppbpopover;
    t.fn.sppbpopover = function(i) {
        return this.each((function() {
            var n = t(this),
                o = n.data("sppb.popover"),
                s = "object" == typeof i && i;
            (o || "destroy" != i) && (o || n.data("sppb.popover", o = new e(this, s)), "string" == typeof i && o[i]())
        }))
    }, t.fn.sppbpopover.Constructor = e, t.fn.sppbpopover.noConflict = function() {
        return t.fn.sppbpopover = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", (function() {
            i = !0
        }));
        return setTimeout((function() {
            i || t(n).trigger(t.support.transition.end)
        }), e), this
    }, t((function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    }))
}(jQuery), "undefined" != typeof jQuery && "undefined" != typeof MooTools && function(t) {
        t(document).ready((function() {
            t(".sppb-carousel").each((function(e, i) {
                t(this)[e].slide = null
            }))
        }))
    }(jQuery),
    function(t, e, i, n) {
        "use strict";
        var o = {
                volume: 1,
                playbackRate: 1,
                muted: !0,
                loop: !0,
                autoplay: !0,
                position: "50% 50%"
            },
            s = /iPad|iPhone|iPod/i.test(n.userAgent),
            r = /Android/i.test(n.userAgent);
        t.vide = {
            lookup: []
        };

        function a(e, i, n) {
            this.element = t(e), this._defaults = o, this._name = "vide", i = i.replace(/\.\w*$/, ""), this.settings = t.extend({}, o, n), this.path = i, this.init()
        }
        a.prototype.init = function() {
            var e = this;
            this.wrapper = t("<div>");
            var i = function(t) {
                for (var e, i = (t = "" + t).split(/\s+/), n = "50%", o = "50%", s = 0, r = i.length; s < r; s++) "left" === (e = i[s]) ? n = "0%" : "right" === e ? n = "100%" : "top" === e ? o = "0%" : "bottom" === e ? o = "100%" : "center" === e ? 0 === s ? n = "50%" : o = "50%" : 0 === s ? n = e : o = e;
                return {
                    x: n,
                    y: o
                }
            }(this.settings.position);
            if (this.wrapper.css({
                    position: "absolute",
                    "z-index": -1,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    overflow: "hidden",
                    "-webkit-background-size": "cover",
                    "-moz-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": i.x + " " + i.y
                }), t(this.element).data("vide-image") && this.wrapper.css("background-image", "url(" + t(this.element).data("vide-image") + ")"), "static" === this.element.css("position") && this.element.css("position", "relative"), this.element.prepend(this.wrapper), !s && !r) {
                var n = "";
                t(this.element).data("vide-mp4") && (n += "<source src='" + t(this.element).data("vide-mp4") + "' type='video/mp4'>"), t(this.element).data("vide-ogv") && (n += "<source src='" + t(this.element).data("vide-ogv") + "' type='video/ogg'>"), this.video = t("<video>" + n + "</video>"), this.video.css("visibility", "hidden"), this.video.prop({
                    autoplay: this.settings.autoplay,
                    loop: this.settings.loop,
                    volume: this.settings.volume,
                    muted: this.settings.muted,
                    playbackRate: this.settings.playbackRate
                }), this.wrapper.append(this.video), this.video.css({
                    margin: "auto",
                    position: "absolute",
                    "z-index": -1,
                    top: i.y,
                    left: i.x,
                    "-webkit-transform": "translate(-" + i.x + ", -" + i.y + ")",
                    "-ms-transform": "translate(-" + i.x + ", -" + i.y + ")",
                    transform: "translate(-" + i.x + ", -" + i.y + ")"
                }), this.video.bind("loadedmetadata.vide", (function() {
                    e.video.css("visibility", "visible"), e.resize()
                })), t(this.element).bind("resize.vide", (function() {
                    e.resize()
                }))
            }
        }, a.prototype.getVideoObject = function() {
            return this.video ? this.video[0] : null
        }, a.prototype.resize = function() {
            if (this.video) {
                var t = this.video[0].videoHeight,
                    e = this.video[0].videoWidth,
                    i = this.wrapper.height(),
                    n = this.wrapper.width();
                n / e > i / t ? this.video.css({
                    width: n + 2,
                    height: "auto"
                }) : this.video.css({
                    width: "auto",
                    height: i + 2
                })
            }
        }, a.prototype.destroy = function() {
            this.element.unbind("vide"), this.video && this.video.unbind("vide"), delete t.vide.lookup[this.index], this.element.removeData("vide"), this.wrapper.remove()
        }, t.fn.vide = function(e, i) {
            var n;
            return this.each((function() {
                (n = t.data(this, "vide")) && n.destroy(), (n = new a(this, e, i)).index = t.vide.lookup.push(n) - 1, t.data(this, "vide", n)
            })), this
        }, t(i).ready((function() {
            t(e).bind("resize.vide", (function() {
                for (var e, i = t.vide.lookup.length, n = 0; n < i; n++)(e = t.vide.lookup[n]) && e.resize()
            })), t(i).find("[data-vide-bg]").each((function(e, i) {
                var n = t(i),
                    o = n.data("vide-options");
                o = o ? function(t) {
                    var e, i, n, o, s = {};
                    for (i = 0, n = (e = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; i < n; i++) e[i] = e[i].split(":"), (o = e[i][1]) || (o = void 0), ("string" == typeof o || o instanceof String) && (o = "true" === o || "false" !== o && o), ("string" == typeof o || o instanceof String) && (o = isNaN(o) ? o : +o), s[e[i][0]] = o;
                    return s
                }(o) : {}, n.vide("", o)
            }))
        }))
    }(window.jQuery, window, document, navigator),
    function() {
        var t, e, i, n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            o = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, o;
                for (e = i = 0, n = (o = this.keys).length; n > i; e = ++i)
                    if (o[e] === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, o, s;
                for (i = n = 0, o = (s = this.keys).length; o > n; i = ++n)
                    if (s[i] === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), this.SPPBWOW = function() {
            function s(t) {
                null == t && (t = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i
            }
            return s.prototype.defaults = {
                boxClass: "sppb-wow",
                animateClass: "sppb-animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, s.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
            }, s.prototype.start = function() {
                var e, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, o;
                        for (o = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.all = function() {
                        var t, i, n, o;
                        for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length, this.disabled()) this.resetStyle();
                else {
                    for (i = 0, n = (o = this.boxes).length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
                return this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, o, s, r;
                        for (r = [], o = 0, s = e.length; s > o; o++) n = e[o], r.push(function() {
                            var t, e, o, s;
                            for (s = [], t = 0, e = (o = n.addedNodes || []).length; e > t; t++) i = o[t], s.push(this.doSync(i));
                            return s
                        }.call(t));
                        return r
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, s.prototype.stop = function() {
                return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
            }, s.prototype.sync = function() {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, s.prototype.doSync = function(t) {
                var e, i, n, s, r;
                if (!this.stopped) {
                    if (null == t && (t = this.element), 1 !== t.nodeType) return;
                    for (r = [], i = 0, n = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = s[i], o.call(this.all, e) < 0 ? (this.applyStyle(e, !0), this.boxes.push(e), this.all.push(e), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, s.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass
            }, s.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-sppb-wow-duration"), i = t.getAttribute("data-sppb-wow-delay"), o = t.getAttribute("data-sppb-wow-iteration"), this.animate(function(s) {
                    return function() {
                        return s.customStyle(t, e, n, i, o)
                    }
                }(this))
            }, s.prototype.animate = "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }, s.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
                return o
            }, s.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function(t, e) {
                var i, n, o, s;
                for (i in s = [], e) n = e[i], t["" + i] = n, s.push(function() {
                    var e, s, r, a;
                    for (a = [], e = 0, s = (r = this.vendors).length; s > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                    return a
                }.call(this));
                return s
            }, s.prototype.vendorCSS = function(t, e) {
                var i, n, o, s, r, a;
                for (i = (n = window.getComputedStyle(t)).getPropertyCSSValue(e), s = 0, r = (a = this.vendors).length; r > s; s++) o = a[s], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
                return i
            }, s.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = window.getComputedStyle(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, s.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, s.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, s.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, s.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, s.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, s.prototype.isVisible = function(t) {
                var e, i, n, o, s;
                return i = t.getAttribute("data-sppb-wow-offset") || this.config.offset, o = (s = window.pageYOffset) + Math.min(this.element.clientHeight, innerHeight) - i, e = (n = this.offsetTop(t)) + t.clientHeight, o >= n && e >= s
            }, s.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, s.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, s
        }()
    }.call(this), jQuery((function(t) {
        (new SPPBWOW).init()
    })),
    function(t) {
        var e, i, n, o = {},
            s = document,
            r = window,
            a = s.documentElement,
            p = t.expando;

        function l() {
            var n, p, l, h, c = t(),
                d = 0;
            if (t.each(o, (function(t, e) {
                    var i = e.data.selector,
                        n = e.$element;
                    c = c.add(i ? n.find(i) : n)
                })), n = c.length)
                for (e = e || ((h = {
                        height: r.innerHeight,
                        width: r.innerWidth
                    }).height || !(p = s.compatMode) && t.support.boxModel || (h = {
                        height: (l = "CSS1Compat" === p ? a : s.body).clientHeight,
                        width: l.clientWidth
                    }), h), i = i || {
                        top: r.pageYOffset || a.scrollTop || s.body.scrollTop,
                        left: r.pageXOffset || a.scrollLeft || s.body.scrollLeft
                    }; d < n; d++)
                    if (t.contains(a, c[d])) {
                        var u, f, v, b = t(c[d]),
                            m = {
                                height: b.height(),
                                width: b.width()
                            },
                            g = b.offset(),
                            y = b.data("inview");
                        if (!i || !e) return;
                        g.top + m.height > i.top && g.top < i.top + e.height && g.left + m.width > i.left && g.left < i.left + e.width ? (v = (u = i.left > g.left ? "right" : i.left + e.width < g.left + m.width ? "left" : "both") + "-" + (f = i.top > g.top ? "bottom" : i.top + e.height < g.top + m.height ? "top" : "both"), y && y === v || b.data("inview", v).trigger("inview", [!0, u, f])) : y && b.data("inview", !1).trigger("inview", [!1])
                    }
        }
        t.event.special.inview = {
            add: function(e) {
                o[e.guid + "-" + this[p]] = {
                    data: e,
                    $element: t(this)
                }, n || t.isEmptyObject(o) || (n = setInterval(l, 250))
            },
            remove: function(e) {
                try {
                    delete o[e.guid + "-" + this[p]]
                } catch (t) {}
                t.isEmptyObject(o) && (clearInterval(n), n = null)
            }
        }, t(r).bind("scroll resize scrollstop", (function() {
            e = i = null
        })), !a.addEventListener && a.attachEvent && a.attachEvent("onfocusin", (function() {
            i = null
        })), t(document).on("inview", ".sppb-progress", (function(e, i, n, o) {
            var s = t(this).find(".sppb-progress-bar");
            i && (s.css("width", s.data("width")), t(this).unbind("inview"))
        })), t.fn.sppbanimateNumbers = function(e, i, n, o) {
            return this.each((function() {
                var s = t(this),
                    r = parseInt(s.text().replace(/,/g, ""));
                i = void 0 === i || i, t({
                    value: r
                }).animate({
                    value: e
                }, {
                    duration: null == n ? 1e3 : n,
                    easing: null == o ? "swing" : o,
                    step: function() {
                        s.text(Math.floor(this.value)), i && s.text(s.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                    },
                    complete: function() {
                        parseInt(s.text()) !== e && (s.text(e), i && s.text(s.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                    }
                })
            }))
        }, t(document).on("inview", ".sppb-animated-number", (function(e, i, n, o) {
            var s = t(this);
            i && (s.sppbanimateNumbers(s.data("digit"), !1, s.data("duration")), s.unbind("inview"))
        })), t(document).on("inview", ".sppb-pie-chart", (function(e, i, n, o) {
            var s = t(this);
            i && (s.easyPieChart({
                barColor: s.data("barcolor"),
                trackColor: s.data("trackcolor"),
                scaleColor: !1,
                lineWidth: s.data("width"),
                size: s.data("size"),
                onStep: function(t, e, i) {
                    s.find(".sppb-chart-percent > span").text(Math.round(i) + "%")
                }
            }), s.unbind("inview"))
        }))
    }(jQuery), jQuery((function(t) {
        t(document).on("submit", ".sppb-ajaxt-contact-form", (function(e) {
            e.preventDefault();
            var i = t(this),
                n = t(this).serializeArray(),
                o = {
                    option: "com_sppagebuilder",
                    task: "ajax",
                    addon: "ajax_contact",
                    "g-recaptcha-response": i.find("#g-recaptcha-response").val(),
                    data: n
                };
            return t.ajax({
                type: "POST",
                data: o,
                beforeSend: function() {
                    i.find(".fa").addClass("fa-spinner fa-spin")
                },
                success: function(e) {
                    var n = t.parseJSON(e);
                    try {
                        var o = t.parseJSON(n.data),
                            s = o.content,
                            r = "json"
                    } catch (t) {
                        s = n.data, r = "strings"
                    }
                    "json" == r ? o.status && i.trigger("reset") : i.trigger("reset"), i.find(".fa-spin").removeClass("fa-spinner fa-spin"), i.next(".sppb-ajax-contact-status").html(s).fadeIn().delay(4e3).fadeOut(500)
                }
            }), !1
        }))
    })), jQuery((function(t) {
        t(document).on("submit", ".sppb-optin-form", (function(e) {
            e.preventDefault();
            var i = t(this),
                n = {
                    option: "com_sppagebuilder",
                    task: "ajax",
                    addon: "optin_form",
                    data: t(this).serializeArray()
                };
            return t.ajax({
                type: "POST",
                data: n,
                beforeSend: function() {
                    i.find(".fa").addClass("fa-spinner fa-spin")
                },
                success: function(e) {
                    var n = t.parseJSON(e),
                        o = t.parseJSON(n.data),
                        s = "sppb-alert sppb-alert-warning";
                    if (o.status) {
                        s = "sppb-alert sppb-alert-success";
                        i.trigger("reset")
                    }
                    i.find(".fa-spin").removeClass("fa-spinner fa-spin"), i.next(".sppb-optin-form-status").html('<p class="' + s + '">' + o.content + "</p>").fadeIn().delay(4e3).fadeOut(1e3)
                }
            }), !1
        }))
    })), jQuery((function(t) {
        t(document).on("click", ".sppb-magnific-popup", (function(e) {
            e.preventDefault();
            var i = t(this);
            i.magnificPopup({
                type: i.data("popup_type"),
                mainClass: i.data("mainclass")
            }).magnificPopup("open")
        }))
    })), jQuery((function(t) {
        new MutationObserver((function(e) {
            e.forEach((function(e) {
                var i = e.addedNodes;
                null !== i && t(i).each((function() {
                    t(this).find(".sppb-addon-countdown .sppb-countdown-timer").each((function() {
                        var e = t(this),
                            i = e.data("date") + " " + e.data("time");
                        e.countdown(i, (function(i) {
                            t(this).html(i.strftime('<div class="sppb-countdown-days sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%-D</span><span class="sppb-countdown-text">%!D: ' + Joomla.JText._("COM_SPPAGEBUILDER_DAY") + "," + Joomla.JText._("COM_SPPAGEBUILDER_DAYS") + ';</span></div><div class="sppb-countdown-hours sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%H</span><span class="sppb-countdown-text">%!H: ' + Joomla.JText._("COM_SPPAGEBUILDER_HOUR") + "," + Joomla.JText._("COM_SPPAGEBUILDER_HOURS") + ';</span></div><div class="sppb-countdown-minutes sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%M</span><span class="sppb-countdown-text">%!M:' + Joomla.JText._("COM_SPPAGEBUILDER_MINUTE") + "," + Joomla.JText._("COM_SPPAGEBUILDER_MINUTES") + ';</span></div><div class="sppb-countdown-seconds sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%S</span><span class="sppb-countdown-text">%!S:' + Joomla.JText._("COM_SPPAGEBUILDER_SECOND") + "," + Joomla.JText._("COM_SPPAGEBUILDER_SECONDS") + ";</span></div>")).on("finish.countdown", (function() {
                                t(this).html('<div class="sppb-countdown-finishedtext-wrap sppb-col-xs-12 sppb-col-sm-12 sppb-text-center"><h3 class="sppb-countdown-finishedtext">' + e.data("finish-text") + "</h3></div>")
                            }))
                        }))
                    }))
                }))
            }))
        })).observe(document.body, {
            childList: !0,
            subtree: !0
        })
    })),
    function(t) {
        window.sppbVideoBackgroundResize = function(t) {
            t.find(".sppb-youtube-video-bg").removeClass("hidden");
            var e = t.innerWidth(),
                i = t.innerHeight();
            iframeW = e, iframeH = e * (9 / 16), marginTop = -Math.round((iframeH - i) / 2), marginLeft = -Math.round((iframeW - e) / 2), e / i < 16 / 9 && (iframeW = i * (16 / 9), iframeH = i, marginLeft = -Math.round((iframeW - e) / 2), marginTop = -Math.round((iframeH - i) / 2)), t.find(".sppb-youtube-video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }, t(window).on("load resize", (function() {
            t(".sppb-row-have-ext-bg").each((function() {
                sppbVideoBackgroundResize(t(this))
            }))
        })), t(document).ready((function() {
            var e = document.getElementsByClassName("section-bg-video");
            if (e.volume = 0, t(window).width() < 767) {
                for (var i = 0; i < e.length; i++) e[i].removeAttribute("autoplay");
                t(document).on("touchend touchcancel", (function() {
                    ! function() {
                        for (var t = 0; t < e.length; t++) e[t].paused && e[t].play()
                    }()
                }))
            }
        }))
    }(jQuery);