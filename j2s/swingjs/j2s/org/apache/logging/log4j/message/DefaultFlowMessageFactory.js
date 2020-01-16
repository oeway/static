(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,['org.apache.logging.log4j.message.DefaultFlowMessageFactory','.SimpleEntryMessage'],'org.apache.logging.log4j.message.SimpleMessage',['org.apache.logging.log4j.message.DefaultFlowMessageFactory','.SimpleExitMessage']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultFlowMessageFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.apache.logging.log4j.message.FlowMessageFactory', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['entryText','exitText']]
,['L',['serialVersionUID'],'S',['EXIT_DEFAULT_PREFIX','ENTRY_DEFAULT_PREFIX']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$S.apply(this, ["Enter", "Exit"]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (entryText, exitText) {
;C$.$init$.apply(this);
this.entryText=entryText;
this.exitText=exitText;
}, 1);

Clazz.newMeth(C$, 'getEntryText$', function () {
return this.entryText;
});

Clazz.newMeth(C$, 'getExitText$', function () {
return this.exitText;
});

Clazz.newMeth(C$, 'newEntryMessage$org_apache_logging_log4j_message_Message', function (message) {
return Clazz.new_($I$(1,1).c$$S$org_apache_logging_log4j_message_Message,[this.entryText, p$1.makeImmutable$org_apache_logging_log4j_message_Message.apply(this, [message])]);
});

Clazz.newMeth(C$, 'makeImmutable$org_apache_logging_log4j_message_Message', function (message) {
if (!(Clazz.instanceOf(message, "org.apache.logging.log4j.message.ReusableMessage"))) {
return message;
}return Clazz.new_($I$(2,1).c$$S,[message.getFormattedMessage$()]);
}, p$1);

Clazz.newMeth(C$, 'newExitMessage$org_apache_logging_log4j_message_EntryMessage', function (message) {
return Clazz.new_($I$(3,1).c$$S$org_apache_logging_log4j_message_EntryMessage,[this.exitText, message]);
});

Clazz.newMeth(C$, 'newExitMessage$O$org_apache_logging_log4j_message_EntryMessage', function (result, message) {
return Clazz.new_($I$(3,1).c$$S$O$org_apache_logging_log4j_message_EntryMessage,[this.exitText, result, message]);
});

Clazz.newMeth(C$, 'newExitMessage$O$org_apache_logging_log4j_message_Message', function (result, message) {
return Clazz.new_($I$(3,1).c$$S$O$org_apache_logging_log4j_message_Message,[this.exitText, result, message]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFlowMessageFactory, "AbstractFlowMessage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.apache.logging.log4j.message.FlowMessage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['text'],'O',['message','org.apache.logging.log4j.message.Message']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_message_Message', function (text, message) {
;C$.$init$.apply(this);
this.message=message;
this.text=text;
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.message != null ) {
return this.text + " " + this.message.getFormattedMessage$() ;
}return this.text;
});

Clazz.newMeth(C$, 'getFormat$', function () {
if (this.message != null ) {
return this.text + ": " + this.message.getFormat$() ;
}return this.text;
});

Clazz.newMeth(C$, 'getParameters$', function () {
if (this.message != null ) {
return this.message.getParameters$();
}return null;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
if (this.message != null ) {
return this.message.getThrowable$();
}return null;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this.message;
});

Clazz.newMeth(C$, 'getText$', function () {
return this.text;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFlowMessageFactory, "SimpleEntryMessage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.apache.logging.log4j.message.DefaultFlowMessageFactory','.AbstractFlowMessage'], 'org.apache.logging.log4j.message.EntryMessage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_message_Message', function (entryText, message) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_Message.apply(this, [entryText, message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFlowMessageFactory, "SimpleExitMessage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.apache.logging.log4j.message.DefaultFlowMessageFactory','.AbstractFlowMessage'], 'org.apache.logging.log4j.message.ExitMessage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isVoid'],'O',['result','java.lang.Object']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_message_EntryMessage', function (exitText, message) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_Message.apply(this, [exitText, message.getMessage$()]);C$.$init$.apply(this);
this.result=null;
this.isVoid=true;
}, 1);

Clazz.newMeth(C$, 'c$$S$O$org_apache_logging_log4j_message_EntryMessage', function (exitText, result, message) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_Message.apply(this, [exitText, message.getMessage$()]);C$.$init$.apply(this);
this.result=result;
this.isVoid=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$O$org_apache_logging_log4j_message_Message', function (exitText, result, message) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_Message.apply(this, [exitText, message]);C$.$init$.apply(this);
this.result=result;
this.isVoid=false;
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
var formattedMessage=C$.superclazz.prototype.getFormattedMessage$.apply(this, []);
if (this.isVoid) {
return formattedMessage;
}return formattedMessage + ": " + this.result ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
