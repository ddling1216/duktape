/*---
{
    "knownissue": "rounding corner case, 1e+23 string coerces to 1.0000000000000001e+23"
}
---*/

/*===
1e+23
===*/

function miscTest() {
    // Burger, Dybvig: "Printing Floating-Point Numbers Quickly
    // and Accurately", section 3.1.  IEEE round-to-even allows
    // this to be printed as "1e+23" instead of "9.999...".
    print(1e23);
}

try {
    miscTest();
} catch (e) {
    print(e);
}
