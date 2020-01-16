(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.util.SortedArrayStringMap',['org.apache.logging.log4j.message.MapMessage','.MapFormat'],'java.util.TreeMap','java.util.Collections','org.apache.logging.log4j.message.ParameterFormatter','StringBuilder','org.apache.logging.log4j.util.EnglishEnums','org.apache.logging.log4j.util.StringBuilders']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MapMessage", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.apache.logging.log4j.util.MultiFormatStringBuilderFormattable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','org.apache.logging.log4j.util.IndexedStringMap']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.data=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.$init$.apply(this);
this.data=Clazz.new_($I$(1,1).c$$I,[initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
;C$.$init$.apply(this);
this.data=Clazz.new_($I$(1,1).c$$java_util_Map,[map]);
}, 1);

Clazz.newMeth(C$, 'getFormats$', function () {
return $I$(2).names$();
});

Clazz.newMeth(C$, 'getParameters$', function () {
var result=Clazz.array(java.lang.Object, [this.data.size$()]);
for (var i=0; i < this.data.size$(); i++) {
result[i]=this.data.getValueAt$I(i);
}
return result;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return "";
});

Clazz.newMeth(C$, 'getData$', function () {
var result=Clazz.new_(1,{V:"String",K:"Object"},$I$(3,1));
for (var i=0; i < this.data.size$(); i++) {
result.put$TK$TV(this.data.getKeyAt$I(i), this.data.getValueAt$I(i));
}
return $I$(4).unmodifiableMap$java_util_Map(result);
});

Clazz.newMeth(C$, 'getIndexedReadOnlyStringMap$', function () {
return this.data;
});

Clazz.newMeth(C$, 'clear$', function () {
this.data.clear$();
});

Clazz.newMeth(C$, 'containsKey$S', function (key) {
return this.data.containsKey$S(key);
});

Clazz.newMeth(C$, 'put$S$S', function (candidateKey, value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No value provided for key " + candidateKey]);
}var key=this.toKey$S(candidateKey);
this.validate$S$S(key, value);
this.data.putValue$S$O(key, value);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.data.putValue$S$O(entry.getKey$(), entry.getValue$());
}
});

Clazz.newMeth(C$, 'get$S', function (key) {
var result=this.data.getValue$S(key);
return $I$(5).deepToString$O(result);
});

Clazz.newMeth(C$, 'remove$S', function (key) {
var result=this.get$S(key);
this.data.remove$S(key);
return result;
});

Clazz.newMeth(C$, 'asString$', function () {
return p$1.format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder.apply(this, [null, Clazz.new_($I$(6,1))]).toString();
});

Clazz.newMeth(C$, 'asString$S', function (format) {
try {
return p$1.format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder.apply(this, [$I$(7).valueOf$Class$S(Clazz.getClass($I$(2)), format), Clazz.new_($I$(6,1))]).toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
return this.asString$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
this.data.forEach$org_apache_logging_log4j_util_BiConsumer(action);
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_TriConsumer$TS', function (action, state) {
this.data.forEach$org_apache_logging_log4j_util_TriConsumer$TS(action, state);
});

Clazz.newMeth(C$, 'format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder', function (format, sb) {
if (format == null ) {
this.appendMap$StringBuilder(sb);
} else {
switch (format) {
case $I$(2).XML:
{
this.asXml$StringBuilder(sb);
break;
}case $I$(2).JSON:
{
this.asJson$StringBuilder(sb);
break;
}case $I$(2).JAVA:
{
this.asJava$StringBuilder(sb);
break;
}case $I$(2).JAVA_UNQUOTED:
this.asJavaUnquoted$StringBuilder(sb);
break;
default:
{
this.appendMap$StringBuilder(sb);
}}
}return sb;
}, p$1);

Clazz.newMeth(C$, 'asXml$StringBuilder', function (sb) {
sb.append$S("<Map>\n");
for (var i=0; i < this.data.size$(); i++) {
sb.append$S("  <Entry key=\"").append$S(this.data.getKeyAt$I(i)).append$S("\">");
var size=sb.length$();
$I$(5).recursiveDeepToString$O$StringBuilder$java_util_Set(this.data.getValueAt$I(i), sb, null);
$I$(8).escapeXml$StringBuilder$I(sb, size);
sb.append$S("</Entry>\n");
}
sb.append$S("</Map>");
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return this.asString$();
});

Clazz.newMeth(C$, 'getFormattedMessage$SA', function (formats) {
return p$1.format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder.apply(this, [p$1.getFormat$SA.apply(this, [formats]), Clazz.new_($I$(6,1))]).toString();
});

Clazz.newMeth(C$, 'getFormat$SA', function (formats) {
if (formats == null  || formats.length == 0 ) {
return null;
}for (var i=0; i < formats.length; i++) {
var mapFormat=$I$(2).lookupIgnoreCase$S(formats[i]);
if (mapFormat != null ) {
return mapFormat;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'appendMap$StringBuilder', function (sb) {
for (var i=0; i < this.data.size$(); i++) {
if (i > 0) {
sb.append$C(" ");
}sb.append$S(this.data.getKeyAt$I(i)).append$C("=").append$C("\"");
$I$(5).recursiveDeepToString$O$StringBuilder$java_util_Set(this.data.getValueAt$I(i), sb, null);
sb.append$C("\"");
}
});

Clazz.newMeth(C$, 'asJson$StringBuilder', function (sb) {
sb.append$C("{");
for (var i=0; i < this.data.size$(); i++) {
if (i > 0) {
sb.append$S(", ");
}sb.append$C("\"");
var start=sb.length$();
sb.append$S(this.data.getKeyAt$I(i));
$I$(8).escapeJson$StringBuilder$I(sb, start);
sb.append$C("\"").append$C(":").append$C("\"");
start=sb.length$();
$I$(5).recursiveDeepToString$O$StringBuilder$java_util_Set(this.data.getValueAt$I(i), sb, null);
$I$(8).escapeJson$StringBuilder$I(sb, start);
sb.append$C("\"");
}
sb.append$C("}");
});

Clazz.newMeth(C$, 'asJavaUnquoted$StringBuilder', function (sb) {
p$1.asJava$StringBuilder$Z.apply(this, [sb, false]);
});

Clazz.newMeth(C$, 'asJava$StringBuilder', function (sb) {
p$1.asJava$StringBuilder$Z.apply(this, [sb, true]);
});

Clazz.newMeth(C$, 'asJava$StringBuilder$Z', function (sb, quoted) {
sb.append$C("{");
for (var i=0; i < this.data.size$(); i++) {
if (i > 0) {
sb.append$S(", ");
}sb.append$S(this.data.getKeyAt$I(i)).append$C("=");
if (quoted) {
sb.append$C("\"");
}$I$(5).recursiveDeepToString$O$StringBuilder$java_util_Set(this.data.getValueAt$I(i), sb, null);
if (quoted) {
sb.append$C("\"");
}}
sb.append$C("}");
}, p$1);

Clazz.newMeth(C$, 'newInstance$java_util_Map', function (map) {
return Clazz.new_(1,{V:"",M:"Object"},C$.c$$java_util_Map,[map]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.asString$();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
p$1.format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder.apply(this, [null, buffer]);
});

Clazz.newMeth(C$, 'formatTo$SA$StringBuilder', function (formats, buffer) {
p$1.format$org_apache_logging_log4j_message_MapMessage_MapFormat$StringBuilder.apply(this, [p$1.getFormat$SA.apply(this, [formats]), buffer]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
return this.data.equals$O(that.data);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.data.hashCode$();
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return null;
});

Clazz.newMeth(C$, 'validate$S$Z', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$B', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$C', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$D', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$F', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$I', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$J', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$O', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$H', function (key, value) {
});

Clazz.newMeth(C$, 'validate$S$S', function (key, value) {
});

Clazz.newMeth(C$, 'toKey$S', function (candidateKey) {
return candidateKey;
});

Clazz.newMeth(C$, 'with$S$Z', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$Z(key, value);
this.data.putValue$S$O(key, new Boolean(value));
return this;
});

Clazz.newMeth(C$, 'with$S$B', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$B(key, ($b$[0] = value, $b$[0]));
this.data.putValue$S$O(key, new Byte(value));
return this;
});

Clazz.newMeth(C$, 'with$S$C', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$C(key, value);
this.data.putValue$S$O(key, new Character(value));
return this;
});

Clazz.newMeth(C$, 'with$S$D', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$D(key, value);
this.data.putValue$S$O(key, new Double(value));
return this;
});

Clazz.newMeth(C$, 'with$S$F', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$F(key, value);
this.data.putValue$S$O(key, new Float(value));
return this;
});

Clazz.newMeth(C$, 'with$S$I', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$I(key, value);
this.data.putValue$S$O(key, new Integer(value));
return this;
});

Clazz.newMeth(C$, 'with$S$J', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$J(key, value);
this.data.putValue$S$O(key, new Long(value));
return this;
});

Clazz.newMeth(C$, 'with$S$O', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$O(key, value);
this.data.putValue$S$O(key, value);
return this;
});

Clazz.newMeth(C$, 'with$S$H', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.validate$S$H(key, value);
this.data.putValue$S$O(key, new Short(value));
return this;
});

Clazz.newMeth(C$, 'with$S$S', function (candidateKey, value) {
var key=this.toKey$S(candidateKey);
this.put$S$S(key, value);
return this;
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.MapMessage',null,['org.apache.logging.log4j.util.PerformanceSensitive','org.apache.logging.log4j.message.AsynchronouslyFormattable']],['"allocation"','']]]}
;
(function(){/*e*/var C$=Clazz.newClass(P$.MapMessage, "MapFormat", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "XML", 0, []);
Clazz.newEnumConst($vals, C$.c$, "JSON", 1, []);
Clazz.newEnumConst($vals, C$.c$, "JAVA", 2, []);
Clazz.newEnumConst($vals, C$.c$, "JAVA_UNQUOTED", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'lookupIgnoreCase$S', function (format) {
return C$.XML.name$().equalsIgnoreCase$S(format) ? C$.XML : C$.JSON.name$().equalsIgnoreCase$S(format) ? C$.JSON : C$.JAVA.name$().equalsIgnoreCase$S(format) ? C$.JAVA : C$.JAVA_UNQUOTED.name$().equalsIgnoreCase$S(format) ? C$.JAVA_UNQUOTED : null;
}, 1);

Clazz.newMeth(C$, 'names$', function () {
return Clazz.array(String, -1, [C$.XML.name$(), C$.JSON.name$(), C$.JAVA.name$(), C$.JAVA_UNQUOTED.name$()]);
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
