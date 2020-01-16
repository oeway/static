(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint','net.imglib2.realtransform.ScaleGet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Scale", null, 'net.imglib2.realtransform.AbstractScale', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.Scale']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_realtransform_Scale$net_imglib2_RealPointA', function (s, inverse, ds) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[s, ds]);C$.$init$.apply(this);
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (s) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[s.clone$(), Clazz.array($I$(1), [s.length])]);C$.$init$.apply(this);
var si=Clazz.array(Double.TYPE, [s.length]);
var dis=Clazz.array($I$(1), [s.length]);
for (var d=0; d < s.length; ++d) {
si[d]=1.0 / s[d];
var dd=Clazz.new_($I$(1,1).c$$I,[s.length]);
dd.setPosition$D$I(s[d], d);
this.ds[d]=dd;
var ddi=Clazz.new_($I$(1,1).c$$I,[s.length]);
ddi.setPosition$D$I(si[d], d);
dis[d]=ddi;
}
this.inverse=Clazz.new_(C$.c$$DA$net_imglib2_realtransform_Scale$net_imglib2_RealPointA,[si, this, dis]);
}, 1);

Clazz.newMeth(C$, 'set$DA', function (s) {
for (var d=0; d < s.length; ++d) {
this.s[d]=s[d];
this.inverse.s[d]=1.0 / s[d];
this.ds[d].setPosition$D$I(s[d], d);
this.inverse.ds[d].setPosition$D$I(this.inverse.s[d], d);
}
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$DA,[this.s]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_ScaleGet','preConcatenate$TA'], function (a) {
for (var d=0; d < this.numDimensions$(); ++d) this.set$DA([this.s[d] * a.getScale$I(d)]);

return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_ScaleGet','concatenate$TA'], function (a) {
return this.preConcatenate$net_imglib2_realtransform_ScaleGet(a);
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
for (var i=0; i < this.s.length; i++) {
if (this.s[i] != 1.0 ) {
return false;
}}
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
