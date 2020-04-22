<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Ribans-base
 */

?>

	</div><!-- #content -->



<!-- 追加分のJSコード -->
<script>

/* スクロールでcss適用 */
jQuery(window).scroll(function () {
  var scrollTop = jQuery(window).scrollTop();
  if( scrollTop < 300){
    jQuery('.site-header').addClass("inactive");
  }else if( 300 < scrollTop){
    jQuery('.site-header').removeClass("inactive");
  }
});

/* スマホのメニュー */
function menu(){
    document.getElementById('nav-open-btn').classList.toggle('active');
	document.getElementById('primary-menu').classList.toggle('active');
}

</script>








	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ribans-base' ) ); ?>"><?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'ribans-base' ), 'WordPress' );
			?></a>
			<span class="sep"> | </span>
			<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'ribans-base' ), 'ribans-base', '<a href="http://underscores.me/">Underscores.me</a>' );
			?>
		</div><!-- .site-info -->

		<div class="footer-nav">
			<img class="footer-logo" src="https://yume-ko.jp/temtg/wp-content/uploads/2017/10/i_temtg1.png" alt="#TEMTG">
			<div class="footer-sns-box">
				<a class="footer-sns-twi" href="https://twitter.com/_yume_ko_" target="_blank">
					<img src="https://yume-ko.jp/temtg/wp-content/uploads/2017/10/sns_twitter.png" alt="Twitter"></a>
				<a class="footer-sns-fb" href="https://www.facebook.com/yumeko.ed.jp/" target="_blank">
					<img src="https://yume-ko.jp/temtg/wp-content/uploads/2017/10/sns_fb.png" alt="facebook"></a>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
