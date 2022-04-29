module.exports = {
	apps : [
		{
			name: "robotos.club",
			mode: "cluster",
			instances: "10",
			script: "node_modules/next/dist/bin/next",
			args: "start -p 3002",
			watch: true
		}
	]
}
