(function(){var P$=Clazz.newPackage("net.imglib2.view.iteration"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SlicingCursor", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m'],'O',['s','net.imglib2.Cursor','sourceComponent','int[]','tmpPosition','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Cursor$net_imglib2_transform_integer_Slicing', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.s=source;
this.m=transformToSource.numTargetDimensions$();
var targetZero=Clazz.array(Boolean.TYPE, [this.m]);
var targetComponent=Clazz.array(Integer.TYPE, [this.m]);
transformToSource.getComponentZero$ZA(targetZero);
transformToSource.getComponentMapping$IA(targetComponent);
this.sourceComponent=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.m; ++d) if (!transformToSource.getComponentZero$I(d)) this.sourceComponent[transformToSource.getComponentMapping$I(d)]=d;

this.tmpPosition=Clazz.array(Long.TYPE, [this.m]);
transformToSource.getTranslation$JA(this.tmpPosition);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_iteration_SlicingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.s=cursor.s;
this.m=cursor.m;
this.sourceComponent=cursor.sourceComponent.clone$();
this.tmpPosition=cursor.tmpPosition.clone$();
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

Clazz.newMeth(C$, 'get$', function () {
return this.s.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_iteration_SlicingCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.s.jumpFwd$J(steps);
});

Clazz.newMeth(C$, 'fwd$', function () {
this.s.fwd$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.s.reset$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.s.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.s.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
return;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
