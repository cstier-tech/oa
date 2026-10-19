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
import ee from "react-bootstrap/CardImg";
import g from "react-bootstrap/CardImgOverlay";
import _ from "react-bootstrap/CardLink";
import v from "react-bootstrap/CardSubtitle";
import y from "react-bootstrap/CardText";
import b from "react-bootstrap/CardTitle";
import x from "react-bootstrap/CardGroup";
import S from "react-bootstrap/Form";
import C from "react-bootstrap/FormGroup";
import w from "react-bootstrap/FormLabel";
import T from "react-bootstrap/FormControl";
import E from "react-bootstrap/FormSelect";
import D from "react-bootstrap/FormCheck";
import O from "react-bootstrap/FormCheckInput";
import k from "react-bootstrap/FormCheckLabel";
import A from "react-bootstrap/FormRange";
import j from "react-bootstrap/InputGroup";
import M from "react-bootstrap/FormText";
import N from "react-bootstrap/Feedback";
import P from "react-bootstrap/Modal";
import F from "react-bootstrap/ModalHeader";
import I from "react-bootstrap/ModalTitle";
import L from "react-bootstrap/ModalBody";
import R from "react-bootstrap/ModalFooter";
import z from "react-bootstrap/OverlayTrigger";
import B from "react-bootstrap/Popover";
import V from "react-bootstrap/PopoverHeader";
import H from "react-bootstrap/PopoverBody";
import "react-bootstrap/Table";
import "react-bootstrap/Tab";
import "react-bootstrap/Tabs";
import U from "react-bootstrap/Tooltip";
//#region src/components/Accordion/Accordion.tsx
function W({ children: e, ref: t, items: n, ...l }) {
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
function G({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function K({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ s("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function q({ variant: e, ref: t, children: n, ...r }) {
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
		children: /* @__PURE__ */ c(G, {
			variant: e,
			children: [n, /* @__PURE__ */ s(K, {
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
function J({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ s("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function Y({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(d, {
		ref: t,
		...n,
		children: e
	});
}
function X({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(K, { name: e })
	});
}
function Z({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(K, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function Q({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(f, {
		ref: e,
		...n,
		children: t
	});
}
function $({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(p, {
		ref: e,
		...n,
		children: t
	});
}
function te({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(m, {
		ref: e,
		...n,
		children: t
	});
}
function ne({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(h, {
		ref: e,
		...n,
		children: t
	});
}
function re({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ s(ee, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function ie({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(g, {
		ref: e,
		...n,
		children: t
	});
}
function ae({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ s(_, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function oe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(y, {
		ref: e,
		...n,
		children: t
	});
}
function se({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(v, {
		ref: e,
		...n,
		children: t
	});
}
function ce({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(b, {
		ref: e,
		...n,
		children: t
	});
}
function le({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(x, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Form/Form.tsx
function ue({ children: e, ...t }) {
	return /* @__PURE__ */ s(S, {
		...t,
		children: e
	});
}
function de({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function fe({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function pe({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function me({ children: e, ...t }) {
	return /* @__PURE__ */ s(M, {
		...t,
		children: e
	});
}
function he({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function ge({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function _e({ children: e, ...t }) {
	return /* @__PURE__ */ s(O, {
		...t,
		children: e
	});
}
function ve({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
function ye({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
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
	return /* @__PURE__ */ s(N, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function Se({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(P, {
		ref: e,
		...n,
		children: t
	});
}
function Ce({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function we({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
function Te({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(L, {
		ref: e,
		...n,
		children: t
	});
}
function Ee({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(R, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function De({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
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
	return /* @__PURE__ */ s(z, {
		placement: a,
		overlay: r === "" ? /* @__PURE__ */ s(B, {
			id: f,
			children: /* @__PURE__ */ s(H, { children: l })
		}) : /* @__PURE__ */ c(B, {
			id: f,
			children: [/* @__PURE__ */ s(V, { children: r }), /* @__PURE__ */ s(H, { children: l })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Oe({ children: e, ...t }) {
	({ ...t });
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function ke({ children: e, ...t }) {
	({ ...t });
}
function Ae({ children: e, ...t }) {
	({ ...t });
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function je({ title: r, children: i, placement: a, id: o }) {
	let c = n(), l = o ?? c, u = t(i) ? e(i, {
		title: r,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ s("span", {
		title: r,
		children: i
	});
	return /* @__PURE__ */ s(z, {
		placement: a,
		overlay: /* @__PURE__ */ s(U, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
export { W as Accordion, G as Alert, q as AlertToast, J as Badge, Y as Button, Q as Card, $ as CardBody, te as CardFooter, le as CardGroup, ne as CardHeader, re as CardImg, ie as CardImgOverlay, ae as CardLink, se as CardSubtitle, oe as CardText, ce as CardTitle, Z as CircleButton, xe as Feedback, ue as Form, ge as FormCheck, _e as FormCheckInput, ve as FormCheckLabel, pe as FormControl, de as FormGroup, fe as FormLabel, ye as FormRange, he as FormSelect, me as FormText, K as Icon, X as IconButton, be as InputGroup, Se as Modal, Te as ModalBody, Ee as ModalFooter, Ce as ModalHeader, we as ModalTitle, De as Popover, Ae as Tab, Oe as Table, ke as Tabs, je as Tooltip };
