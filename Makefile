all:
	@./node_modules/.bin/esbuild \
		./setup.ts \
		--outdir=.github/build/ \
		--bundle \
		--platform=node
.PHONY: all
