(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConversionRequest");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['srcType','java.lang.reflect.Type','+destType','src','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$reflect_Type', function (src, destType) {
C$.c$$O$reflect_Type$reflect_Type.apply(this, [src, src == null  ? null : src.getClass$(), destType]);
}, 1);

Clazz.newMeth(C$, 'c$$reflect_Type$reflect_Type', function (srcType, destType) {
C$.c$$O$reflect_Type$reflect_Type.apply(this, [null, srcType, destType]);
}, 1);

Clazz.newMeth(C$, 'c$$O$reflect_Type$reflect_Type', function (src, srcType, destType) {
;C$.$init$.apply(this);
this.src=src;
this.srcType=srcType;
this.destType=destType;
}, 1);

Clazz.newMeth(C$, 'sourceType$', function () {
return this.srcType;
});

Clazz.newMeth(C$, 'sourceClass$', function () {
return $I$(1).raw$reflect_Type(this.srcType);
});

Clazz.newMeth(C$, 'sourceObject$', function () {
return this.src;
});

Clazz.newMeth(C$, 'destType$', function () {
return this.destType;
});

Clazz.newMeth(C$, 'destClass$', function () {
return $I$(1).raw$reflect_Type(this.destType);
});

Clazz.newMeth(C$, 'setSourceObject$O', function (o) {
if (!this.sourceClass$().isInstance$O(o)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Object of type: " + o.getClass$() + " provided. Expected: " + this.srcType ]);
}this.src=o;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
