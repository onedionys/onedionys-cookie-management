const assert = require('assert');
const CookieManagement = require('../src/cookie');

describe('CookieManagement', function() {
  it('should set and get cookie correctly', function() {
    CookieManagement.setCookie('testCookie', '123', 1);
    assert.strictEqual(CookieManagement.getCookie('testCookie'), '123');
  });

  it('should erase cookie correctly', function() {
    CookieManagement.eraseCookie('testCookie');
    assert.strictEqual(CookieManagement.getCookie('testCookie'), null);
  });
});
