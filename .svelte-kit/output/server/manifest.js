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
		client: {"start":"_app/immutable/entry/start.D--6ku-5.js","app":"_app/immutable/entry/app.CDdBoFVC.js","imports":["_app/immutable/entry/start.D--6ku-5.js","_app/immutable/chunks/entry.ZXCmxyTm.js","_app/immutable/chunks/runtime.DCPRCs3i.js","_app/immutable/entry/app.CDdBoFVC.js","_app/immutable/chunks/runtime.DCPRCs3i.js","_app/immutable/chunks/render.CvSk9r6e.js","_app/immutable/chunks/disclose-version.B8h2QlWB.js","_app/immutable/chunks/if.BwmA_LbK.js","_app/immutable/chunks/store.h41jsk4A.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
