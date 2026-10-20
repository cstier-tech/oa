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
import ee from "react-bootstrap/CardFooter";
import te from "react-bootstrap/CardHeader";
import ne from "react-bootstrap/CardImg";
import m from "react-bootstrap/CardImgOverlay";
import h from "react-bootstrap/CardLink";
import g from "react-bootstrap/CardSubtitle";
import _ from "react-bootstrap/CardText";
import v from "react-bootstrap/CardTitle";
import y from "react-bootstrap/CardGroup";
import b from "react-bootstrap/Collapse";
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
import N from "react-bootstrap/ListGroup";
import P from "react-bootstrap/ListGroupItem";
import F from "react-bootstrap/Modal";
import I from "react-bootstrap/ModalHeader";
import L from "react-bootstrap/ModalTitle";
import R from "react-bootstrap/ModalBody";
import z from "react-bootstrap/ModalFooter";
import B from "react-bootstrap/Pagination";
import V from "react-bootstrap/PageItem";
import H from "react-bootstrap/OverlayTrigger";
import U from "react-bootstrap/Popover";
import W from "react-bootstrap/PopoverHeader";
import G from "react-bootstrap/PopoverBody";
import K from "react-bootstrap/Table";
import q from "react-bootstrap/Tab";
import J from "react-bootstrap/Tabs";
import Y from "react-bootstrap/Tooltip";
//#region src/components/Accordion/Accordion.tsx
function X({ children: e, ref: t, items: n, ...l }) {
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
function Z({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function Q({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ s("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function re({ variant: e, ref: t, children: n, ...r }) {
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
		children: /* @__PURE__ */ c(Z, {
			variant: e,
			children: [n, /* @__PURE__ */ s(Q, {
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
function ie({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ s("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function ae({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(d, {
		ref: t,
		...n,
		children: e
	});
}
function $({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(Q, { name: e })
	});
}
function oe({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(Q, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function se({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(f, {
		ref: e,
		...n,
		children: t
	});
}
function ce({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(p, {
		ref: e,
		...n,
		children: t
	});
}
function le({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(ee, {
		ref: e,
		...n,
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
function de({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ s(ne, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function fe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(m, {
		ref: e,
		...n,
		children: t
	});
}
function pe({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ s(h, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function me({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(_, {
		ref: e,
		...n,
		children: t
	});
}
function he({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(g, {
		ref: e,
		...n,
		children: t
	});
}
function ge({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(v, {
		ref: e,
		...n,
		children: t
	});
}
function _e({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(y, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Collapse/Collapse.tsx
function ve({ children: e, ...t }) {
	return /* @__PURE__ */ s(b, {
		dimension: "height",
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Costep/Costep.tsx
function ye({ children: e, className: t = "", ref: n, ...r }) {
	return /* @__PURE__ */ s("div", {
		ref: n,
		className: `costeps row no-gutters${t}`,
		...r,
		children: e
	});
}
function be({ label: e, icon: t, status: n = "inactive", step: r, href: i, onClick: a, colClassName: o = "col-2", className: l = "", ref: u, ...d }) {
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
function xe({ children: e, ...t }) {
	return /* @__PURE__ */ s(x, {
		...t,
		children: e
	});
}
function Se({ className: e, children: t, ...n }) {
	let r = ["form-group", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(S, {
		className: r,
		...n,
		children: t
	});
}
function Ce({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function we({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function Te({ children: e, ...t }) {
	return /* @__PURE__ */ s(j, {
		...t,
		children: e
	});
}
function Ee({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function De({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function Oe({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function ke({ children: e, ...t }) {
	return /* @__PURE__ */ s(O, {
		...t,
		children: e
	});
}
function Ae({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
function je({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
		...t,
		children: e
	});
}
function Me({ children: e, ...t }) {
	return /* @__PURE__ */ s(M, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/ListGroup/ListGroup.tsx
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ s(N, {
		...t,
		children: e
	});
}
function Pe({ children: e, ...t }) {
	return /* @__PURE__ */ s(P, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function Fe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function Ie({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
function Le({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(L, {
		ref: e,
		...n,
		children: t
	});
}
function Re({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(R, {
		ref: e,
		...n,
		children: t
	});
}
function ze({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(z, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Pagination/Pagination.tsx
function Be({ children: e, ...t }) {
	return /* @__PURE__ */ s(B, {
		...t,
		children: e
	});
}
function Ve({ children: e, ...t }) {
	return /* @__PURE__ */ s(V, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function He({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
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
	return /* @__PURE__ */ s(H, {
		placement: a,
		overlay: r === "" ? /* @__PURE__ */ s(U, {
			id: f,
			children: /* @__PURE__ */ s(G, { children: l })
		}) : /* @__PURE__ */ c(U, {
			id: f,
			children: [/* @__PURE__ */ s(W, { children: r }), /* @__PURE__ */ s(G, { children: l })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Ue({ children: e, ...t }) {
	return /* @__PURE__ */ s(K, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function We({ tabStyle: e = "standard", className: t, children: n, ...r }) {
	let i = [e === "line" && "nav-tabs-line", t].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(J, {
		className: i || void 0,
		...r,
		children: n
	});
}
function Ge({ children: e, ...t }) {
	return /* @__PURE__ */ s(q, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function Ke({ title: r, children: i, placement: a, id: o }) {
	let c = n(), l = o ?? c, u = t(i) ? e(i, {
		title: r,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ s("span", {
		title: r,
		children: i
	});
	return /* @__PURE__ */ s(H, {
		placement: a,
		overlay: /* @__PURE__ */ s(Y, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function qe({ children: e, pageClass: t = "" }) {
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
export { X as Accordion, Z as Alert, re as AlertToast, ie as Badge, ae as Button, se as Card, ce as CardBody, le as CardFooter, _e as CardGroup, ue as CardHeader, de as CardImg, fe as CardImgOverlay, pe as CardLink, he as CardSubtitle, me as CardText, ge as CardTitle, oe as CircleButton, ve as Collapse, be as Costep, ye as Costeps, Me as Feedback, xe as Form, De as FormCheck, Oe as FormCheckInput, ke as FormCheckLabel, we as FormControl, Se as FormGroup, Ce as FormLabel, Ae as FormRange, Ee as FormSelect, Te as FormText, Q as Icon, $ as IconButton, je as InputGroup, qe as Layout, Ne as ListGroup, Pe as ListGroupItem, Fe as Modal, Re as ModalBody, ze as ModalFooter, Ie as ModalHeader, Le as ModalTitle, Ve as PageItem, Be as Pagination, He as Popover, Ge as Tab, Ue as Table, We as Tabs, Ke as Tooltip };
