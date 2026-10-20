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
import ee from "react-bootstrap/CardImgOverlay";
import te from "react-bootstrap/CardLink";
import ne from "react-bootstrap/CardSubtitle";
import re from "react-bootstrap/CardText";
import _ from "react-bootstrap/CardTitle";
import v from "react-bootstrap/CardGroup";
import y from "react-bootstrap/Collapse";
import b from "react-bootstrap/Form";
import x from "react-bootstrap/FormGroup";
import S from "react-bootstrap/FormLabel";
import C from "react-bootstrap/FormControl";
import w from "react-bootstrap/FormSelect";
import T from "react-bootstrap/FormCheck";
import E from "react-bootstrap/FormCheckInput";
import D from "react-bootstrap/FormCheckLabel";
import O from "react-bootstrap/FormRange";
import k from "react-bootstrap/InputGroup";
import A from "react-bootstrap/FormText";
import j from "react-bootstrap/Feedback";
import M from "react-bootstrap/ListGroup";
import N from "react-bootstrap/ListGroupItem";
import P from "react-bootstrap/Modal";
import F from "react-bootstrap/ModalHeader";
import I from "react-bootstrap/ModalTitle";
import L from "react-bootstrap/ModalBody";
import R from "react-bootstrap/ModalFooter";
import z from "react-bootstrap/Pagination";
import B from "react-bootstrap/PageItem";
import V from "react-bootstrap/OverlayTrigger";
import H from "react-bootstrap/Popover";
import U from "react-bootstrap/PopoverHeader";
import W from "react-bootstrap/PopoverBody";
import G from "react-bootstrap/Table";
import K from "react-bootstrap/Tab";
import q from "react-bootstrap/Tabs";
import J from "react-bootstrap/Tooltip";
import Y from "react-bootstrap/Container";
import X from "react-bootstrap/Row";
import ie from "react-bootstrap/Col";
//#region src/components/Accordion/Accordion.tsx
function ae({ children: e, ref: t, items: n, ...l }) {
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
function oe({ variant: e, ref: t, children: n, ...r }) {
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
function se({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ s("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function ce({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(d, {
		ref: t,
		...n,
		children: e
	});
}
function le({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(Q, { name: e })
	});
}
function ue({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(Q, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function de({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(f, {
		ref: e,
		...n,
		children: t
	});
}
function fe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(p, {
		ref: e,
		...n,
		children: t
	});
}
function pe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(m, {
		ref: e,
		...n,
		children: t
	});
}
function me({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(h, {
		ref: e,
		...n,
		children: t
	});
}
function he({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ s(g, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function ge({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(ee, {
		ref: e,
		...n,
		children: t
	});
}
function _e({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ s(te, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(re, {
		ref: e,
		...n,
		children: t
	});
}
function ye({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(ne, {
		ref: e,
		...n,
		children: t
	});
}
function be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(_, {
		ref: e,
		...n,
		children: t
	});
}
function xe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(v, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Collapse/Collapse.tsx
function Se({ children: e, ...t }) {
	return /* @__PURE__ */ s(y, {
		dimension: "height",
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Costep/Costep.tsx
function Ce({ children: e, className: t = "", ref: n, ...r }) {
	return /* @__PURE__ */ s("div", {
		ref: n,
		className: `costeps row no-gutters${t}`,
		...r,
		children: e
	});
}
function we({ label: e, icon: t, status: n = "inactive", step: r, href: i, onClick: a, colClassName: o = "col-2", className: l = "", ref: u, ...d }) {
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
function Te({ children: e, ...t }) {
	return /* @__PURE__ */ s(b, {
		...t,
		children: e
	});
}
function Ee({ className: e, children: t, ...n }) {
	let r = ["form-group", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(x, {
		className: r,
		...n,
		children: t
	});
}
function De({ children: e, ...t }) {
	return /* @__PURE__ */ s(S, {
		...t,
		children: e
	});
}
function Oe({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function ke({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
		...t,
		children: e
	});
}
function Ae({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function je({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function Me({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function Pe({ children: e, ...t }) {
	return /* @__PURE__ */ s(O, {
		...t,
		children: e
	});
}
function Fe({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
function Ie({ children: e, ...t }) {
	return /* @__PURE__ */ s(j, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/ListGroup/ListGroup.tsx
function Le({ children: e, ...t }) {
	return /* @__PURE__ */ s(M, {
		...t,
		children: e
	});
}
function Re({ children: e, ...t }) {
	return /* @__PURE__ */ s(N, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function ze({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(P, {
		ref: e,
		...n,
		children: t
	});
}
function Be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function Ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
function $({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(L, {
		ref: e,
		...n,
		children: t
	});
}
function He({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(R, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Pagination/Pagination.tsx
function Ue({ children: e, ...t }) {
	return /* @__PURE__ */ s(z, {
		...t,
		children: e
	});
}
function We({ children: e, ...t }) {
	return /* @__PURE__ */ s(B, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function Ge({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
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
	return /* @__PURE__ */ s(V, {
		placement: a,
		overlay: r === "" ? /* @__PURE__ */ s(H, {
			id: f,
			children: /* @__PURE__ */ s(W, { children: l })
		}) : /* @__PURE__ */ c(H, {
			id: f,
			children: [/* @__PURE__ */ s(U, { children: r }), /* @__PURE__ */ s(W, { children: l })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Ke({ children: e, ...t }) {
	return /* @__PURE__ */ s(G, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function qe({ tabStyle: e = "standard", className: t, children: n, ...r }) {
	let i = [e === "line" && "nav-tabs-line", t].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(q, {
		className: i || void 0,
		...r,
		children: n
	});
}
function Je({ children: e, ...t }) {
	return /* @__PURE__ */ s(K, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function Ye({ title: r, children: i, placement: a, id: o }) {
	let c = n(), l = o ?? c, u = t(i) ? e(i, {
		title: r,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ s("span", {
		title: r,
		children: i
	});
	return /* @__PURE__ */ s(V, {
		placement: a,
		overlay: /* @__PURE__ */ s(J, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Grid/Grid.tsx
function Xe({ children: e, ...t }) {
	return /* @__PURE__ */ s(Y, {
		...t,
		children: e
	});
}
function Ze({ children: e, ...t }) {
	return /* @__PURE__ */ s(X, {
		...t,
		children: e
	});
}
function Qe({ children: e, ...t }) {
	return /* @__PURE__ */ s(ie, {
		...t,
		children: e
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function $e({ children: e, pageClass: t = "" }) {
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
export { ae as Accordion, Z as Alert, oe as AlertToast, se as Badge, ce as Button, de as Card, fe as CardBody, pe as CardFooter, xe as CardGroup, me as CardHeader, he as CardImg, ge as CardImgOverlay, _e as CardLink, ye as CardSubtitle, ve as CardText, be as CardTitle, ue as CircleButton, Qe as Col, Se as Collapse, Xe as Container, we as Costep, Ce as Costeps, Ie as Feedback, Te as Form, je as FormCheck, Me as FormCheckInput, Ne as FormCheckLabel, Oe as FormControl, Ee as FormGroup, De as FormLabel, Pe as FormRange, Ae as FormSelect, ke as FormText, Q as Icon, le as IconButton, Fe as InputGroup, $e as Layout, Le as ListGroup, Re as ListGroupItem, ze as Modal, $ as ModalBody, He as ModalFooter, Be as ModalHeader, Ve as ModalTitle, We as PageItem, Ue as Pagination, Ge as Popover, Ze as Row, Je as Tab, Ke as Table, qe as Tabs, Ye as Tooltip };
