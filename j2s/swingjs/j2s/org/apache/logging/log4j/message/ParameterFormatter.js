(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'ThreadLocal','StringBuilder','Boolean','org.apache.logging.log4j.util.StringBuilders','java.text.SimpleDateFormat','java.util.Arrays','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParameterFormatter");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.threadLocalSimpleDateFormat=Clazz.new_(1,{T:"java.text.SimpleDateFormat"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['C',['DELIM_START','DELIM_STOP','ESCAPE_CHAR'],'S',['RECURSION_PREFIX','RECURSION_SUFFIX','ERROR_PREFIX','ERROR_SEPARATOR','ERROR_MSG_SEPARATOR','ERROR_SUFFIX'],'O',['threadLocalSimpleDateFormat','ThreadLocal']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'countArgumentPlaceholders$S', function (messagePattern) {
if (messagePattern == null ) {
return 0;
}var length=messagePattern.length$();
var result=0;
var isEscaped=false;
for (var i=0; i < length - 1; i++) {
var curChar=messagePattern.charAt$I(i);
if (curChar == "\\") {
isEscaped=!isEscaped;
} else if (curChar == "{") {
if (!isEscaped && messagePattern.charAt$I(i + 1) == "}" ) {
result++;
i++;
}isEscaped=false;
} else {
isEscaped=false;
}}
return result;
}, 1);

Clazz.newMeth(C$, 'countArgumentPlaceholders2$S$IA', function (messagePattern, indices) {
if (messagePattern == null ) {
return 0;
}var length=messagePattern.length$();
var result=0;
var isEscaped=false;
for (var i=0; i < length - 1; i++) {
var curChar=messagePattern.charAt$I(i);
if (curChar == "\\") {
isEscaped=!isEscaped;
indices[0]=-1;
result++;
} else if (curChar == "{") {
if (!isEscaped && messagePattern.charAt$I(i + 1) == "}" ) {
indices[result]=i;
result++;
i++;
}isEscaped=false;
} else {
isEscaped=false;
}}
return result;
}, 1);

Clazz.newMeth(C$, 'countArgumentPlaceholders3$CA$I$IA', function (messagePattern, length, indices) {
var result=0;
var isEscaped=false;
for (var i=0; i < length - 1; i++) {
var curChar=messagePattern[i];
if (curChar == "\\") {
isEscaped=!isEscaped;
} else if (curChar == "{") {
if (!isEscaped && messagePattern[i + 1] == "}" ) {
indices[result]=i;
result++;
i++;
}isEscaped=false;
} else {
isEscaped=false;
}}
return result;
}, 1);

Clazz.newMeth(C$, 'format$S$OA', function (messagePattern, $arguments) {
var result=Clazz.new_($I$(2,1));
var argCount=$arguments == null  ? 0 : $arguments.length;
C$.formatMessage$StringBuilder$S$OA$I(result, messagePattern, $arguments, argCount);
return result.toString();
}, 1);

Clazz.newMeth(C$, 'formatMessage2$StringBuilder$S$OA$I$IA', function (buffer, messagePattern, $arguments, argCount, indices) {
if (messagePattern == null  || $arguments == null   || argCount == 0 ) {
buffer.append$S(messagePattern);
return;
}var previous=0;
for (var i=0; i < argCount; i++) {
buffer.append$CharSequence$I$I(messagePattern, previous, indices[i]);
previous=indices[i] + 2;
C$.recursiveDeepToString$O$StringBuilder$java_util_Set($arguments[i], buffer, null);
}
buffer.append$CharSequence$I$I(messagePattern, previous, messagePattern.length$());
}, 1);

Clazz.newMeth(C$, 'formatMessage3$StringBuilder$CA$I$OA$I$IA', function (buffer, messagePattern, patternLength, $arguments, argCount, indices) {
if (messagePattern == null ) {
return;
}if ($arguments == null  || argCount == 0 ) {
buffer.append$CA(messagePattern);
return;
}var previous=0;
for (var i=0; i < argCount; i++) {
buffer.append$CA$I$I(messagePattern, previous, indices[i]);
previous=indices[i] + 2;
C$.recursiveDeepToString$O$StringBuilder$java_util_Set($arguments[i], buffer, null);
}
buffer.append$CA$I$I(messagePattern, previous, patternLength);
}, 1);

Clazz.newMeth(C$, 'formatMessage$StringBuilder$S$OA$I', function (buffer, messagePattern, $arguments, argCount) {
if (messagePattern == null  || $arguments == null   || argCount == 0 ) {
buffer.append$S(messagePattern);
return;
}var escapeCounter=0;
var currentArgument=0;
var i=0;
var len=messagePattern.length$();
for (; i < len - 1; i++) {
var curChar=messagePattern.charAt$I(i);
if (curChar == "\\") {
escapeCounter++;
} else {
if (C$.isDelimPair$C$S$I(curChar, messagePattern, i)) {
i++;
C$.writeEscapedEscapeChars$I$StringBuilder(escapeCounter, buffer);
if (C$.isOdd$I(escapeCounter)) {
C$.writeDelimPair$StringBuilder(buffer);
} else {
C$.writeArgOrDelimPair$OA$I$I$StringBuilder($arguments, argCount, currentArgument, buffer);
currentArgument++;
}} else {
C$.handleLiteralChar$StringBuilder$I$C(buffer, escapeCounter, curChar);
}escapeCounter=0;
}}
C$.handleRemainingCharIfAny$S$I$StringBuilder$I$I(messagePattern, len, buffer, escapeCounter, i);
}, 1);

Clazz.newMeth(C$, 'isDelimPair$C$S$I', function (curChar, messagePattern, curCharIndex) {
return curChar == "{" && messagePattern.charAt$I(curCharIndex + 1) == "}" ;
}, 1);

Clazz.newMeth(C$, 'handleRemainingCharIfAny$S$I$StringBuilder$I$I', function (messagePattern, len, buffer, escapeCounter, i) {
if (i == len - 1) {
var curChar=messagePattern.charAt$I(i);
C$.handleLastChar$StringBuilder$I$C(buffer, escapeCounter, curChar);
}}, 1);

Clazz.newMeth(C$, 'handleLastChar$StringBuilder$I$C', function (buffer, escapeCounter, curChar) {
if (curChar == "\\") {
C$.writeUnescapedEscapeChars$I$StringBuilder(escapeCounter + 1, buffer);
} else {
C$.handleLiteralChar$StringBuilder$I$C(buffer, escapeCounter, curChar);
}}, 1);

Clazz.newMeth(C$, 'handleLiteralChar$StringBuilder$I$C', function (buffer, escapeCounter, curChar) {
C$.writeUnescapedEscapeChars$I$StringBuilder(escapeCounter, buffer);
buffer.append$C(curChar);
}, 1);

Clazz.newMeth(C$, 'writeDelimPair$StringBuilder', function (buffer) {
buffer.append$C("{");
buffer.append$C("}");
}, 1);

Clazz.newMeth(C$, 'isOdd$I', function (number) {
return (number & 1) == 1;
}, 1);

Clazz.newMeth(C$, 'writeEscapedEscapeChars$I$StringBuilder', function (escapeCounter, buffer) {
var escapedEscapes=escapeCounter >> 1;
C$.writeUnescapedEscapeChars$I$StringBuilder(escapedEscapes, buffer);
}, 1);

Clazz.newMeth(C$, 'writeUnescapedEscapeChars$I$StringBuilder', function (escapeCounter, buffer) {
while (escapeCounter > 0){
buffer.append$C("\\");
escapeCounter--;
}
}, 1);

Clazz.newMeth(C$, 'writeArgOrDelimPair$OA$I$I$StringBuilder', function ($arguments, argCount, currentArgument, buffer) {
if (currentArgument < argCount) {
C$.recursiveDeepToString$O$StringBuilder$java_util_Set($arguments[currentArgument], buffer, null);
} else {
C$.writeDelimPair$StringBuilder(buffer);
}}, 1);

Clazz.newMeth(C$, 'deepToString$O', function (o) {
if (o == null ) {
return null;
}if (Clazz.instanceOf(o, "java.lang.String")) {
return o;
}if (Clazz.instanceOf(o, "java.lang.Integer")) {
return Integer.toString$I((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Long")) {
return Long.toString$J((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Double")) {
return Double.toString$D((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Boolean")) {
return $I$(3).toString$Z((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Character")) {
return Character.toString$C((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Short")) {
return Short.toString$H((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Float")) {
return Float.toString$F((o).valueOf());
}if (Clazz.instanceOf(o, "java.lang.Byte")) {
return Byte.toString$B((o).valueOf());
}var str=Clazz.new_($I$(2,1));
C$.recursiveDeepToString$O$StringBuilder$java_util_Set(o, str, null);
return str.toString();
}, 1);

Clazz.newMeth(C$, 'recursiveDeepToString$O$StringBuilder$java_util_Set', function (o, str, dejaVu) {
if (C$.appendSpecialTypes$O$StringBuilder(o, str)) {
return;
}if (C$.isMaybeRecursive$O(o)) {
C$.appendPotentiallyRecursiveValue$O$StringBuilder$java_util_Set(o, str, dejaVu);
} else {
C$.tryObjectToString$O$StringBuilder(o, str);
}}, 1);

Clazz.newMeth(C$, 'appendSpecialTypes$O$StringBuilder', function (o, str) {
return $I$(4).appendSpecificTypes$StringBuilder$O(str, o) || C$.appendDate$O$StringBuilder(o, str) ;
}, 1);

Clazz.newMeth(C$, 'appendDate$O$StringBuilder', function (o, str) {
if (!(Clazz.instanceOf(o, "java.util.Date"))) {
return false;
}var date=o;
var format=C$.getSimpleDateFormat$();
str.append$S(format.format$java_util_Date(date));
return true;
}, 1);

Clazz.newMeth(C$, 'getSimpleDateFormat$', function () {
var result=C$.threadLocalSimpleDateFormat.get$();
if (result == null ) {
result=Clazz.new_($I$(5,1).c$$S,["yyyy-MM-dd\'T\'HH:mm:ss.SSSZ"]);
C$.threadLocalSimpleDateFormat.set$TT(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'isMaybeRecursive$O', function (o) {
return o.getClass$().isArray$() || Clazz.instanceOf(o, "java.util.Map") || Clazz.instanceOf(o, "java.util.Collection")  ;
}, 1);

Clazz.newMeth(C$, 'appendPotentiallyRecursiveValue$O$StringBuilder$java_util_Set', function (o, str, dejaVu) {
var oClass=o.getClass$();
if (oClass.isArray$()) {
C$.appendArray$O$StringBuilder$java_util_Set$Class(o, str, dejaVu, oClass);
} else if (Clazz.instanceOf(o, "java.util.Map")) {
C$.appendMap$O$StringBuilder$java_util_Set(o, str, dejaVu);
} else if (Clazz.instanceOf(o, "java.util.Collection")) {
C$.appendCollection$O$StringBuilder$java_util_Set(o, str, dejaVu);
}}, 1);

Clazz.newMeth(C$, 'appendArray$O$StringBuilder$java_util_Set$Class', function (o, str, dejaVu, oClass) {
if (oClass === Clazz.array(Byte.TYPE, -1) ) {
str.append$S($I$(6).toString$BA(o));
} else if (oClass === Clazz.array(Short.TYPE, -1) ) {
str.append$S($I$(6).toString$HA(o));
} else if (oClass === Clazz.array(Integer.TYPE, -1) ) {
str.append$S($I$(6).toString$IA(o));
} else if (oClass === Clazz.array(Long.TYPE, -1) ) {
str.append$S($I$(6).toString$JA(o));
} else if (oClass === Clazz.array(Float.TYPE, -1) ) {
str.append$S($I$(6).toString$FA(o));
} else if (oClass === Clazz.array(Double.TYPE, -1) ) {
str.append$S($I$(6).toString$DA(o));
} else if (oClass === Clazz.array(Boolean.TYPE, -1) ) {
str.append$S($I$(6).toString$ZA(o));
} else if (oClass === Clazz.array(Character.TYPE, -1) ) {
str.append$S($I$(6).toString$CA(o));
} else {
if (dejaVu == null ) {
dejaVu=Clazz.new_(1,{E:"String"},$I$(7,1));
}var id=C$.identityToString$O(o);
if (dejaVu.contains$O(id)) {
str.append$S("[...").append$S(id).append$S("...]");
} else {
dejaVu.add$TE(id);
var oArray=o;
str.append$C("[");
var first=true;
for (var current, $current = 0, $$current = oArray; $current<$$current.length&&((current=($$current[$current])),1);$current++) {
if (first) {
first=false;
} else {
str.append$S(", ");
}C$.recursiveDeepToString$O$StringBuilder$java_util_Set(current, str, Clazz.new_(1,{E:"String"},$I$(7,1).c$$java_util_Collection,[dejaVu]));
}
str.append$C("]");
}}}, 1);

Clazz.newMeth(C$, 'appendMap$O$StringBuilder$java_util_Set', function (o, str, dejaVu) {
if (dejaVu == null ) {
dejaVu=Clazz.new_(1,{E:"String"},$I$(7,1));
}var id=C$.identityToString$O(o);
if (dejaVu.contains$O(id)) {
str.append$S("[...").append$S(id).append$S("...]");
} else {
dejaVu.add$TE(id);
var oMap=o;
str.append$C("{");
var isFirst=true;
for (var o1, $o1 = oMap.entrySet$().iterator$(); $o1.hasNext$()&&((o1=($o1.next$())),1);) {
var current=o1;
if (isFirst) {
isFirst=false;
} else {
str.append$S(", ");
}var key=current.getKey$();
var value=current.getValue$();
C$.recursiveDeepToString$O$StringBuilder$java_util_Set(key, str, Clazz.new_(1,{E:"String"},$I$(7,1).c$$java_util_Collection,[dejaVu]));
str.append$C("=");
C$.recursiveDeepToString$O$StringBuilder$java_util_Set(value, str, Clazz.new_(1,{E:"String"},$I$(7,1).c$$java_util_Collection,[dejaVu]));
}
str.append$C("}");
}}, 1);

Clazz.newMeth(C$, 'appendCollection$O$StringBuilder$java_util_Set', function (o, str, dejaVu) {
if (dejaVu == null ) {
dejaVu=Clazz.new_(1,{E:"String"},$I$(7,1));
}var id=C$.identityToString$O(o);
if (dejaVu.contains$O(id)) {
str.append$S("[...").append$S(id).append$S("...]");
} else {
dejaVu.add$TE(id);
var oCol=o;
str.append$C("[");
var isFirst=true;
for (var anOCol, $anOCol = oCol.iterator$(); $anOCol.hasNext$()&&((anOCol=($anOCol.next$())),1);) {
if (isFirst) {
isFirst=false;
} else {
str.append$S(", ");
}C$.recursiveDeepToString$O$StringBuilder$java_util_Set(anOCol, str, Clazz.new_(1,{E:"String"},$I$(7,1).c$$java_util_Collection,[dejaVu]));
}
str.append$C("]");
}}, 1);

Clazz.newMeth(C$, 'tryObjectToString$O$StringBuilder', function (o, str) {
try {
str.append$S(o.toString());
} catch (t) {
C$.handleErrorInObjectToString$O$StringBuilder$Throwable(o, str, t);
}
}, 1);

Clazz.newMeth(C$, 'handleErrorInObjectToString$O$StringBuilder$Throwable', function (o, str, t) {
str.append$S("[!!!");
str.append$S(C$.identityToString$O(o));
str.append$S("=>");
var msg=t.getMessage$();
var className=t.getClass$().getName$();
str.append$S(className);
if (!className.equals$O(msg)) {
str.append$S(":");
str.append$S(msg);
}str.append$S("!!!]");
}, 1);

Clazz.newMeth(C$, 'identityToString$O', function (obj) {
if (obj == null ) {
return null;
}return obj.getClass$().getName$() + '@' + Integer.toHexString$I(System.identityHashCode$O(obj)) ;
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
