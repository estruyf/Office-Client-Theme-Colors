(function(){
    'use strict';

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function(reason){
        jQuery(document).ready(function(){
            app.initialize();
            
            applyOfficeTheme();
        });
    };
})();
    
function applyOfficeTheme(){
    // Get office theme colors.
    var bodyBackgroundColor = Office.context.officeTheme.bodyBackgroundColor;
    var bodyForegroundColor = Office.context.officeTheme.bodyForegroundColor;
    var controlBackgroundColor = Office.context.officeTheme.controlBackgroundColor
    var controlForegroundColor = Office.context.officeTheme.controlForegroundColor;

    // Apply body background color to a CSS class.
    $('.bodyBackgroundColor').css({
        'background-color': bodyBackgroundColor,
        'color': bodyForegroundColor
    }).text(bodyBackgroundColor);
    
    $('.bodyForegroundColor').css({
        'background-color': bodyForegroundColor,
        'color': bodyBackgroundColor
    }).text(bodyForegroundColor);
    
    $('.controlBackgroundColor').css({
        'background-color': controlBackgroundColor,
        'color': controlForegroundColor
    }).text(controlBackgroundColor);
    
    $('.controlForegroundColor').css({
        'background-color': controlForegroundColor,
        'color': controlBackgroundColor
    }).text(controlForegroundColor);
};