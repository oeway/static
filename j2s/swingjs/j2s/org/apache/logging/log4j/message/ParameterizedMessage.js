(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'ThreadLocal','org.apache.logging.log4j.message.ParameterFormatter','org.apache.logging.log4j.util.StringBuilders','org.apache.logging.log4j.util.Constants','StringBuilder','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParameterizedMessage", null, null, ['org.apache.logging.log4j.message.Message', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.threadLocalStringBuilder=Clazz.new_(1,{T:"StringBuilder"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['usedCount'],'S',['messagePattern','formattedMessage'],'O',['argArray','Object[]','throwable','Throwable','indices','int[]']]
,['I',['DEFAULT_STRING_BUILDER_SIZE','HASHVAL'],'L',['serialVersionUID'],'S',['RECURSION_PREFIX','RECURSION_SUFFIX','ERROR_PREFIX','ERROR_SEPARATOR','ERROR_MSG_SEPARATOR','ERROR_SUFFIX'],'O',['threadLocalStringBuilder','ThreadLocal']]]

Clazz.newMeth(C$, 'c$$S$SA$Throwable', function (messagePattern, $arguments, throwable) {
;C$.$init$.apply(this);
this.argArray=$arguments;
this.throwable=throwable;
p$1.init$S.apply(this, [messagePattern]);
}, 1);

Clazz.newMeth(C$, 'c$$S$OA$Throwable', function (messagePattern, $arguments, throwable) {
;C$.$init$.apply(this);
this.argArray=$arguments;
this.throwable=throwable;
p$1.init$S.apply(this, [messagePattern]);
}, 1);

Clazz.newMeth(C$, 'c$$S$OA', function (messagePattern, $arguments) {
;C$.$init$.apply(this);
this.argArray=$arguments;
p$1.init$S.apply(this, [messagePattern]);
}, 1);

Clazz.newMeth(C$, 'c$$S$O', function (messagePattern, arg) {
C$.c$$S$OA.apply(this, [messagePattern, Clazz.array(java.lang.Object, -1, [arg])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$O$O', function (messagePattern, arg0, arg1) {
C$.c$$S$OA.apply(this, [messagePattern, Clazz.array(java.lang.Object, -1, [arg0, arg1])]);
}, 1);

Clazz.newMeth(C$, 'init$S', function (messagePattern) {
this.messagePattern=messagePattern;
var len=Math.max(1, messagePattern == null  ? 0 : messagePattern.length$() >> 1);
this.indices=Clazz.array(Integer.TYPE, [len]);
var placeholders=$I$(2).countArgumentPlaceholders2$S$IA(messagePattern, this.indices);
p$1.initThrowable$OA$I.apply(this, [this.argArray, placeholders]);
this.usedCount=Math.min(placeholders, this.argArray == null  ? 0 : this.argArray.length);
}, p$1);

Clazz.newMeth(C$, 'initThrowable$OA$I', function (params, usedParams) {
if (params != null ) {
var argCount=params.length;
if (usedParams < argCount && this.throwable == null   && Clazz.instanceOf(params[argCount - 1], "java.lang.Throwable") ) {
this.throwable=params[argCount - 1];
}}}, p$1);

Clazz.newMeth(C$, 'getFormat$', function () {
return this.messagePattern;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return this.argArray;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.formattedMessage == null ) {
var buffer=C$.getThreadLocalStringBuilder$();
this.formatTo$StringBuilder(buffer);
this.formattedMessage=buffer.toString();
$I$(3).trimToMaxSize$StringBuilder$I(buffer, $I$(4).MAX_REUSABLE_MESSAGE_SIZE);
}return this.formattedMessage;
});

Clazz.newMeth(C$, 'getThreadLocalStringBuilder$', function () {
var buffer=C$.threadLocalStringBuilder.get$();
if (buffer == null ) {
buffer=Clazz.new_($I$(5,1).c$$I,[255]);
C$.threadLocalStringBuilder.set$TT(buffer);
}buffer.setLength$I(0);
return buffer;
}, 1);

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
if (this.formattedMessage != null ) {
buffer.append$S(this.formattedMessage);
} else {
if (this.indices[0] < 0) {
$I$(2).formatMessage$StringBuilder$S$OA$I(buffer, this.messagePattern, this.argArray, this.usedCount);
} else {
$I$(2).formatMessage2$StringBuilder$S$OA$I$IA(buffer, this.messagePattern, this.argArray, this.usedCount, this.indices);
}}});

Clazz.newMeth(C$, 'format$S$OA', function (messagePattern, $arguments) {
return $I$(2).format$S$OA(messagePattern, $arguments);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.messagePattern != null  ? !this.messagePattern.equals$O(that.messagePattern) : that.messagePattern != null ) {
return false;
}if (!$I$(6).equals$OA$OA(this.argArray, that.argArray)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=this.messagePattern != null  ? this.messagePattern.hashCode$() : 0;
result=31 * result + (this.argArray != null  ? $I$(6).hashCode$OA(this.argArray) : 0);
return result;
});

Clazz.newMeth(C$, 'countArgumentPlaceholders$S', function (messagePattern) {
return $I$(2).countArgumentPlaceholders$S(messagePattern);
}, 1);

Clazz.newMeth(C$, 'deepToString$O', function (o) {
return $I$(2).deepToString$O(o);
}, 1);

Clazz.newMeth(C$, 'identityToString$O', function (obj) {
return $I$(2).identityToString$O(obj);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "ParameterizedMessage[messagePattern=" + this.messagePattern + ", stringArgs=" + $I$(6).toString$OA(this.argArray) + ", throwable=" + this.throwable + ']' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
