(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageConsumerQueue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['interested','secure'],'O',['next','sun.awt.image.ImageConsumerQueue','consumer','java.awt.image.ImageConsumer','securityContext','java.lang.Object']]]

Clazz.newMeth(C$, 'removeConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer$Z', function (cqbase, ic, stillinterested) {
var cqprev=null;
for (var cq=cqbase; cq != null ; cq=cq.next) {
if (cq.consumer === ic ) {
if (cqprev == null ) {
cqbase=cq.next;
} else {
cqprev.next=cq.next;
}cq.interested=stillinterested;
break;
}cqprev=cq;
}
return cqbase;
}, 1);

Clazz.newMeth(C$, 'isConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer', function (cqbase, ic) {
for (var cq=cqbase; cq != null ; cq=cq.next) {
if (cq.consumer === ic ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'c$$sun_awt_image_InputStreamImageSource$java_awt_image_ImageConsumer', function (src, ic) {
;C$.$init$.apply(this);
this.consumer=ic;
this.interested=true;
this.secure=true;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return ("[" + this.consumer + ", " + (this.interested ? "" : "not ") + "interested" + (this.securityContext != null  ? ", " + this.securityContext : "") + "]" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
