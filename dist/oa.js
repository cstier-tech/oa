import { cloneElement as e, isValidElement as t, useId as n } from "react";
import r from "react-bootstrap/Accordion";
import i from "react-bootstrap/AccordionItem";
import a from "react-bootstrap/AccordionHeader";
import o from "react-bootstrap/AccordionBody";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import l from "react-bootstrap/Alert";
import u from "react-bootstrap/Toast";
import d from "react-bootstrap/Button";
import f from "react-bootstrap/Card";
import p from "react-bootstrap/CardBody";
import m from "react-bootstrap/CardFooter";
import h from "react-bootstrap/CardHeader";
import g from "react-bootstrap/CardImg";
import _ from "react-bootstrap/CardImgOverlay";
import v from "react-bootstrap/CardLink";
import ee from "react-bootstrap/CardSubtitle";
import te from "react-bootstrap/CardText";
import y from "react-bootstrap/CardTitle";
import b from "react-bootstrap/CardGroup";
import x from "react-bootstrap/Form";
import S from "react-bootstrap/FormGroup";
import C from "react-bootstrap/FormLabel";
import w from "react-bootstrap/FormControl";
import T from "react-bootstrap/FormSelect";
import E from "react-bootstrap/FormCheck";
import D from "react-bootstrap/FormCheckInput";
import O from "react-bootstrap/FormCheckLabel";
import k from "react-bootstrap/FormRange";
import A from "react-bootstrap/InputGroup";
import j from "react-bootstrap/FormText";
import M from "react-bootstrap/Feedback";
import N from "react-bootstrap/Modal";
import P from "react-bootstrap/ModalHeader";
import F from "react-bootstrap/ModalTitle";
import I from "react-bootstrap/ModalBody";
import L from "react-bootstrap/ModalFooter";
import R from "react-bootstrap/OverlayTrigger";
import z from "react-bootstrap/Popover";
import B from "react-bootstrap/PopoverHeader";
import V from "react-bootstrap/PopoverBody";
import H from "react-bootstrap/Table";
import U from "react-bootstrap/Tab";
import W from "react-bootstrap/Tabs";
import G from "react-bootstrap/Tooltip";
//#region src/components/Accordion/Accordion.tsx
function K({ children: e, ref: t, items: n, ...l }) {
	return /* @__PURE__ */ s(r, {
		ref: t,
		...l,
		flush: !0,
		children: n.map((e) => /* @__PURE__ */ c(i, {
			eventKey: e.id,
			children: [/* @__PURE__ */ s(a, { children: e.label }), /* @__PURE__ */ s(o, { children: e.body })]
		}, e.id))
	});
}
//#endregion
//#region src/components/Alert/Alert.tsx
function q({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function J({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ s("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function Y({ variant: e, ref: t, children: n, ...r }) {
	return /* @__PURE__ */ s(u, {
		ref: t,
		...r,
		className: "border-0 position-absolute",
		delay: 5e3,
		autohide: !0,
		style: {
			left: "16px",
			bottom: "0px",
			zIndex: "2000"
		},
		children: /* @__PURE__ */ c(q, {
			variant: e,
			children: [n, /* @__PURE__ */ s(J, {
				name: "close",
				style: {
					right: "10px",
					top: "12px",
					position: "absolute",
					fontSize: "10px"
				}
			})]
		})
	});
}
//#endregion
//#region src/components/Badge/Badge.tsx
function X({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ s("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function Z({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(d, {
		ref: t,
		...n,
		children: e
	});
}
function Q({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(J, { name: e })
	});
}
function ne({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(J, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function re({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(f, {
		ref: e,
		...n,
		children: t
	});
}
function ie({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(p, {
		ref: e,
		...n,
		children: t
	});
}
function ae({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(m, {
		ref: e,
		...n,
		children: t
	});
}
function oe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(h, {
		ref: e,
		...n,
		children: t
	});
}
function se({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ s(g, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function ce({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(_, {
		ref: e,
		...n,
		children: t
	});
}
function le({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ s(v, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function ue({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(te, {
		ref: e,
		...n,
		children: t
	});
}
function de({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(ee, {
		ref: e,
		...n,
		children: t
	});
}
function fe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(y, {
		ref: e,
		...n,
		children: t
	});
}
function pe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(b, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Costep/Costep.tsx
function me({ children: e, className: t = "", ref: n, ...r }) {
	return /* @__PURE__ */ s("div", {
		ref: n,
		className: `costeps row no-gutters${t}`,
		...r,
		children: e
	});
}
function he({ label: e, icon: t, status: n = "inactive", step: r, href: i, onClick: a, colClassName: o = "col-2", className: l = "", ref: u, ...d }) {
	let f = n === "inactive";
	return /* @__PURE__ */ s("div", {
		ref: u,
		className: `${o} costep ${n} ${l}`,
		"data-step": r,
		...d,
		children: /* @__PURE__ */ c("a", {
			className: "costep-link",
			href: f ? void 0 : i,
			onClick: f ? void 0 : a,
			"aria-current": n === "active" ? "step" : void 0,
			"aria-disabled": f || void 0,
			children: [/* @__PURE__ */ s("i", {
				className: "costep-icon",
				"aria-hidden": "true",
				children: t
			}), /* @__PURE__ */ s("span", {
				className: "costep-label",
				children: e
			})]
		})
	});
}
//#endregion
//#region src/components/Form/Form.tsx
function ge({ children: e, ...t }) {
	return /* @__PURE__ */ s(x, {
		...t,
		children: e
	});
}
function _e({ children: e, ...t }) {
	return /* @__PURE__ */ s(S, {
		className: "form-group",
		...t,
		children: e
	});
}
function ve({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function ye({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function be({ children: e, ...t }) {
	return /* @__PURE__ */ s(j, {
		...t,
		children: e
	});
}
function xe({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function Se({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function Ce({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function we({ children: e, ...t }) {
	return /* @__PURE__ */ s(O, {
		...t,
		children: e
	});
}
function Te({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
function Ee({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
		...t,
		children: e
	});
}
function De({ children: e, ...t }) {
	return /* @__PURE__ */ s(M, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function $({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(N, {
		ref: e,
		...n,
		children: t
	});
}
function Oe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(P, {
		ref: e,
		...n,
		children: t
	});
}
function ke({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function Ae({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
function je({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(L, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function Me({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
	let d = n(), f = o ?? d, p = t(i) ? e(i, {
		title: r,
		"data-toggle": "popover",
		"data-placement": a,
		"data-content": l,
		"data-trigger": u
	}) : /* @__PURE__ */ s("span", {
		title: r,
		"data-content": l,
		children: i
	});
	return /* @__PURE__ */ s(R, {
		placement: a,
		overlay: r === "" ? /* @__PURE__ */ s(z, {
			id: f,
			children: /* @__PURE__ */ s(V, { children: l })
		}) : /* @__PURE__ */ c(z, {
			id: f,
			children: [/* @__PURE__ */ s(B, { children: r }), /* @__PURE__ */ s(V, { children: l })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ s(H, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function Pe({ tabStyle: e = "standard", children: t, ...n }) {
	return /* @__PURE__ */ s(W, {
		className: e === "line" ? "nav-tabs-line" : void 0,
		...n,
		children: t
	});
}
function Fe({ children: e, ...t }) {
	return /* @__PURE__ */ s(U, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function Ie({ title: r, children: i, placement: a, id: o }) {
	let c = n(), l = o ?? c, u = t(i) ? e(i, {
		title: r,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ s("span", {
		title: r,
		children: i
	});
	return /* @__PURE__ */ s(R, {
		placement: a,
		overlay: /* @__PURE__ */ s(G, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function Le({ children: e, pageClass: t = "" }) {
	return /* @__PURE__ */ s("div", {
		id: "content-wrapper",
		children: /* @__PURE__ */ s("section", {
			id: "content",
			className: "container",
			children: /* @__PURE__ */ s("div", {
				id: "content-body",
				className: "row",
				children: /* @__PURE__ */ s("div", {
					id: "content-center",
					className: "col-lg-12",
					children: /* @__PURE__ */ s("div", {
						className: `page ${t}`.trim(),
						children: e
					})
				})
			})
		})
	});
}
//#endregion
export { K as Accordion, q as Alert, Y as AlertToast, X as Badge, Z as Button, re as Card, ie as CardBody, ae as CardFooter, pe as CardGroup, oe as CardHeader, se as CardImg, ce as CardImgOverlay, le as CardLink, de as CardSubtitle, ue as CardText, fe as CardTitle, ne as CircleButton, he as Costep, me as Costeps, De as Feedback, ge as Form, Se as FormCheck, Ce as FormCheckInput, we as FormCheckLabel, ye as FormControl, _e as FormGroup, ve as FormLabel, Te as FormRange, xe as FormSelect, be as FormText, J as Icon, Q as IconButton, Ee as InputGroup, Le as Layout, $ as Modal, Ae as ModalBody, je as ModalFooter, Oe as ModalHeader, ke as ModalTitle, Me as Popover, Fe as Tab, Ne as Table, Pe as Tabs, Ie as Tooltip };
