<template>
  <a :href="href" class="navds-panel navds-link-panel sc-kOHTFB iEkcSS navds-panel--border" style="border: none;">
    <div class="navds-link-panel__content">
      <div class="navds-link-panel__title navds-heading navds-heading--medium navds-heading--small">
        <slot name="title">Bytte av hjelpemiddel</slot>
      </div>
      <div class="navds-link-panel__description sc-dtInlm ifkBfD navds-body-long navds-body-long--medium">
        <div aria-hidden="false" class="sc-aXZVg bcwRRv">
          <span aria-label="Status Mottatt av Nav" class="navds-tag navds-tag--info navds-tag--medium navds-body-short navds-body-short--medium">
            <slot name="status">Mottatt av Nav</slot>
          </span>
        </div>
        <div>
          <p class="sc-fqkvVR kqrqSr navds-body-short navds-body-short--medium" style="margin-top: 10px;">
            <slot name="updated">Oppdatert 8. mars 2023</slot>
          </p>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img" class="navds-link-panel__chevron" aria-hidden="true">
      <path fill="currentColor" fill-rule="evenodd" d="M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path>
    </svg>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
   /*! CSS Used from: https://cdn.nav.no/personbruker/decorator-next/public/assets/main-BxsczVja.css */
*,:after,:before{box-sizing:inherit;}
/*! CSS Used from: https://hjelpemidler.ekstern.dev.nav.no/hjelpemidler/dinehjelpemidler/assets/index.7390bdba.css */
a{background-color:transparent;color:var(--a-text-action);}
@media print{
*,*:before,*:after{background:#fff!important;color:#000!important;box-shadow:none!important;text-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
p{orphans:3;widows:3;}
}
*,*:before,*:after{box-sizing:inherit;}
@media (prefers-reduced-motion: reduce){
*:not(.navds-loader *):not(.navds-loader):not(.navds-progress-bar *):not(.navds-progress-bar),:before,:after{animation-delay:-1ms!important;animation-duration:1ms!important;animation-iteration-count:1!important;background-attachment:initial!important;scroll-behavior:auto!important;transition-duration:0s!important;transition-delay:0s!important;}
}
.navds-heading{font-weight:var(--a-font-weight-bold);margin:0;}
.navds-heading--medium{font-size:var(--a-font-size-heading-medium);letter-spacing:-.002em;line-height:var(--a-font-line-height-heading-medium);}
.navds-heading--small{font-size:var(--a-font-size-heading-small);letter-spacing:-.001em;line-height:var(--a-font-line-height-heading-small);}
.navds-body-long{font-size:var(--a-font-size-large);font-weight:var(--a-font-weight-regular);letter-spacing:0;line-height:var(--a-font-line-height-xlarge);margin:0;}
.navds-body-short{font-size:var(--a-font-size-large);font-weight:var(--a-font-weight-regular);letter-spacing:0;line-height:var(--a-font-line-height-large);margin:0;}
.navds-tag{--__ac-tag-icon-size:1.5rem;--__ac-tag-icon-margin:-2px;border:1px solid;border-radius:var(--a-border-radius-small);display:inline-flex;align-items:center;justify-content:center;padding:var(--a-spacing-05) var(--a-spacing-2);min-height:2rem;line-height:1;}
.navds-tag--info{border-color:var(--ac-tag-info-border, var(--a-border-info));background-color:var(--ac-tag-info-bg, var(--a-surface-info-subtle));color:var(--ac-tag-info-text, var(--a-text-default));}
@media (forced-colors: active){
.navds-tag{forced-color-adjust:none;}
}
.navds-panel{background-color:var(--ac-panel-bg, var(--a-surface-default));padding:var(--a-spacing-4);border-radius:var(--a-border-radius-small);border:1px solid transparent;}
.navds-panel--border{border-color:var(--ac-panel-border, var(--a-border-default));}
.navds-link-panel{text-decoration:none;color:var(--ac-link-panel-text, var(--a-text-default));display:flex;align-items:center;justify-content:space-between;gap:var(--a-spacing-4);}
.navds-link-panel:hover .navds-link-panel__title{text-decoration:underline;color:var(--ac-link-panel-hover-text, var(--a-text-action-hover));}
.navds-link-panel:hover{box-shadow:var(--a-shadow-small);border-color:var(--ac-link-panel-hover-border, var(--a-border-action-hover));}
.navds-link-panel__chevron{flex-shrink:0;font-size:1.5rem;transition:transform .2s;}
.navds-link-panel:hover>.navds-link-panel__chevron{transform:translate(4px);}
.navds-link-panel__description{margin-top:var(--a-spacing-1);}
/*! CSS Used from: Embedded */
.bcwRRv{margin-bottom:var(--a-spacing-3);text-align:unset;}
.iEkcSS .navds-link-panel__content{flex:1 1 0%;}
.ifkBfD{display:flex;flex-flow:column;}
.navds-link-panel__title{
    font-weight: 500;
    margin-bottom: 5px;
}
.navds-body-short{

    font-size: 1rem;
}
</style>