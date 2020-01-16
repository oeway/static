(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealTransformSequence", null, 'net.imglib2.realtransform.AbstractRealTransformSequence');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$);
for (var t, $t = this.transforms.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) copy.add$TR(t.copy$());

return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
