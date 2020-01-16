(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pnm"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PNMMetadataFormatResources", null, 'java.util.ListResourceBundle');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.contents=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["FormatName", "The format name. One of PBM, PGM or PPM"]), Clazz.array(java.lang.Object, -1, ["Variant", "The variant: RAWBITS or ASCII"]), Clazz.array(java.lang.Object, -1, ["Width", "The image width"]), Clazz.array(java.lang.Object, -1, ["Height", "The image height"]), Clazz.array(java.lang.Object, -1, ["MaximumSample", "The maximum bit depth of one sample."]), Clazz.array(java.lang.Object, -1, ["Comment", "A comment."])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['contents','Object[][]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getContents$', function () {
return C$.contents;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
