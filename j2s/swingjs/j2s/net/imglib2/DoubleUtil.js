(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DoubleUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'nextDouble$D$Z', function (value, inc) {
var nextValue;
if (0.0 == value ) {
if (inc) {
nextValue=4.9E-324;
} else {
nextValue=-4.9E-324;
}} else if (-4.9E-324 == value  && inc ) {
nextValue=0.0;
} else if (4.9E-324 == value  && !inc ) {
nextValue=0.0;
} else {
var hexString;
var actualInc=((value > 0  && inc ) || (value < 0  && !inc ) );
hexString=_.DoubleUtil.nextDoubleHexString$S$Z(Double.toHexString$D(value), actualInc);
try {
nextValue=Double.parseDouble$S(hexString);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error parsing " + hexString);
nextValue=0.0;
} else {
throw e;
}
}
}return nextValue;
}, 1);

Clazz.newMeth(C$, 'nextDoubleHexString$S$Z', function (hex, inc) {
var negative=false;
if ("-" == hex.charAt$I(0)) {
negative=true;
hex=hex.substring$I(1);
}var leadingDigit=0;
try {
leadingDigit=Integer.parseInt$S(hex.substring$I$I(2, 3));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error parsing " + hex.substring$I$I(2, 3) + " " + e );
} else {
throw e;
}
}
var pIndex=hex.indexOf$I("p");
var hexDigits=hex.substring$I$I(4, pIndex);
hexDigits=_.DoubleUtil.padWithZeros$S(hexDigits);
var power=0;
try {
power=Integer.parseInt$S(hex.substring$I(pIndex + 1));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error parsing " + hex.substring$I(pIndex + 1) + " " + e );
} else {
throw e;
}
}
if (inc) {
if ("fffffffffffff".equals$O(hexDigits)) {
if (1 == leadingDigit) {
++power;
} else {
++leadingDigit;
}hexDigits="0000000000000";
} else {
var hexChars=hexDigits.toCharArray$();
var i=12;
var carry;
do {
(hexChars[i]=String.fromCharCode(hexChars[i].$c()+1));
if ((hexChars[i]).$c() == 103 ) {
hexChars[i]="0";
carry=true;
--i;
} else {
carry=false;
if ((hexChars[i]).$c() == 58 ) {
hexChars[i]="a";
}}} while (i >= 0 && carry );
hexDigits= String.instantialize(hexChars);
}} else {
if ("0000000000000".equals$O(hexDigits)) {
--power;
hexDigits="fffffffffffff";
} else {
var hexChars=hexDigits.toCharArray$();
var i=12;
var borrow;
do {
(hexChars[i]=String.fromCharCode(hexChars[i].$c()-1));
if ((hexChars[i]).$c() == 47 ) {
hexChars[i]="f";
borrow=true;
--i;
} else {
borrow=false;
if ((hexChars[i]).$c() == 96 ) {
hexChars[i]="9";
}}} while (i >= 0 && borrow );
hexDigits= String.instantialize(hexChars);
}}return (negative ? "-" : "") + "0x" + leadingDigit + "." + hexDigits + "p" + power ;
}, 1);

Clazz.newMeth(C$, 'padWithZeros$S', function (hexDigits) {
while (hexDigits.length$() < 13){
hexDigits += "0";
}
return hexDigits;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:15 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
