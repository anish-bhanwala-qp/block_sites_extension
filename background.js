// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

function updateFilters(urls) {
  chrome.webRequest.onBeforeRequest.addListener(
    function blockRequest(details) {
      return { cancel: true };
    },
    { urls: ["*://*.rediff.com/*"] },
    ["blocking"]
  );
}

updateFilters();
