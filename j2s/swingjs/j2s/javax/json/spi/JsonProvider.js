(function(){var P$=Clazz.newPackage("javax.json.spi"),I$=[[0,'java.util.ServiceLoader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JsonProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'provider$', function () {
var loader=$I$(1).load$Class(Clazz.getClass(C$));
var it=loader.iterator$();
if (it.hasNext$()) {
return it.next$();
}try {
var clazz=Clazz.forName("org.glassfish.json.JsonProviderImpl");
return clazz.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["Provider org.glassfish.json.JsonProviderImpl not found", x]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["Provider " + "org.glassfish.json.JsonProviderImpl" + " could not be instantiated: " + x , x]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
