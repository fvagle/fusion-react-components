/*! For license information please see vendors~main.8a66f1bd.iframe.bundle.js.LICENSE.txt */
  :host {
    display: inline-flex;
    user-select: none;
  }
  #popper {
    display: none;
  }
  #popper.show,
  :host(:hover) #popper.hover {
    display: flex;
  }
  #content {
    display: inline-flex;
  }
`,lib_popper=__webpack_require__(1167);const instances=new WeakMap,popperjs=Object(lit_html.c)((popper,options)=>part=>Object(tslib_es6.a)(void 0,void 0,void 0,(function*(){if(!(part instanceof lit_html.a)||part instanceof lit_html.b||"popperjs"!==part.committer.name||part.committer.parts.length>1)throw new Error("The `popperjs` directive must be used in the popperjs attribute and must be the only part in the attribute.");const reference=part.committer.element,target=yield Promise.resolve(popper),_a=options||{},{enabled:enabled}=_a,popperArgs=Object(tslib_es6.c)(_a,["enabled"]);if(enabled){if(!instances.has(reference)){const instance=Object(lib_popper.a)(reference,target,popperArgs);instance.resizeObserver=new ResizeObserver(()=>instance.update()),instance.resizeObserver.observe(reference),instance.resizeObserver.observe(target),instances.set(reference,instance)}const instance=instances.get(reference);instance&&popperArgs&&instance.state.options!==popperArgs&&instance.setOptions(popperArgs)}else{const instance=instances.get(reference);null==instance||instance.destroy(),null==instance||instance.resizeObserver.disconnect(),instances.delete(reference)}})));class element_PopoverElement extends lit_element.a{constructor(){super(...arguments),this.placement="auto",this.triggers=[],this._modifiers=[]}get options(){const{placement:placement,disabled:disabled,modifiers:modifiers}=this;return{placement:placement,enabled:!disabled&&(this.triggers.includes("hover")||this.show),modifiers:modifiers}}get modifiers(){var _a;return[{name:"flip",enabled:!!this.flip||!!(null===(_a=this.placement)||void 0===_a?void 0:_a.match(/auto/))},{name:"offset",options:{offset:this.offset}},...this._modifiers]}set modifiers(modifiers){this._modifiers=modifiers,this.requestUpdate()}render(){const popperClasses=this.disabled?"disabled":classMap({show:!!this.show,hover:this.triggers.includes("hover")});return lit_element.d`
      <span id="content" popperjs=${popperjs(this.popper,this.options)} @click=${this.handleClick}>
        <slot></slot>
      </span>
      <span id="popper" class=${popperClasses}>
        <slot name="popover"></slot>
      </span>
    `}handleClick(){this.triggers.includes("click")&&(this.show=!this.show)}}element_PopoverElement.styles=[element_css],Object(tslib_es6.b)([Object(lit_element.e)({reflect:!0})],element_PopoverElement.prototype,"placement",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean})],element_PopoverElement.prototype,"disabled",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean})],element_PopoverElement.prototype,"show",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Boolean})],element_PopoverElement.prototype,"flip",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Array})],element_PopoverElement.prototype,"offset",void 0),Object(tslib_es6.b)([Object(lit_element.e)({type:Array})],element_PopoverElement.prototype,"triggers",void 0),Object(tslib_es6.b)([Object(lit_element.f)("#popper")],element_PopoverElement.prototype,"popper",void 0),Object(tslib_es6.b)([Object(lit_element.c)({passive:!0})],element_PopoverElement.prototype,"handleClick",null);let lib_=class _ extends element_PopoverElement{};lib_=Object(tslib_es6.b)([Object(lib.a)("fwc-popover")],lib_)},function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(57),lib=__webpack_require__(269),lit_element=__webpack_require__(49),icons_umd=__webpack_require__(113);Object.keys(icons_umd);var IconType;!function(IconType){IconType.EDS="eds"}(IconType||(IconType={}));var create_icon=(name,type=IconType.EDS)=>{switch(type){case IconType.EDS:return(({height:height,width:width,svgPathData:svgPathData})=>lit_element.g`
  <svg height="${height}" width="${width}"  viewBox="0 0 ${width} ${height}">
    <path fill-rule="evenodd" clip-rule="evenodd" d="${svgPathData}"></path>
  </svg>
`)(icons_umd[name])}};const style=lit_element.b`
  :host {
    display: inline-flex;
    height: 1.5em;
    width: 1.5em;
  }
  svg {
    height: auto;
    width: auto;
    fill: currentColor;
  }
//# sourceMappingURL=vendors~main.8a66f1bd.iframe.bundle.js.map