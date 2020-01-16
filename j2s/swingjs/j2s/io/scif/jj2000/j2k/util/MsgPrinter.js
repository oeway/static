(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "MsgPrinter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lw']]]

Clazz.newMeth(C$, 'c$$I', function (linewidth) {
;C$.$init$.apply(this);
this.lw=linewidth;
}, 1);

Clazz.newMeth(C$, 'getLineWidth$', function () {
return this.lw;
});

Clazz.newMeth(C$, 'setLineWidth$I', function (linewidth) {
if (linewidth < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.lw=linewidth;
});

Clazz.newMeth(C$, 'print$java_io_PrintWriter$I$I$S', function (out, flind, ind, msg) {
var start;
var end;
var pend;
var efflw;
var lind;
var i;
start=0;
end=0;
pend=0;
efflw=this.lw - flind;
lind=flind;
while ((end=p$1.nextLineEnd$S$I.apply(this, [msg, pend])) != -1){
if (end == -2) {
for (i=0; i < lind; i++) {
out.print$S(" ");
}
out.println$S(msg.substring$I$I(start, pend));
if (p$1.nextWord$S$I.apply(this, [msg, pend]) == msg.length$()) {
out.println$S("");
start=pend;
break;
}} else {
if (efflw > end - pend) {
efflw-=end - pend;
pend=end;
continue;
} else {
for (i=0; i < lind; i++) {
out.print$S(" ");
}
if (start == pend) {
out.println$S(msg.substring$I$I(start, end));
pend=end;
} else {
out.println$S(msg.substring$I$I(start, pend));
}}}lind=ind;
efflw=this.lw - ind;
start=p$1.nextWord$S$I.apply(this, [msg, pend]);
pend=start;
if (start == -1) {
break;
}}
if (pend != start) {
for (i=0; i < lind; i++) {
out.print$S(" ");
}
out.println$S(msg.substring$I$I(start, pend));
}});

Clazz.newMeth(C$, 'nextLineEnd$S$I', function (str, from) {
var len=str.length$();
var c="\u0000";
while (from < len && (c=str.charAt$I(from)) != "\n"  && Character.isWhitespace$C(c) ){
from++;
}
if (c == "\n") {
return -2;
}if (from >= len) {
return -1;
}while (from < len && !Character.isWhitespace$C(str.charAt$I(from)) ){
from++;
}
return from;
}, p$1);

Clazz.newMeth(C$, 'nextWord$S$I', function (str, from) {
var len=str.length$();
var c="\u0000";
while (from < len && (c=str.charAt$I(from)) != "\n"  && Character.isWhitespace$C(c) ){
from++;
}
if (from >= len) {
return -1;
} else if (c == "\n") {
return from + 1;
} else {
return from;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
