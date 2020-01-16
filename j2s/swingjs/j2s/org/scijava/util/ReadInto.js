(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'StringBuilder','java.io.BufferedReader','java.io.InputStreamReader','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReadInto", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['Z',['done','closeOnEOF'],'O',['reader','java.io.BufferedReader','out','java.io.PrintStream','buffer','StringBuilder']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_io_PrintStream', function ($in, out) {
C$.c$$java_io_InputStream$java_io_PrintStream$Z.apply(this, [$in, out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_io_PrintStream$Z', function ($in, out, closeOnEOF) {
Clazz.super_(C$, this);
this.reader=Clazz.new_($I$(2,1).c$$java_io_Reader,[Clazz.new_($I$(3,1).c$$java_io_InputStream,[$in])]);
this.out=out;
this.closeOnEOF=closeOnEOF;
if (out == null  && closeOnEOF ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot close null output"]);
this.start$();
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
for (; ; ) {
var line=this.reader.readLine$();
if (line == null ) break;
if (this.out != null ) this.out.println$S(line);
 else this.buffer.append$S(line).append$S("\n");
if (this.done) break;
$I$(4).sleep$J(0);
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
if (this.closeOnEOF) {
this.out.close$();
}try {
this.reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'interrupt$', function () {
try {
this.done$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
C$.superclazz.prototype.interrupt$.apply(this, []);
});

Clazz.newMeth(C$, 'done$', function () {
if (this.done) return;
this.done=true;
this.reader.close$();
});

Clazz.newMeth(C$, 'toString', function () {
if (this.out != null ) return "ReadInto " + this.out;
return this.buffer.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
