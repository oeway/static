(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'ThreadLocal','org.apache.logging.log4j.message.ReusableParameterizedMessage','org.apache.logging.log4j.message.ReusableSimpleMessage','org.apache.logging.log4j.message.ReusableObjectMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReusableMessageFactory", null, null, ['org.apache.logging.log4j.message.MessageFactory2', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
C$.threadLocalParameterized=Clazz.new_(1,{T:"org.apache.logging.log4j.message.ReusableParameterizedMessage"},$I$(1,1));
C$.threadLocalSimpleMessage=Clazz.new_(1,{T:"org.apache.logging.log4j.message.ReusableSimpleMessage"},$I$(1,1));
C$.threadLocalObjectMessage=Clazz.new_(1,{T:"org.apache.logging.log4j.message.ReusableObjectMessage"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID'],'O',['INSTANCE','org.apache.logging.log4j.message.ReusableMessageFactory','threadLocalParameterized','ThreadLocal','+threadLocalSimpleMessage','+threadLocalObjectMessage']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParameterized$', function () {
var result=C$.threadLocalParameterized.get$();
if (result == null ) {
result=Clazz.new_($I$(2,1));
C$.threadLocalParameterized.set$TT(result);
}return result.reserved ? Clazz.new_($I$(2,1)).reserve$() : result.reserve$();
}, 1);

Clazz.newMeth(C$, 'getSimple$', function () {
var result=C$.threadLocalSimpleMessage.get$();
if (result == null ) {
result=Clazz.new_($I$(3,1));
C$.threadLocalSimpleMessage.set$TT(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
var result=C$.threadLocalObjectMessage.get$();
if (result == null ) {
result=Clazz.new_($I$(4,1));
C$.threadLocalObjectMessage.set$TT(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'release$org_apache_logging_log4j_message_Message', function (message) {
if (Clazz.instanceOf(message, "org.apache.logging.log4j.message.Clearable")) {
(message).clear$();
}}, 1);

Clazz.newMeth(C$, 'newMessage$CharSequence', function (charSequence) {
var result=C$.getSimple$();
result.set$CharSequence(charSequence);
return result;
});

Clazz.newMeth(C$, 'newMessage$S$OA', function (message, params) {
return C$.getParameterized$().set$S$OA(message, params);
});

Clazz.newMeth(C$, 'newMessage$S$O', function (message, p0) {
return C$.getParameterized$().set$S$O(message, p0);
});

Clazz.newMeth(C$, 'newMessage$S$O$O', function (message, p0, p1) {
return C$.getParameterized$().set$S$O$O(message, p0, p1);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O', function (message, p0, p1, p2) {
return C$.getParameterized$().set$S$O$O$O(message, p0, p1, p2);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O', function (message, p0, p1, p2, p3) {
return C$.getParameterized$().set$S$O$O$O$O(message, p0, p1, p2, p3);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
return C$.getParameterized$().set$S$O$O$O$O$O(message, p0, p1, p2, p3, p4);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
return C$.getParameterized$().set$S$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
return C$.getParameterized$().set$S$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
return C$.getParameterized$().set$S$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
return C$.getParameterized$().set$S$O$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7, p8);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
return C$.getParameterized$().set$S$O$O$O$O$O$O$O$O$O$O(message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
});

Clazz.newMeth(C$, 'newMessage$S', function (message) {
var result=C$.getSimple$();
result.set$S(message);
return result;
});

Clazz.newMeth(C$, 'newMessage$O', function (message) {
var result=C$.getObject$();
result.set$O(message);
return result;
});
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.ReusableMessageFactory',null,['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
