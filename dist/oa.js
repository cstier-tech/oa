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
import y from "react-bootstrap/CardSubtitle";
import b from "react-bootstrap/CardText";
import x from "react-bootstrap/CardTitle";
import ee from "react-bootstrap/CardGroup";
import te from "react-bootstrap/Collapse";
import ne from "react-bootstrap/Form";
import re from "react-bootstrap/FormGroup";
import ie from "react-bootstrap/FormLabel";
import ae from "react-bootstrap/FormControl";
import S from "react-bootstrap/FormSelect";
import C from "react-bootstrap/FormCheck";
import w from "react-bootstrap/FormCheckInput";
import T from "react-bootstrap/FormCheckLabel";
import E from "react-bootstrap/FormRange";
import D from "react-bootstrap/InputGroup";
import O from "react-bootstrap/FormText";
import k from "react-bootstrap/Feedback";
import A from "react-bootstrap/ListGroup";
import j from "react-bootstrap/ListGroupItem";
import M from "react-bootstrap/Modal";
import N from "react-bootstrap/ModalHeader";
import P from "react-bootstrap/ModalTitle";
import F from "react-bootstrap/ModalBody";
import I from "react-bootstrap/ModalFooter";
import L from "react-bootstrap/Pagination";
import R from "react-bootstrap/PageItem";
import z from "react-bootstrap/OverlayTrigger";
import B from "react-bootstrap/Popover";
import V from "react-bootstrap/PopoverHeader";
import H from "react-bootstrap/PopoverBody";
import U from "react-bootstrap/Table";
import W from "react-bootstrap/Tab";
import G from "react-bootstrap/Tabs";
import K from "react-bootstrap/Tooltip";
import q from "react-bootstrap/Container";
import J from "react-bootstrap/Row";
import oe from "react-bootstrap/Col";
//#region src/components/Accordion/Accordion.tsx
function se({ children: e, ref: t, items: n, ...l }) {
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
function Y({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function X({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ s("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function ce({ variant: e, ref: t, children: n, ...r }) {
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
		children: /* @__PURE__ */ c(Y, {
			variant: e,
			children: [n, /* @__PURE__ */ s(X, {
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
function le({ children: e, className: t = "", variant: n, ref: r, ...i }) {
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
function ue({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(X, { name: e })
	});
}
function de({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(X, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function fe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(f, {
		ref: e,
		...n,
		children: t
	});
}
function pe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(p, {
		ref: e,
		...n,
		children: t
	});
}
function me({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(m, {
		ref: e,
		...n,
		children: t
	});
}
function he({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(h, {
		ref: e,
		...n,
		children: t
	});
}
function ge({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ s(g, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function _e({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(_, {
		ref: e,
		...n,
		children: t
	});
}
function ve({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ s(v, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function ye({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(b, {
		ref: e,
		...n,
		children: t
	});
}
function be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(y, {
		ref: e,
		...n,
		children: t
	});
}
function xe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(x, {
		ref: e,
		...n,
		children: t
	});
}
function Se({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(ee, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Collapse/Collapse.tsx
function Q({ children: e, ...t }) {
	return /* @__PURE__ */ s(te, {
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
	return /* @__PURE__ */ s(ne, {
		...t,
		children: e
	});
}
function Ee({ className: e, children: t, ...n }) {
	let r = ["form-group", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(re, {
		className: r,
		...n,
		children: t
	});
}
function De({ children: e, ...t }) {
	return /* @__PURE__ */ s(ie, {
		...t,
		children: e
	});
}
function Oe({ children: e, ...t }) {
	return /* @__PURE__ */ s(ae, {
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
	return /* @__PURE__ */ s(S, {
		...t,
		children: e
	});
}
function je({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function Me({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function Pe({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function Fe({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function Ie({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/ListGroup/ListGroup.tsx
function Le({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
		...t,
		children: e
	});
}
function Re({ children: e, ...t }) {
	return /* @__PURE__ */ s(j, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function ze({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(M, {
		ref: e,
		...n,
		children: t
	});
}
function Be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(N, {
		ref: e,
		...n,
		children: t
	});
}
function Ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(P, {
		ref: e,
		...n,
		children: t
	});
}
function He({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function Ue({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Offcanvas/Offcanvas.tsx
function We({ children: e, placement: t = "left", shadow: n = !0, fullscreen: r = !1, show: i, id: a }) {
	return /* @__PURE__ */ s("aside", {
		id: a,
		className: `offcanvas-panel offcanvas-overlay ${i ? "on" : ""} ${r ? "offcanvas-fullscreen" : "offcanvas-panel-lg"} ${n ? "offcanvas-shadow" : ""} ${t === "right" ? "offcanvas-right" : "offcanvas-left"}`,
		"data-blocker": "true",
		"data-overlay": "true",
		children: /* @__PURE__ */ s("div", {
			className: "offcanvas-content",
			children: /* @__PURE__ */ s("div", {
				className: "offcanvas-scrollable",
				children: e
			})
		})
	});
}
function Ge({ onClick: e }) {
	return /* @__PURE__ */ s(Z, {
		variant: "secondary",
		className: "btn-flat offcanvas-closer",
		onClick: e,
		children: "Close"
	});
}
//#endregion
//#region src/components/OptList/OptList.tsx
function Ke({ className: e, children: t, ...n }) {
	let r = ["opt-list", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(A, {
		className: r,
		...n,
		children: t
	});
}
function qe({ children: e, id: t, label: n, className: r, checked: i, type: a = "radio", active: o = i, expanded: l = i ?? !0, ...u }) {
	let d = ["opt-control", r].filter(Boolean).join(" ");
	return /* @__PURE__ */ c(j, {
		className: "opt-list-item",
		active: o,
		children: [/* @__PURE__ */ c(C, {
			id: t,
			className: d,
			children: [/* @__PURE__ */ s(w, {
				type: a,
				checked: i,
				...u
			}), /* @__PURE__ */ s(T, { children: /* @__PURE__ */ s("span", {
				className: "opt-name",
				children: n
			}) })]
		}), e && /* @__PURE__ */ s(Q, {
			in: l,
			children: /* @__PURE__ */ s("div", { children: e })
		})]
	});
}
function Je({ isForm: e = !1, className: t, formClassName: n, children: r, ...i }) {
	let a = ["opt-info", t].filter(Boolean).join(" "), o = ["opt-form", n].filter(Boolean).join(" ");
	return /* @__PURE__ */ s("div", {
		className: a,
		...i,
		children: e ? /* @__PURE__ */ s("div", {
			className: o,
			children: r
		}) : r
	});
}
//#endregion
//#region src/components/Pagination/Pagination.tsx
function $({ children: e, ...t }) {
	return /* @__PURE__ */ s(L, {
		...t,
		children: e
	});
}
function Ye({ children: e, ...t }) {
	return /* @__PURE__ */ s(R, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function Xe({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
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
function Ze({ children: e, ...t }) {
	return /* @__PURE__ */ s(U, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function Qe({ tabStyle: e = "standard", className: t, children: n, ...r }) {
	let i = [e === "line" && "nav-tabs-line", t].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(G, {
		className: i || void 0,
		...r,
		children: n
	});
}
function $e({ children: e, ...t }) {
	return /* @__PURE__ */ s(W, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function et({ title: r, children: i, placement: a, id: o }) {
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
		overlay: /* @__PURE__ */ s(K, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Grid/Grid.tsx
function tt({ children: e, ...t }) {
	return /* @__PURE__ */ s(q, {
		...t,
		children: e
	});
}
function nt({ children: e, ...t }) {
	return /* @__PURE__ */ s(J, {
		...t,
		children: e
	});
}
function rt({ children: e, ...t }) {
	return /* @__PURE__ */ s(oe, {
		...t,
		children: e
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function it({ children: e, pageClass: t = "" }) {
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
export { se as Accordion, Y as Alert, ce as AlertToast, le as Badge, Z as Button, fe as Card, pe as CardBody, me as CardFooter, Se as CardGroup, he as CardHeader, ge as CardImg, _e as CardImgOverlay, ve as CardLink, be as CardSubtitle, ye as CardText, xe as CardTitle, de as CircleButton, rt as Col, Q as Collapse, tt as Container, we as Costep, Ce as Costeps, Ie as Feedback, Te as Form, je as FormCheck, Me as FormCheckInput, Ne as FormCheckLabel, Oe as FormControl, Ee as FormGroup, De as FormLabel, Pe as FormRange, Ae as FormSelect, ke as FormText, X as Icon, ue as IconButton, Fe as InputGroup, it as Layout, Le as ListGroup, Re as ListGroupItem, ze as Modal, He as ModalBody, Ue as ModalFooter, Be as ModalHeader, Ve as ModalTitle, We as Offcanvas, Ge as OffcanvasCloser, Je as OptContent, qe as OptItem, Ke as OptList, Ye as PageItem, $ as Pagination, Xe as Popover, nt as Row, $e as Tab, Ze as Table, Qe as Tabs, et as Tooltip };
