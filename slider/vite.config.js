import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { viteMockServe } from "vite-plugin-mock";

const isDev = () => process.env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/", // 静态资源前缀
	plugins: [
		reactRefresh(),
		viteMockServe({
			supportTs: false,
			mockPath: "mock",
			localEnabled: isDev(),
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		// extensions: ['.js', '.jsx'],
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	rollupOptions: {},
	server: {
		open: true,
		proxy: {
			// '/api': {
			//   target: 'http://localhost:3000',
			//   changeOrigin: true,
			//   pathRewrite: {
			//     "^/api/test": "/mock"
			//   }
			// }
		},
	},
	build: {
		manifest: true,
		sourcemap: isDev(),
		// cssCodeSplit set false,all CSS in the entire project will be extracted into a single CSS file
		cssCodeSplit: true,
		rollupOptions: {
			// external: ['react'],
			// output: {
			//   // Provide global variables to use in the UMD build
			//   // for externalized deps
			//   globals: {
			//     react: 'React',
			//   },
			// },
		},
	},
});
