import { cloneElement as e, isValidElement as t, useEffect as n, useId as r } from "react";
import i from "react-bootstrap/Accordion";
import a from "react-bootstrap/AccordionItem";
import o from "react-bootstrap/AccordionHeader";
import s from "react-bootstrap/AccordionBody";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "react-bootstrap/Alert";
import d from "react-bootstrap/Toast";
import f from "react-bootstrap/Button";
import p from "react-bootstrap/Card";
import m from "react-bootstrap/CardBody";
import h from "react-bootstrap/CardFooter";
import g from "react-bootstrap/CardHeader";
import _ from "react-bootstrap/CardImg";
import v from "react-bootstrap/CardImgOverlay";
import y from "react-bootstrap/CardLink";
import b from "react-bootstrap/CardSubtitle";
import x from "react-bootstrap/CardText";
import ee from "react-bootstrap/CardTitle";
import te from "react-bootstrap/CardGroup";
import ne from "react-bootstrap/Collapse";
import re from "react-bootstrap/Form";
import ie from "react-bootstrap/FormGroup";
import ae from "react-bootstrap/FormLabel";
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
import oe from "react-bootstrap/Row";
import se from "react-bootstrap/Col";
//#region src/components/Accordion/Accordion.tsx
function ce({ children: e, ref: t, items: n, ...r }) {
	return /* @__PURE__ */ c(i, {
		ref: t,
		...r,
		flush: !0,
		children: n.map((e) => /* @__PURE__ */ l(a, {
			eventKey: e.id,
			children: [/* @__PURE__ */ c(o, { children: e.label }), /* @__PURE__ */ c(s, { children: e.body })]
		}, e.id))
	});
}
//#endregion
//#region src/components/Alert/Alert.tsx
function Y({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ c(u, {
		ref: t,
		...n,
		children: e
	});
}
//#endregion
//#region src/components/Icon/Icon.tsx
function X({ name: e, variant: t = "solid", className: n = "", ...r }) {
	return /* @__PURE__ */ c("i", {
		className: `fa-${t} fa-${e} ${n}`,
		"aria-hidden": "true",
		...r
	});
}
//#endregion
//#region src/components/AlertToast/AlertToast.tsx
function le({ variant: e, ref: t, children: n, ...r }) {
	return /* @__PURE__ */ c(d, {
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
		children: /* @__PURE__ */ l(Y, {
			variant: e,
			children: [n, /* @__PURE__ */ c(X, {
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
function ue({ children: e, className: t = "", variant: n, ref: r, ...i }) {
	return /* @__PURE__ */ c("span", {
		ref: r,
		className: `badge badge-${n} ${t}`,
		...i,
		children: e
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function Z({ children: e, ref: t, ...n }) {
	return /* @__PURE__ */ c(f, {
		ref: t,
		...n,
		children: e
	});
}
function de({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ c(f, {
		className: `btn-icon ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ c(X, { name: e })
	});
}
function fe({ icon: e, ref: t, className: n = "", ...r }) {
	return /* @__PURE__ */ c(f, {
		className: `btn-circle ${n}`,
		ref: t,
		...r,
		children: /* @__PURE__ */ c(X, { name: e })
	});
}
//#endregion
//#region src/components/Card/Card.tsx
function pe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(p, {
		ref: e,
		...n,
		children: t
	});
}
function me({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(m, {
		ref: e,
		...n,
		children: t
	});
}
function he({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(h, {
		ref: e,
		...n,
		children: t
	});
}
function ge({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(g, {
		ref: e,
		...n,
		children: t
	});
}
function _e({ ref: e, variant: t, src: n, ...r }) {
	return /* @__PURE__ */ c(_, {
		variant: t,
		src: n,
		ref: e,
		...r
	});
}
function ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(v, {
		ref: e,
		...n,
		children: t
	});
}
function ye({ ref: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ c(y, {
		href: n,
		ref: e,
		...r,
		children: t
	});
}
function be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(x, {
		ref: e,
		...n,
		children: t
	});
}
function xe({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(b, {
		ref: e,
		...n,
		children: t
	});
}
function Se({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(ee, {
		ref: e,
		...n,
		children: t
	});
}
function Ce({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(te, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Collapse/Collapse.tsx
function Q({ children: e, ...t }) {
	return /* @__PURE__ */ c(ne, {
		dimension: "height",
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Costep/Costep.tsx
function we({ children: e, className: t = "", ref: n, ...r }) {
	return /* @__PURE__ */ c("div", {
		ref: n,
		className: `costeps row no-gutters${t}`,
		...r,
		children: e
	});
}
function Te({ label: e, icon: t, status: n = "inactive", step: r, href: i, onClick: a, colClassName: o = "col-2", className: s = "", ref: u, ...d }) {
	let f = n === "inactive";
	return /* @__PURE__ */ c("div", {
		ref: u,
		className: `${o} costep ${n} ${s}`,
		"data-step": r,
		...d,
		children: /* @__PURE__ */ l("a", {
			className: "costep-link",
			href: f ? void 0 : i,
			onClick: f ? void 0 : a,
			"aria-current": n === "active" ? "step" : void 0,
			"aria-disabled": f || void 0,
			children: [/* @__PURE__ */ c("i", {
				className: "costep-icon",
				"aria-hidden": "true",
				children: t
			}), /* @__PURE__ */ c("span", {
				className: "costep-label",
				children: e
			})]
		})
	});
}
//#endregion
//#region src/components/Form/Form.tsx
function Ee({ children: e, ...t }) {
	return /* @__PURE__ */ c(re, {
		...t,
		children: e
	});
}
function De({ className: e, children: t, ...n }) {
	let r = ["form-group", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ c(ie, {
		className: r,
		...n,
		children: t
	});
}
function Oe({ children: e, ...t }) {
	return /* @__PURE__ */ c(ae, {
		...t,
		children: e
	});
}
function ke({ children: e, ...t }) {
	return /* @__PURE__ */ c(S, {
		...t,
		children: e
	});
}
function Ae({ children: e, ...t }) {
	return /* @__PURE__ */ c(k, {
		...t,
		children: e
	});
}
function je({ children: e, ...t }) {
	return /* @__PURE__ */ c(C, {
		...t,
		children: e
	});
}
function Me({ children: e, ...t }) {
	return /* @__PURE__ */ c(w, {
		...t,
		children: e
	});
}
function Ne({ children: e, ...t }) {
	return /* @__PURE__ */ c(T, {
		...t,
		children: e
	});
}
function Pe({ children: e, ...t }) {
	return /* @__PURE__ */ c(E, {
		...t,
		children: e
	});
}
function Fe({ children: e, ...t }) {
	return /* @__PURE__ */ c(D, {
		...t,
		children: e
	});
}
function Ie({ children: e, ...t }) {
	return /* @__PURE__ */ c(O, {
		...t,
		children: e
	});
}
function Le({ children: e, ...t }) {
	return /* @__PURE__ */ c(A, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/ListGroup/ListGroup.tsx
function Re({ children: e, ...t }) {
	return /* @__PURE__ */ c(j, {
		...t,
		children: e
	});
}
function ze({ children: e, ...t }) {
	return /* @__PURE__ */ c(M, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
function Be({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(N, {
		ref: e,
		...n,
		children: t
	});
}
function Ve({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(P, {
		ref: e,
		...n,
		children: t
	});
}
function He({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(F, {
		ref: e,
		...n,
		children: t
	});
}
function Ue({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(I, {
		ref: e,
		...n,
		children: t
	});
}
function We({ ref: e, children: t, ...n }) {
	return /* @__PURE__ */ c(L, {
		ref: e,
		...n,
		children: t
	});
}
//#endregion
//#region src/components/Offcanvas/Offcanvas.tsx
function Ge({ children: e, placement: t = "left", shadow: r = !0, size: i = "default", show: a, id: o }) {
	return n(() => {
		if (!a) return;
		let e = [
			"canvas-slid",
			"canvas-sliding",
			"canvas-overlay"
		];
		return e.push(t === "left" ? "canvas-sliding-right" : "canvas-sliding-left"), i === "fullscreen" && e.push("canvas-fullscreen"), i === "lg" && e.push("canvas-lg"), document.body.classList.add(...e), () => document.body.classList.remove(...e);
	}, [
		a,
		t,
		i
	]), /* @__PURE__ */ c("aside", {
		id: o,
		className: `offcanvas-panel offcanvas-overlay ${a ? "on" : ""} ${i === "fullscreen" ? "offcanvas-fullscreen" : ""} ${i === "lg" ? "offcanvas-panel-lg" : ""} ${r ? "offcanvas-shadow" : ""} ${t === "right" ? "offcanvas-right" : "offcanvas-left"}`,
		"data-blocker": "true",
		"data-overlay": "true",
		children: /* @__PURE__ */ c("div", {
			className: "offcanvas-content",
			children: /* @__PURE__ */ c("div", {
				className: "offcanvas-scrollable",
				children: e
			})
		})
	});
}
function Ke({ onClick: e }) {
	return /* @__PURE__ */ c(Z, {
		variant: "secondary",
		className: "btn-flat offcanvas-closer",
		onClick: e,
		children: "Close"
	});
}
//#endregion
//#region src/components/OptList/OptList.tsx
function qe({ className: e, children: t, ...n }) {
	let r = ["opt-list", e].filter(Boolean).join(" ");
	return /* @__PURE__ */ c(j, {
		className: r,
		...n,
		children: t
	});
}
function Je({ children: e, id: t, label: n, className: r, checked: i, type: a = "radio", active: o = i, expanded: s = i ?? !0, ...u }) {
	let d = ["opt-control", r].filter(Boolean).join(" ");
	return /* @__PURE__ */ l(M, {
		className: "opt-list-item",
		active: o,
		children: [/* @__PURE__ */ l(w, {
			id: t,
			className: d,
			children: [/* @__PURE__ */ c(T, {
				type: a,
				checked: i,
				...u
			}), /* @__PURE__ */ c(E, { children: /* @__PURE__ */ c("span", {
				className: "opt-name",
				children: n
			}) })]
		}), e && /* @__PURE__ */ c(Q, {
			in: s,
			children: /* @__PURE__ */ c("div", { children: e })
		})]
	});
}
function $({ isForm: e = !1, className: t, formClassName: n, children: r, ...i }) {
	let a = ["opt-info", t].filter(Boolean).join(" "), o = ["opt-form", n].filter(Boolean).join(" ");
	return /* @__PURE__ */ c("div", {
		className: a,
		...i,
		children: e ? /* @__PURE__ */ c("div", {
			className: o,
			children: r
		}) : r
	});
}
//#endregion
//#region src/components/Pagination/Pagination.tsx
function Ye({ children: e, ...t }) {
	return /* @__PURE__ */ c(R, {
		...t,
		children: e
	});
}
function Xe({ children: e, ...t }) {
	return /* @__PURE__ */ c(z, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Popover/Popover.tsx
function Ze({ title: n, children: i, placement: a, id: o, content: s, trigger: u = "click" }) {
	let d = r(), f = o ?? d, p = t(i) ? e(i, {
		title: n,
		"data-toggle": "popover",
		"data-placement": a,
		"data-content": s,
		"data-trigger": u
	}) : /* @__PURE__ */ c("span", {
		title: n,
		"data-content": s,
		children: i
	});
	return /* @__PURE__ */ c(B, {
		placement: a,
		overlay: n === "" ? /* @__PURE__ */ c(V, {
			id: f,
			children: /* @__PURE__ */ c(U, { children: s })
		}) : /* @__PURE__ */ l(V, {
			id: f,
			children: [/* @__PURE__ */ c(H, { children: n }), /* @__PURE__ */ c(U, { children: s })]
		}),
		trigger: u,
		children: p
	});
}
//#endregion
//#region src/components/Tables/Tables.tsx
function Qe({ children: e, ...t }) {
	return /* @__PURE__ */ c(W, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function $e({ tabStyle: e = "standard", className: t, children: n, ...r }) {
	let i = [e === "line" && "nav-tabs-line", t].filter(Boolean).join(" ");
	return /* @__PURE__ */ c(K, {
		className: i || void 0,
		...r,
		children: n
	});
}
function et({ children: e, ...t }) {
	return /* @__PURE__ */ c(G, {
		...t,
		children: e
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function tt({ title: n, children: i, placement: a, id: o }) {
	let s = r(), l = o ?? s, u = t(i) ? e(i, {
		title: n,
		"data-toggle": "tooltip",
		"data-placement": a
	}) : /* @__PURE__ */ c("span", {
		title: n,
		children: i
	});
	return /* @__PURE__ */ c(B, {
		placement: a,
		overlay: /* @__PURE__ */ c(q, {
			id: l,
			children: n
		}),
		children: u
	});
}
//#endregion
//#region src/layouts/Grid/Grid.tsx
function nt({ children: e, ...t }) {
	return /* @__PURE__ */ c(J, {
		...t,
		children: e
	});
}
function rt({ children: e, ...t }) {
	return /* @__PURE__ */ c(oe, {
		...t,
		children: e
	});
}
function it({ children: e, ...t }) {
	return /* @__PURE__ */ c(se, {
		...t,
		children: e
	});
}
//#endregion
//#region src/layouts/Layouts/Layout.tsx
function at({ children: e, pageClass: t = "" }) {
	return /* @__PURE__ */ c("div", {
		id: "content-wrapper",
		children: /* @__PURE__ */ c("section", {
			id: "content",
			className: "container",
			children: /* @__PURE__ */ c("div", {
				id: "content-body",
				className: "row",
				children: /* @__PURE__ */ c("div", {
					id: "content-center",
					className: "col-lg-12",
					children: /* @__PURE__ */ c("div", {
						className: `page ${t}`.trim(),
						children: e
					})
				})
			})
		})
	});
}
//#endregion
//#region src/layouts/Layouts/Page.tsx
function ot({ children: e }) {
	return /* @__PURE__ */ l("div", {
		id: "page",
		children: [/* @__PURE__ */ c("div", { className: "canvas-blocker canvas-slidable" }), /* @__PURE__ */ c("div", {
			className: "canvas-slidable page-main",
			children: e
		})]
	});
}
//#endregion
//#region src/layouts/Layouts/Header.tsx
function st() {
	return /* @__PURE__ */ l("header", {
		id: "header",
		children: [/* @__PURE__ */ c("div", {
			className: "menubar-section d-none d-lg-block menubar-inverse",
			children: /* @__PURE__ */ c("div", { className: "container menubar-container" })
		}), /* @__PURE__ */ c("div", {
			className: "shopbar-section shopbar-inverse",
			children: /* @__PURE__ */ c("div", {
				className: "container shopbar-container",
				children: /* @__PURE__ */ c("div", { className: "shopbar" })
			})
		})]
	});
}
//#endregion
//#region src/layouts/Layouts/Footer.tsx
function ct() {
	return /* @__PURE__ */ l("footer", {
		id: "footer",
		className: "footer-light",
		children: [/* @__PURE__ */ c("div", {
			className: "footer-main-wrapper",
			children: /* @__PURE__ */ c("div", {
				className: "container footer-main",
				children: /* @__PURE__ */ l("div", {
					className: "row sm-gutters",
					children: [
						/* @__PURE__ */ c("div", {
							className: "col-md-3",
							children: /* @__PURE__ */ l("nav", {
								className: "footer-links nav-collapsible",
								children: [/* @__PURE__ */ c("h4", {
									className: "footer-title nav-toggler collapsed",
									"data-toggle": "collapse",
									"data-target": "#footer-info",
									"aria-controls": "footer-info",
									"aria-expanded": "false",
									children: "Information"
								}), /* @__PURE__ */ c("div", {
									className: "collapse nav-collapse",
									id: "footer-info",
									children: /* @__PURE__ */ c("div", {
										className: "cms-menu cms-menu-linklist",
										"data-menu-name": "footerinformation",
										children: /* @__PURE__ */ l("ul", {
											className: "list-unstyled",
											children: [/* @__PURE__ */ c("li", { children: /* @__PURE__ */ c("a", {
												href: "#",
												className: "menu-link",
												children: /* @__PURE__ */ c("span", { children: "What's New" })
											}) }), /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c("a", {
												href: "#",
												className: "menu-link",
												children: /* @__PURE__ */ c("span", { children: "Recently viewed products" })
											}) })]
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ c("div", {
							className: "col-md-3",
							children: /* @__PURE__ */ l("nav", {
								className: "footer-links nav-collapsible",
								children: [/* @__PURE__ */ l("h4", {
									className: "footer-title nav-toggler collapsed",
									"data-toggle": "collapse",
									"data-target": "#footer-service",
									"aria-controls": "footer-service",
									"aria-expanded": "false",
									children: [/* @__PURE__ */ c("span", {
										className: "d-none d-md-block",
										children: "Service"
									}), /* @__PURE__ */ c("span", {
										className: "d-md-none",
										children: "Service"
									})]
								}), /* @__PURE__ */ c("div", {
									className: "collapse nav-collapse",
									id: "footer-service",
									children: /* @__PURE__ */ c("div", {
										className: "cms-menu cms-menu-linklist",
										"data-menu-name": "footerservice",
										children: /* @__PURE__ */ c("ul", {
											className: "list-unstyled",
											children: /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c("a", {
												href: "#",
												className: "menu-link",
												children: /* @__PURE__ */ c("span", { children: "Contact us" })
											}) })
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ c("div", {
							className: "col-md-3",
							children: /* @__PURE__ */ l("nav", {
								className: "footer-links company nav-collapsible",
								children: [/* @__PURE__ */ l("h4", {
									className: "footer-title nav-toggler collapsed",
									"data-toggle": "collapse",
									"data-target": "#footer-company",
									"aria-controls": "footer-company",
									"aria-expanded": "false",
									children: [/* @__PURE__ */ c("span", {
										className: "d-none d-md-block",
										children: "Company"
									}), /* @__PURE__ */ c("span", {
										className: "d-md-none",
										children: "Company"
									})]
								}), /* @__PURE__ */ c("div", {
									className: "collapse nav-collapse",
									id: "footer-company",
									children: /* @__PURE__ */ c("div", {
										className: "cms-menu cms-menu-linklist",
										"data-menu-name": "footercompany",
										children: /* @__PURE__ */ c("ul", {
											className: "list-unstyled",
											children: /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c("a", {
												href: "#",
												className: "menu-link",
												children: /* @__PURE__ */ c("span", { children: "Privacy policy" })
											}) })
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ c("div", {
							className: "col-md-3 order-first",
							children: /* @__PURE__ */ l("div", {
								className: "theme-selector d-none d-md-block",
								children: [/* @__PURE__ */ c("h4", { children: "Themes" }), /* @__PURE__ */ c("div", { className: "content" })]
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ c("div", {
			className: "footer-bottom-wrapper",
			children: /* @__PURE__ */ c("div", {
				className: "container footer-bottom",
				children: /* @__PURE__ */ l("div", {
					className: "row sm-gutters",
					children: [/* @__PURE__ */ c("div", { className: "col-12 col-sm-auto pb-1 pb-sm-0 text-sm-center" }), /* @__PURE__ */ c("div", { className: "col text-sm-right" })]
				})
			})
		})]
	});
}
//#endregion
export { ce as Accordion, Y as Alert, le as AlertToast, ue as Badge, Z as Button, pe as Card, me as CardBody, he as CardFooter, Ce as CardGroup, ge as CardHeader, _e as CardImg, ve as CardImgOverlay, ye as CardLink, xe as CardSubtitle, be as CardText, Se as CardTitle, fe as CircleButton, it as Col, Q as Collapse, nt as Container, Te as Costep, we as Costeps, Le as Feedback, ct as Footer, Ee as Form, Me as FormCheck, Ne as FormCheckInput, Pe as FormCheckLabel, ke as FormControl, De as FormGroup, Oe as FormLabel, Fe as FormRange, je as FormSelect, Ae as FormText, st as Header, X as Icon, de as IconButton, Ie as InputGroup, at as Layout, Re as ListGroup, ze as ListGroupItem, Be as Modal, Ue as ModalBody, We as ModalFooter, Ve as ModalHeader, He as ModalTitle, Ge as Offcanvas, Ke as OffcanvasCloser, $ as OptContent, Je as OptItem, qe as OptList, ot as Page, Xe as PageItem, Ye as Pagination, Ze as Popover, rt as Row, et as Tab, Qe as Table, $e as Tabs, tt as Tooltip };
