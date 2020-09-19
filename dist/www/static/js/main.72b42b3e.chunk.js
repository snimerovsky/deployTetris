"use strict";

(undefined["webpackJsonpmulti-form"] = undefined["webpackJsonpmulti-form"] || []).push([[0], { 100: function _(e, t, a) {}, 237: function _(e, t, a) {
    "use strict";
    a.r(t);var n = a(0),
        r = a.n(n),
        l = a(21),
        i = a.n(l),
        c = (a(99), a(100), a(93)),
        u = a(13),
        o = a(14),
        s = a(16),
        m = a(15),
        p = a(22),
        h = a.n(p),
        f = a(23),
        b = a.n(f),
        E = a(25),
        v = a.n(E),
        y = a(24),
        x = a.n(y),
        g = function (e) {
      Object(s.a)(a, e);var t = Object(m.a)(a);function a() {
        var e;Object(u.a)(this, a);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (e = t.call.apply(t, [this].concat(r))).continue = function (t) {
          t.preventDefault(), e.props.nextStep();
        }, e;
      }return Object(o.a)(a, [{ key: "render", value: function value() {
          var e = this.props,
              t = e.values,
              a = e.handleChange;return r.a.createElement(h.a, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, { title: "Enter User Details" }), r.a.createElement(v.a, { hintText: "Enter Your First Name", floatingLabelText: "First Name", onChange: a("firstName"), defaultValue: t.firstName }), r.a.createElement("br", null), r.a.createElement(v.a, { hintText: "Enter Your Last Name", floatingLabelText: "Last Name", onChange: a("lastName"), defaultValue: t.lastName }), r.a.createElement("br", null), r.a.createElement(v.a, { hintText: "Enter Your Email", floatingLabelText: "Email", onChange: a("email"), defaultValue: t.email }), r.a.createElement("br", null), r.a.createElement(x.a, { label: "Continue", primary: !0, style: C.button, onClick: this.continue })));
        } }]), a;
    }(n.Component),
        C = { button: { margin: 15 } },
        d = g,
        T = function (e) {
      Object(s.a)(a, e);var t = Object(m.a)(a);function a() {
        var e;Object(u.a)(this, a);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (e = t.call.apply(t, [this].concat(r))).continue = function (t) {
          t.preventDefault(), e.props.nextStep();
        }, e.back = function (t) {
          t.preventDefault(), e.props.prevStep();
        }, e;
      }return Object(o.a)(a, [{ key: "render", value: function value() {
          var e = this.props,
              t = e.values,
              a = e.handleChange;return r.a.createElement(h.a, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, { title: "Enter Personal Details" }), r.a.createElement(v.a, { hintText: "Enter Your Occupation", floatingLabelText: "Occupation", onChange: a("occupation"), defaultValue: t.occupation }), r.a.createElement("br", null), r.a.createElement(v.a, { hintText: "Enter Your City", floatingLabelText: "City", onChange: a("city"), defaultValue: t.city }), r.a.createElement("br", null), r.a.createElement(v.a, { hintText: "Enter Your Bio", floatingLabelText: "Bio", onChange: a("bio"), defaultValue: t.bio }), r.a.createElement("br", null), r.a.createElement(x.a, { label: "Continue", primary: !0, style: O.button, onClick: this.continue }), r.a.createElement(x.a, { label: "Back", primary: !1, style: O.button, onClick: this.back })));
        } }]), a;
    }(n.Component),
        O = { button: { margin: 15 } },
        S = T,
        j = a(26),
        k = function (e) {
      Object(s.a)(a, e);var t = Object(m.a)(a);function a() {
        var e;Object(u.a)(this, a);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (e = t.call.apply(t, [this].concat(r))).continue = function (t) {
          t.preventDefault(), e.props.nextStep();
        }, e.back = function (t) {
          t.preventDefault(), e.props.prevStep();
        }, e;
      }return Object(o.a)(a, [{ key: "render", value: function value() {
          var e = this.props.values,
              t = e.firstName,
              a = e.lastName,
              n = e.email,
              l = e.occupation,
              i = e.city,
              c = e.bio;return r.a.createElement(h.a, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, { title: "Confirm User Data" }), r.a.createElement(j.List, null, r.a.createElement(j.ListItem, { primaryText: "First Name", secondaryText: t }), r.a.createElement(j.ListItem, { primaryText: "Last Name", secondaryText: a }), r.a.createElement(j.ListItem, { primaryText: "Email", secondaryText: n }), r.a.createElement(j.ListItem, { primaryText: "Occupation", secondaryText: l }), r.a.createElement(j.ListItem, { primaryText: "City", secondaryText: i }), r.a.createElement(j.ListItem, { primaryText: "Bio", secondaryText: c })), r.a.createElement("br", null), r.a.createElement(x.a, { label: "Confirm & Continue", primary: !1, style: N.button, onClick: this.continue }), r.a.createElement(x.a, { label: "Back", primary: !1, style: N.button, onClick: this.back })));
        } }]), a;
    }(n.Component),
        N = { button: { margin: 15 } },
        L = k,
        w = function (e) {
      Object(s.a)(a, e);var t = Object(m.a)(a);function a() {
        return Object(u.a)(this, a), t.apply(this, arguments);
      }return Object(o.a)(a, [{ key: "render", value: function value() {
          return r.a.createElement(h.a, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, { title: "Success" }), r.a.createElement("h1", null, "Thank You For Your Submission"), r.a.createElement("p", null, "You will get an email with further instructions")));
        } }]), a;
    }(n.Component),
        Y = function (e) {
      Object(s.a)(a, e);var t = Object(m.a)(a);function a() {
        var e;Object(u.a)(this, a);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (e = t.call.apply(t, [this].concat(r))).state = { step: 1, firstName: "", lastName: "", email: "", occupation: "", city: "", bio: "" }, e.nextStep = function () {
          var t = e.state.step;e.setState({ step: t + 1 });
        }, e.prevStep = function () {
          var t = e.state.step;e.setState({ step: t - 1 });
        }, e.handleChange = function (t) {
          return function (a) {
            e.setState(Object(c.a)({}, t, a.target.value));
          };
        }, e;
      }return Object(o.a)(a, [{ key: "render", value: function value() {
          var e = this.state.step,
              t = this.state,
              a = { firstName: t.firstName, lastName: t.lastName, email: t.email, occupation: t.occupation, city: t.city, bio: t.bio };switch (e) {case 1:
              return r.a.createElement(d, { nextStep: this.nextStep, handleChange: this.handleChange, values: a });case 2:
              return r.a.createElement(S, { nextStep: this.nextStep, prevStep: this.prevStep, handleChange: this.handleChange, values: a });case 3:
              return r.a.createElement(L, { nextStep: this.nextStep, prevStep: this.prevStep, values: a });case 4:
              return r.a.createElement(w, null);}
        } }]), a;
    }(n.Component);var D = function D() {
      return r.a.createElement("div", { className: "App" }, r.a.createElement(Y, null));
    };i.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(D, null)), document.getElementById("root"));
  }, 94: function _(e, t, a) {
    e.exports = a(237);
  }, 99: function _(e, t, a) {} }, [[94, 1, 2]]]);
//# sourceMappingURL=main.72b42b3e.chunk.js.map
//# sourceMappingURL=main.72b42b3e.chunk.js.map