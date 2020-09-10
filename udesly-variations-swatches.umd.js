!function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";
    function e(e, t) {
        var o = e.value;
        t.querySelectorAll("A").forEach((function(e) {
            o == e.getAttribute("value") ? e.classList.add("selected") : e.classList.remove("selected")
        }
        ))
    }
    document.querySelectorAll("[udesly-variations-swatches]").forEach((function(t) {
        var o, n, l, c;
        if (t.closest('[data-node-type="commerce-add-to-cart-option-list"]')) {
            var i = null === (o = t.closest('[role="group"]')) || void 0 === o ? void 0 : o.querySelector("SELECT")
              , s = null === (n = t.querySelector("A")) || void 0 === n ? void 0 : n.cloneNode();
            null === (l = t.querySelector("A")) || void 0 === l || l.remove(),
            null === (c = i) || void 0 === c || c.querySelectorAll("option").forEach((function(o, n) {
                var l, c;
                if (0 != n) {
                    var a = null === (l = s) || void 0 === l ? void 0 : l.cloneNode();
                    a.setAttribute("value", o.value),
                    a.textContent = o.text,
                    null === (c = a) || void 0 === c || c.addEventListener("click", (function(n) {
                        n.preventDefault(),
                        i.value = o.value,
                        e(i, t),
                        t.closest("form").dispatchEvent(new CustomEvent("udesly-variations-swatches")),
                        document.body.dispatchEvent(new CustomEvent("udesly-variations-swatches"))
                    }
                    )),
                    a && t.appendChild(a)
                }
            }
            )),
            document.body.addEventListener("udesly-variations-swatches", (function() {}
            )),
            e(i, t)
        }
        document.body.addEventListener("udesly-variations-swatches", (function() {
            var e;
            null === (e = t.closest("form")) || void 0 === e || e.querySelectorAll("select").forEach((function(e) {
                e.dispatchEvent(new Event("change",{
                    bubbles: !0
                }))
            }
            ))
        }
        ))
    }
    ))
}
));
