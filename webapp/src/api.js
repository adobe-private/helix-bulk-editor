/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
export default {
  get base() {
    const { location: loc } = window;
    return `${loc.origin}${loc.pathname}`.replace(/\/*$/, '');
  },

  logoutRedirect: '',

  extract(root) {
    return `${this.base}/api/extract?root=${encodeURI(root)}`;
  },

  list(root) {
    return `${this.base}/api/list?root=${encodeURI(root)}`;
  },

  verify() {
    return `${this.base}/api/verify`;
  },

  me() {
    return `${this.base}/api/me`;
  },

  update() {
    return `${this.base}/api/update`;
  },
};
