(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[[0,['net.imglib2.view.composite.CompositeView','.CompositeRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.RandomAccessible', 'net.imglib2.View']);
C$.$classes$=[['CompositeRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['compositeFactory','net.imglib2.view.composite.CompositeFactory','source','net.imglib2.RandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$net_imglib2_view_composite_CompositeFactory', function (source, compositeFactory) {
;C$.$init$.apply(this);
this.source=source;
this.compositeFactory=compositeFactory;
this.n=source.numDimensions$() - 1;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompositeView, "CompositeRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RandomAccess','composite','<C extends Composite<T>>']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.randomAccess$();
this.composite=this.this$0.compositeFactory.create$(this.sourceAccess);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_composite_CompositeView_CompositeRandomAccess', function (other) {
;C$.$init$.apply(this);
this.sourceAccess=other.sourceAccess.copyRandomAccess$();
this.composite=this.this$0.compositeFactory.create$(this.sourceAccess);
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=this.sourceAccess.getIntPosition$I(d);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=this.sourceAccess.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.sourceAccess.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.sourceAccess.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=this.sourceAccess.getFloatPosition$I(d);

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.this$0.n; ++d) position[d]=this.sourceAccess.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.sourceAccess.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.sourceAccess.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.n;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.sourceAccess.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.sourceAccess.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.sourceAccess.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.sourceAccess.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.move$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.move$I$I(distance[d], d);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.move$J$I(distance[d], d);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.setPosition$J$I(localizable.getLongPosition$I(d), d);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.setPosition$I$I(position[d], d);

});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var d=0; d < this.this$0.n; ++d) this.sourceAccess.setPosition$J$I(position[d], d);

});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.sourceAccess.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.sourceAccess.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'get$', function () {
return this.composite;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_view_composite_CompositeView_CompositeRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1