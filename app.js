const images = [
	'rhude.jpg',
	'farm.jpg',
	'boston.jpeg',
	'mon.jpg',
	'mar.jpg',
	'kw.jpg',
	'ss2.jpg',
	'head.jpg',
	'ap.png',
	'common.jpg',
	'floyd.jpg',
	'gg.jpeg',
	'infinite.jpg',
	'needles.jpg',
	'tourm.jpg',
]

let i = 0;

let place = (x, y) => {
	const nextPic = images[i]
	const img = document.createElement('img')

	img.setAttribute('src', nextPic)

	img.style.left = x + 'px'
	img.style.top = y + 'px'
	img.style.transform = " translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

	document.querySelector("section.collage").appendChild(img)

	i = i + 1

	if (i >= images.length) {
		i = 0
	}
}

document.querySelector("section.collage").addEventListener("click", (e) => {
	e.preventDefault()
	place(e.pageX, e.pageY)
})

document.querySelector("section.collage").addEventListener("touchend", (e) => {
	e.preventDefault()
	place(e.pageX, e.pageY)
})