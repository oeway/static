(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NumberToNumberConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
if (src == null  || dest == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null input"]);
if (!this.getInputType$().isInstance$O(src)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected input of type " + this.getInputType$().getSimpleName$() + ", but got " + src.getClass$().getSimpleName$() ]);
}if ($I$(1).box$Class(dest) !== this.getOutputType$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected output class of " + this.getOutputType$().getSimpleName$() + ", but got " + dest.getSimpleName$() ]);
}return this.convert$Number(src);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
