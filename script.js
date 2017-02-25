const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
	// RegEx for the band names starting with 'a', 'an' and 'the'. Replace it with an empty string and trim it.
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

// We are using strip() function only in our if statement (or ternary in this case), so actual band names will remain unchanged.
const sorted = bands.sort((a, b) =>
	strip(a) > strip(b) ? 1 : -1);

console.log(sorted);

document.querySelector('#bands').innerHTML =
	sorted.map(band => `<li>${band}</li>`).join('');