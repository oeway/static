(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.sampler"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SelectiveSampler", null, null, 'net.imglib2.display.projector.sampler.ProjectedSampler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_selectedIndex=0;
}, 1);

C$.$fields$=[['I',['m_projectionDimension','m_selectedIndex'],'O',['m_projectedPositions','long[]','m_source','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$I$JA', function (projectionDimension, projectedPositions) {
;C$.$init$.apply(this);
this.m_projectedPositions=projectedPositions;
this.m_projectionDimension=projectionDimension;
}, 1);

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.m_selectedIndex+=steps;
});

Clazz.newMeth(C$, 'fwd$', function () {
this.m_selectedIndex++;
});

Clazz.newMeth(C$, 'reset$', function () {
this.m_selectedIndex=0;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.m_selectedIndex < this.m_projectedPositions.length);
});

Clazz.newMeth(C$, 'get$', function () {
this.m_source.setPosition$I$I(this.m_selectedIndex, this.m_projectionDimension);
return this.m_source.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
this.m_source.setPosition$I$I(this.m_selectedIndex, this.m_projectionDimension);
return this.m_source.copy$();
});

Clazz.newMeth(C$, 'setRandomAccess$net_imglib2_RandomAccess', function (srcAccess) {
this.m_source=srcAccess;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
