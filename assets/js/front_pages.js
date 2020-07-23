$(function() {
    $('.Toggle').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.header_r').addClass('active'); //クラスを付与
        } else {
            $('.header_r').removeClass('active'); //クラスを外す
        }
    });
});



$(function(){
    // ローデイング
    $(window).on("load", function () {
        $("#loading").fadeOut(500);
    });

    //ヘッダー
    var startPos = 0,winScrollTop = 0;
    $(window).on('scroll',function(){
            winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos) {
            $('#header').addClass('hide');
      } else {
            $('#header').removeClass('hide');
      }
      startPos = winScrollTop;
    });

    //コンテンツフェード
    $(window).on('load scroll', function(){
        $('.contents_fade').each(function () {
            var elempos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elempos - windowHeight + 300) {
                $(this).addClass('anm');
            }
        });
    });
});


// =================== トップへ戻るボタン =======================

const pageTopBtn = $("#pagetop_button");
pageTopBtn.hide();

$(function(){
    $(window).on("scroll", function () {

        //500以上にスクロールされた or されている時は50msかけてフェードイン/アウト
        if ($(this).scrollTop() > 300) {
            pageTopBtn.fadeIn("50");
        } else {
            pageTopBtn.fadeOut("50");
        }

        // フッターの高さを取得
        bodyHeight = $(document).height(); // bodyの高さを取得
        scrollBottomPosition = $(window).height() + $(window).scrollTop(); // 現在のスクロール位置の画面下部の高さを取得
        footerHeight = $("footer").innerHeight(); // フッター要素の高さを取得

        // 残りの表示領域がフッターの高さより低ければ
        if (bodyHeight - scrollBottomPosition <= footerHeight) {
            pageTopBtn.css({
                "position": "absolute",
                "bottom": footerHeight + 20
            });
        } else {
            pageTopBtn.css({
                "position": "fixed",
                "bottom": "20px"
            });
        }
    });
    pageTopBtn.click(function(){
        //animate({スクロール位置}, 戻るスピード)
        $('body,html').animate({ scrollTop: 0 }, 400);
        return false;
    });
});