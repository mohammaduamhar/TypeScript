"use strict";
function taxCal(amount, year) {
    if (year < 2023)
        return amount * 0.1;
    return amount * 0.3;
}
taxCal(20000, 2024);
//# sourceMappingURL=index.js.map