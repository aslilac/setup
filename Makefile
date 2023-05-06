all:
	@./node_modules/.bin/esbuild \
		./setup.ts \
		--outdir=.github/ \
		--bundle \
		--platform=node
.PHONY: all
