(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FullSourceMapSlicingRandomAccess", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m'],'O',['s','net.imglib2.RandomAccess','sourceComponent','int[]','tmpPosition','long[]','+tmpDistance']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.s=source;
this.m=transformToSource.numTargetDimensions$();
var targetZero=Clazz.array(Boolean.TYPE, [this.m]);
var targetComponent=Clazz.array(Integer.TYPE, [this.m]);
transformToSource.getComponentZero$ZA(targetZero);
transformToSource.getComponentMapping$IA(targetComponent);
this.sourceComponent=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.m; ++d) if (transformToSource.getComponentZero$I(d)) this.s.setPosition$J$I(transformToSource.getTranslation$I(d), d);
 else this.sourceComponent[transformToSource.getComponentMapping$I(d)]=d;

this.tmpPosition=Clazz.array(Long.TYPE, [this.m]);
transformToSource.getTranslation$JA(this.tmpPosition);
this.tmpDistance=Clazz.array(Long.TYPE, [this.m]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_FullSourceMapSlicingRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.s=randomAccess.s.copyRandomAccess$();
this.m=randomAccess.m;
this.sourceComponent=randomAccess.sourceComponent.clone$();
this.tmpPosition=randomAccess.tmpPosition.clone$();
this.tmpDistance=randomAccess.tmpDistance.clone$();
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.getIntPosition$I(d);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
return this.s.getIntPosition$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
return this.s.getLongPosition$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.getFloatPosition$I(d);

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
return this.s.getFloatPosition$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
return this.s.getDoublePosition$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.s.fwd$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.s.bck$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.s.move$I$I(distance, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.s.move$J$I(distance, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() >= this.n});
for (var d=0; d < this.n; ++d) this.tmpDistance[this.sourceComponent[d]]=localizable.getLongPosition$I(d);

this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmpDistance[this.sourceComponent[d]]=distance[d];

this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmpDistance[this.sourceComponent[d]]=distance[d];

this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() >= this.n});
for (var d=0; d < this.n; ++d) this.tmpPosition[this.sourceComponent[d]]=localizable.getLongPosition$I(d);

this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmpPosition[this.sourceComponent[d]]=position[d];

this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmpPosition[this.sourceComponent[d]]=position[d];

this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.s.setPosition$I$I(position, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.s.setPosition$J$I(position, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'get$', function () {
return this.s.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_FullSourceMapSlicingRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
