function swipe(delta, callback){
	var xDown = null;
	var yDown = null;
	var doTouchBreak = null;
	var minDelta = delta; // delta pixel detection start

	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	document.addEventListener('touchend', handleTouchEnd, false);
	document.addEventListener('touchcancel', handleTouchEnd, false);

	function handleTouchEnd() {
		doTouchBreak = null;
	};

	function handleTouchStart(evt) {
		xDown = evt.touches[0].clientX;
		yDown = evt.touches[0].clientY;
	};

	function handleTouchMove(evt) {
		if (!xDown || !yDown || doTouchBreak) {
			return; 
		}
    
		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;
    
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
    
		// horizontal swipe
		if (Math.abs( xDiff ) > Math.abs( yDiff )) {
			if (xDiff > minDelta) {
				/* left swipe */
                if(typeof callback == "function")
                callback('left');
				doTouchBreak = true;
			} else if (xDiff < -minDelta) {
				/* right swipe */
                if(typeof callback == "function")
                callback('right');
				doTouchBreak = true;
			}
		// vertical swipe
		} else {
			if (yDiff > minDelta) {
				/* up swipe */
				if(typeof callback == "function")
                callback('up');
				doTouchBreak = true;
			} else if (yDiff < -minDelta) {
				/* down swipe */
				if(typeof callback == "function")
                callback('down');
				doTouchBreak = true;
			}
		}
    
		if (doTouchBreak) {
			xDown = null;
			yDown = null;
		}
	};
}