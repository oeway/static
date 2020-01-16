(function(){var P$=Clazz.newPackage("net.imglib2.img"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractNativeImg", null, 'net.imglib2.img.AbstractImg', 'net.imglib2.img.NativeImg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['numEntities'],'O',['entitiesPerPixel','net.imglib2.util.Fraction','linkedType','<T extends NativeType<T>>']]]

Clazz.newMeth(C$, 'c$$JA$net_imglib2_util_Fraction', function (dim, entitiesPerPixel) {
;C$.superclazz.c$$JA.apply(this,[dim]);C$.$init$.apply(this);
this.entitiesPerPixel=entitiesPerPixel;
this.numEntities=entitiesPerPixel.mulCeil$J(this.numPixels);
}, 1);

Clazz.newMeth(C$, ['setLinkedType$TT'], function (type) {
this.linkedType=type;
});

Clazz.newMeth(C$, 'createLinkedType$', function () {
try {
return this.linkedType.duplicateTypeOnSameNativeImg$();
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
