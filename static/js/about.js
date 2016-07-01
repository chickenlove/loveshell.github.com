$(function(){
    var hash = location.hash;
    if(hash){
        $('#tabs-' + hash.replace(/#/g, '')).tab('show');
    }
    $('.navigation-tabs a').click(function(){
        var href = this.href;
        if(href.indexOf('#') > 0){
            var id = href.replace(/[^#]*#/,'#tabs-');
            $(id).tab('show');
        }
    });
	$('.col-xs-3 a').click(function(){
        var href = this.href;
        if(href.indexOf('#') > 0){
            var id = href.replace(/[^#]*#/,'#tabs-');
            $(id).tab('show');
        }
    });
})