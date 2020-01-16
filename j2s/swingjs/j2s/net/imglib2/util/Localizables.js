(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,['net.imglib2.util.Localizables','.LocationRandomAccess'],['net.imglib2.util.Localizables','.LocationRandomAccessible'],'net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Localizables", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LocationRandomAccessible',10],['LocationRandomAccess',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'asLongArray$net_imglib2_Localizable', function (localizable) {
var result=Clazz.array(Long.TYPE, [localizable.numDimensions$()]);
localizable.localize$JA(result);
return result;
}, 1);

Clazz.newMeth(C$, 'randomAccessible$I', function (n) {
return Clazz.new_($I$(2,1).c$$I,[n]);
}, 1);

Clazz.newMeth(C$, 'randomAccessibleInterval$net_imglib2_Interval', function (interval) {
return $I$(3).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.randomAccessible$I(interval.numDimensions$()), interval);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Localizables, "LocationRandomAccessible", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RandomAccessible');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1).c$$I,[this.n]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Localizables, "LocationRandomAccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.Point', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Localizable', function (initialPosition) {
;C$.superclazz.c$$net_imglib2_Localizable.apply(this,[initialPosition]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return Clazz.new_(C$.c$$net_imglib2_Localizable,[this]);
});

Clazz.newMeth(C$, 'get$', function () {
return this;
});

Clazz.newMeth(C$, 'copy$', function () {
return this.copyRandomAccess$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
