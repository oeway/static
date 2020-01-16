(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.Chars']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringBuilders");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'appendDqValue$StringBuilder$O', function (sb, value) {
return sb.append$C("\"").append$O(value).append$C("\"");
}, 1);

Clazz.newMeth(C$, 'appendKeyDqValue$StringBuilder$java_util_Map_Entry', function (sb, entry) {
return C$.appendKeyDqValue$StringBuilder$S$O(sb, entry.getKey$(), entry.getValue$());
}, 1);

Clazz.newMeth(C$, 'appendKeyDqValue$StringBuilder$S$O', function (sb, key, value) {
return sb.append$S(key).append$C("=").append$C("\"").append$O(value).append$C("\"");
}, 1);

Clazz.newMeth(C$, 'appendValue$StringBuilder$O', function (stringBuilder, obj) {
if (!C$.appendSpecificTypes$StringBuilder$O(stringBuilder, obj)) {
stringBuilder.append$O(obj);
}}, 1);

Clazz.newMeth(C$, 'appendSpecificTypes$StringBuilder$O', function (stringBuilder, obj) {
if (obj == null  || Clazz.instanceOf(obj, "java.lang.String") ) {
stringBuilder.append$S(obj);
} else if (Clazz.instanceOf(obj, "org.apache.logging.log4j.util.StringBuilderFormattable")) {
(obj).formatTo$(stringBuilder);
} else if (Clazz.instanceOf(obj, "java.lang.CharSequence")) {
stringBuilder.append$CharSequence(obj);
} else if (Clazz.instanceOf(obj, "java.lang.Integer")) {
stringBuilder.append$I((obj).intValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Long")) {
stringBuilder.append$J((obj).longValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Double")) {
stringBuilder.append$D((obj).doubleValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Boolean")) {
stringBuilder.append$Z((obj).booleanValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Character")) {
stringBuilder.append$C((obj).charValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Short")) {
stringBuilder.append$I((obj).shortValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Float")) {
stringBuilder.append$F((obj).floatValue$());
} else if (Clazz.instanceOf(obj, "java.lang.Byte")) {
stringBuilder.append$I((obj).byteValue$());
} else {
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'equals$CharSequence$I$I$CharSequence$I$I', function (left, leftOffset, leftLength, right, rightOffset, rightLength) {
if (leftLength == rightLength) {
for (var i=0; i < rightLength; i++) {
if (left.charAt$I(i + leftOffset) != right.charAt$I(i + rightOffset)) {
return false;
}}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'equalsIgnoreCase$CharSequence$I$I$CharSequence$I$I', function (left, leftOffset, leftLength, right, rightOffset, rightLength) {
if (leftLength == rightLength) {
for (var i=0; i < rightLength; i++) {
if (Character.toLowerCase$C(left.charAt$I(i + leftOffset)) != Character.toLowerCase$C(right.charAt$I(i + rightOffset))) {
return false;
}}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'trimToMaxSize$StringBuilder$I', function (stringBuilder, maxSize) {
if (stringBuilder != null  && stringBuilder.capacity$() > maxSize ) {
stringBuilder.setLength$I(maxSize);
stringBuilder.trimToSize$();
}}, 1);

Clazz.newMeth(C$, 'escapeJson$StringBuilder$I', function (toAppendTo, start) {
var escapeCount=0;
for (var i=start; i < toAppendTo.length$(); i++) {
var c=toAppendTo.charAt$I(i);
switch (c.$c()) {
case 8:
case 9:
case 12:
case 10:
case 13:
case 34:
case 92:
escapeCount++;
break;
default:
if (Character.isISOControl$C(c)) {
escapeCount+=5;
}}
}
var lastChar=toAppendTo.length$() - 1;
toAppendTo.setLength$I(toAppendTo.length$() + escapeCount);
var lastPos=toAppendTo.length$() - 1;
for (var i=lastChar; lastPos > i; i--) {
var c=toAppendTo.charAt$I(i);
switch (c.$c()) {
case 8:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, "b");
break;
case 9:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, "t");
break;
case 12:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, "f");
break;
case 10:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, "n");
break;
case 13:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, "r");
break;
case 34:
case 92:
lastPos=C$.escapeAndDecrement$StringBuilder$I$C(toAppendTo, lastPos, c);
break;
default:
if (Character.isISOControl$C(c)) {
toAppendTo.setCharAt$I$C(lastPos--, $I$(1).getUpperCaseHex$I(c.$c() & 15));
toAppendTo.setCharAt$I$C(lastPos--, $I$(1).getUpperCaseHex$I((c.$c() & 240) >> 4));
toAppendTo.setCharAt$I$C(lastPos--, "0");
toAppendTo.setCharAt$I$C(lastPos--, "0");
toAppendTo.setCharAt$I$C(lastPos--, "u");
toAppendTo.setCharAt$I$C(lastPos--, "\\");
} else {
toAppendTo.setCharAt$I$C(lastPos, c);
lastPos--;
}}
}
}, 1);

Clazz.newMeth(C$, 'escapeAndDecrement$StringBuilder$I$C', function (toAppendTo, lastPos, c) {
toAppendTo.setCharAt$I$C(lastPos--, c);
toAppendTo.setCharAt$I$C(lastPos--, "\\");
return lastPos;
}, 1);

Clazz.newMeth(C$, 'escapeXml$StringBuilder$I', function (toAppendTo, start) {
var escapeCount=0;
for (var i=start; i < toAppendTo.length$(); i++) {
var c=toAppendTo.charAt$I(i);
switch (c.$c()) {
case 38:
escapeCount+=4;
break;
case 60:
case 62:
escapeCount+=3;
break;
case 34:
case 39:
escapeCount+=5;
}
}
var lastChar=toAppendTo.length$() - 1;
toAppendTo.setLength$I(toAppendTo.length$() + escapeCount);
var lastPos=toAppendTo.length$() - 1;
for (var i=lastChar; lastPos > i; i--) {
var c=toAppendTo.charAt$I(i);
switch (c.$c()) {
case 38:
toAppendTo.setCharAt$I$C(lastPos--, ";");
toAppendTo.setCharAt$I$C(lastPos--, "p");
toAppendTo.setCharAt$I$C(lastPos--, "m");
toAppendTo.setCharAt$I$C(lastPos--, "a");
toAppendTo.setCharAt$I$C(lastPos--, "&");
break;
case 60:
toAppendTo.setCharAt$I$C(lastPos--, ";");
toAppendTo.setCharAt$I$C(lastPos--, "t");
toAppendTo.setCharAt$I$C(lastPos--, "l");
toAppendTo.setCharAt$I$C(lastPos--, "&");
break;
case 62:
toAppendTo.setCharAt$I$C(lastPos--, ";");
toAppendTo.setCharAt$I$C(lastPos--, "t");
toAppendTo.setCharAt$I$C(lastPos--, "g");
toAppendTo.setCharAt$I$C(lastPos--, "&");
break;
case 34:
toAppendTo.setCharAt$I$C(lastPos--, ";");
toAppendTo.setCharAt$I$C(lastPos--, "t");
toAppendTo.setCharAt$I$C(lastPos--, "o");
toAppendTo.setCharAt$I$C(lastPos--, "u");
toAppendTo.setCharAt$I$C(lastPos--, "q");
toAppendTo.setCharAt$I$C(lastPos--, "&");
break;
case 39:
toAppendTo.setCharAt$I$C(lastPos--, ";");
toAppendTo.setCharAt$I$C(lastPos--, "s");
toAppendTo.setCharAt$I$C(lastPos--, "o");
toAppendTo.setCharAt$I$C(lastPos--, "p");
toAppendTo.setCharAt$I$C(lastPos--, "a");
toAppendTo.setCharAt$I$C(lastPos--, "&");
break;
default:
toAppendTo.setCharAt$I$C(lastPos--, c);
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
