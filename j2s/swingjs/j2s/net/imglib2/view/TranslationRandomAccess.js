(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TranslationRandomAccess", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['s','net.imglib2.RandomAccess','translation','long[]','+tmp']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Translation', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.s=source;
this.translation=Clazz.array(Long.TYPE, [this.n]);
transformToSource.getTranslation$JA(this.translation);
this.tmp=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_TranslationRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.s=randomAccess.s.copyRandomAccess$();
this.translation=randomAccess.translation.clone$();
this.tmp=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.s.getIntPosition$I(d) - (this.translation[d]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.s.getLongPosition$I(d) - (this.translation[d]|0);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.s.getIntPosition$I(d) - (this.translation[d]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.s.getLongPosition$I(d) - (this.translation[d]|0);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.s.getFloatPosition$I(d) - this.translation[d];

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.s.getDoublePosition$I(d) - this.translation[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.s.getFloatPosition$I(d) - this.translation[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.s.getDoublePosition$I(d) - this.translation[d];
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.s.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.s.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.s.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.s.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.s.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.s.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.s.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() == this.n});
localizable.localize$JA(this.tmp);
for (var d=0; d < this.n; ++d) this.tmp[d]+=this.translation[d];

this.s.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmp[d]=position[d] + this.translation[d];

this.s.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmp[d]=position[d] + this.translation[d];

this.s.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
Clazz.assert(C$, this, function(){return d <= this.n});
this.s.setPosition$J$I(position + this.translation[d], d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
Clazz.assert(C$, this, function(){return d <= this.n});
this.s.setPosition$J$I(position + this.translation[d], d);
});

Clazz.newMeth(C$, 'get$', function () {
return this.s.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_TranslationRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
