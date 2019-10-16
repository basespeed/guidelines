(function ($) {
    "use strict";

    var WebFontConfig = {
        google: { families: [
            'Open+Sans:400,400italic,600,600italic,700,700italic',
            'Montserrat:400,400italic,500,500italic,600,600italic,700,700italic'
            ] }
    };

    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

    function ready() {
        function toHexRgb(color) {
            var rgb = color.getRGB();
            return "#" + Math.floor(rgb.r * 255.0).toString(16) + Math.floor(rgb.g * 255.0).toString(16) + Math.floor(rgb.b * 255.0).toString(16);
        }

        $(this).prop('disabled', true);

        $('.cp-full').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.cp-full').attr('enable');

                $('.cp-full').val('#'+hex);

                $('.list_color:nth-child(1) .info ul li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.list_color:nth-child(1) .info ul li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.list_color:nth-child(1) .info ul li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                $('.list_color:nth-child(1) .color_item:nth-child(1)').css('background','rgba('+r+','+g+','+b+',1)');
                $('.list_color:nth-child(1) .color_item:nth-child(2)').css('background','rgba('+r+','+g+','+b+',0.9)');
                $('.list_color:nth-child(1) .color_item:nth-child(3)').css('background','rgba('+r+','+g+','+b+',0.8)');
                $('.list_color:nth-child(1) .color_item:nth-child(4)').css('background','rgba('+r+','+g+','+b+',0.7)');
                $('.list_color:nth-child(1) .color_item:nth-child(5)').css('background','rgba('+r+','+g+','+b+',0.6)');
                $('.list_color:nth-child(1) .color_item:nth-child(6)').css('background','rgba('+r+','+g+','+b+',0.5)');
                $('.list_color:nth-child(1) .color_item:nth-child(7)').css('background','rgba('+r+','+g+','+b+',0.4)');
                $('.list_color:nth-child(1) .color_item:nth-child(8)').css('background','rgba('+r+','+g+','+b+',0.3)');
                $('.list_color:nth-child(1) .color_item:nth-child(9)').css('background','rgba('+r+','+g+','+b+',0.2)');
                $('.list_color:nth-child(1) .color_item:nth-child(10)').css('background','rgba('+r+','+g+','+b+',0.1)');
            },

        });

        $('.cp-full2').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.cp-full2').attr('enable');

                $('.cp-full2').val('#'+hex);

                $('.list_color2 .info ul li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.list_color2 .info ul li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.list_color2 .info ul li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                $('.list_color2 .color_item:nth-child(1)').css('background','rgba('+r+','+g+','+b+',1)');
                $('.list_color2 .color_item:nth-child(2)').css('background','rgba('+r+','+g+','+b+',0.9)');
                $('.list_color2 .color_item:nth-child(3)').css('background','rgba('+r+','+g+','+b+',0.8)');
                $('.list_color2 .color_item:nth-child(4)').css('background','rgba('+r+','+g+','+b+',0.7)');
                $('.list_color2 .color_item:nth-child(5)').css('background','rgba('+r+','+g+','+b+',0.6)');
                $('.list_color2 .color_item:nth-child(6)').css('background','rgba('+r+','+g+','+b+',0.5)');
                $('.list_color2 .color_item:nth-child(7)').css('background','rgba('+r+','+g+','+b+',0.4)');
                $('.list_color2 .color_item:nth-child(8)').css('background','rgba('+r+','+g+','+b+',0.3)');
                $('.list_color2 .color_item:nth-child(9)').css('background','rgba('+r+','+g+','+b+',0.2)');
                $('.list_color2 .color_item:nth-child(10)').css('background','rgba('+r+','+g+','+b+',0.1)');
            },

        });

        $('.ga1').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.ga1').attr('enable');

                $('.ga1').val('#'+hex);

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(1) li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(1) li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(1) li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                let ga1 = $('.ga1').val();
                let ga2 = $('.ga2').val();

                $('.get_gar1').css('background','linear-gradient(to right, '+ga1+', '+ga2+')');
            },

        });

        $('.ga2').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.ga2').attr('enable');

                $('.ga2').val('#'+hex);

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(2) li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(2) li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.section8 .list_color:nth-child(1) .info ul:nth-child(2) li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                let ga1 = $('.ga1').val();
                let ga2 = $('.ga2').val();

                $('.get_gar1').css('background','linear-gradient(to right, '+ga1+', '+ga2+')');
            },

        });

        $('.ga3').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.ga3').attr('enable');

                $('.ga3').val('#'+hex);

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(1) li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(1) li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(1) li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                let ga3 = $('.ga3').val();
                let ga4 = $('.ga4').val();

                $('.get_gar2').css('background','linear-gradient(to right, '+ga3+', '+ga4+')');
            },

        });

        $('.ga4').colorpicker({
            parts: ['map', 'bar', 'hex', 'rgb', 'cmyk', 'footer'],
            showOn: 'both',
            colorFormat: ['EXACT', 'cp,mp,yp,kp'],
            buttonImageOnly: false,
            buttonColorize: true,
            showNoneButton: true,
            //buttonImage: 'http://vanderlee.github.io/colorpicker/images/ui-colorpicker.png',
            ok: function (event, color) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });

                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                //console.log(color);
                var hex = color.colorPicker.color.toHex();
                var v = $(this).val();
                var separator = v.indexOf(',') != -1 ? ',' : ';'; // Use either ',' or ';' as separator
                var cmyk = v.split(separator);

                var c0 = String(Math.round(cmyk[0]));
                var c1 = String(Math.round(cmyk[1]));
                var c2 = String(Math.round(cmyk[2]));
                var c3 = String(Math.round(cmyk[3]));

                $('.ga4').attr('enable');

                $('.ga4').val('#'+hex);

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(2) li:nth-child(3)').text('HEX CODE: #'+hex);

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(2) li:nth-child(2)').text('CMYK:'+c0 + ' ' + c1 + ' ' + c2 + ' ' + c3);

                let r = hexToRgb(hex).r;
                let g = hexToRgb(hex).g;
                let b = hexToRgb(hex).b;

                $('.section8 .content .list_color:nth-child(2) .info ul:nth-child(2) li:nth-child(1)').text('RGB:'+r+' '+g+' '+b);

                let ga3 = $('.ga3').val();
                let ga4 = $('.ga4').val();

                $('.get_gar2').css('background','linear-gradient(to right, '+ga3+', '+ga4+')');
            },

        });

    }

    function select() {
        let slt_close_tag = $('.new_guide .insider .invite_user_slt .list_tags .close_tag');

        slt_close_tag.on('click',function () {
            $(this).parent().find('.search_keyword_slt').slideToggle();
        });

        $('.new_guide .insider .close_guide').on('click',function () {
            $('.new_guide').removeClass('active');
        });

        $('button.btn_create_item').on('click',function () {
            $('.new_guide').addClass('active');
        });

        $(document).on('click','.invite_user_slt_project .item',function () {
            //append item
            $('.invite_user_slt_project .list_tags .list .insider span').remove();
            $('.invite_user_slt_project .list_tags .list .insider').html('<div class="item" data-id="'+$(this).attr('data-id')+'"><div class="close_item"><img src="images/close.png" alt="close" /></div> '+$(this).text()+'</div>');
            $('.get_invite_user_slt_project').val($(this).attr('data-id'));

            //remove item
            $('.invite_user_slt_project .list_tags .list .item .close_item').on('click',function () {
                $(this).parent().parent().append('<span>Select users</span>');
                $(this).parent().remove();
                $('.get_invite_user_slt_project').val('');
            });
        });

        $(document).on('click','.invite_user_slt_user .search_keyword_slt  .item',function (e) {
            e.preventDefault();
            $('.get_invite_user_slt_user').val('');

            //append item
            $('.invite_user_slt_user .list_tags .list .insider span').remove();
            $('.invite_user_slt_user .list_tags .list .insider').append('<div class="item" data-id="'+$(this).attr('data-id')+'"><div class="close_item"><img src="images/close.png" alt="close" /></div> '+$(this).text()+'</div>');

            arr.push($(this).attr('data-id'));
            $('.get_invite_user_slt_user').val(arr);


            $(this).remove();
        });

        //remove item
        $(document).on('click','.invite_user_slt_user .list_tags .list .item .close_item',function () {
            $(this).parent().remove();

            var val = $(this).parent().attr('data-id');

            var removeItem = val;

            arr.splice( $.inArray(removeItem,arr) ,1 );

            $('.get_invite_user_slt_user').val(arr);

        });

        let arr = [];
        $(document).on('click','.invite_user_slt_cate .search_keyword_slt  .item',function (e) {
            e.preventDefault();
            $('.get_invite_user_slt_cate').val('');

            //append item
            $('.invite_user_slt_cate .list_tags .list .insider span').remove();
            $('.invite_user_slt_cate .list_tags .list .insider').append('<div class="item" data-id="'+$(this).attr('data-id')+'"><div class="close_item"><img src="images/close.png" alt="close" /></div> '+$(this).text()+'</div>');

            arr.push($(this).attr('data-id'));
            $('.get_invite_user_slt_cate').val(arr);

            $(this).remove();
        });

        //remove item
        $(document).on('click','.invite_user_slt_cate .list_tags .list .item .close_item',function () {
            $(this).parent().remove();

            var val = $(this).parent().attr('data-id');

            var removeItem = val;

            arr.splice( $.inArray(removeItem,arr) ,1 );

            $('.get_invite_user_slt_cate').val(arr);

        });
    }

    function menu_guidelines() {
        $('.sidebar ul li i').on('click',function () {
           $(this).siblings('ul').slideToggle();
        });
    }

    function scroll_menu_active() {
        var myFullpage = new fullpage('#fullpage', {
            anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'sec8', 'sec9', 'sec10', 'sec11', 'sec12', 'sec13', 'sec14', 'sec15', 'sec16', 'sec17', 'sec18', 'sec19', 'sec20'],
            menu: '#menu',
            loopTop: true,
            loopBottom: true,
            afterLoad: function(origin, destination, direction){
                let check = 'true';


                $('.sidebar ul li').filter(function () {
                    if($(this).find('ul li').hasClass('active')){
                        $(this).addClass('active');
                        $(this).find('ul').fadeIn();
                    }else{
                        $(this).find('ul').fadeOut();
                    }
                });
            },
        });
    }

    function uploadData() {
        $('.upload_logo').on('change',function (event) {
            let tmppath = URL.createObjectURL(event.target.files[0]);
            $('.menu_admin .logo img').attr('src',tmppath);
            $('.close_logo_admin').addClass('show');
        });

        $('.close_logo_admin').on('click',function () {
            $('.menu_admin .logo img').attr('src','images/upload4.png');
            $(this).removeClass('show');
        });

        $('.fullpage_admin section.section1 .upload_background').on('change',function (event) {
            let tmppath2 = URL.createObjectURL(event.target.files[0]);
            let filename = event.target.files[0].name;
            $('.fullpage_admin section.section1').css('background','url('+tmppath2+') no-repeat');
            $('.fullpage_admin section.section1 button span').text(filename);
        });

        $('.fullpage_admin section.section3 .upload_background').on('change',function (event) {
            let tmppath3 = URL.createObjectURL(event.target.files[0]);
            let filename = event.target.files[0].name;
            $('.fullpage_admin section.section3').css('background','url('+tmppath3+') no-repeat');
            $('.fullpage_admin section.section3 button span').text(filename);
        });

        $('.fullpage_admin section.section4 .btn_ground1').on('change',function (event) {
            let tmppath3 = URL.createObjectURL(event.target.files[0]);
            $(this).css('background','url('+tmppath3+') no-repeat');
            $(this).find('img').hide();
            $(this).addClass('border-hide');
        });

        $('.fullpage_admin section.section4 .btn_ground2').on('change',function (event) {
            let tmppath4 = URL.createObjectURL(event.target.files[0]);
            $(this).css('background','url('+tmppath4+') no-repeat');
            $(this).find('img').hide();
            $(this).addClass('border-hide');
        });

        $('.fullpage_admin section.section4 .btn_ground1 i').on('click', function () {
            $(this).parent().removeClass('border-hide');
            $(this).parent().find('img').show();
            $(this).parent().css('background','none');
        });

        $('.fullpage_admin section.section4 .btn_ground2 i').on('click', function () {
            $(this).parent().removeClass('border-hide');
            $(this).parent().find('img').show();
            $(this).parent().css('background','none');
        });

        $('.file_vector1').on('change', function (event) {
            let filename = event.target.files[0].name;
            $(this).siblings('span').text(filename);
        });

        $('.file_img1').on('change', function (event) {
            let filename = event.target.files[0].name;
            $(this).siblings('span').text(filename);
        });

        $('.file_vector2').on('change', function (event) {
            let filename = event.target.files[0].name;
            $(this).siblings('span').text(filename);
        });

        $('.file_img2').on('change', function (event) {
            let filename = event.target.files[0].name;
            $(this).siblings('span').text(filename);
        });

        $('.fullpage_admin .btn_ground_idea input.upload_background').on('change', function () {
            let tmppath4 = URL.createObjectURL(event.target.files[0]);
            $(this).parent().css('background','url('+tmppath4+') no-repeat');
            $(this).siblings('img').hide();
            $(this).parent().addClass('border-hide');
        });

        $('.fullpage_admin .btn_ground_idea i').on('click', function () {
            $(this).parent().removeClass('border-hide');
            $(this).siblings('img').show();
            $(this).parent().css('background','none');
        });

        $('.fullpage_admin .btn_ground_size input.upload_background').on('change', function () {
            let tmppath4 = URL.createObjectURL(event.target.files[0]);
            $(this).parent().css('background','url('+tmppath4+') no-repeat');
            $(this).siblings('img').hide();
            $(this).parent().addClass('border-hide');
        });

        $('.fullpage_admin .btn_ground_size i').on('click', function () {
            $(this).parent().removeClass('border-hide');
            $(this).siblings('img').show();
            $(this).parent().css('background','none');
        });
    }


    function login_admin() {
        $('.login .insider ul li').on('click', function () {
            $('.login .insider ul li').removeClass('current');
            $(this).addClass('current');
            $('#tab-1').toggle();
            $('#tab-2').toggle();
        });
    }

    function ajaxSearchProject() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $(document).ready(function(event) {
            $("input.get_slt_keyword1").keyup(function(e){
                e.preventDefault();
                let keyword = $(this).val();
                let db = 'dm_project';
                let col = 'project_name';
                let local = $(location).attr('href');
                if(keyword !== ""){
                    $.ajax({
                        type:'POST',
                        url:local,
                        data:{'keyword':keyword,'db':db,'col':col},
                        success:function(data){
                            $('.search_keyword_slt .list_slt1').empty();
                            $.each(data.success, (index, item) => {
                                $('.search_keyword_slt .list_slt1').append('<div class="item" data-id="'+item.project_id+'">'+ item.project_name +'</div>');
                            });
                        }
                    });
                }else{
                    $('.search_keyword_slt .list_slt1').empty();
                    $('.search_keyword_slt .list_slt1').append('<div class="item" style="color: red;">Vui lòng nhập thông tin cần tìm kiếm !</div>');
                }
            });

            $("input.get_slt_keyword2").keyup(function(e){
                e.preventDefault();
                let keyword = $(this).val();
                let db = 'dm_user';
                let col = 'username';
                let local = $(location).attr('href');
                if(keyword !== ""){
                    $.ajax({
                        type:'POST',
                        url:local,
                        data:{'keyword':keyword,'db':db,'col':col},
                        success:function(data){
                            $('.search_keyword_slt .list_slt2').empty();
                            $.each(data.success, (index, item) => {
                                $('.search_keyword_slt .list_slt2').append('<div class="item" data-id="'+item.userid+'">'+ item.username +'</div>');
                            });
                        }
                    });
                }else{
                    $('.search_keyword_slt .list_slt2').empty();
                    $('.search_keyword_slt .list_slt2').append('<div class="item" style="color: red;">Vui lòng nhập thông tin cần tìm kiếm !</div>');
                }
            });

            $("input.get_slt_keyword3").keyup(function(e){
                e.preventDefault();
                let keyword = $(this).val();
                let db = 'dm_category';
                let col = 'category_name';
                let local = $(location).attr('href');
                if(keyword !== ""){
                    $.ajax({
                        type:'POST',
                        url:local,
                        data:{'keyword':keyword,'db':db,'col':col},
                        success:function(data){
                            $('.search_keyword_slt .list_slt3').empty();
                            $.each(data.success, (index, item) => {
                                $('.search_keyword_slt .list_slt3').append('<div class="item" data-id="'+item.category_id+'">'+ item.category_name +'</div>');
                            });
                        }
                    });
                }else{
                    $('.search_keyword_slt .list_slt3').empty();
                    $('.search_keyword_slt .list_slt3').append('<div class="item" style="color: red;">Vui lòng nhập thông tin cần tìm kiếm !</div>');
                }
            });
        });

    }

    function menuEditGuidelines() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('#') + 1);

        $('.fullpage_admin_edit .section').filter(function () {
            let data_anchor = $(this).attr('data-anchor');

            if(data_anchor == id){
                $(this).fadeIn();
            }
        });

        $('.menu_admin ul.nav li').filter(function () {
            let data_menuanchor = $(this).attr('data-menuanchor');

            if(data_menuanchor == id){
                $('.menu_admin ul.nav li').removeClass('active');
                $(this).addClass('active');
            }
        });

        $('.edit_guide').parent().addClass('body_active');

        $('.menu_admin ul.nav li a').on('click',function () {
            let val = $(this).parent().attr('data-id');
            if(val == ""){
                $('.menu_admin ul.nav li').removeClass('active');
                $(this).parent().addClass('active');
                $('.fullpage_admin_edit .section').hide();
                $('.fullpage_admin_edit .section:nth-child('+val+')').fadeIn();
            }

        });

        $('.copyright_menu .btn_send_menu_admin').on('click',function () {
            $('.edit_guide').addClass('active');
        });

        $('.edit_guide .insider .close_guide').on('click',function () {
            $('.edit_guide').removeClass('active');
        });
    }

    function create_menu_layout() {
        $('.create_guide_new').on('click', function () {
            let menu_name = $('.get_name_menu').val();
            if(menu_name !==""){
                $('.new_guide').removeClass('active');
                $('.slt_layout').addClass('active');
                $('.btn_send_menu_admin').fadeOut();
                $('.get_menu_name').val(menu_name);
                $('.get_menu_parent').val($('.invite_user_slt_project .item').attr('data-id'));

                $('.get_menu_parent').val($('.invite_user_slt_menu_parent .insider1 .item').attr('data-id'));
            }else{
                $('.alert-danger').text('Vui lòng nhập tên menu !');
            }
        });

        $('.slt_layout .insider .item').on('click',function () {
            let val_layout = $(this).attr('data-id');
            $('.get_layout').val(val_layout);
        });

        let arr = [];
        $(document).on('click','.invite_user_slt_menu_parent .search_keyword_slt  .item',function (e) {
            e.preventDefault();

            //append item
            $('.invite_user_slt_menu_parent .list_tags .list .insider span').remove();
            $('.invite_user_slt_menu_parent .list_tags .list .insider').html('<div class="item" data-id="'+$(this).attr('data-id')+'"><div class="close_item"><img src="images/close.png" alt="close" /></div> '+$(this).text()+'</div>');



        });

        $('.slt_layout .insider .item').on('click',function () {
            $('.slt_layout .insider .item').removeClass('active');
            $(this).addClass('active');
        });
    }

    function loadmoreAdmin() {
        $('.guidelines_admin .loadmore').on('click',function () {
            let length = $('.guidelines_admin .list_guide table tbody tr').length;
            let local = $(location).attr('href');
            var getUrl = window.location;
            var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            $('.guidelines_admin .loadmore i').addClass('active');
            $.ajax({
                type:'POST',
                url:local,
                data:{'length':length},
                success:function(data){
                    let length_success = data.success.length;
                    console.log(data.success);
                    if(length_success > 0){
                        $.each(data.success, (index, item) => {
                            $('.guidelines_admin .list_guide table tbody').append('<tr><td><strong>'+item.project_name+'</strong></td><td>'+item.status+'</td><td>'+item.created_at+'</td><td>'+item.name_create+'</td><td><span class="add"><i class="fa fa-user-plus" aria-hidden="true"></i></span><a href="'+baseUrl+'/guidelines/'+item.id+'" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a></td></tr>');
                        });
                        $('.guidelines_admin .loadmore i').removeClass('active');
                    }else{
                        $('.guidelines_admin .loadmore').fadeOut();
                    }
                }
            });
        });
    }

    function __init() {
        ready();
        login_admin();
        select();
        menu_guidelines();
        scroll_menu_active();
        uploadData();
        ajaxSearchProject();
        menuEditGuidelines();
        create_menu_layout();
        loadmoreAdmin();
    }

    __init();
})(jQuery);

