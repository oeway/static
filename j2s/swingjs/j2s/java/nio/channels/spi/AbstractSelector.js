(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'java.util.concurrent.atomic.AtomicBoolean','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractSelector", null, 'java.nio.channels.Selector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectorOpen=Clazz.new_($I$(1,1).c$$Z,[true]);
this.cancelledKeys=Clazz.new_(1,{E:"java.nio.channels.SelectionKey"},$I$(2,1));
this.interruptor=null;
}, 1);

C$.$fields$=[['O',['selectorOpen','java.util.concurrent.atomic.AtomicBoolean','provider','java.nio.channels.spi.SelectorProvider','cancelledKeys','java.util.Set','interruptor','sun.nio.ch.Interruptible']]]

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
Clazz.super_(C$, this);
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'cancel$java_nio_channels_SelectionKey', function (k) {
{
this.cancelledKeys.add$TE(k);
}});

Clazz.newMeth(C$, 'close$', function () {
var open=this.selectorOpen.getAndSet$Z(false);
if (!open) return;
this.implCloseSelector$();
});

Clazz.newMeth(C$, 'isOpen$', function () {
return this.selectorOpen.get$();
});

Clazz.newMeth(C$, 'provider$', function () {
return this.provider;
});

Clazz.newMeth(C$, 'cancelledKeys$', function () {
return this.cancelledKeys;
});

Clazz.newMeth(C$, 'deregister$java_nio_channels_spi_AbstractSelectionKey', function (key) {
(key.channel$()).removeKey$java_nio_channels_SelectionKey(key);
});

Clazz.newMeth(C$, 'begin$', function () {
});

Clazz.newMeth(C$, 'end$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
