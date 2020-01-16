(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),I$=[[0,'java.io.PrintWriter','io.scif.jj2000.j2k.util.MsgPrinter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StreamMsgLogger", null, null, 'io.scif.jj2000.j2k.util.MsgLogger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['out','java.io.PrintWriter','+err','mp','io.scif.jj2000.j2k.util.MsgPrinter']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_io_OutputStream$I', function (outstr, errstr, lw) {
;C$.$init$.apply(this);
this.out=Clazz.new_($I$(1,1).c$$java_io_OutputStream$Z,[outstr, true]);
this.err=Clazz.new_($I$(1,1).c$$java_io_OutputStream$Z,[errstr, true]);
this.mp=Clazz.new_($I$(2,1).c$$I,[lw]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$java_io_Writer$I', function (outstr, errstr, lw) {
;C$.$init$.apply(this);
this.out=Clazz.new_($I$(1,1).c$$java_io_Writer$Z,[outstr, true]);
this.err=Clazz.new_($I$(1,1).c$$java_io_Writer$Z,[errstr, true]);
this.mp=Clazz.new_($I$(2,1).c$$I,[lw]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_PrintWriter$java_io_PrintWriter$I', function (outstr, errstr, lw) {
;C$.$init$.apply(this);
this.out=outstr;
this.err=errstr;
this.mp=Clazz.new_($I$(2,1).c$$I,[lw]);
}, 1);

Clazz.newMeth(C$, 'printmsg$I$S', function (sev, msg) {
var lout;
var ind;
var prefix;
switch (sev) {
case 0:
prefix="[LOG]: ";
lout=this.out;
break;
case 1:
prefix="[INFO]: ";
lout=this.out;
break;
case 2:
prefix="[WARNING]: ";
lout=this.err;
break;
case 3:
prefix="[ERROR]: ";
lout=this.err;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Severity " + sev + " not valid." ]);
}
this.mp.print$java_io_PrintWriter$I$I$S(lout, 0, prefix.length$(), prefix + msg);
lout.flush$();
});

Clazz.newMeth(C$, 'println$S$I$I', function (str, flind, ind) {
this.mp.print$java_io_PrintWriter$I$I$S(this.out, flind, ind, str);
});

Clazz.newMeth(C$, 'flush$', function () {
this.out.flush$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
