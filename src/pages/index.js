import React, { useEffect } from "react"
import { Link } from "gatsby"

import HomePage from './HomePage'
import SEO from "../components/seo"

// Create Import File
import "./index.scss"

const IndexPage = () => {
  // useEffect(() => {
  //   window.addEventListener('load', function () {
  //     console.log('All assets are loaded')
  //   })
  //   let jQuery;
  //   if (typeof window !== `undefined`) {
  //     let jQuery = require("jquery");

  //     jQuery(function () {
  //       initMobileNav();
  //     });
  //     // mobile menu init
  //     function initMobileNav() {

  //       jQuery('body').mobileNav({
  //         menuActiveClass: 'nav-active',
  //         menuOpener: '.nav-opener',
  //         hideOnClickOutside: true,
  //         menuDrop: '.nav-drop'
  //       });

  //       console.log('1')
  //     }


  //     /*
  //      * Simple Mobile Navigation
  //      */
  //     ; (function ($) {
  //       function MobileNav(options) {
  //         this.options = $.extend({
  //           container: null,
  //           hideOnClickOutside: false,
  //           menuActiveClass: 'nav-active',
  //           menuOpener: '.nav-opener',
  //           menuDrop: '.nav-drop',
  //           toggleEvent: 'click',
  //           outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
  //         }, options);
  //         this.initStructure();
  //         this.attachEvents();
  //       }
  //       MobileNav.prototype = {
  //         initStructure: function () {
  //           this.page = $('html');
  //           this.container = $(this.options.container);
  //           this.opener = this.container.find(this.options.menuOpener);
  //           this.drop = this.container.find(this.options.menuDrop);
  //           console.log(this.container.find(this.options.menuOpener))
  //           console.log(typeof (this.container))
  //         },
  //         attachEvents: function () {
  //           var self = this;
  //           console.log('3')
  //           if (activateResizeHandler) {
  //             activateResizeHandler();
  //             activateResizeHandler = null;
  //           }

  //           this.outsideClickHandler = function (e) {
  //             if (self.isOpened()) {
  //               var target = $(e.target);

  //               if (!target.closest(self.opener).length && !target.closest(self.drop).length) {
  //                 self.hide();
  //               }
  //             }
  //           };
  //           this.openerClickHandler = function (e) {
  //             console.log('e')
  //             e.preventDefault();
  //             self.toggle();
  //           };


  //           this.opener.click(this.options.toggleEvent, this.openerClickHandler);

  //         },
  //         isOpened: function () {
  //           return this.container.hasClass(this.options.menuActiveClass);
  //         },
  //         show: function () {

  //           this.container.addClass(this.options.menuActiveClass);
  //           if (this.options.hideOnClickOutside) {
  //             this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
  //           }
  //         },
  //         hide: function () {
  //           this.container.removeClass(this.options.menuActiveClass);
  //           if (this.options.hideOnClickOutside) {
  //             this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
  //           }
  //         },
  //         toggle: function () {
  //           if (this.isOpened()) {
  //             this.hide();
  //           } else {
  //             this.show();
  //           }
  //         },
  //         destroy: function () {
  //           console.log('6')
  //           this.container.removeClass(this.options.menuActiveClass);
  //           this.opener.off(this.options.toggleEvent, this.clickHandler);
  //           this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
  //         }
  //       };

  //       var activateResizeHandler = function () {
  //         var win = $(window),
  //           doc = $('html'),
  //           resizeClass = 'resize-active',
  //           flag, timer;
  //         var removeClassHandler = function () {
  //           flag = false;
  //           doc.removeClass(resizeClass);
  //         };
  //         var resizeHandler = function () {
  //           if (!flag) {
  //             flag = true;
  //             doc.addClass(resizeClass);
  //           }
  //           clearTimeout(timer);
  //           timer = setTimeout(removeClassHandler, 500);
  //         };
  //         win.click('resize orientationchange', resizeHandler);
  //       };

  //       $.fn.mobileNav = function (opt) {
  //         console.log(opt)
  //         var args = Array.prototype.slice.call(arguments);
  //         var method = args[0];

  //         return this.each(function () {
  //           var $container = jQuery(this);
  //           var instance = $container.data('MobileNav');

  //           if (typeof opt === 'object' || typeof opt === 'undefined') {
  //             $container.data('MobileNav', new MobileNav($.extend({
  //               container: this
  //             }, opt)));
  //           } else if (typeof method === 'string' && instance) {
  //             if (typeof instance[method] === 'function') {
  //               args.shift();
  //               instance[method].apply(instance, args);
  //             }
  //           }
  //         });
  //       };
  //     }(jQuery));
  //   }
  // }, [])
  return (
    <>
      <HomePage />
      <SEO title="Home" />
    </>
  )
}

export default IndexPage
