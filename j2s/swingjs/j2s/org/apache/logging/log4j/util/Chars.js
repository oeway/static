(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Chars");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['C',['CR','DQUOTE','EQ','LF','NUL','QUOTE','SPACE','TAB']]]

Clazz.newMeth(C$, 'getUpperCaseHex$I', function (digit) {
if (digit < 0 || digit >= 16 ) {
return "\u0000";
}return digit < 10 ? C$.getNumericalDigit$I(digit) : C$.getUpperCaseAlphaDigit$I(digit);
}, 1);

Clazz.newMeth(C$, 'getLowerCaseHex$I', function (digit) {
if (digit < 0 || digit >= 16 ) {
return "\u0000";
}return digit < 10 ? C$.getNumericalDigit$I(digit) : C$.getLowerCaseAlphaDigit$I(digit);
}, 1);

Clazz.newMeth(C$, 'getNumericalDigit$I', function (digit) {
return String.fromCharCode((48 + digit));
}, 1);

Clazz.newMeth(C$, 'getUpperCaseAlphaDigit$I', function (digit) {
return String.fromCharCode((65 + digit - 10));
}, 1);

Clazz.newMeth(C$, 'getLowerCaseAlphaDigit$I', function (digit) {
return String.fromCharCode((97 + digit - 10));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
