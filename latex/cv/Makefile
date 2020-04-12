.PHONY: cv

cv:
	pp -import variables.pp cv.tex > cv-compiled.tex
	xelatex cv-compiled.tex
	pandoc -f latex -t html cv-compiled.tex > cv.html
	mv cv-compiled.pdf cv.pdf
	rm cv-compiled.*
	mv cv.html ../../public/static/peijun-ma-cv.html
	mv cv.pdf ../../public/static/peijun-ma-cv.pdf
