(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,['net.imglib2.view.SubsampleView','.SubsampleRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SubsampleView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.RandomAccessible', 'net.imglib2.View']);
C$.$classes$=[['SubsampleRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RandomAccessible','steps','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$J', function (source, step) {
;C$.$init$.apply(this);
this.source=source;
this.steps=Clazz.array(Long.TYPE, [source.numDimensions$()]);
for (var d=0; d < this.steps.length; ++d) this.steps[d]=step;

}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$JA', function (source, steps) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return steps.length >= source.numDimensions$()}, function(){return "Dimensions do not match."});
this.source=source;
this.steps=steps.clone$();
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.source.numDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(1,1).c$$net_imglib2_Interval, [this, null, interval]);
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getSteps$', function () {
return this.steps.clone$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SubsampleView, "SubsampleRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tmp=Clazz.array(Long.TYPE, [this.this$0.source.numDimensions$()]);
}, 1);

C$.$fields$=[['O',['sourceRandomAccess','net.imglib2.RandomAccess','tmp','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (sourceRandomAccess) {
;C$.$init$.apply(this);
this.sourceRandomAccess=sourceRandomAccess;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_RandomAccess.apply(this, [this.this$0.source.randomAccess$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
C$.c$$net_imglib2_RandomAccess.apply(this, [this.this$0.source.randomAccess$net_imglib2_Interval(interval)]);
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) position[d]=(this.sourceRandomAccess.getIntPosition$I(d)/(this.this$0.steps[d]|0)|0);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) position[d]=(this.sourceRandomAccess.getLongPosition$I(d)/this.this$0.steps[d]|0);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (this.sourceRandomAccess.getIntPosition$I(d)/(this.this$0.steps[d]|0)|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return (this.sourceRandomAccess.getLongPosition$I(d)/this.this$0.steps[d]|0);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) position[d]=this.sourceRandomAccess.getFloatPosition$I(d) / this.this$0.steps[d];

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) position[d]=this.sourceRandomAccess.getDoublePosition$I(d) / this.this$0.steps[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.sourceRandomAccess.getFloatPosition$I(d) / this.this$0.steps[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.sourceRandomAccess.getDoublePosition$I(d) / this.this$0.steps[d];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.source.numDimensions$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.sourceRandomAccess.move$J$I(this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.sourceRandomAccess.move$J$I(-this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.sourceRandomAccess.move$J$I(distance * this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.sourceRandomAccess.move$J$I(distance * this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=localizable.getLongPosition$I(d) * this.this$0.steps[d];

this.sourceRandomAccess.move$JA(this.tmp);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=distance[d] * this.this$0.steps[d];

this.sourceRandomAccess.move$JA(this.tmp);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=distance[d] * this.this$0.steps[d];

this.sourceRandomAccess.move$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=localizable.getLongPosition$I(d) * this.this$0.steps[d];

this.sourceRandomAccess.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=position[d] * this.this$0.steps[d];

this.sourceRandomAccess.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < this.this$0.steps.length; ++d) this.tmp[d]=position[d] * this.this$0.steps[d];

this.sourceRandomAccess.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.sourceRandomAccess.setPosition$J$I(position * this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.sourceRandomAccess.setPosition$J$I(position * this.this$0.steps[d], d);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceRandomAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_RandomAccess, [this, null, this.sourceRandomAccess.copyRandomAccess$()]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
