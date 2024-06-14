"use strict";
function KgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
KgToLbs(10);
KgToLbs('10Kg');
//# sourceMappingURL=index.js.map