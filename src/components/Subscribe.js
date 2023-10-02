export default function Subscribe(props) {
  const embed = `<div id="mc_embed_shell">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
      #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;}
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
  <form action=${props.url} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
      <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
      <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none;"></div>
          <div class="response" id="mce-success-response" style="display: none;"></div>
      </div>
  <div style="position: absolute; left: -5000px;" aria-hidden="true">
      /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
      <input type="text" name="b_79fd531a6ed445a0d35bc2d7b_03c9340ab4" tabindex="-1" value="">
  </div>
      <div class="optionalParent">
          <div class="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
          </div>
      </div>
  </div>
</form>
</div>
</div>
`;
  return <div dangerouslySetInnerHTML={{ __html: embed }}></div>;
}
