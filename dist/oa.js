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
import S from "react-bootstrap/FormControl";
import C from "react-bootstrap/FormSelect";
import w from "react-bootstrap/FormCheck";
import T from "react-bootstrap/FormCheckInput";
import E from "react-bootstrap/FormCheckLabel";
import D from "react-bootstrap/FormRange";
import O from "react-bootstrap/InputGroup";
import k from "react-bootstrap/FormText";
import A from "react-bootstrap/Feedback";
import j from "react-bootstrap/ListGroup";
import M from "react-bootstrap/ListGroupItem";
import N from "react-bootstrap/Modal";
import P from "react-bootstrap/ModalHeader";
import F from "react-bootstrap/ModalTitle";
import I from "react-bootstrap/ModalBody";
import L from "react-bootstrap/ModalFooter";
import R from "react-bootstrap/Pagination";
import z from "react-bootstrap/PageItem";
import B from "react-bootstrap/OverlayTrigger";
import V from "react-bootstrap/Popover";
import H from "react-bootstrap/PopoverHeader";
import U from "react-bootstrap/PopoverBody";
import W from "react-bootstrap/Table";
import G from "react-bootstrap/Tab";
import K from "react-bootstrap/Tabs";
import q from "react-bootstrap/Tooltip";
import J from "react-bootstrap/Container";
import Y from "react-bootstrap/Row";
import ae from "react-bootstrap/Col";
//#region src/components/Accordion/Accordion.tsx
function oe({ children: e, ref: t, items: n, ...l }) {
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
function X({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ s(l, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function Z({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ s("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function se({ variant: e, ref: t, children: n, ...r }) {
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
		children: /* @__PURE__ */ c(X, {
			variant: e,
			children: [n, /* @__PURE__ */ s(Z, {
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
function ce({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ s("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function le({ children: e, ref: t, ...n }) {
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
		children: /* @__PURE__ */ s(Z, { name: e })
	});
}
function de({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ s(d, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ s(Z, { name: e })
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
	return /* @__PURE__ */ s(S, {
		...t,
		children: e
	});
}
function ke({ children: e, ...t }) {
	return /* @__PURE__ */ s(k, {
		...t,
		children: e
	});
}
function Ae({ children: e, ...t }) {
	return /* @__PURE__ */ s(C, {
		...t,
		children: e
	});
}
function je({ children: e, ...t }) {
	return /* @__PURE__ */ s(w, {
		...t,
		children: e
	});
}
function Me({ children: e, ...t }) {
	return /* @__PURE__ */ s(T, {
		...t,
		children: e
	});
}
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ s(E, {
		...t,
		children: e
	});
}
function Pe({ children: e, ...t }) {
	return /* @__PURE__ */ s(D, {
		...t,
		children: e
	});
}
function Fe({ children: e, ...t }) {
	return /* @__PURE__ */ s(O, {
		...t,
		children: e
	});
}
function Ie({ children: e, ...t }) {
	return /* @__PURE__ */ s(A, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/ListGroup/ListGroup.tsx
function Le({ children: e, ...t }) {
	return /* @__PURE__ */ s(j, {
		...t,
		children: e
	});
}
function Re({ children: e, ...t }) {
	return /* @__PURE__ */ s(M, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function ze({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(N, {
		ref: e,
		...n,
		children: t
	});
}
function Be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(P, {
		ref: e,
		...n,
		children: t
	});
}
function Ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(F, {
		ref: e,
		...n,
		children: t
	});
}
function $({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(I, {
		ref: e,
		...n,
		children: t
	});
}
function He({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ s(L, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/OptList/OptList.tsx
function Ue({ className: e, children: t, ...n }) {
	let r = ["opt-list", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(j, {
		className: r,
		...n,
		children: t
	});
}
function We({ children: e, id: t, label: n, className: r, checked: i, type: a = "radio", active: o = i, expanded: l = i ?? !0, ...u }) {
	let d = ["opt-control", r].filter(Boolean).join(" ");
	return /* @__PURE__ */ c(M, {
		className: "opt-list-item",
		active: o,
		children: [/* @__PURE__ */ c(w, {
			id: t,
			className: d,
			children: [/* @__PURE__ */ s(T, {
				type: a,
				checked: i,
				...u
			}), /* @__PURE__ */ s(E, { children: /* @__PURE__ */ s("span", {
				className: "opt-name",
				children: n
			}) })]
		}), e && /* @__PURE__ */ s(Q, {
			in: l,
			children: /* @__PURE__ */ s("div", { children: e })
		})]
	});
}
function Ge({ isForm: e = !1, className: t, formClassName: n, children: r, ...i }) {
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
function Ke({ children: e, ...t }) {
	return /* @__PURE__ */ s(R, {
		...t,
		children: e
	});
}
function qe({ children: e, ...t }) {
	return /* @__PURE__ */ s(z, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function Je({ title: r, children: i, placement: a, id: o, content: l, trigger: u = "click" }) {
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
	return /* @__PURE__ */ s(B, {
		placement: a,
		overlay: r === "" ? /* @__PURE__ */ s(V, {
			id: f,
			children: /* @__PURE__ */ s(U, { children: l })
		}) : /* @__PURE__ */ c(V, {
			id: f,
			children: [/* @__PURE__ */ s(H, { children: r }), /* @__PURE__ */ s(U, { children: l })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Ye({ children: e, ...t }) {
	return /* @__PURE__ */ s(W, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function Xe({ tabStyle: e = "standard", className: t, children: n, ...r }) {
	let i = [e === "line" && "nav-tabs-line", t].filter(Boolean).join(" ");
	return /* @__PURE__ */ s(K, {
		className: i || void 0,
		...r,
		children: n
	});
}
function Ze({ children: e, ...t }) {
	return /* @__PURE__ */ s(G, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function Qe({ title: r, children: i, placement: a, id: o }) {
	let c = n(), l = o ?? c, u = t(i) ? e(i, {
		title: r,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ s("span", {
		title: r,
		children: i
	});
	return /* @__PURE__ */ s(B, {
		placement: a,
		overlay: /* @__PURE__ */ s(q, {
			id: l,
			children: r
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Grid/Grid.tsx
function $e({ children: e, ...t }) {
	return /* @__PURE__ */ s(J, {
		...t,
		children: e
	});
}
function et({ children: e, ...t }) {
	return /* @__PURE__ */ s(Y, {
		...t,
		children: e
	});
}
function tt({ children: e, ...t }) {
	return /* @__PURE__ */ s(ae, {
		...t,
		children: e
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function nt({ children: e, pageClass: t = "" }) {
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
export { oe as Accordion, X as Alert, se as AlertToast, ce as Badge, le as Button, fe as Card, pe as CardBody, me as CardFooter, Se as CardGroup, he as CardHeader, ge as CardImg, _e as CardImgOverlay, ve as CardLink, be as CardSubtitle, ye as CardText, xe as CardTitle, de as CircleButton, tt as Col, Q as Collapse, $e as Container, we as Costep, Ce as Costeps, Ie as Feedback, Te as Form, je as FormCheck, Me as FormCheckInput, Ne as FormCheckLabel, Oe as FormControl, Ee as FormGroup, De as FormLabel, Pe as FormRange, Ae as FormSelect, ke as FormText, Z as Icon, ue as IconButton, Fe as InputGroup, nt as Layout, Le as ListGroup, Re as ListGroupItem, ze as Modal, $ as ModalBody, He as ModalFooter, Be as ModalHeader, Ve as ModalTitle, Ge as OptContent, We as OptItem, Ue as OptList, qe as PageItem, Ke as Pagination, Je as Popover, et as Row, Ze as Tab, Ye as Table, Xe as Tabs, Qe as Tooltip };
