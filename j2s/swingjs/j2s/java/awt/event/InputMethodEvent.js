(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InputMethodEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['committedCharacterCount'],'L',['when'],'O',['text','java.text.AttributedCharacterIterator']]]

Clazz.newMeth(C$, 'c$$java_awt_Event', function (event) {
;C$.superclazz.c$$java_awt_Event.apply(this,[event]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
return this.text;
});

Clazz.newMeth(C$, 'getCommittedCharacterCount$', function () {
return this.committedCharacterCount;
});

Clazz.newMeth(C$, 'getWhen$', function () {
return this.when;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
