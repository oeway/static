(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'StringBuilder','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructuredDataCollectionMessage", null, null, ['org.apache.logging.log4j.util.StringBuilderFormattable', 'org.apache.logging.log4j.message.MessageCollectionMessage']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['structuredDataMessageList','java.util.List']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (messages) {
;C$.$init$.apply(this);
this.structuredDataMessageList=messages;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return this.structuredDataMessageList.iterator$();
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
var sb=Clazz.new_($I$(1,1));
this.formatTo$StringBuilder(sb);
return sb.toString();
});

Clazz.newMeth(C$, 'getFormat$', function () {
var sb=Clazz.new_($I$(1,1));
for (var msg, $msg = this.structuredDataMessageList.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
if (msg.getFormat$() != null ) {
if (sb.length$() > 0) {
sb.append$S(", ");
}sb.append$S(msg.getFormat$());
}}
return sb.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
for (var msg, $msg = this.structuredDataMessageList.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
msg.formatTo$StringBuilder(buffer);
}
});

Clazz.newMeth(C$, 'getParameters$', function () {
var objectList=Clazz.new_(1,{E:"Object[]"},$I$(2,1));
var count=0;
for (var msg, $msg = this.structuredDataMessageList.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
var objects=msg.getParameters$();
if (objects != null ) {
objectList.add$TE(objects);
count+=objects.length;
}}
var objects=Clazz.array(java.lang.Object, [count]);
var index=0;
for (var objs, $objs = objectList.iterator$(); $objs.hasNext$()&&((objs=($objs.next$())),1);) {
for (var obj, $obj = 0, $$obj = objs; $obj<$$obj.length&&((obj=($$obj[$obj])),1);$obj++) {
objects[index++]=obj;
}
}
return objects;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
for (var msg, $msg = this.structuredDataMessageList.iterator$(); $msg.hasNext$()&&((msg=($msg.next$())),1);) {
var t=msg.getThrowable$();
if (t != null ) {
return t;
}}
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
