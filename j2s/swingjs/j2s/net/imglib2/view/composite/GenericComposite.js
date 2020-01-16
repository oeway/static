(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[[0,'net.imglib2.view.composite.GenericComposite']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericComposite", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.view.composite.AbstractComposite');
C$.$classes$=[['Factory',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (sourceAccess) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[sourceAccess]);C$.$init$.apply(this);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GenericComposite, "Factory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.view.composite.CompositeFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccess','create$'], function (sourceAccess) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_RandomAccess,[sourceAccess]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
