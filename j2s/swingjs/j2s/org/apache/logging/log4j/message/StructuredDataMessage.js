(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.message.StructuredDataId',['org.apache.logging.log4j.message.StructuredDataMessage','.Format'],'org.apache.logging.log4j.util.EnglishEnums','StringBuilder','org.apache.logging.log4j.util.StringBuilders']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructuredDataMessage", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.apache.logging.log4j.message.MapMessage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['maxLength'],'S',['message','type'],'O',['id','org.apache.logging.log4j.message.StructuredDataId']]
,['I',['MAX_LENGTH','HASHVAL'],'L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$S$S', function (id, msg, type) {
C$.c$$S$S$S$I.apply(this, [id, msg, type, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I', function (id, msg, type, maxLength) {
Clazz.super_(C$, this);
this.id=Clazz.new_($I$(1,1).c$$S$SA$SA$I,[id, null, null, maxLength]);
this.message=msg;
this.type=type;
this.maxLength=maxLength;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$java_util_Map', function (id, msg, type, data) {
C$.c$$S$S$S$java_util_Map$I.apply(this, [id, msg, type, data, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$java_util_Map$I', function (id, msg, type, data, maxLength) {
;C$.superclazz.c$$java_util_Map.apply(this, [data]);C$.$init$.apply(this);
this.id=Clazz.new_($I$(1,1).c$$S$SA$SA$I,[id, null, null, maxLength]);
this.message=msg;
this.type=type;
this.maxLength=maxLength;
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_StructuredDataId$S$S', function (id, msg, type) {
C$.c$$org_apache_logging_log4j_message_StructuredDataId$S$S$I.apply(this, [id, msg, type, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_StructuredDataId$S$S$I', function (id, msg, type, maxLength) {
Clazz.super_(C$, this);
this.id=id;
this.message=msg;
this.type=type;
this.maxLength=maxLength;
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_StructuredDataId$S$S$java_util_Map', function (id, msg, type, data) {
C$.c$$org_apache_logging_log4j_message_StructuredDataId$S$S$java_util_Map$I.apply(this, [id, msg, type, data, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_StructuredDataId$S$S$java_util_Map$I', function (id, msg, type, data, maxLength) {
;C$.superclazz.c$$java_util_Map.apply(this, [data]);C$.$init$.apply(this);
this.id=id;
this.message=msg;
this.type=type;
this.maxLength=maxLength;
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_StructuredDataMessage$java_util_Map', function (msg, map) {
;C$.superclazz.c$$java_util_Map.apply(this, [map]);C$.$init$.apply(this);
this.id=msg.id;
this.message=msg.message;
this.type=msg.type;
this.maxLength=32;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.maxLength=32;
}, 1);

Clazz.newMeth(C$, 'getFormats$', function () {
var formats=Clazz.array(String, [$I$(2).values$().length]);
var i=0;
for (var format, $format = 0, $$format = $I$(2).values$(); $format<$$format.length&&((format=($$format[$format])),1);$format++) {
formats[i++]=format.name$();
}
return formats;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (id) {
this.id=Clazz.new_($I$(1,1).c$$S$SA$SA,[id, null, null]);
});

Clazz.newMeth(C$, 'setId$org_apache_logging_log4j_message_StructuredDataId', function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
if (type.length$() > 32) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["structured data type exceeds maximum length of 32 characters: " + type]);
}this.type=type;
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId$StringBuilder($I$(2).FULL, null, buffer);
});

Clazz.newMeth(C$, 'formatTo$SA$StringBuilder', function (formats, buffer) {
this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId$StringBuilder(p$1.getFormat$SA.apply(this, [formats]), null, buffer);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.message;
});

Clazz.newMeth(C$, 'setMessageFormat$S', function (msg) {
this.message=msg;
});

Clazz.newMeth(C$, 'asString$', function () {
return this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId($I$(2).FULL, null);
});

Clazz.newMeth(C$, 'asString$S', function (format) {
try {
return this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId($I$(3).valueOf$Class$S(Clazz.getClass($I$(2)), format), null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
return this.asString$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId', function (format, structuredDataId) {
var sb=Clazz.new_($I$(4,1));
this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId$StringBuilder(format, structuredDataId, sb);
return sb.toString();
});

Clazz.newMeth(C$, 'asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId$StringBuilder', function (format, structuredDataId, sb) {
var full=$I$(2).FULL.equals$O(format);
if (full) {
var myType=this.getType$();
if (myType == null ) {
return;
}sb.append$S(this.getType$()).append$C(" ");
}var sdId=this.getId$();
if (sdId != null ) {
sdId=sdId.makeId$org_apache_logging_log4j_message_StructuredDataId(structuredDataId);
} else {
sdId=structuredDataId;
}if (sdId == null  || sdId.getName$() == null  ) {
return;
}if ($I$(2).XML.equals$O(format)) {
p$1.asXml$org_apache_logging_log4j_message_StructuredDataId$StringBuilder.apply(this, [sdId, sb]);
return;
}sb.append$C("[");
$I$(5).appendValue$StringBuilder$O(sb, sdId);
sb.append$C(" ");
this.appendMap$StringBuilder(sb);
sb.append$C("]");
if (full) {
var msg=this.getFormat$();
if (msg != null ) {
sb.append$C(" ").append$S(msg);
}}});

Clazz.newMeth(C$, 'asXml$org_apache_logging_log4j_message_StructuredDataId$StringBuilder', function (structuredDataId, sb) {
sb.append$S("<StructuredData>\n");
sb.append$S("<type>").append$S(this.type).append$S("</type>\n");
sb.append$S("<id>").append$O(structuredDataId).append$S("</id>\n");
C$.superclazz.prototype.asXml$StringBuilder.apply(this, [sb]);
sb.append$S("\n</StructuredData>\n");
}, p$1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId($I$(2).FULL, null);
});

Clazz.newMeth(C$, 'getFormattedMessage$SA', function (formats) {
return this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId(p$1.getFormat$SA.apply(this, [formats]), null);
});

Clazz.newMeth(C$, 'getFormat$SA', function (formats) {
if (formats != null  && formats.length > 0 ) {
for (var i=0; i < formats.length; i++) {
var format=formats[i];
if ($I$(2).XML.name$().equalsIgnoreCase$S(format)) {
return $I$(2).XML;
} else if ($I$(2).FULL.name$().equalsIgnoreCase$S(format)) {
return $I$(2).FULL;
}}
return null;
}return $I$(2).FULL;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.asString$org_apache_logging_log4j_message_StructuredDataMessage_Format$org_apache_logging_log4j_message_StructuredDataId(null, null);
});

Clazz.newMeth(C$, ['newInstance$java_util_Map'], function (map) {
return Clazz.new_(C$.c$$org_apache_logging_log4j_message_StructuredDataMessage$java_util_Map,[this, map]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (!C$.superclazz.prototype.equals$O.apply(this, [o])) {
return false;
}if (this.type != null  ? !this.type.equals$O(that.type) : that.type != null ) {
return false;
}if (this.id != null  ? !this.id.equals$O(that.id) : that.id != null ) {
return false;
}if (this.message != null  ? !this.message.equals$O(that.message) : that.message != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=C$.superclazz.prototype.hashCode$.apply(this, []);
result=31 * result + (this.type != null  ? this.type.hashCode$() : 0);
result=31 * result + (this.id != null  ? this.id.hashCode$() : 0);
result=31 * result + (this.message != null  ? this.message.hashCode$() : 0);
return result;
});

Clazz.newMeth(C$, 'validate$S$Z', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$B', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$C', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$D', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$F', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$I', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$J', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$O', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$H', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validate$S$S', function (key, value) {
this.validateKey$S(key);
});

Clazz.newMeth(C$, 'validateKey$S', function (key) {
if (this.maxLength > 0 && key.length$() > this.maxLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Structured data keys are limited to " + this.maxLength + " characters. key: " + key ]);
}for (var i=0; i < key.length$(); i++) {
var c=key.charAt$I(i);
if (c < "!" || c > "~"  || c == "="  || c == "]"  || c == "\"" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Structured data keys must contain printable US ASCII charactersand may not contain a space, =, ], or \""]);
}}
});
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.StructuredDataMessage',null,['org.apache.logging.log4j.message.AsynchronouslyFormattable']],['']]]}
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructuredDataMessage, "Format", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "XML", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FULL", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
