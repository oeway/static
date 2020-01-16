(function(){var P$=Clazz.newPackage("org.scijava.io.nio"),p$1={},I$=[[0,'java.nio.ByteBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteBufferByteBank", null, null, 'org.scijava.io.ByteBank');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['size'],'O',['buffer','java.nio.ByteBuffer','provider','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.provider=(P$.ByteBufferByteBank$lambda1$||(P$.ByteBufferByteBank$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ByteBufferByteBank$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t) { return $$.allocate$I.apply(null,[t])});
})()
)); return Clazz.new_(1,{T:"Integer",R:"java.nio.ByteBuffer"},P$.ByteBufferByteBank$lambda1.$init$, [this, null])})($I$(1)))));
this.buffer=this.provider.apply$(new Integer(10000));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Function', function (provider) {
;C$.$init$.apply(this);
this.provider=provider;
this.buffer=provider.apply$(new Integer(10000));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Function$I', function (provider, initialCapacity) {
;C$.$init$.apply(this);
this.provider=provider;
this.buffer=provider.apply$(new Integer(initialCapacity));
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.$init$.apply(this);
this.provider=(P$.ByteBufferByteBank$lambda2$||(P$.ByteBufferByteBank$lambda2$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ByteBufferByteBank$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t) { return $$.allocate$I.apply(null,[t])});
})()
)); return Clazz.new_(1,{T:"Integer",R:"java.nio.ByteBuffer"},P$.ByteBufferByteBank$lambda2.$init$, [this, null])})($I$(1)))));
this.buffer=this.provider.apply$(new Integer(initialCapacity));
}, 1);

Clazz.newMeth(C$, 'getMaxBufferSize$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'setBytes$J$BA$I$I', function (startpos, bytes, offset, length) {
this.checkWritePos$J$J(startpos, startpos + length);
var neededCapacity=this.size + length;
p$1.ensureCapacity$I.apply(this, [neededCapacity]);
this.buffer.position$I((startpos|0));
this.buffer.put$BA$I$I(bytes, offset, length);
p$1.updateSize$J.apply(this, [startpos + length]);
});

Clazz.newMeth(C$, 'setByte$J$B', function (pos, b) {
this.checkWritePos$J$J(pos, pos);
if (pos == this.buffer.capacity$()) {
p$1.ensureCapacity$I.apply(this, [(pos|0) + 1]);
}this.buffer.put$I$B((pos|0), ($b$[0] = b, $b$[0]));
p$1.updateSize$J.apply(this, [pos + 1]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.buffer.clear$();
this.size=0;
});

Clazz.newMeth(C$, 'getByte$J', function (pos) {
this.checkReadPos$J$J(pos, pos);
return $b$[0] = this.buffer.get$I((pos|0)), $b$[0];
});

Clazz.newMeth(C$, 'getBytes$J$BA$I$I', function (startPos, b, offset, length) {
this.checkReadPos$J$J(startPos, startPos + length);
var readLength=(Math.min(this.size$() - startPos, length)|0);
this.buffer.position$I((startPos|0));
this.buffer.get$BA$I$I(b, offset, readLength);
return readLength;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
var className=this.buffer.getClass$().getName$();
return className.equals$O("java.nio.HeapByteBufferR") || className.equals$O("java.nio.DirectByteBufferR") ;
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (minCapacity) {
var oldCapacity=this.buffer.capacity$();
if (minCapacity <= oldCapacity) return;
var growth=Math.min((oldCapacity/2|0) + 16, 2147483647);
var newCapacity;
if (growth > 2147483647 - oldCapacity) {
newCapacity=2147483647;
} else newCapacity=oldCapacity + growth;
var newLength=Math.max(minCapacity, newCapacity);
this.buffer.position$I(0);
var newBuffer=$I$(1).allocate$I(newLength);
newBuffer.order$java_nio_ByteOrder(this.buffer.order$());
newBuffer.put$java_nio_ByteBuffer(this.buffer);
this.buffer=newBuffer;
}, p$1);

Clazz.newMeth(C$, 'updateSize$J', function (newSize) {
this.size=((newSize > this.size ? newSize : this.size)|0);
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
