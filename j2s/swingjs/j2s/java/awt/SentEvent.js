(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Toolkit','sun.awt.SunToolkit']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SentEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['dispatched'],'O',['nested','java.awt.AWTEvent','toNotify','sun.awt.AppContext']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_AWTEvent.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent', function (nested) {
C$.c$$java_awt_AWTEvent$sun_awt_AppContext.apply(this, [nested, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent$sun_awt_AppContext', function (nested, toNotify) {
;C$.superclazz.c$$O$I.apply(this,[(nested != null ) ? nested.getSource$() : $I$(1).getDefaultToolkit$(), 1007]);C$.$init$.apply(this);
this.nested=nested;
this.toNotify=toNotify;
}, 1);

Clazz.newMeth(C$, 'dispatch$', function () {
try {
if (this.nested != null ) {
$I$(1).getEventQueue$().dispatchEvent$java_awt_AWTEvent(this.nested);
}} finally {
this.dispatched=true;
if (this.toNotify != null ) {
$I$(2).postEvent$sun_awt_AppContext$java_awt_AWTEvent(this.toNotify, Clazz.new_(C$));
}{
this.notifyAll$();
}}
});

Clazz.newMeth(C$, 'dispose$', function () {
this.dispatched=true;
if (this.toNotify != null ) {
$I$(2).postEvent$sun_awt_AppContext$java_awt_AWTEvent(this.toNotify, Clazz.new_(C$));
}{
this.notifyAll$();
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
