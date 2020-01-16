(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'java.util.Objects','org.apache.logging.log4j.message.SimpleMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MessageFactory2Adapter", null, null, 'org.apache.logging.log4j.message.MessageFactory2');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['wrapped','org.apache.logging.log4j.message.MessageFactory']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_message_MessageFactory', function (wrapped) {
;C$.$init$.apply(this);
this.wrapped=$I$(1).requireNonNull$TT(wrapped);
}, 1);

Clazz.newMeth(C$, 'getOriginal$', function () {
return this.wrapped;
});

Clazz.newMeth(C$, 'newMessage$CharSequence', function (charSequence) {
return Clazz.new_($I$(2,1).c$$CharSequence,[charSequence]);
});

Clazz.newMeth(C$, 'newMessage$S$O', function (message, p0) {
return this.wrapped.newMessage$S$OA(message, [p0]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O', function (message, p0, p1) {
return this.wrapped.newMessage$S$OA(message, [p0, p1]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O', function (message, p0, p1, p2) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O', function (message, p0, p1, p2, p3) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O', function (message, p0, p1, p2, p3, p4) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4, p5]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4, p5, p6]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4, p5, p6, p7]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4, p5, p6, p7, p8]);
});

Clazz.newMeth(C$, 'newMessage$S$O$O$O$O$O$O$O$O$O$O', function (message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
return this.wrapped.newMessage$S$OA(message, [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9]);
});

Clazz.newMeth(C$, 'newMessage$O', function (message) {
return this.wrapped.newMessage$O(message);
});

Clazz.newMeth(C$, 'newMessage$S', function (message) {
return this.wrapped.newMessage$S(message);
});

Clazz.newMeth(C$, 'newMessage$S$OA', function (message, params) {
return this.wrapped.newMessage$S$OA(message, params);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
