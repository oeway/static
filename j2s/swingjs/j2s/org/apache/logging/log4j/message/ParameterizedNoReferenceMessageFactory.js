(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.message.SimpleMessage','org.apache.logging.log4j.message.ParameterizedMessage',['org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory','.StatusMessage']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParameterizedNoReferenceMessageFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.apache.logging.log4j.message.AbstractMessageFactory');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID'],'O',['INSTANCE','org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newMessage$S$OA', function (message, params) {
if (params == null ) {
return Clazz.new_($I$(1,1).c$$S,[message]);
}var msg=Clazz.new_($I$(2,1).c$$S$OA,[message, params]);
return Clazz.new_($I$(3,1).c$$S$Throwable,[msg.getFormattedMessage$(), msg.getThrowable$()]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParameterizedNoReferenceMessageFactory, "StatusMessage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.apache.logging.log4j.message.Message');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['formattedMessage'],'O',['throwable','Throwable']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$Throwable', function (formattedMessage, throwable) {
;C$.$init$.apply(this);
this.formattedMessage=formattedMessage;
this.throwable=throwable;
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return this.formattedMessage;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.formattedMessage;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return null;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
