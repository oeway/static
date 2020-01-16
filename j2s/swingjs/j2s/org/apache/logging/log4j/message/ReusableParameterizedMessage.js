(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'java.util.Arrays','org.apache.logging.log4j.message.ParameterizedMessage','org.apache.logging.log4j.message.ParameterFormatter','org.apache.logging.log4j.util.StringBuilders','org.apache.logging.log4j.util.Constants','ThreadLocal','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReusableParameterizedMessage", null, null, ['org.apache.logging.log4j.message.ReusableMessage', 'org.apache.logging.log4j.message.ParameterVisitable', 'org.apache.logging.log4j.message.Clearable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.indices=Clazz.array(Integer.TYPE, [256]);
this.params=Clazz.array(java.lang.Object, [10]);
this.reserved=false;
}, 1);

C$.$fields$=[['Z',['reserved'],'I',['argCount','usedCount'],'S',['messagePattern'],'O',['buffer','ThreadLocal','indices','int[]','varargs','Object[]','+params','throwable','Throwable']]
,['I',['MIN_BUILDER_SIZE','MAX_PARMS'],'L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTrimmedParams', function () {
return this.varargs == null  ? $I$(1).copyOf$__TA$I(this.params, this.argCount) : this.varargs;
}, p$1);

Clazz.newMeth(C$, 'getParams', function () {
return this.varargs == null  ? this.params : this.varargs;
}, p$1);

Clazz.newMeth(C$, 'swapParameters$OA', function (emptyReplacement) {
var result;
if (this.varargs == null ) {
result=this.params;
if (emptyReplacement.length >= 10) {
this.params=emptyReplacement;
} else {
if (this.argCount <= emptyReplacement.length) {
System.arraycopy$O$I$O$I$I(this.params, 0, emptyReplacement, 0, this.argCount);
for (var i=0; i < this.argCount; i++) {
this.params[i]=null;
}
result=emptyReplacement;
} else {
this.params=Clazz.array(java.lang.Object, [10]);
}}} else {
if (this.argCount <= emptyReplacement.length) {
result=emptyReplacement;
} else {
result=Clazz.array(java.lang.Object, [this.argCount]);
}System.arraycopy$O$I$O$I$I(this.varargs, 0, result, 0, this.argCount);
}return result;
});

Clazz.newMeth(C$, 'getParameterCount$', function () {
return ($s$[0] = this.argCount, $s$[0]);
});

Clazz.newMeth(C$, ['forEachParameter$org_apache_logging_log4j_message_ParameterConsumer$TS','forEachParameter$'], function (action, state) {
var parameters=p$1.getParams.apply(this, []);
for (var i=($s$[0] = 0, $s$[0]); i < this.argCount; ($s$[0]=i,i=(++$s$[0],$s$[0]))) {
action.accept$(parameters[i], i, state);
}
});

Clazz.newMeth(C$, 'memento$', function () {
return Clazz.new_($I$(2,1).c$$S$OA,[this.messagePattern, p$1.getTrimmedParams.apply(this, [])]);
});

Clazz.newMeth(C$, 'init$S$I$OA', function (messagePattern, argCount, paramArray) {
this.varargs=null;
this.messagePattern=messagePattern;
this.argCount=argCount;
var placeholderCount=C$.count$S$IA(messagePattern, this.indices);
p$1.initThrowable$OA$I$I.apply(this, [paramArray, argCount, placeholderCount]);
this.usedCount=Math.min(placeholderCount, argCount);
}, p$1);

Clazz.newMeth(C$, 'count$S$IA', function (messagePattern, indices) {
try {
return $I$(3).countArgumentPlaceholders2$S$IA(messagePattern, indices);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return $I$(3).countArgumentPlaceholders$S(messagePattern);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'initThrowable$OA$I$I', function (params, argCount, usedParams) {
if (usedParams < argCount && Clazz.instanceOf(params[argCount - 1], "java.lang.Throwable") ) {
this.throwable=params[argCount - 1];
} else {
this.throwable=null;
}}, p$1);

Clazz.newMeth(C$, 'set$S$OA', function (messagePattern, $arguments) {
p$1.init$S$I$OA.apply(this, [messagePattern, $arguments == null  ? 0 : $arguments.length, $arguments]);
this.varargs=$arguments;
return this;
});

Clazz.newMeth(C$, 'set$S$O', function (messagePattern, p0) {
this.params[0]=p0;
p$1.init$S$I$OA.apply(this, [messagePattern, 1, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O', function (messagePattern, p0, p1) {
this.params[0]=p0;
this.params[1]=p1;
p$1.init$S$I$OA.apply(this, [messagePattern, 2, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O', function (messagePattern, p0, p1, p2) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
p$1.init$S$I$OA.apply(this, [messagePattern, 3, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O', function (messagePattern, p0, p1, p2, p3) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
p$1.init$S$I$OA.apply(this, [messagePattern, 4, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
p$1.init$S$I$OA.apply(this, [messagePattern, 5, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4, p5) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
this.params[5]=p5;
p$1.init$S$I$OA.apply(this, [messagePattern, 6, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4, p5, p6) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
this.params[5]=p5;
this.params[6]=p6;
p$1.init$S$I$OA.apply(this, [messagePattern, 7, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4, p5, p6, p7) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
this.params[5]=p5;
this.params[6]=p6;
this.params[7]=p7;
p$1.init$S$I$OA.apply(this, [messagePattern, 8, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
this.params[5]=p5;
this.params[6]=p6;
this.params[7]=p7;
this.params[8]=p8;
p$1.init$S$I$OA.apply(this, [messagePattern, 9, this.params]);
return this;
});

Clazz.newMeth(C$, 'set$S$O$O$O$O$O$O$O$O$O$O', function (messagePattern, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
this.params[0]=p0;
this.params[1]=p1;
this.params[2]=p2;
this.params[3]=p3;
this.params[4]=p4;
this.params[5]=p5;
this.params[6]=p6;
this.params[7]=p7;
this.params[8]=p8;
this.params[9]=p9;
p$1.init$S$I$OA.apply(this, [messagePattern, 10, this.params]);
return this;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.messagePattern;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return p$1.getTrimmedParams.apply(this, []);
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
var sb=p$1.getBuffer.apply(this, []);
this.formatTo$StringBuilder(sb);
var result=sb.toString();
$I$(4).trimToMaxSize$StringBuilder$I(sb, $I$(5).MAX_REUSABLE_MESSAGE_SIZE);
return result;
});

Clazz.newMeth(C$, 'getBuffer', function () {
if (this.buffer == null ) {
this.buffer=Clazz.new_(1,{T:"StringBuilder"},$I$(6,1));
}var result=this.buffer.get$();
if (result == null ) {
var currentPatternLength=this.messagePattern == null  ? 0 : this.messagePattern.length$();
result=Clazz.new_($I$(7,1).c$$I,[Math.max(512, currentPatternLength * 2)]);
this.buffer.set$TT(result);
}result.setLength$I(0);
return result;
}, p$1);

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (builder) {
if (this.indices[0] < 0) {
$I$(3).formatMessage$StringBuilder$S$OA$I(builder, this.messagePattern, p$1.getParams.apply(this, []), this.argCount);
} else {
$I$(3).formatMessage2$StringBuilder$S$OA$I$IA(builder, this.messagePattern, p$1.getParams.apply(this, []), this.usedCount, this.indices);
}});

Clazz.newMeth(C$, 'reserve$', function () {
this.reserved=true;
return this;
});

Clazz.newMeth(C$, 'toString', function () {
return "ReusableParameterizedMessage[messagePattern=" + this.getFormat$() + ", stringArgs=" + $I$(1).toString$OA(this.getParameters$()) + ", throwable=" + this.getThrowable$() + ']' ;
});

Clazz.newMeth(C$, 'clear$', function () {
this.reserved=false;
this.varargs=null;
this.messagePattern=null;
this.throwable=null;
});
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.ReusableParameterizedMessage',null,['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
