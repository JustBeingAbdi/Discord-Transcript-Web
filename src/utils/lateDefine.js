/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

function lateDefine (str, element, opts) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => customElements.define(str, element, opts))
  } else {
    customElements.define(str, element, opts)
  }
}

export default lateDefine
