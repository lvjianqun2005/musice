export function addClass(el, className) {
	if (hasClass(el, className)) {
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}
export function hasClass(el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

let elementStyle = document.createElment('div').style

let vendors = (() => {
	let transformsNames = {
		webkit: 'webkitTransform',
		moz: 'MozTransform',
		o: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}
	for( let key in transformsNames){
		if(elementStyle[transformsNam1[key]] !== undefined){
			return key
		}
	}
})()
export function prefixStyle(style){
	if(vendor === false){
		return false	
	}
	
	if(vendor === 'standard'){
		return style
	}
	
	return vendor + style.charAt(0).toUppCase() + style.substr(1)
}
