$(function () {
    const grip = $('.slider__grip'),
          scale = $('.slider__scale'),
          photoBefore = $('.slider__photo--before'),
          photoAfter = $('.slider__photo--after');
    function onGripMouseDown(e){
        e.preventDefault();
        const oldPos = e.clientX,
              scaleWidth = scale.width(),
              scalePos = parseInt(grip.css('margin-left')) / (scaleWidth / 100);
        $('body').on('mousemove', onGripMouseMove(oldPos, scalePos, scaleWidth));
        $('body').on('mouseup', onGripMouseUp);
    }
    function onGripMouseMove(oldPos, scalePos, scaleWidth){
        return function(e){
            let shift = oldPos - e.clientX,
                widthValue = (shift / (scaleWidth / 100));
            if (widthValue < 0 && widthValue < scalePos - 100) widthValue = scalePos - 100;
            if (widthValue > 0 && widthValue > scalePos) widthValue = scalePos;
            

            grip.css('margin-left', `${scalePos - widthValue}%`)    
            photoBefore.css('width', `${100 - (scalePos - widthValue)}%`)    
            photoAfter.css('width', `${scalePos - widthValue}%`)
        }
    }
    function onGripMouseUp(){
        $(this).off('mousemove')
        $(this).off('mouseup')
    }
    grip.on('mousedown', onGripMouseDown);
});