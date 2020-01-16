(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransformRandomAccess", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RandomAccess','transformToSource','net.imglib2.transform.Transform','tmp','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$net_imglib2_transform_Transform', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
this.source=source;
this.transformToSource=transformToSource;
this.tmp=Clazz.array(Long.TYPE, [transformToSource.numTargetDimensions$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_TransformRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.source=randomAccess.source.copyRandomAccess$();
this.transformToSource=randomAccess.transformToSource;
this.tmp=Clazz.array(Long.TYPE, [randomAccess.tmp.length]);
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]+=1;
});

Clazz.newMeth(C$, 'bck$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]-=1;
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]+=distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() >= this.n});
for (var d=0; d < this.n; ++d) this.position[d]+=localizable.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) this.position[d]+=distance[d];

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) this.position[d]+=distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() == this.n});
localizable.localize$JA(this.position);
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
Clazz.assert(C$, this, function(){return pos.length >= this.n});
for (var d=0; d < this.n; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
Clazz.assert(C$, this, function(){return pos.length >= this.n});
for (var d=0; d < this.n; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]=pos;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]=pos;
});

Clazz.newMeth(C$, 'get$', function () {
this.transformToSource.apply$JA$JA(this.position, this.tmp);
this.source.setPosition$JA(this.tmp);
return this.source.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_TransformRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
