/* スクロールでcss適用 */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if( scrollTop < 100){
    $('nav').removeClass("nav_c1");
  }else if( 100 < scrollTop && scrollTop < 120){
    $('nav').addClass("nav_c1");
    $('nav').removeClass("nav_c2");
  }else if( 120 < scrollTop){
    $('nav').addClass("nav_c2");
  }
});

/* analytics.google.com */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-98277992-1', 'auto');
  ga('send', 'pageview');

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-98282233-1', 'auto');
  ga('send', 'pageview');

/* 3つのタブ */
function tab1(){
    var box1 = document.getElementById('tab1');
    box1.classList.add('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.add('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
}
function tab2(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.add('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.add('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
}
function tab3(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.add('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.add('active');
}

/* 5つのタブ */
function tab1b(){
    var box1 = document.getElementById('tab1');
    box1.classList.add('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');
    var box4 = document.getElementById('tab4');
    box4.classList.remove('active');
    var box5 = document.getElementById('tab5');
    box5.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.add('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
    var box40 = document.getElementById('tab4_inner');
    box40.classList.remove('active');
    var box50 = document.getElementById('tab5_inner');
    box50.classList.remove('active');
}
function tab2b(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.add('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');
    var box4 = document.getElementById('tab4');
    box4.classList.remove('active');
    var box5 = document.getElementById('tab5');
    box5.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.add('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
    var box40 = document.getElementById('tab4_inner');
    box40.classList.remove('active');
    var box50 = document.getElementById('tab5_inner');
    box50.classList.remove('active');
}
function tab3b(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.add('active');
    var box4 = document.getElementById('tab4');
    box4.classList.remove('active');
    var box5 = document.getElementById('tab5');
    box5.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.add('active');
    var box40 = document.getElementById('tab4_inner');
    box40.classList.remove('active');
    var box50 = document.getElementById('tab5_inner');
    box50.classList.remove('active');
}
function tab4b(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');
    var box4 = document.getElementById('tab4');
    box4.classList.add('active');
    var box5 = document.getElementById('tab5');
    box5.classList.remove('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
    var box40 = document.getElementById('tab4_inner');
    box40.classList.add('active');
    var box50 = document.getElementById('tab5_inner');
    box50.classList.remove('active');
}
function tab5b(){
    var box1 = document.getElementById('tab1');
    box1.classList.remove('active');
    var box2 = document.getElementById('tab2');
    box2.classList.remove('active');
    var box3 = document.getElementById('tab3');
    box3.classList.remove('active');
    var box4 = document.getElementById('tab4');
    box4.classList.remove('active');
    var box5 = document.getElementById('tab5');
    box5.classList.add('active');

    var box10 = document.getElementById('tab1_inner');
    box10.classList.remove('active');
    var box20 = document.getElementById('tab2_inner');
    box20.classList.remove('active');
    var box30 = document.getElementById('tab3_inner');
    box30.classList.remove('active');
    var box40 = document.getElementById('tab4_inner');
    box40.classList.remove('active');
    var box50 = document.getElementById('tab5_inner');
    box50.classList.add('active');
}