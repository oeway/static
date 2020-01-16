(function(){var P$=Clazz.newPackage("net.imglib2.position"),I$=[[0,'net.imglib2.type.numeric.real.DoubleType',['net.imglib2.position.RealPositionRealRandomAccessible','.RealPositionRealRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealPositionRealRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RealRandomAccessible');
C$.$classes$=[['RealPositionRealRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','d']]]

Clazz.newMeth(C$, 'c$$I$I', function (numDimensions, d) {
;C$.$init$.apply(this);
this.n=numDimensions;
this.d=d;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealPositionRealRandomAccessible, "RealPositionRealRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.RealPoint', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['t','net.imglib2.type.numeric.real.DoubleType']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.this$0.n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.t.set$D(this.position[this.this$0.d]);
return this.t;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$, [this, null]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
