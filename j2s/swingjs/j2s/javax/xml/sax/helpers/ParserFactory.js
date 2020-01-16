(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),I$=[[0,'javax.xml.sax.helpers.NewInstance']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParserFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeParser$', function () {
var className=System.getProperty$S("javax.xml.sax.parser");
if (className == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["No value for sax.parser property"]);
} else {
return C$.makeParser$S(className);
}}, 1);

Clazz.newMeth(C$, 'makeParser$S', function (className) {
return $I$(1).newInstance$ClassLoader$S($I$(1).getClassLoader$(), className);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
