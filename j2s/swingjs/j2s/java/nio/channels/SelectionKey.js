(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SelectionKey");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.attachmentUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "attachment");
}

Clazz.newMeth(C$, '$init$', function () {
this.attachment=null;
}, 1);

C$.$fields$=[['O',['attachment','java.lang.Object']]
,['O',['attachmentUpdater','java.util.concurrent.atomic.AtomicReferenceFieldUpdater']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadable$', function () {
return (this.readyOps$() & 1) != 0;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return (this.readyOps$() & 4) != 0;
});

Clazz.newMeth(C$, 'isConnectable$', function () {
return (this.readyOps$() & 8) != 0;
});

Clazz.newMeth(C$, 'isAcceptable$', function () {
return (this.readyOps$() & 16) != 0;
});

Clazz.newMeth(C$, 'attach$O', function (ob) {
return C$.attachmentUpdater.getAndSet$TT$TV(this, ob);
});

Clazz.newMeth(C$, 'attachment$', function () {
return this.attachment;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
