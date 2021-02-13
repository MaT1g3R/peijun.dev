.PHONY: cv resume clean

cv:
	xelatex cv.tex
	pandoc -f latex -t html cv.tex > cv.html
	mv cv.html ../../public/static/peijun-ma-cv.html
	mv cv.pdf ../../public/static/peijun-ma-cv.pdf
	make clean

resume:
	xelatex resume.tex
	make clean

clean:
	rm *.aux *.out *.log
