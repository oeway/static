(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'InternalError','StrictMath','java.util.Random']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MersenneTwisterFast", null, null, ['java.io.Serializable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['__haveNextNextGaussian'],'D',['__nextNextGaussian'],'I',['mti'],'O',['mt','int[]','+mag01']]]

Clazz.newMeth(C$, 'clone$', function () {
try {
var f=(Clazz.clone(this));
f.mt=(this.mt.clone$());
f.mag01=(this.mag01.clone$());
return f;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'stateEquals$O', function (o) {
if (o === this ) return true;
if (o == null  || !(Clazz.instanceOf(o, "org.scijava.util.MersenneTwisterFast")) ) return false;
var other=o;
if (this.mti != other.mti) return false;
for (var x=0; x < this.mag01.length; x++) if (this.mag01[x] != other.mag01[x]) return false;

for (var x=0; x < this.mt.length; x++) if (this.mt[x] != other.mt[x]) return false;

return true;
});

Clazz.newMeth(C$, 'readState$java_io_DataInputStream', function (stream) {
var len=this.mt.length;
for (var x=0; x < len; x++) this.mt[x]=stream.readInt$();

len=this.mag01.length;
for (var x=0; x < len; x++) this.mag01[x]=stream.readInt$();

this.mti=stream.readInt$();
this.__nextNextGaussian=stream.readDouble$();
this.__haveNextNextGaussian=stream.readBoolean$();
});

Clazz.newMeth(C$, 'writeState$java_io_DataOutputStream', function (stream) {
var len=this.mt.length;
for (var x=0; x < len; x++) stream.writeInt$I(this.mt[x]);

len=this.mag01.length;
for (var x=0; x < len; x++) stream.writeInt$I(this.mag01[x]);

stream.writeInt$I(this.mti);
stream.writeDouble$D(this.__nextNextGaussian);
stream.writeBoolean$Z(this.__haveNextNextGaussian);
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$J.apply(this, [System.currentTimeMillis$()]);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (seed) {
;C$.$init$.apply(this);
this.setSeed$J(seed);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (array) {
;C$.$init$.apply(this);
this.setSeed$IA(array);
}, 1);

Clazz.newMeth(C$, 'setSeed$J', function (seed) {
this.__haveNextNextGaussian=false;
this.mt=Clazz.array(Integer.TYPE, [624]);
this.mag01=Clazz.array(Integer.TYPE, [2]);
this.mag01[0]=0;
this.mag01[1]=-1727483681;
this.mt[0]=((seed & -1)|0);
for (this.mti=1; this.mti < 624; this.mti++) {
this.mt[this.mti]=(1812433253 * (this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)) + this.mti);
this.mt[this.mti]&=-1;
}
});

Clazz.newMeth(C$, 'setSeed$IA', function (array) {
if (array.length == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array length must be greater than zero"]);
var i;
var j;
var k;
this.setSeed$J(19650218);
i=1;
j=0;
k=(624 > array.length ? 624 : array.length);
for (; k != 0; k--) {
this.mt[i]=(this.mt[i] ^ ((this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)) * 1664525)) + array[j] + j ;
this.mt[i]&=-1;
i++;
j++;
if (i >= 624) {
this.mt[0]=this.mt[623];
i=1;
}if (j >= array.length) j=0;
}
for (k=623; k != 0; k--) {
this.mt[i]=(this.mt[i] ^ ((this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)) * 1566083941)) - i;
this.mt[i]&=-1;
i++;
if (i >= 624) {
this.mt[0]=this.mt[623];
i=1;
}}
this.mt[0]=-2147483648;
});

Clazz.newMeth(C$, 'nextInt$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return y;
});

Clazz.newMeth(C$, 'nextShort$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return ($s$[0] = (y >>> 16), $s$[0]);
});

Clazz.newMeth(C$, 'nextChar$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return String.fromCharCode((y >>> 16));
});

Clazz.newMeth(C$, 'nextBoolean$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return ((y >>> 31) != 0);
});

Clazz.newMeth(C$, 'nextBoolean$F', function (probability) {
var y;
if (probability < 0.0  || probability > 1.0  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["probability must be between 0.0 and 1.0 inclusive."]);
if (probability == 0.0 ) return false;
 else if (probability == 1.0 ) return true;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return (y >>> 8) / (1.6777216E7) < probability ;
});

Clazz.newMeth(C$, 'nextBoolean$D', function (probability) {
var y;
var z;
if (probability < 0.0  || probability > 1.0  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["probability must be between 0.0 and 1.0 inclusive."]);
if (probability == 0.0 ) return false;
 else if (probability == 1.0 ) return true;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (z >>> 1) ^ mag01[z & 1] ;
}
for (; kk < 623; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (z >>> 1) ^ mag01[z & 1] ;
}
z=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (z >>> 1) ^ mag01[z & 1] ;
this.mti=0;
}z=this.mt[this.mti++];
z^=z >>> 11;
z^=(z << 7) & -1658038656;
z^=(z << 15) & -272236544;
z^=(z >>> 18);
return ((((y >>> 6)) << 27) + (z >>> 5)) / 9.007199254740992E15 < probability ;
});

Clazz.newMeth(C$, 'nextByte$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return $b$[0] = ((y >>> 24)|0), $b$[0];
});

Clazz.newMeth(C$, 'nextBytes$BA', function (bytes) {
var y;
for (var x=0; x < bytes.length; x++) {
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
bytes[x]=(((y >>> 24)|0)|0);
}
});

Clazz.newMeth(C$, 'nextLong$', function () {
var y;
var z;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (z >>> 1) ^ mag01[z & 1] ;
}
for (; kk < 623; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (z >>> 1) ^ mag01[z & 1] ;
}
z=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (z >>> 1) ^ mag01[z & 1] ;
this.mti=0;
}z=this.mt[this.mti++];
z^=z >>> 11;
z^=(z << 7) & -1658038656;
z^=(z << 15) & -272236544;
z^=(z >>> 18);
return ((y) << 32) + z;
});

Clazz.newMeth(C$, 'nextLong$J', function (n) {
if (n <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["n must be positive, got: " + n]);
var bits;
var val;
do {
var y;
var z;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (z >>> 1) ^ mag01[z & 1] ;
}
for (; kk < 623; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (z >>> 1) ^ mag01[z & 1] ;
}
z=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (z >>> 1) ^ mag01[z & 1] ;
this.mti=0;
}z=this.mt[this.mti++];
z^=z >>> 11;
z^=(z << 7) & -1658038656;
z^=(z << 15) & -272236544;
z^=(z >>> 18);
bits=((((y) << 32) + z) >>> 1);
val=bits % n;
} while (bits - val + (n - 1) < 0);
return val;
});

Clazz.newMeth(C$, 'nextDouble$', function () {
var y;
var z;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (z >>> 1) ^ mag01[z & 1] ;
}
for (; kk < 623; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (z >>> 1) ^ mag01[z & 1] ;
}
z=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (z >>> 1) ^ mag01[z & 1] ;
this.mti=0;
}z=this.mt[this.mti++];
z^=z >>> 11;
z^=(z << 7) & -1658038656;
z^=(z << 15) & -272236544;
z^=(z >>> 18);
return ((((y >>> 6)) << 27) + (z >>> 5)) / 9.007199254740992E15;
});

Clazz.newMeth(C$, 'nextDouble$Z$Z', function (includeZero, includeOne) {
var d=0.0;
do {
d=this.nextDouble$();
if (includeOne && this.nextBoolean$() ) d += 1.0;
} while ((d > 1.0 ) || (!includeZero && d == 0.0  ) );
return d;
});

Clazz.newMeth(C$, 'nextGaussian$', function () {
if (this.__haveNextNextGaussian) {
this.__haveNextNextGaussian=false;
return this.__nextNextGaussian;
} else {
var v1;
var v2;
var s;
do {
var y;
var z;
var a;
var b;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (z >>> 1) ^ mag01[z & 1] ;
}
for (; kk < 623; kk++) {
z=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (z >>> 1) ^ mag01[z & 1] ;
}
z=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (z >>> 1) ^ mag01[z & 1] ;
this.mti=0;
}z=this.mt[this.mti++];
z^=z >>> 11;
z^=(z << 7) & -1658038656;
z^=(z << 15) & -272236544;
z^=(z >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
a=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (a >>> 1) ^ mag01[a & 1] ;
}
for (; kk < 623; kk++) {
a=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (a >>> 1) ^ mag01[a & 1] ;
}
a=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (a >>> 1) ^ mag01[a & 1] ;
this.mti=0;
}a=this.mt[this.mti++];
a^=a >>> 11;
a^=(a << 7) & -1658038656;
a^=(a << 15) & -272236544;
a^=(a >>> 18);
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
b=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (b >>> 1) ^ mag01[b & 1] ;
}
for (; kk < 623; kk++) {
b=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (b >>> 1) ^ mag01[b & 1] ;
}
b=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (b >>> 1) ^ mag01[b & 1] ;
this.mti=0;
}b=this.mt[this.mti++];
b^=b >>> 11;
b^=(b << 7) & -1658038656;
b^=(b << 15) & -272236544;
b^=(b >>> 18);
v1=2 * (((((y >>> 6)) << 27) + (z >>> 5)) / 9.007199254740992E15) - 1;
v2=2 * (((((a >>> 6)) << 27) + (b >>> 5)) / 9.007199254740992E15) - 1;
s=v1 * v1 + v2 * v2;
} while (s >= 1  || s == 0  );
var multiplier=$I$(2).sqrt$D(-2 * $I$(2).log$D(s) / s);
this.__nextNextGaussian=v2 * multiplier;
this.__haveNextNextGaussian=true;
return v1 * multiplier;
}});

Clazz.newMeth(C$, 'nextFloat$', function () {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return (y >>> 8) / (1.6777216E7);
});

Clazz.newMeth(C$, 'nextFloat$Z$Z', function (includeZero, includeOne) {
var d=0.0;
do {
d=this.nextFloat$();
if (includeOne && this.nextBoolean$() ) d += 1.0;
} while ((d > 1.0 ) || (!includeZero && d == 0.0  ) );
return d;
});

Clazz.newMeth(C$, 'nextInt$I', function (n) {
if (n <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["n must be positive, got: " + n]);
if ((n & -n) == n) {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
return (((n * (y >>> 1)) >> 31)|0);
}var bits;
var val;
do {
var y;
if (this.mti >= 624) {
var kk;
var mt=this.mt;
var mag01=this.mag01;
for (kk=0; kk < 227; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 1] ;
}
for (; kk < 623; kk++) {
y=(mt[kk] & -2147483648) | (mt[kk + 1] & 2147483647);
mt[kk]=mt[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1] ;
}
y=(mt[623] & -2147483648) | (mt[0] & 2147483647);
mt[623]=mt[396] ^ (y >>> 1) ^ mag01[y & 1] ;
this.mti=0;
}y=this.mt[this.mti++];
y^=y >>> 11;
y^=(y << 7) & -1658038656;
y^=(y << 15) & -272236544;
y^=(y >>> 18);
bits=(y >>> 1);
val=bits % n;
} while (bits - val + (n - 1) < 0);
return val;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var j;
var r;
r=Clazz.new_(C$.c$$IA,[Clazz.array(Integer.TYPE, -1, [291, 564, 837, 1110])]);
System.out.println$S("Output of MersenneTwisterFast with new (2002/1/26) seeding mechanism");
for (j=0; j < 1000; j++) {
var l=r.nextInt$();
if (l < 0) l+=4294967296;
var s=String.valueOf$J(l);
while (s.length$() < 10)s=" " + s;

System.out.print$S(s + " ");
if (j % 5 == 4) System.out.println$();
}
var SEED=4357;
var xx;
var ms;
System.out.println$S("\nTime to test grabbing 100000000 ints");
var rr=Clazz.new_($I$(3,1).c$$J,[4357]);
xx=0;
ms=System.currentTimeMillis$();
for (j=0; j < 100000000; j++) xx+=rr.nextInt$();

System.out.println$S("java.util.Random: " + (System.currentTimeMillis$() - ms) + "          Ignore this: " + xx );
r=Clazz.new_(C$.c$$J,[4357]);
ms=System.currentTimeMillis$();
xx=0;
for (j=0; j < 100000000; j++) xx+=r.nextInt$();

System.out.println$S("Mersenne Twister Fast: " + (System.currentTimeMillis$() - ms) + "          Ignore this: " + xx );
System.out.println$S("\nGrab the first 1000 booleans");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextBoolean$() + " ");
if (j % 8 == 7) System.out.println$();
}
if (!(j % 8 == 7)) System.out.println$();
System.out.println$S("\nGrab 1000 booleans of increasing probability using nextBoolean(double)");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextBoolean$D((j / 999.0)) + " ");
if (j % 8 == 7) System.out.println$();
}
if (!(j % 8 == 7)) System.out.println$();
System.out.println$S("\nGrab 1000 booleans of increasing probability using nextBoolean(float)");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextBoolean$F((j / 999.0)) + " ");
if (j % 8 == 7) System.out.println$();
}
if (!(j % 8 == 7)) System.out.println$();
var bytes=Clazz.array(Byte.TYPE, [1000]);
System.out.println$S("\nGrab the first 1000 bytes using nextBytes");
r=Clazz.new_(C$.c$$J,[4357]);
r.nextBytes$BA(bytes);
for (j=0; j < 1000; j++) {
System.out.print$S(bytes[j] + " ");
if (j % 16 == 15) System.out.println$();
}
if (!(j % 16 == 15)) System.out.println$();
var b;
System.out.println$S("\nGrab the first 1000 bytes -- must be same as nextBytes");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S((b=($b$[0] = r.nextByte$(), $b$[0])) + " ");
if (b != bytes[j]) System.out.print$S("BAD ");
if (j % 16 == 15) System.out.println$();
}
if (!(j % 16 == 15)) System.out.println$();
System.out.println$S("\nGrab the first 1000 shorts");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextShort$() + " ");
if (j % 8 == 7) System.out.println$();
}
if (!(j % 8 == 7)) System.out.println$();
System.out.println$S("\nGrab the first 1000 ints");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextInt$() + " ");
if (j % 4 == 3) System.out.println$();
}
if (!(j % 4 == 3)) System.out.println$();
System.out.println$S("\nGrab the first 1000 ints of different sizes");
r=Clazz.new_(C$.c$$J,[4357]);
var max=1;
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextInt$I(max) + " ");
max*=2;
if (max <= 0) max=1;
if (j % 4 == 3) System.out.println$();
}
if (!(j % 4 == 3)) System.out.println$();
System.out.println$S("\nGrab the first 1000 longs");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextLong$() + " ");
if (j % 3 == 2) System.out.println$();
}
if (!(j % 3 == 2)) System.out.println$();
System.out.println$S("\nGrab the first 1000 longs of different sizes");
r=Clazz.new_(C$.c$$J,[4357]);
var max2=1;
for (j=0; j < 1000; j++) {
System.out.print$S(r.nextLong$J(max2) + " ");
max2*=2;
if (max2 <= 0) max2=1;
if (j % 4 == 3) System.out.println$();
}
if (!(j % 4 == 3)) System.out.println$();
System.out.println$S("\nGrab the first 1000 floats");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(new Float(r.nextFloat$()).toString() + " ");
if (j % 4 == 3) System.out.println$();
}
if (!(j % 4 == 3)) System.out.println$();
System.out.println$S("\nGrab the first 1000 doubles");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(new Double(r.nextDouble$()).toString() + " ");
if (j % 3 == 2) System.out.println$();
}
if (!(j % 3 == 2)) System.out.println$();
System.out.println$S("\nGrab the first 1000 gaussian doubles");
r=Clazz.new_(C$.c$$J,[4357]);
for (j=0; j < 1000; j++) {
System.out.print$S(new Double(r.nextGaussian$()).toString() + " ");
if (j % 3 == 2) System.out.println$();
}
if (!(j % 3 == 2)) System.out.println$();
}, 1);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
