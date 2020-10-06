$(function () {
    const grip = $('.slider__grip'),
          scale = $('.slider__scale'),
          mobile = $('.slider__mobile'),
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
                shiftPercent = (shift / (scaleWidth / 100));
            if (shiftPercent < 0 && shiftPercent < scalePos - 100) shiftPercent = scalePos - 100;
            if (shiftPercent > 0 && shiftPercent > scalePos) shiftPercent = scalePos;
            let width = scalePos - shiftPercent;
            grip.css('margin-left', `${width}%`)    
            photoBefore.css('width', `${100 - (width)}%`)    
            photoAfter.css('width', `${width}%`)
        }
    }
    function onGripMouseUp(){
        $(this).off('mousemove')
        $(this).off('mouseup')
    }
    grip.on('mousedown', onGripMouseDown);
    mobile.on('click', function(){
        let leftClass = 'slider__grip-mobile--left',
            rightClass = 'slider__grip-mobile--right';
        if(grip.attr('class').split(/\s+/).length == 1 || grip.hasClass(leftClass)){
            grip.removeClass(leftClass);
            grip.toggleClass(rightClass);
            photoBefore.css('width', '0%'); 
            photoAfter.css('width', '100%');
        }
        else{
            grip.toggleClass(rightClass);
            grip.toggleClass(leftClass);
            photoBefore.css('width', '100%');  
            photoAfter.css('width', '0%');
        }
    })
});