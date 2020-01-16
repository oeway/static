(function(){var P$=Clazz.newPackage("javax.xml.bind.util"),I$=[[0,'java.util.ArrayList','javax.xml.bind.ValidationEvent','javax.xml.bind.util.Messages','InternalError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ValidationEventCollector", null, null, 'javax.xml.bind.ValidationEventHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.events=Clazz.new_(1,{E:"javax.xml.bind.ValidationEvent"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['events','java.util.List']]]

Clazz.newMeth(C$, 'getEvents$', function () {
return this.events.toArray$TTA(Clazz.array($I$(2), [this.events.size$()]));
});

Clazz.newMeth(C$, 'reset$', function () {
this.events.clear$();
});

Clazz.newMeth(C$, 'hasEvents$', function () {
return !this.events.isEmpty$();
});

Clazz.newMeth(C$, ['handleEvent$javax_xml_bind_ValidationEvent','handleEvent$'], function (event) {
this.events.add$TE(event);
var retVal=true;
switch (event.getSeverity$()) {
case 0:
retVal=true;
break;
case 1:
retVal=true;
break;
case 2:
retVal=false;
break;
default:
C$._assert$Z$S(false, $I$(3).format$S$O("ValidationEventCollector.UnrecognizedSeverity", new Integer(event.getSeverity$())));
break;
}
return retVal;
});

Clazz.newMeth(C$, '_assert$Z$S', function (b, msg) {
if (!b) {
throw Clazz.new_($I$(4,1).c$$S,[msg]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
