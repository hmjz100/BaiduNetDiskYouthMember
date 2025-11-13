// ==UserScript==
// @name         （改）百度网盘会员青春版
// @author       hmjz100、Gwen
// @namespace    github.com/hmjz100
// @version      1.2.7.2
// @description  《也许同类型中最好用？》系列、LinkSwift 官方扩展 - 虚拟百度网盘身份信息为会员，支持隐藏云一朵、使用视频倍速、生成/查看/下载 AI字幕、修改头像、用户名、等级、SVIP 10 ID 等功能，自定义程度超高！
// @icon         data:image/png;base64,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
// @license      AGPL-3.0-or-later
// @homepage     https://github.com/hmjz100/BaiduNetDiskYouthMember/
// @homepageURL  https://github.com/hmjz100/BaiduNetDiskYouthMember/
// @support      https://github.com/hmjz100/BaiduNetDiskYouthMember/issues
// @supportURL   https://github.com/hmjz100/BaiduNetDiskYouthMember/issues
// @require      https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @require      https://unpkg.com/sweetalert2@11.4.8/dist/sweetalert2.min.js
// @resource SwalLigt https://unpkg.com/sweetalert2@11.4.8/dist/sweetalert2.min.css
// @run-at       document-start
// @early-start
// @match        *://pan.baidu.com/*
// @match        *://yun.baidu.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @compatible	 Chrome
// @compatible	 Edge
// @compatible	 Firefox
// @compatible	 Safari
// @compatible	 Opera
// ==/UserScript==

(function $baidu() {
	// 严格模式，确保代码安全执行，不越界
	"use strict";
	// unsafeWindow 检测，适用于 Via 这类无 unsafeWindow 的浏览器
	if (typeof (unsafeWindow) === "undefined") window.unsafeWindow = window;

	let temp = {
		// 脚本已包含设置 UI，所以请不要修改此处的代码。
		defaults: {
			vip: true,
			svip: true,
			previous: false,
			name: "百湿不得其解",
			photo: "https://bkimg.cdn.bcebos.com/pic/cdbf6c81800a19d8bc3e5cfd95ab958ba61ea9d3e8b3",
			// desc: "What's your problem? | 业绩增长凌驾于用户体验，简单经营替代了简单可依赖，我们与用户渐行渐远，我们与创业初期坚守的使命和价值观渐行渐远。",
			level: 10,
			point: 100000,
			vip_id: "000001",
			endtime: 253402185600,
			unAnalytics: true,
			unAI_Yiduo: true,
			unPViewer: false,
			unVerSwitch: false,
			unTab_aiNote: true,
			unTab_aiStudy: false,
			unTab_aiCourseware: true,
			unTab_aiDraft: false,
			iLoveAD: false,
			debug: false,
		},
		swalDefault: {
			position: "center",
			heightAuto: false,
			scrollbarPadding: false,
			confirmButtonText: `确认`,
			denyButtonText: `拒绝`,
			cancelButtonText: `取消`
		},
		hooker: new WeakMap(),
		url: (url = location) => url.host + url.pathname + url.search + url.hash
	}

	/*
	防止代码因其他原因被执行多次
	代码出自 “Via 轻插件”，作者谷花泰
	*/
	let key = encodeURIComponent("（改）百度网盘会员青春版:主代码");
	if (window[key]) return;
	window[key] = true;

	let mount = idontknow("BaiduNetDiskYouthMember");
	let info = {
		author: GM_info.script?.author,
		name: GM_info.script?.name,
		version: (GM_info.script?.version || "1.2.7.2"),
		icon: (GM_info.script?.icon || "data:image/png;base64,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"),
		maction: GM_info.scriptaction,
		mversion: GM_info.version,
	};

	let base = {
		hooker: {
			toString: function () {
				if (temp.hooker.has(this)) return `function ${this.name}() { [native code] }`;
				return originalToString.call(this);
			},
			toLocaleString: function () {
				if (temp.hooker.has(this)) return `function ${this.name}() { [native code] }`;
				return originalToLocaleString.call(this);
			},
			attachShadow(options) {
				if (options?.mode === "closed") {
					options.mode = "open";
					console.log("【(改)百度网盘会员青春版】Hook Shadow\n新增:", this);
				};
				return originalAttachShadow.call(this, options);
			},
			async fetch(input, init = {}) {
				let url = typeof input === "string" ? input : input?.url || "";
				url = new URL(url, location.origin);
				if (rules.some(r => r.match(url) && r.condition() && r.runat === "url")) url = base.hooker.universal("fetch", url, url, "url");
				if (rules.some(r => r.match(url) && r.condition() && r.runat === "header")) {
					if (!init.headers) init.headers = {};

					let tempHeaders = {};
					if (init.headers instanceof Headers) {
						for (let [key, value] of init.headers.entries()) {
							tempHeaders[key] = value;
						}
					} else {
						tempHeaders = { ...init.headers };
					}

					init.headers = new Headers(base.hooker.universal("fetch", url, tempHeaders, "header"));
				}
				if (rules.some(r => r.match(url) && r.condition() && r.runat === "end")) {
					try {
						let response = await originalFetch.call(this, url, init);
						let responseText = await response.text();

						let res = base.hooker.universal("fetch", url, responseText, "end");

						return new Response(res, {
							status: response.status,
							statusText: response.statusText,
							headers: response.headers
						});
					} catch (e) {
						return originalFetch.call(this, url, init);
					}
				}
				if (rules.some(r => r.match(url) && r.condition() && r.runat === "start")) {
					try {
						let res = base.hooker.universal("fetch", url, null, "start");
						return new Response(res, {
							status: 200,
							statusText: "OK",
							headers: { "Content-Type": "plain/text" }
						});
					} catch (e) {
						return originalFetch.call(this, url, init);
					}
				}
				return originalFetch.call(this, url, init);
			},
			send(data) {
				let url = this[mount];
				if (this.headers) {
					for (let [name, value] of Object.entries(this.headers)) {
						originalSetRequestHeader.call(this, name, value);
					}
				}
				if (rules.find(rule => rule.match(url) && rule.condition() && rule.runat === "start")) {
					try {
						let res = base.hooker.universal("XHR", url, null, "start");
						Object.defineProperty(this, "responseText", {
							writable: true,
						});
						Object.defineProperty(this, "response", {
							writable: true,
						});
						this.response = res;
						this.responseText = res;
						["readystatechange", "load", "loadend"].forEach(prop => {
							this.dispatchEvent(new Event(prop));
							if (typeof this[prop] === "function") this[prop]();
							if (typeof this[`on${prop}`] === "function") this[`on${prop}`]();
						});
						return true; // 显式 return
					} catch (e) {
						return originalSend.apply(this, arguments);
					}
				}
				return originalSend.apply(this, arguments);
			},
			open(method, input) {
				let url = new URL(input, location.origin);
				if (rules.some(r => r.match(url) && r.condition() && r.runat === "url")) url = base.hooker.universal("XHR", url, url, "url");
				this[mount] = url;
				this.addEventListener("readystatechange", function () {
					if (this.readyState === 4) {
						if (rules.some(r => r.match(url) && r.condition() && r.runat === "end")) {
							let response = this.response;
							if (this.responseType === "" || this.responseType === "text") response = this.responseText;

							let res = base.hooker.universal("XHR", url, response, "end");
							Object.defineProperty(this, "responseText", {
								writable: true,
							});
							Object.defineProperty(this, "response", {
								writable: true,
							});
							this.response = res;
							this.responseText = res;
						}
					}
				});
				return originalOpen.call(this, method, url);
			},
			setRequestHeader(name, value) {
				let url = this[mount];
				if (url && rules.some(r => r.match(url) && r.condition() && r.runat === "header")) {
					if (!this.headers) this.headers = {};
					this.headers[name] = value;
					this.headers = base.hooker.universal("XHR", url, { ...this.headers }, "header");
					return true; // 显式 return
				}
				return originalSetRequestHeader.call(this, name, value);
			},
			sendBeacon(input, data) {
				let url = new URL(input, location.origin);
				if (rules.some(rule => rule.match(url) && rule.condition() && rule.runat === "start")) {
					data = base.hooker.universal("sendBeacon", url, data, "start");
					return true;
				}
				return originalSendBeacon.call(this, url, data);
			},
			Image: function Image(...args) {
				return new Proxy(new OriginalImage(...args), {
					set(target, prop, value) {
						if (prop === "src") {
							let url = new URL(value, location.origin);
							if (rules.some(r => r.match(url) && r.condition() && r.runat === "image")) {
								// if (user.debug) console.log(`${log_head} Image`, "\n请求地址:", url.href, "\n模拟回复: 成功");
								return true; // 显式 return
							}
						}
						return (target[prop] = value); // 未匹配，设置属性
					},
					get(target, prop) {
						return target[prop]; // 获取属性值
					}
				});
			},
			createElement(tagName) {
				let element = originalCreateElement.call(unsafeWindow.document, tagName)
				if (tagName.toLowerCase() === "img") {
					Object.defineProperty(element, "src", {
						set(value) {
							let url = new URL(value, location.origin);
							if (rules.some(r => r.match(url) && r.condition() && r.runat === "image")) {
								// if (user.debug) console.log(`${log_head} createElement img`, "\n请求地址:", url.href, "\n模拟回复: 成功");
								return true; // 显式 return
							}
							return element.setAttribute("src", value); // 未匹配，设置属性
						},
						get() {
							return element.getAttribute("src");
						}
					});
				}
				return element;
			},
			universal(from, url, data, type) {
				let res, oriRes;
				try {
					res = typeof data === "string" ? JSON.parse(data) : data;
					oriRes = typeof data === "string" ? JSON.parse(data) : base.deepClone(data);
				} catch (e) {
					res = data;
					oriRes = base.deepClone(data);
				}
				let rule = rules.find(r => r.match(url) && r.condition() && r.runat === type);
				if (rule && typeof rule.action === "function") {
					if (type === "variable") {
						var originalSet = res.set;
						if (originalSet) res.set = (...args) => { set("set", ...args) };
						var originalMSet = res.mset;
						if (originalMSet) res.mset = (...args) => { set("mset", ...args) };
						var originalSetData = res.setData;
						if (originalSetData) res.setData = (...args) => { set("setData", ...args) };
						function set(type, ...args) {
							let object;
							if (typeof args[0] === "object" && !Array.isArray(args[0]) && args[0] !== null) {
								object = args[0];
							} else if (args[1] && args[1] !== null) {
								object = { [args[0]]: args[1] };
							}

							for (let key in object) {
								if (Object.prototype.hasOwnProperty.call(object, key)) {
									if (["function", "symbol", "undefined"].includes((typeof object[key]).toLowerCase())) {
										delete object[key];
									}
								}
							}

							object = base.hooker.universal(from, url, object, "variable");

							if (type === "set") for (key in object) {
								originalSet.call(res, key, object[key]);
							}
							if (type === "mset") {
								if (originalSet) for (key in object) {
									originalSet.call(res, key, object[key]);
								} else {
									originalMSet.call(res, object);
								}
							}
							if (type === "setData") originalSetData.call(res, object);
						}
						if (!originalMSet && !originalMSet && !originalSetData) res = rule.action(res, url);
					}

					if (!["variable"].includes(type)) res = rule.action(res, url);

					if (type === "header" && res !== null && typeof res === "object") try {
						let tempHeaders = {};
						for (let key in res) tempHeaders[key.toLowerCase().split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")] = res[key];
						res = tempHeaders;
					} catch { }

					if (user.debug) {
						let log_head = `【(改)百度网盘会员青春版】Hook`
						if (!base.deepEqual(res, oriRes)) {
							let format = (data) => typeof data === "string" && data.startsWith("#EXTM3U") ? "(M3U8预览) " + data.split("\n").slice(0, 5).join("\\n") : data;
							type === "start" && console.log(`${log_head} ${from} Virt`, "\n请求地址:", url.href, "\n模拟回复:", format(res) || "空");
							type === "end" && console.log(`${log_head} ${from} Repl`, "\n请求地址:", url.href, "\n原始回复:", format(oriRes) || "空", "\n修改回复:", format(res) || "空");
							type === "header" && console.log(`${log_head} ${from} Head`, "\n请求地址:", url.href, "\n原始头部:", oriRes || "空", "\n修改头部:", res || "空");
							type === "variable" && console.log(`${log_head} ${from}`, "\n原始内容:", oriRes || "空", "\n修改内容:", res || "空");
						}
						type === "url" && console.log(`${log_head} ${from} URL`, "\n原始地址:", oriRes?.href || "空", "\n修改地址:", res?.href || "空");
					}

					if (typeof res === "object" && !["header", "variable", "url"].includes(type)) try { res = JSON.stringify(res); } catch { }
				}
				return res;
			},
		},
		deepClone(obj) {
			if (obj instanceof URL) return new URL(obj.href);
			if (obj === null || typeof obj !== "object") return obj;
			if (obj instanceof Date) return new Date(obj);
			if (obj instanceof RegExp) return new RegExp(obj);
			if (typeof obj === "function") return obj; // 函数直接引用（无法真正克隆）
			if (Array.isArray(obj)) {
				return obj.map(item => this.deepClone(item));
			}
			let cloned = {};
			for (let key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					cloned[key] = this.deepClone(obj[key]);
				}
			}
			return cloned;
		},
		deepEqual(a, b) {
			// 严格相等
			if (Object.is(a, b)) return true;

			// 类型不同直接返回 false
			if (typeof a !== typeof b) return false;

			// null 或 undefined（typeof null === "object"，需提前处理）
			if (a === null || b === null || a === undefined || b === undefined) {
				return a === b;
			}

			// Date
			if (a instanceof Date && b instanceof Date) {
				return a.getTime() === b.getTime();
			}

			// RegExp
			if (a instanceof RegExp && b instanceof RegExp) {
				return a.toString() === b.toString();
			}

			// 函数：只有同一个引用才算相等
			if (typeof a === "function" && typeof b === "function") {
				return a === b;
			}

			// 非对象类型（string, number, boolean 等）已在 Object.is 处理，此处可跳过
			if (typeof a !== "object") {
				return false;
			}

			// 数组
			let aIsArray = Array.isArray(a);
			let bIsArray = Array.isArray(b);
			if (aIsArray !== bIsArray) return false;

			if (aIsArray) {
				if (a.length !== b.length) return false;
				for (let i = 0; i < a.length; i++) {
					if (!this.deepEqual(a[i], b[i])) return false;
				}
				return true;
			}

			// 普通对象
			let aKeys = Object.keys(a);
			let bKeys = Object.keys(b);
			if (aKeys.length !== bKeys.length) return false;

			for (let key of aKeys) {
				if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
				if (!this.deepEqual(a[key], b[key])) return false;
			}

			return true;
		},
		getSettings() {
			var now = GM_getValue("user_settings", {});
			return { ...temp.defaults, ...now };
		},
		async setSettings(settings) {
			await GM_setValue("user_settings", settings);
		},
		/**
		 * 显示脚本设置
		 * @author hmjz100
		 */
		async showSettings() {
			let settings = base.getSettings();

			function generateHTML(title, key, type, other = {}) {
				function escapeHtml(str) {
					if (typeof str !== "string") return str;
					return str.replace(/[&<>""]/g,
						tag => ({
							"&": "&amp;",
							"<": "<",
							">": ">",
							"\"": `&quot;`,
							"'": `&#39;`
						}[tag] || tag)
					);
				}

				// 将 other 对象转换为属性字符串
				function buildAttrs(obj = {}) {
					let attrs = "";
					for (let [k, v] of Object.entries(obj)) {
						// 跳过空值或 undefined
						if (v === undefined || v === null) continue;
						if (typeof v === "boolean") {
							if (v) attrs += ` ${k}`;
							continue;
						}
						// 其他值作为 k="value"
						attrs += ` ${k}="${escapeHtml(String(v))}"`;
					}
					return attrs;
				};

				let control = "";
				let attrs = buildAttrs(other);

				if (type === "boolean") {
					let checked = settings[key] == true ? " checked" : "";
					control = `<input class="swal2-input ym-input" type="checkbox" data-key="${key}"${checked}${attrs} />`
				} else if (type === "string") {
					let value = settings[key] || "";
					let inputType = other?.type ? `type="${escapeHtml(String(other.type))}"` : `type="text"`;
					if (key === "vip_id") value = parseInt(value) || "";
					control = `<input class="swal2-input ym-input" autocomplete="off" ${inputType} data-key="${key}" value="${escapeHtml(value)}"${attrs} />`
				}

				if (title.includes("|")) {
					let parts = title.split("|").map(part => `<span>${part}</span>`);
					title = parts.join("<br/>");
				} else {
					title = `<span>${title}</span>`;
				}

				return `<label class="ym-setting-item" data-key="${key}">
					<div>${title}</div>${control}
				</label>`;
			}

			let dialog = await Swal.fire({
				...temp.swalDefault,
				icon: "info",
				iconHtml: "⚙︎",
				title: "设置",
				html: `<div class="ym-settings">
					<div class="block">Tips: 设置自动保存，刷新页面后生效。<br/>Tips: 您也可通过脚本管理器菜单再次打开本窗口。</div>
					<div class="block">
						<blockquote>
							<div>风雨送春归，飞雪迎春到。已是悬崖百丈冰，犹有花枝俏。</div>
							<div>俏也不争春，只把春来报。待到山花烂漫时，她在丛中笑。</div>
						</blockquote>
					</div>
					${generateHTML("会员|<small>所有功能的总开关，显示为 VIP</small>", "vip", "boolean")}
					${generateHTML("超级会员|<small>显示为 SVIP</small>", "svip", "boolean")}
					${generateHTML("过期|<small>显示为会员过期</small>", "previous", "boolean")}
					${generateHTML("昵称|<small>对外展示信息</small>", "name", "string", { "type": "string", "placeholder": "留空将使用已登录账户信息" })}
					${generateHTML("头像|<small>对外展示信息</small>|<small>可以是 <code>http(s):</code> 或 <code>data:</code> 链接</small>", "photo", "string", { "type": "string", "placeholder": "留空将使用已登录账户信息" })}
					${generateHTML("等级|<small>会员等级</small>|<small>1 ~ 10</small>", "level", "string", { "type": "number", "min": "1", "max": "10", "placeholder": "留空将使用已登录账户信息" })}
					${generateHTML("成长值|<small>会员成长值</small>|<small>1 ~ 100000</small>", "point", "string", { "type": "number", "min": "1", "max": "100000", "placeholder": "留空将使用已登录账户信息" })}
					${generateHTML("SVIP 10 专属 ID|<small>显示时会自动补零</small>|<small>1 ~ 999999</small>", "vip_id", "string", { "type": "number", "min": "1", "max": "999999", "placeholder": "留空将使用已登录账户信息" })}
					${generateHTML("会员过期时间|<small>对外展示信息</small>|<small>Unix 时间戳</small>", "endtime", "string", { "type": "number", "min": "-2147483648", "max": "253402185600", "placeholder": temp.defaults.endtime })}
					${generateHTML("屏蔽网页数据分析", "unAnalytics", "boolean")}
					${generateHTML("禁用 “云一朵” 相关功能入口", "unAI_Yiduo", "boolean")}
					${generateHTML(`禁用新版在线文档查看器|<small>勾选后新版的 PDF 在线预览会变为 WPS</small>`, "unPViewer", "boolean")}
					${generateHTML("隐藏新旧版切换入口", "unVerSwitch", "boolean")}
					${generateHTML("隐藏视频页 “笔记” ", "unTab_aiNote", "boolean")}
					${generateHTML("隐藏视频页 “AI看” ", "unTab_aiStudy", "boolean")}
					${generateHTML("隐藏视频页 “课件” ", "unTab_aiCourseware", "boolean")}
					${generateHTML("隐藏视频页 “文稿” ", "unTab_aiDraft", "boolean")}
					${generateHTML("我爱看广告|<small>修改视频广告播放时间为 200 秒，SVIP 下无效</small>", "iLoveAD", "boolean")}
					${generateHTML("显示调试信息到控制台", "debug", "boolean")}
					<label class="ym-setting-item">
						<div>快捷操作</div>
						<span><a href="http://passport.baidu.com/accountbind" target="_blank" class="ym-a pl-a">百度授权管理</a></span>
					</label>
				</div>
				<style>
					div:where(.swal2-container) div:where(.swal2-popup) {
						width: 36em!important;
						padding: 0 0 1.25em;
					}

					.ym-settings .ym-setting-item{display:flex;align-items:center;justify-content:space-between;margin-top:1em}
					.ym-settings .ym-setting-item > *:nth-child(1){text-align:left}
					.ym-settings .ym-setting-item > *:nth-child(2){max-width:80%;display:flex;justify-content:space-between;align-items:center}
					.ym-settings .ym-setting-item .ym-setting-item{margin:0;gap:5px}
					.ym-settings .ym-input{padding:8px 10px!important;border:1px solid #c2c2c2;border-radius:5px;font-size:14px!important;margin:0;appearance:auto!important}
					.ym-settings .ym-setting-item > .ym-input{width:50%}
					.ym-settings .ym-input[type=checkbox]{height:20px;width:20px;padding:0!important;background-image:none!important}

					.ym-settings .block { margin-bottom:20px }
					.ym-settings .block blockquote{
						padding:0.7em;
						border-left:5px solid #bdbdbd;
						background-color:#f9f9f9;
						margin:0;
						text-align:left;
					}
					@media (prefers-color-scheme:dark){
						/* 适配 LinkSwift 的自适应深色模式 */
						html:has(#swal-pub-dark-style) .ym-settings .block blockquote{
							border-left:5px solid #7A7C84;
							background-color:#464851;
						}
					}

					.ym-a{position:relative;vertical-align:baseline;color:#574AB8;border-bottom:2px solid #574AB8;text-decoration:none!important;transition:color.3s,opacity.3s;will-change:color,opacity;overflow:hidden}
					.ym-a::before{content:"";position:absolute;left:0;bottom:0;width:100%;height:100%;background-color:#574AB8;transform:scaleY(0);transform-origin:bottom center;transition:transform.15s,opacity.3s;will-change:transform;z-index:-1}
					.ym-a:hover,.ym-a:focus{color:#fff}
					.ym-a:hover::before,.ym-a:focus::before{transform:scaleY(1)}
					.ym-a:active{color:#fff;opacity:0.8}

					.swal2-footer,div:where(.swal2-container) div:where(.swal2-footer){flex-direction:column;justify-content:center;align-items:center}
					.swal2-footer p,div:where(.swal2-container) div:where(.swal2-footer) p{margin:0;padding:0}
				</style>`,
				allowOutsideClick: false,
				showCloseButton: true,
				showDenyButton: true,
				confirmButtonText: "刷新",
				denyButtonText: "关闭",
				didOpen: (toast) => {
					let element = $(toast);
					element.find(".ym-settings input").each((index, tag) => {
						$(tag).on("change", async (event) => {
							let element = $(event.target);
							let key = element.data("key");
							if (element.attr("type") === "checkbox") {
								settings[key] = element.prop("checked");
							} else {
								let value = element.val() || "";
								if (element.attr("type") === "number") value = parseInt(value) || "";
								if (key === "vip_id") value = String(value).padStart(6, "0");
								settings[key] = value;
							}
							await base.setSettings(settings);
						})
					})
				},
				footer: `<p>感谢您选择会员青春版，喜欢的话就来给个 <a href="https://github.com/hmjz100/BaiduNetDiskYouthMember" target="_blank" class="ym-a pl-a">Star</a> 吧~</p>`,
			});

			if (dialog.isConfirmed) {
				location.reload(); // 刷新页面使设置生效
			}
		},
		/**
		 * 等待指定元素加载完成并执行回调
		 * @author hmjz100
		 * @description 监听 DOM 元素是否出现，若未出现则每隔一段时间重试，直到找到为止。
		 * 支持在 iframe 内部查找元素，适用于异步加载场景。
		 * @param {string} selectorElem - 要等待的目标元素选择器
		 * @param {Function} actionFunction - 找到元素后执行的回调函数，接收 jQuery 元素作为参数，返回 true 可以不再继续寻找
		 * @param {boolean} [bWaitOnce=false] - 是否只执行一次回调，默认为 false，如果不设置为 true 的话需要自行判断是否对元素进行操作
		 * @param {string} [iframeSelector] - 若目标元素位于 iframe 中，传入 iframe 的选择器
		 * @param {string} [controlKey] - 控制唯一性的键名，用于避免重复处理
		 */
		waitForKeyElements(selectorElem, actionFunction, bWaitOnce, iframeSelector, controlKey) {
			// 初始化管理器
			let manager = this.waitForKeyElements.manager;
			if (!manager) {
				manager = this.waitForKeyElements.manager = {
					observers: new WeakMap(),
					tasks: new Map(),
					instanceCounter: 0
				};
			}

			// 获取目标文档
			let targetDoc = iframeSelector ? $(iframeSelector).get(0)?.contentDocument : document;
			if (!targetDoc) return;

			// 生成唯一键
			controlKey = controlKey || `wkfe_${manager.instanceCounter++}`;

			// 清理重复任务
			let existingTask = manager.tasks.get(controlKey);
			if (existingTask) {
				existingTask.observer.disconnect();
				manager.tasks.delete(controlKey);
			}

			// 递归扫描shadowRoot
			function scanShadowDOM(root, selector) {
				let results = [];
				try {
					// 扫描当前根节点
					let currentMatches = root.querySelectorAll(selector);
					results.push(...Array.from(currentMatches));

					// 递归扫描shadowRoot
					let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
					let node;
					while (node = walker.nextNode()) {
						if (node.shadowRoot && node.shadowRoot.mode === 'open') {
							results.push(...scanShadowDOM(node.shadowRoot, selector));
						}
					}
				} catch (e) {
					// 跨域shadowRoot静默跳过
				}
				return results;
			}

			// 元素扫描核心逻辑
			function scanElements() {
				// 全局扫描(含shadowRoot)
				let rawElements = scanShadowDOM(targetDoc.documentElement, selectorElem);
				let jElements = $(rawElements);

				let foundActive = false;
				jElements.each(function () {
					let jEl = $(this);
					if (jEl.data(controlKey)) return true; // 跳过已处理元素

					let cancel = actionFunction(jEl);
					if (cancel) {
						foundActive = true;
					} else if (bWaitOnce) {
						jEl.data(controlKey, true); // 标记已处理
					}
				});

				// 一次性任务清理
				if (bWaitOnce && foundActive) {
					observer.disconnect();
					manager.tasks.delete(controlKey);
				}
			}

			// 创建观察器
			let observer = new MutationObserver(scanElements);

			// 配置观察项(增强shadowRoot监听)
			observer.observe(targetDoc.documentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				characterData: true
			});

			// 注册任务
			manager.tasks.set(controlKey, {
				observer: observer,
				targetDoc: targetDoc
			});

			// 首次扫描
			scanElements();
		},
	}

	function has(value) { return !["undefined", "null"].includes(typeof value) }
	let user = base.getSettings();

	let rules = [
		{
			// 综合变量
			runat: "variable",
			match: (url) => !url.pathname.includes("buy/checkoutcounter"),
			condition: () => user.vip == true,
			action: (res, url) => {
				if (/\/s\/.*?\?fid=.*?/.test(url.href)) res.self = 1
				if (res.userInfo) {
					if (has(res.userInfo?.username) && has(user.name)) res.userInfo.username = user.name;
					if (has(res.userInfo?.["photo_url"]) && has(user.photo)) res.userInfo["photo_url"] = user.photo;

					if (has(res.userInfo?.vip_level) && has(user.level)) res.userInfo.vip_level = user.level;
					if (has(res.userInfo?.svip10_id) && has(user.vip_id)) res.userInfo.svip10_id = user.vip_id;

					if (has(res.userInfo?.vip_identity) && user.previous == false) res.userInfo.vip_identity = Number(`${user.svip == true ? 2 : 1}1`);
				}

				if (has(user.name)) res.username = user.name;
				if (has(res.MYNAME) && has(user.name)) res.MYNAME = user.name;

				if (has(user.photo)) res.photo = user.photo;
				if (has(res.MYAVATAR) && has(user.photo)) res.MYAVATAR = user.photo;

				if (user.previous == false) res.is_vip = 1;
				if (has(res.ISVIP) && user.previous == false) res.ISVIP = 1;

				if (user.svip == true && user.previous == false) res.is_svip = 1;
				if (has(res.ISSVIP) && user.svip == true && user.previous == false) res.ISSVIP = 1;

				if (has(res.ISYEARVIP)) res.ISYEARVIP = 1;
				if (has(res.is_plus_buy)) res.is_plus_buy = 1;
				if (has(res.is_vip_v2) && has(user.level) && user.level >= 2) res.is_vip_v2 = 1;
				if (has(res.is_vip_v2_new) && has(user.level) && user.level >= 2) res.is_vip_v2_new = 1;

				if (has(res.is_evip) && user.previous == false) res.is_evip = 1;
				if (has(res.is_mvip) && user.previous == false) res.is_mvip = 1;

				if (has(res.vipsid) && has(user.vip_id)) {
					let idStr = String(user.vip_id);
					let six = idStr.match(/\d{6}/)?.[0];
					let all = idStr.replace(/\D/g, "");
					let finalId = six ? +six : (all ? +all : 1);
					res.vipsid = finalId;
				}
				if (has(user.vip_id)) res.v10_id = user.vip_id;
				if (has(user.level)) res.vip_level = user.level;

				if (has(res.show_vip_ad)) res.show_vip_ad = 0;

				return res;
			}
		},
		{
			// 用户信息 基本
			runat: "end",
			match: (url) => url.pathname.includes("api/user/getinfo"),
			condition: () => user.vip == true,
			action: (res, url) => {
				let key = localStorage.getItem("realNameVerify");
				if (key && res.records?.[0] && res.records.some(item => item.uk === Number(key))) {
					let info = res.records.find(item => item.uk === Number(key));
					if (has(info.uname) && has(user.name)) info.uname = user.name;
					if (has(info.priority_name) && has(user.name)) info.priority_name = user.name;
					if (has(info.avatar_url) && has(user.photo)) info.avatar_url = user.photo;
				}
				return res;
			}
		},
		{
			// 登录信息 基本
			runat: "end",
			match: (url) => url.pathname.includes("api/loginStatus"),
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.login_info?.username) && has(user.name)) res.login_info.username = user.name;
				if (has(res.login_info?.["photo_url"]) && has(user.photo)) res.login_info["photo_url"] = user.photo;

				if (has(res.login_info?.vip_level) && has(user.level)) res.login_info.vip_level = user.level;
				if (has(res.login_info?.vip_point) && has(user.point)) res.login_info.vip_point = user.point;
				if (has(res.login_info?.vip_type)) res.login_info.vip_type = user.svip == true ? "21" : "11";
				if (has(res.login_info?.vip_identity)) res.login_info.vip_identity = user.svip == true ? 21 : 11;

				return res;
			}
		},
		{
			// 会员信息 用户
			runat: "end",
			match: (url) => url.pathname.includes("rest/2.0/membership/user") && (!url.searchParams.get("method") || url.searchParams.get("method") == "query"),
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.current_product) && user.previous == false) res.current_product = res.current_product_v2 = {
					"cluster": "vip",
					"detail_cluster": user.svip == true ? "svip" : "vip", // 决定会员标签变化
					"product_type": user.svip == true ? `vip2_1m_auto` : `vip_1m_auto`,
					"product_id": "12187135090581539740"
				}

				// 决定会员等级变化
				if (has(res.level_info)) res.level_info = {
					...res.level_info,
					"current_value": has(user.point) && user.point != "" ? user.point : 0, // 决定所有会员标签
					"current_level": has(user.level) && user.level != "" ? user.level : 1, // 决定所有会员标签
					"history_value": has(user.point) && user.point != "" ? user.point : 0,
					"history_level": has(user.level) && user.level != "" ? user.level : 1,
					"v10_id": user.vip_id,
					"last_manual_collection_time": 0
				}

				if (has(res.privilege_list)) [...res.privilege_list].forEach(item => {
					item.free_count = 100
				})

				// 决定会员剩余时间变化
				if (has(res.reminder) && user.previous == false) res.reminder = {
					...res.reminder,
					[user.svip == true ? "svip" : "vip"]: {
						"leftseconds": ((has(user.endtime) && user.endtime != "" ? user.endtime : 2147483648) * 1000 - Date.now()) / 1000,
						"nextState": "normal"
					}
				}

				// 其它（已有套餐、之前套餐）
				if (has(res.product_infos) && user.previous == false) res.product_infos.unshift({
					"product_id": "12187135090581539740",
					"buy_time": "946656000",
					"start_time": 946656000,
					"end_time": has(user.endtime) && user.endtime != "" ? user.endtime : 2147483648,
					"cluster": "vip",
					"detail_cluster": user.svip == true ? "svip" : "vip",
					"product_name": user.svip == true ? "svip2_nd" : "vip1_nd",
					"cur_svip_type": "year",
					"function_num": 8,
					"status": 0,
					"buy_description": "超级SVIP套餐(永久)",
					"product_description": "自打百度一诞生我就买了！"
				})

				if (has(res.previous_product)) res.previous_product = {
					"cluster": "vip",
					"detail_cluster": user.svip == true ? "svip" : "vip", // 决定之前会员标签
					"product_type": user.svip == true ? `vip2_1m_auto` : `vip_1m_auto`,
					"expired_time": 946656000
				}

				if (has(res.previous_product_v2)) res.previous_product_v2 = {
					"cluster": "vip",
					"detail_cluster": user.svip == true ? "svip" : "vip", // 决定之前会员标签
					"product_type": user.svip == true ? `vip2_1m_auto` : `vip_1m_auto`,
					"expired_time": 946656000
				}

				return res;
			}
		},
		{
			// 会员信息 用户导览
			runat: "end",
			match: (url) => url.pathname.includes("rest/2.0/membership/user") && url.searchParams.get("method") == "guide",
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.status_data) && has(user.endtime)) res.status_data = `${user.svip == true ? "SVIP" : "VIP"}至：${new Date(user.endtime * 1000).toLocaleDateString()}`;
				if (has(res.status_data) && has(user.endtime)) res.status_data_arr = [`${user.svip == true ? "SVIP" : "VIP"}至：${new Date(user.endtime * 1000).toLocaleDateString()}`];
				return res;
			}
		},
		{
			// 会员信息 用户信息
			runat: "end",
			match: (url) => url.pathname.includes("rest/2.0/membership/user/info") && url.searchParams.get("method") == "query",
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.user_info?.username) && has(user.name)) res.user_info.username = user.name;
				if (has(res.user_info?.["photo_url"]) && has(user.photo)) res.user_info["photo_url"] = user.photo;
				if (has(res.user_info?.phone) && has(user.phone)) res.user_info.phone = Number(user.phone);
				if (has(res.user_info?.vipsid) && has(user.vip_id)) {
					let idStr = String(user.vip_id);
					let six = idStr.match(/\d{6}/)?.[0];
					let all = idStr.replace(/\D/g, "");
					let finalId = six ? +six : (all ? +all : 1);
					res.user_info.vipsid = finalId;
				}
				if (has(res.user_info?.is_vip) && user.previous == false) res.user_info.is_vip = 1;
				if (has(res.user_info?.is_svip) && user.svip == true && user.previous == false) res.user_info.is_svip = 1;
				if (has(res.user_info?.is_mvip) && user.previous == false) res.user_info.is_mvip = 1;

				if (has(res.user_info?.is_vip_v2) && has(user.level) && user.level >= 2) res.user_info.is_vip_v2 = 1;
				if (has(res.user_info?.is_vip_v2_new) && has(user.level) && user.level >= 2) res.user_info.is_vip_v2_new = 1;

				if (has(res.user_info?.is_first_charge)) res.user_info.is_first_charge = 1;
				if (has(res.user_info?.is_first_charge) && user.svip == true) res.user_info.is_first_charge_svip = 1;
				if (has(res.user_info?.is_plus_buy)) res.user_info.is_plus_buy = 1;
				if (has(res.user_info?.plus_buy_hit)) res.user_info.plus_buy_hit = 1;
				return res;
			}
		},
		{
			// 会员信息 手机
			runat: "end",
			match: (url) => url.pathname.includes("rest/2.0/membership/phone") && url.searchParams.get("method") == "query",
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.phone) && has(user.phone)) res.phone = user.phone;
				if (has(res.phone_enc) && has(user.phone)) res.phone_enc = user.phone;
				return res;
			}
		},
		{
			// 会员信息 等级
			runat: "end",
			match: (url) => url.pathname.includes("rest/2.0/membership/level") && url.searchParams.get("method", "") == "getv10info",
			condition: () => user.vip == true,
			action: (res, url) => {
				if (has(res.data.points) && has(user.point)) res.data.points = user.point;
				if (has(res.data.svip_expire_time) && has(user.endtime)) res.data.svip_expire_time = user.endtime;
				if (has(res.data.v10_expire_time) && has(user.endtime)) res.data.v10_expire_time = user.endtime;
				if (has(res.data.v10_id) && has(user.vip_id)) res.data.v10_id = user.vip_id;
				if (has(res.data.v10_rank) && has(user.vip_id)) {
					let idStr = String(user.vip_id);
					let six = idStr.match(/\d{6}/)?.[0];
					let all = idStr.replace(/\D/g, "");
					let finalId = six ? +six : (all ? +all : 1);
					res.data.v10_rank = finalId;
				}
				return res;
			}
		},
		{
			// 视频信息
			runat: "end",
			match: (url) => url.pathname.includes("api/filemetas"),
			condition: () => user.vip == true,
			action: (res, url) => {
				// 百度网盘不允许非会员用户在线观看 1080P 及以上分辨率，所以在此处将其移除。
				if (Array.isArray(res?.info) && res.info.length > 0) {
					for (let item of res.info) {
						if (!item || typeof item !== "object") continue;

						// 从 resolution 解析宽高
						let width = item.width || 0, height = item.height || 0;
						if (item.resolution) {
							let match = item.resolution.match(/width:(\d+).*?height:(\d+)/i);
							if (match) {
								width = parseInt(match[1], 10) || 0;
								height = parseInt(match[2], 10) || 0;
							}
						}

						// 判断是否高于 720P
						if (Math.min(width, height) >= 720 || Math.max(width, height) >= 1280) {
							if (width >= height) {
								width = 1280, height = 720; // 横屏
							} else {
								width = 720, height = 1280; // 竖屏
							}

							item.width = width;
							item.height = height;
							item.resolution = `width:${width},height:${height}`;
						}
					}
				}
				return res;
			}
		},
		{
			// 视频信息 视频流 M3U8
			runat: "url",
			match: (url) => url.pathname.includes("api/streaming") && has(url.searchParams.get("vip")) && url.searchParams.get("type"),
			condition: () => user.vip == true,
			action: (url) => {
				url.searchParams.set("vip", "0");
				if (temp.adToken) {
					url.searchParams.set("adToken", temp.adToken);
					delete temp.adToken;
				}
				return url;
			}
		},
		{
			// 视频信息 视频流 M3U8
			runat: "end",
			match: (url) => url.pathname.includes("api/streaming") && has(url.searchParams.get("vip")) && /^M3U8_(AUTO|FLV)/.test(url.searchParams.get("type")),
			condition: () => user.vip == true,
			action: (res, url) => {
				if (typeof res === "object") {
					temp.adToken = res.adToken;
					res.adTime = 2;
					res.ltime = 1;
					if (user.iLoveAD) {
						res.adTime = 200;
						res.ltime = 100;
					}
				}
				return res;
			}
		},
		{
			// 视频信息 字幕流 M3U8
			runat: "end",
			match: (url) => url.pathname.includes("api/streaming") && has(url.searchParams.get("vip")) && url.searchParams.get("type") == "M3U8_SUBTITLE_SRT",
			condition: () => user.vip == true,
			action: (res, url) => {
				if (typeof res === "string" && res.startsWith("#EXTM3U") && res.includes("#MEDIA:SUBTITLES")) {
					function getSubtitles(text) {
						let regex = /#EXT-X-MEDIA:TYPE=SUBTITLES,[^#]*\n\s*(https?:\/\/[^\s]+)/g;
						let subtitles = [];
						let match;
						while ((match = regex.exec(text)) !== null) {
							let line = text.substring(match.index, regex.lastIndex).split('\n')[0];
							let attrs = Object.fromEntries(
								line.replace('#EXT-X-MEDIA:', '').split(',').map(pair => {
									let [k, v = ''] = pair.split('=');
									return [k.trim(), v.replace(/"/g, '').trim()];
								})
							);
							subtitles.push({
								name: attrs.NAME || '',
								language: attrs.LANGUAGE || '',
								default: attrs.DEFAULT === 'YES',
								ai: attrs['AI-SUB'] === 'YES',
								url: match[1]
							});
						}
						return subtitles;
					};

					let subtitles = getSubtitles(res);
					console.log(subtitles);

					base.waitForKeyElements("div.vjs-subtitle-item", (element) => {
						if (!element.parent("style.ym").length) element.parent().append(`<style class="ym">
							button.downloadSubtitle{float:right;padding:0 8px;border-radius:50px;cursor:pointer;color:#fff!important;background-color:#418ceb!important;}
							button.downloadSubtitle:hover{background-color:#418cebD0!important;}
							button.downloadSubtitle:disabled{background-color:#418cebD0!important;}
							div.vjs-subtitle-item:has(button.downloadSubtitle:hover){color:#a2abbd!important;}
						</style>`);
						let subName = element.find(".vjs-subtitle-item-text").text()?.trim();
						let maybeAI = element.find(".vjs-subtitle-item-text").prev(".vjs-subtitle-item-icon").length;
						if (subName && subtitles.some(i => i.name === subName && i.ai == maybeAI)) {
							let subtitle = subtitles.find(i => i.name === subName && i.ai == maybeAI);
							let button = $(`<button class="downloadSubtitle" title="下载后别忘了重命名文件加上扩展名 “.srt”">下载</button>`);

							button.on('click', function (e) {
								e.preventDefault();
								e.stopPropagation();
								window.open(subtitle.url, '_blank', 'noopener,noreferrer');
							});
							element.append(button);
						}
					}, true)
					base.waitForKeyElements(".vp-video__control-bar--video-subtitles-select-item", (element) => {
						let subName = element.find(".vp-video__control-bar--video-subtitles-select-desc").text()?.trim();
						let maybeAI = element.find(".vp-video__control-bar--video-subtitles-select-desc").prev(".vp-img-container").length;

						if (subName && subtitles.some(i => i.name === subName && i.ai == maybeAI)) {
							let subtitle = subtitles.find(i => i.name === subName && i.ai == maybeAI);
							let button = $(`<button class="downloadSubtitle" title="下载后别忘了重命名文件加上扩展名 “.srt”">下载</button>`);

							button.on('click', function (e) {
								e.preventDefault();
								e.stopPropagation();
								window.open(subtitle.url, '_blank', 'noopener,noreferrer');
							});
							if (element.find(".downloadSubtitle").length) element.find(".downloadSubtitle").remove();
							element.append(button);
						}
					}, true)
				}
				return res;
			}
		},
		{
			// 界面信息
			runat: "end",
			match: (url) => url.pathname.includes("api/getsyscfg"),
			condition: () => user.vip == true,
			action: (res, url) => {
				// huge_upgrade
				if (res.huge_upgrade?.cfg_list && has(user.unVerSwitch)) {
					let hue_config = res.huge_upgrade.cfg_list.find(item => item.node_key === "huge_upgrade_entrance_config");
					if (hue_config) {
						if (has(hue_config.new_nav_show)) hue_config.new_nav_show = (user.unVerSwitch == true ? "0" : "1")
						if (has(hue_config.new_nav_href)) hue_config.new_nav_href = "https://pan.baidu.com/disk/main"

						if (has(hue_config.old_nav_show)) hue_config.old_nav_show = (user.unVerSwitch == true ? "0" : "1")
						if (has(hue_config.old_nav_href)) hue_config.old_nav_href = "https://pan.baidu.com/disk/home?stayAtHome=true"
					}
				}

				// netdisk_docchat_config
				if (res.netdisk_docchat_config?.cfg_list && user.unAI_Yiduo == true) {
					let ce_config = res.netdisk_docchat_config.cfg_list.find(item => item.node_key === "chat_enter_config");
					ce_config.is_chat_show = "0";
					ce_config.is_docview_chat_auto_show = "0";
					ce_config.is_docview_chat_show = "0";
					ce_config.is_home_need_out_sug = "0";
					ce_config.is_main_chat_show = "0";
					ce_config.is_videoview_chat_auto_show = "0";
					ce_config.is_videoview_chat_show = "0";
				}
				// ai_collect
				if (res.ai_collect?.cfg_list && user.unAI_Yiduo == true) {
					let ac_config = res.ai_collect.cfg_list.find(item => item.node_key === "ai_collect_config");
					ac_config.is_ai_collect_show = "0";
				}

				// netdisk_docview_config
				if (res.netdisk_docview_config?.cfg_list) {
					let dv_type = res.netdisk_docview_config.cfg_list.find(item => item.node_key === "docview_type");
					dv_type.auto_search_to_ai = (user.unAI_Yiduo == true ? "0" : "1");
					dv_type.use_pfile_for_doc = (user.unPViewer == true ? "0" : "1");
					dv_type.use_pfile_for_ppt = (user.unPViewer == true ? "0" : "1");
					dv_type.use_pfile_reader = (user.unPViewer == true ? "0" : "1");
					dv_type.use_wps_reader = (user.unPViewer == true ? "1" : "0");
				}

				return res;
			}
		},
		{
			// 界面信息 视频页 笔记 Tab 展示状态
			runat: "end",
			match: (url) => url.pathname.includes("learn/query/strategy"),
			condition: () => true,
			action: (res, url) => {
				if (Array.isArray(res.data?.module_info) && res.data.module_info.length > 0 && res.data.module_info.some(i => i.module_name === "ainote")) {
					res.data.module_info.find(i => i.module_name === "ainote").display_strategy.enable = (user.unTab_aiNote !== true);
				}
				return res;
			}
		},
		{
			// 界面信息 视频页 AI看 Tab 展示状态
			runat: "end",
			match: (url) => url.pathname.includes("learn/query/roiinfo"),
			condition: () => true,
			action: (res, url) => {
				if (Array.isArray(res.data?.file_infos) && res.data?.file_infos.length > 0 && res.data.file_infos.some(i => has(i.roi_status))) {
					res.data.file_infos.forEach(i => {
						i.roi_status = user.unTab_aiStudy ? 0 : 1;
					});
				}
				return res;
			}
		},
		{
			// AI看 功能
			runat: "end",
			match: (url) => url.pathname.includes("api/study/kpointinfo"),
			condition: () => user.vip == true,
			action: (res, url) => {
				if (res.data?.left_times != null && Array.isArray(res.data?.display_data) && res.data.display_data.length > 0) {
					for (const item of res.data.display_data) {
						if (!["ready", "fail"].includes(item.ai_status)) continue;
						// 仅当免费次数用完时才修改状态
						if (res.data.left_times === 0) {
							if (item.id === 1) {
								item.ai_status = "done";
								item.content = "您的 AI 看免费使用次数已用尽，此视频无法生成 AI 总结（百度云盘会员青春版）";
							} else {
								item.ai_status = "done_empty";
							}
						}
					}
				}
				return res;
			}
		},
		{
			// 界面信息 视频页 课件/文稿 Tab 展示状态
			runat: "end",
			match: (url) => url.pathname.includes("/common") && url.searchParams.get("method") === "status",
			condition: () => true,
			action: (res, url) => {
				// 课件 - aitrans/ppt
				if (url.pathname.includes("aitrans/ppt") && has(res.data?.roi_status)) {
					res.data.roi_status = (user.unTab_aiCourseware == true ? 0 : 1);
				}
				// 文稿 - richsearch/autosubtitle
				if (url.pathname.includes("richsearch/autosubtitle") && has(res.res?.roi_status)) {
					res.res.roi_status = (user.unTab_aiDraft == true ? 0 : 1)
				}
				return res;
			}
		},
		{
			runat: "start",
			match: (url) => url.pathname.includes("cloudapp/api/v1/isLocateRight"),
			condition: () => user.vip == true,
			action: (res, url) => {
				res = {
					"errno": 0,
					"msg": "success",
					"result": false,
					"requestId": ""
				}
				return res;
			}
		},
		{
			// 广告信息 弹窗
			runat: "start",
			match: (url) => url.pathname.includes("rest/2.0/pcs/adx"),
			condition: () => user.vip == true,
			action: (res, url) => {
				res = {
					"list": {
						"tab": {
							"web-popup": []
						},
						"version": 0,
						"home_banner_version": 0
					},
					"request_id": ""
				}
				return res;
			}
		},
		{
			// 分析信息 报告
			runat: "start",
			match: (url) => {
				if (url.pathname.includes("api/report/user")) return true;
				if (url.pathname.includes("mwb2.gif")) return true;
				return false
			},
			condition: () => user.unAnalytics == true,
			action: () => { }
		},
		{
			// 分析信息 报告
			runat: "image",
			match: (url) => {
				if (url.host == "mbd.baidu.com" && url.pathname.includes("ztbox")) return true;
				if (url.host == "hm.baidu.com" && url.pathname.includes("hm.gif")) return true;
				if (url.host == "update.pan.baidu.com" && url.pathname.includes("statistics")) return true;
				if (url.pathname.includes("api/analytics")) return true;
				return false
			},
			condition: () => user.unAnalytics == true,
			action: () => { }
		},
	];

	/**
	 * 控制台输出
	 * @author 油小猴
	 * @author hmjz100
	 * @description 来自【网盘智能识别助手】，有改动
	 */
	console.log(`%c %c (改)百度网盘会员青春版\n虚拟百度网盘身份信息为会员\n仓库：https://github.com/hmjz100/BaiduNetDiskYouthMember\n版本：${info.version}\n领域：${(window.self !== window.top ? "[iframe] " : "") + (document.title ? (document.title + " (" + location.origin + location.pathname + ")") : temp.url())}`, `background:url(${info.icon}) center center no-repeat;background-size:12px;padding:3px`, `padding:2px`);

	// 没有什么是 Hook 解决不了的。
	var originalFetch = fetch;
	unsafeWindow.fetch = base.hooker.fetch;
	temp.hooker.set(unsafeWindow.fetch);

	var originalSend = XMLHttpRequest.prototype.send;
	unsafeWindow.XMLHttpRequest.prototype.send = base.hooker.send;
	temp.hooker.set(unsafeWindow.XMLHttpRequest.prototype.send);

	var originalOpen = XMLHttpRequest.prototype.open;
	unsafeWindow.XMLHttpRequest.prototype.open = base.hooker.open;
	temp.hooker.set(unsafeWindow.XMLHttpRequest.prototype.open);

	var originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
	unsafeWindow.XMLHttpRequest.prototype.setRequestHeader = base.hooker.setRequestHeader;
	temp.hooker.set(unsafeWindow.XMLHttpRequest.prototype.setRequestHeader);

	var originalSendBeacon = navigator.sendBeacon;
	unsafeWindow.navigator.sendBeacon = base.hooker.sendBeacon;
	temp.hooker.set(unsafeWindow.navigator.sendBeacon);

	var OriginalImage = Image;
	unsafeWindow.Image = base.hooker.Image;
	temp.hooker.set(unsafeWindow.Image);

	var originalCreateElement = document.createElement;
	unsafeWindow.document.createElement = base.hooker.createElement;
	temp.hooker.set(unsafeWindow.document.createElement);

	var originalToString = Function.prototype.toString;
	unsafeWindow.Function.prototype.toString = base.hooker.toString;
	temp.hooker.set(unsafeWindow.Function.prototype.toString);

	var originalToLocaleString = Function.prototype.toLocaleString;
	unsafeWindow.Function.prototype.toLocaleString = base.hooker.toLocaleString;
	temp.hooker.set(unsafeWindow.Function.prototype.toLocaleString);

	var originalAttachShadow = Element.prototype.attachShadow;
	unsafeWindow.Element.prototype.attachShadow = base.hooker.attachShadow;
	temp.hooker.set(unsafeWindow.Element.prototype.attachShadow);

	let localsTimer = setInterval(() => {
		if (!unsafeWindow.locals) return;
		clearInterval(localsTimer);
		let url = new URL(location.href);
		if (rules.some(r => r.match(url) && r.condition() && r.runat === "variable")) {
			unsafeWindow.locals = base.hooker.universal("locals", url, unsafeWindow.locals, "variable");
		}
	}, 1)

	let yunDataTimer = setInterval(() => {
		if (!unsafeWindow.yunData) return;
		clearInterval(yunDataTimer);
		let url = new URL(location.href);
		if (rules.some(r => r.match(url) && r.condition() && r.runat === "variable")) {
			unsafeWindow.yunData = base.hooker.universal("yunData", url, unsafeWindow.yunData, "variable");
		}
	}, 1)

	let yunDataRequireTimer = setInterval(() => {
		if (!unsafeWindow.require) return;
		clearInterval(yunDataRequireTimer);
		var originalRequire = unsafeWindow.require;

		originalRequire.async("pan-center:widget/data/yunData", (yunData) => {
			let url = new URL(location.href);
			return base.hooker.universal("require yunData", url, yunData, "variable");
		})

		/*unsafeWindow.require = function (url) {
			Object.assign(unsafeWindow.require, originalRequire);

			if (url.includes("widget/data/yunData")) {
				let url = new URL(location.href);
				return base.hooker.universal("require yunData", url, originalRequire.apply(this, arguments), "variable");
			}

			return originalRequire.apply(this, arguments);
		}*/
	}, 1)

	GM_registerMenuCommand("⚙️ 设置", () => {
		base.showSettings();
	});

	base.waitForKeyElements("head:not(:has(.style.swal-pub-style))", (element) => {
		element.prepend(`<style class="swal-pub-style">${GM_getResourceText('SwalLigt')}</style>`);
	}, true)
	base.waitForKeyElements("head:not(:has(.style.listener-ym))", (element) => {
		element.append(`<style class="listener-ym">
			button.downloadSubtitle{margin-left:auto;padding:0 8px;border-radius:3px;cursor:pointer;color:#fff;background-color:#418ceb;}
			button.downloadSubtitle:hover{background-color:#418cebD0;}
			button.downloadSubtitle:disabled{background-color:#418cebD0;}
			.vp-video__control-bar--video-subtitles-select-item:has(button.downloadSubtitle:hover){background:transparent!important;}
			.vjs-live .vjs-progress-control{display:flex!important}
		</style>`);
	}, true)

	// 这是啥？我不到啊
	function idontknow(input) {
		let charArray = input.split("");
		// 这是 Fisher-Yates 洗牌算法的实现
		for (let i = charArray.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		return charArray.join("");
	}
})();