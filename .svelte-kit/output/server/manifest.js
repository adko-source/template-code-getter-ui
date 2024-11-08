export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.CiE64o-R.js","app":"_app/immutable/entry/app.DwHiSyYL.js","imports":["_app/immutable/entry/start.CiE64o-R.js","_app/immutable/chunks/entry.DHHFnwdy.js","_app/immutable/chunks/runtime.b43-5qqS.js","_app/immutable/entry/app.DwHiSyYL.js","_app/immutable/chunks/runtime.b43-5qqS.js","_app/immutable/chunks/render.D1XsaFYV.js","_app/immutable/chunks/disclose-version._Nb4vAZO.js","_app/immutable/chunks/if.BgX00Gz2.js","_app/immutable/chunks/store.1Zpw_4qU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
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
