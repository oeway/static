(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),I$=[[0,'java.util.Hashtable','io.scif.jj2000.j2k.util.StreamMsgLogger','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FacilityManager");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.loggerList=Clazz.new_($I$(1,1));
C$.defMsgLogger=Clazz.new_($I$(2,1).c$$java_io_OutputStream$java_io_OutputStream$I,[System.out, System.err, 78]);
C$.watchProgList=Clazz.new_($I$(1,1));
C$.defWatchProg=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['loggerList','java.util.Hashtable','defMsgLogger','io.scif.jj2000.j2k.util.MsgLogger','watchProgList','java.util.Hashtable','defWatchProg','io.scif.jj2000.j2k.util.ProgressWatch']]]

Clazz.newMeth(C$, 'registerProgressWatch$Thread$io_scif_jj2000_j2k_util_ProgressWatch', function (t, pw) {
if (pw == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (t == null ) {
C$.defWatchProg=pw;
} else {
C$.watchProgList.put$TK$TV(t, pw);
}}, 1);

Clazz.newMeth(C$, 'getProgressWatch$', function () {
var pw=C$.watchProgList.get$O($I$(3).currentThread$());
return (pw == null ) ? C$.defWatchProg : pw;
}, 1);

Clazz.newMeth(C$, 'registerMsgLogger$Thread$io_scif_jj2000_j2k_util_MsgLogger', function (t, ml) {
if (ml == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (t == null ) {
C$.defMsgLogger=ml;
} else {
C$.loggerList.put$TK$TV(t, ml);
}}, 1);

Clazz.newMeth(C$, 'getMsgLogger$', function () {
var ml=C$.loggerList.get$O($I$(3).currentThread$());
return (ml == null ) ? C$.defMsgLogger : ml;
}, 1);

Clazz.newMeth(C$, 'getMsgLogger$Thread', function (t) {
var ml=C$.loggerList.get$O(t);
return (ml == null ) ? C$.defMsgLogger : ml;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
