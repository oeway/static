(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[[0,'net.imglib2.interpolation.randomaccess.LanczosInterpolator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LanczosInterpolatorFactory", null, null, 'net.imglib2.interpolation.InterpolatorFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['clipping'],'D',['min','max'],'I',['alpha']]]

Clazz.newMeth(C$, 'c$$I$Z', function (alpha, clipping) {
;C$.$init$.apply(this);
this.alpha=alpha;
this.clipping=clipping;
this.min=this.max=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$D$D', function (alpha, min, max) {
;C$.$init$.apply(this);
this.alpha=alpha;
this.clipping=true;
this.min=min;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (min, max) {
;C$.$init$.apply(this);
this.alpha=3;
this.clipping=true;
this.min=min;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$Z.apply(this, [3, true]);
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible','create$TF'], function (randomAccessible) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_RandomAccessible$I$Z$D$D,[randomAccessible, this.alpha, this.clipping, this.min, this.max]);
});

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible$net_imglib2_RealInterval','create$TF$net_imglib2_RealInterval'], function (randomAccessible, interval) {
return this.create$net_imglib2_RandomAccessible(randomAccessible);
});

Clazz.newMeth(C$, 'setAlpha$I', function (alpha) {
this.alpha=alpha;
});

Clazz.newMeth(C$, 'setClipping$Z', function (clipping) {
this.clipping=clipping;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return this.alpha;
});

Clazz.newMeth(C$, 'getClipping$', function () {
return this.clipping;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
