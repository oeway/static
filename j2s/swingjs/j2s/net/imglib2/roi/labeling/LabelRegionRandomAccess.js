(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,'net.imglib2.type.logic.BoolType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelRegionRandomAccess", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['label','<T>','type','net.imglib2.type.logic.BoolType','source','net.imglib2.RandomAccess','offset','long[]','+tmp']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelRegion$JA', function (region, offset) {
;C$.superclazz.c$$I.apply(this,[region.numDimensions$()]);C$.$init$.apply(this);
this.source=region.regions.labeling.randomAccess$net_imglib2_Interval(region);
this.label=region.getLabel$();
this.type=Clazz.new_($I$(1,1));
this.offset=offset;
this.tmp=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelRegion$net_imglib2_Interval$JA', function (region, interval, offset) {
;C$.superclazz.c$$I.apply(this,[region.numDimensions$()]);C$.$init$.apply(this);
this.source=region.regions.labeling.randomAccess$net_imglib2_Interval(interval);
this.label=region.getLabel$();
this.type=Clazz.new_($I$(1,1));
this.offset=offset;
this.tmp=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelRegionRandomAccess', function (a) {
;C$.superclazz.c$$I.apply(this,[a.numDimensions$()]);C$.$init$.apply(this);
this.source=a.source.copyRandomAccess$();
this.type=a.type.copy$();
this.label=a.label;
this.offset=a.offset;
this.tmp=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.type.set$Z(this.source.get$().contains$O(this.label));
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_roi_labeling_LabelRegionRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.source.getIntPosition$I(d) + (this.offset[d]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.source.getLongPosition$I(d) + (this.offset[d]|0);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.source.getIntPosition$I(d) + (this.offset[d]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.source.getLongPosition$I(d) + (this.offset[d]|0);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.source.getFloatPosition$I(d) + this.offset[d];

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) position[d]=this.source.getDoublePosition$I(d) + this.offset[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.source.getFloatPosition$I(d) + this.offset[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.n});
return this.source.getDoublePosition$I(d) + this.offset[d];
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.source.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.source.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.source.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.source.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.source.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.source.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.source.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() == this.n});
localizable.localize$JA(this.tmp);
for (var d=0; d < this.n; ++d) this.tmp[d]-=this.offset[d];

this.source.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmp[d]=position[d] - this.offset[d];

this.source.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) this.tmp[d]=position[d] - this.offset[d];

this.source.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
Clazz.assert(C$, this, function(){return d <= this.n});
this.source.setPosition$J$I(position - this.offset[d], d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
Clazz.assert(C$, this, function(){return d <= this.n});
this.source.setPosition$J$I(position - this.offset[d], d);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
