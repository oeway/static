(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.sampler"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntervalSampler", null, null, 'net.imglib2.display.projector.sampler.ProjectedSampler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m_projectionDimension'],'L',['m_startPosition','m_endPosition'],'O',['m_source','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$I$J$J', function (projectionDimension, startPosition, endPosition) {
;C$.$init$.apply(this);
this.m_projectionDimension=projectionDimension;
this.m_startPosition=startPosition;
this.m_endPosition=endPosition;
}, 1);

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var i=0; i < steps; i++) {
this.fwd$();
}
});

Clazz.newMeth(C$, 'fwd$', function () {
this.m_source.fwd$I(this.m_projectionDimension);
});

Clazz.newMeth(C$, 'reset$', function () {
this.m_source.setPosition$J$I(this.m_startPosition, this.m_projectionDimension);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.m_source.getLongPosition$I(this.m_projectionDimension) <= this.m_endPosition);
});

Clazz.newMeth(C$, 'get$', function () {
return this.m_source.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return this.m_source.copy$();
});

Clazz.newMeth(C$, 'setRandomAccess$net_imglib2_RandomAccess', function (srcAccess) {
this.m_source=srcAccess;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
