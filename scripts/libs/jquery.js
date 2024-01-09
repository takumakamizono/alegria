jQuery(function () {
  var appear = false;
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: "0px", //下から50pxの位置に
          },
          300
        ); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: "-50px", //下から-50pxの位置に
          },
          300
        ); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

$(".accordion-table table tbody tr:nth-child(1)").on("click", function () {
  var findElm = $(this).next(".accordion-table table tbody tr:nth-child(2)");
  event.preventDefault(); //ブラウザ動作の無効化
  $(findElm).slideToggle();

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
    $(this).removeClass("open");
  } else {
    $(this).addClass("close");
  }
});

$(window).on("load", function () {
  $(".accordion-table table tbody").addClass("open");
  $(".open").each(function (index, element) {
    var Title = $(element).children(
      ".accordion-table table tbody tr:nth-child(2)"
    );
    $(Title).addClass("close");
    var Box = $(element).children(
      ".accordion-table table tbody tr:nth-child(2)"
    );
    $(Box).slideUp(500);
  });
});

//ページ内リンクの位置調整

$(function () {
  var headerHeight = 80;

  // ページが読み込まれたときの処理
  $(document).ready(function () {
    // URLのハッシュを取得
    var hash = window.location.hash;

    // ハッシュが空でなければ（つまりページ内リンクがあれば）
    if (hash !== "") {
      // スクロール先の要素を取得
      var target = $(hash);

      // 要素が存在する場合はスクロール
      if (target.length) {
        var position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 500, "swing");
      }
    }
  });

  // ページ内リンクがクリックされたときの処理
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault(); // デフォルトの挙動をキャンセル

    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? "html" : href);

    if (target.length) {
      var position = target.offset().top - headerHeight;
      $("html, body").animate({ scrollTop: position }, 500, "swing");

      // URLを更新して履歴に追加
      window.history.pushState(null, null, href);
    }
  });
});
