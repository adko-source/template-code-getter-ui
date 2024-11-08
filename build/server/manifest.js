const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dw1Jhhyy.js","app":"_app/immutable/entry/app.D3Rt3fNv.js","imports":["_app/immutable/entry/start.Dw1Jhhyy.js","_app/immutable/chunks/entry.CQ7bIcpm.js","_app/immutable/chunks/runtime.b43-5qqS.js","_app/immutable/entry/app.D3Rt3fNv.js","_app/immutable/chunks/runtime.b43-5qqS.js","_app/immutable/chunks/render.D1XsaFYV.js","_app/immutable/chunks/disclose-version._Nb4vAZO.js","_app/immutable/chunks/if.BgX00Gz2.js","_app/immutable/chunks/store.1Zpw_4qU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-PBbwFqpI.js')),
			__memo(() => import('./chunks/1-DkRqi4ge.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
