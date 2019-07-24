
(function ($) {

   'use strict';

   $.fn.cookieMessage = function (settings) {

      var $body = $('body');
      var $dialog = $(this);
      var $initCookie;
      var setCookie = function (name, value) {
            var date = new Date(),
				expires = 'expires=';
            date.setTime(date.getTime() + 31536000000);
            expires += date.toGMTString();
            document.cookie = name + '=' + value + '; ' + expires + '; path=/';
        }
        var getCookie = function (name) {
            var allCookies = document.cookie.split(';'),
				cookieCounter = 0,
				currentCookie = '';
            for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
                currentCookie = allCookies[cookieCounter];
                while (currentCookie.charAt(0) === ' ') {
                    currentCookie = currentCookie.substring(1, currentCookie.length);
                }
                if (currentCookie.indexOf(name + '=') === 0) {
                    return currentCookie.substring(name.length + 1, currentCookie.length);
                }
            }
            return false;
        }
        var showMessage = function () {
            $initCookie.show();
            $dialog.show();
        }
        var hideMessage = function () {
            $initCookie.hide();
            $dialog.hide();
            setCookie('consultBrian' + settings.cookieName, 'true');
        }

        $body.append('<div id="cookieConsent"></div>');

        $initCookie = $('#cookieConsent');

        if (getCookie('consultBrian' + settings.cookieName)) {
            hideMessage();
        } else {
            showMessage();
        }

        $(settings.showAgainSelector).on('click', showMessage);
        $body.on('click', '#cookieConsent, #cookieAccept', hideMessage);

    };

})(jQuery);

