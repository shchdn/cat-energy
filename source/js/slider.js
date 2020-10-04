$(function () {
    const grip = $('.slider__grip'),
          scale = $('.slider__scale');
    function onGripMouseDown(e){
        e.preventDefault();
        const oldPos = e.clientX,
              scalePos = parseInt(grip.css('margin-left')),
              scaleWidth = scale.width();
        $('body').on('mousemove', onGripMouseMove(oldPos, scalePos, scaleWidth));
        $('body').on('mouseup', onGripMouseUp);
    }
    function onGripMouseMove(oldPos, scalePos, scaleWidth){
        return function(e){
            let shift = oldPos - e.clientX,
                marginValue = scalePos - shift;
            if (marginValue < 0) marginValue = 0;
            if (marginValue > scaleWidth) marginValue = scaleWidth;
            grip.css('margin-left', `${marginValue}px`)    
        }
    }
    function onGripMouseUp(){
        $(this).off('mousemove')
        $(this).off('mouseup')
    }
    grip.on('mousedown', onGripMouseDown);
});