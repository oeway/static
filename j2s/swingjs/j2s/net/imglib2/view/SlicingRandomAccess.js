(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SlicingRandomAccess", null, 'net.imglib2.AbstractLocalizable', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m'],'O',['s','net.imglib2.RandomAccess','sourceZero','boolean[]','sourceComponent','int[]','tmpPosition','long[]','+tmpDistance']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.s=source;
this.m=transformToSource.numTargetDimensions$();
var targetZero=Clazz.array(Boolean.TYPE, [this.m]);
var targetComponent=Clazz.array(Integer.TYPE, [this.m]);
transformToSource.getComponentZero$ZA(targetZero);
transformToSource.getComponentMapping$IA(targetComponent);
this.sourceZero=Clazz.array(Boolean.TYPE, [this.n]);
this.sourceComponent=Clazz.array(Integer.TYPE, [this.n]);
$I$(1).fill$ZA$Z(this.sourceZero, true);
for (var d=0; d < this.m; ++d) if (targetZero[d]) this.s.setPosition$J$I(transformToSource.getTranslation$I(d), d);
 else {
var e=targetComponent[d];
this.sourceZero[e]=false;
this.sourceComponent[e]=d;
}
this.tmpPosition=Clazz.array(Long.TYPE, [this.m]);
transformToSource.getTranslation$JA(this.tmpPosition);
this.tmpDistance=Clazz.array(Long.TYPE, [this.m]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_SlicingRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.s=randomAccess.s.copyRandomAccess$();
this.m=randomAccess.m;
this.sourceZero=randomAccess.sourceZero.clone$();
this.sourceComponent=randomAccess.sourceComponent.clone$();
this.tmpPosition=randomAccess.tmpPosition.clone$();
this.tmpDistance=randomAccess.tmpDistance.clone$();
}, 1);

Clazz.newMeth(C$, 'fwd$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
++this.position[d];
if (!this.sourceZero[d]) this.s.fwd$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
Clazz.assert(C$, this, function(){return d < this.n});
--this.position[d];
if (!this.sourceZero[d]) this.s.bck$I(this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]+=distance;
if (!this.sourceZero[d]) this.s.move$I$I(distance, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]+=distance;
if (!this.sourceZero[d]) this.s.move$J$I(distance, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() >= this.n});
for (var d=0; d < this.n; ++d) {
var distance=localizable.getLongPosition$I(d);
this.position[d]+=distance;
if (!this.sourceZero[d]) this.tmpDistance[this.sourceComponent[d]]=distance;
}
this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
if (!this.sourceZero[d]) this.tmpDistance[this.sourceComponent[d]]=distance[d];
}
this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
Clazz.assert(C$, this, function(){return distance.length >= this.n});
for (var d=0; d < this.n; ++d) {
this.position[d]+=distance[d];
if (!this.sourceZero[d]) this.tmpDistance[this.sourceComponent[d]]=distance[d];
}
this.s.move$JA(this.tmpDistance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
Clazz.assert(C$, this, function(){return localizable.numDimensions$() >= this.n});
for (var d=0; d < this.n; ++d) {
var p=localizable.getLongPosition$I(d);
this.position[d]=p;
if (!this.sourceZero[d]) this.tmpPosition[this.sourceComponent[d]]=p;
}
this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) {
var p=position[d];
this.position[d]=p;
if (!this.sourceZero[d]) this.tmpPosition[this.sourceComponent[d]]=p;
}
this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
Clazz.assert(C$, this, function(){return position.length >= this.n});
for (var d=0; d < this.n; ++d) {
var p=position[d];
this.position[d]=p;
if (!this.sourceZero[d]) this.tmpPosition[this.sourceComponent[d]]=p;
}
this.s.setPosition$JA(this.tmpPosition);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]=position;
if (!this.sourceZero[d]) this.s.setPosition$I$I(position, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
Clazz.assert(C$, this, function(){return d < this.n});
this.position[d]=position;
if (!this.sourceZero[d]) this.s.setPosition$J$I(position, this.sourceComponent[d]);
});

Clazz.newMeth(C$, 'get$', function () {
return this.s.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_SlicingRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
