const pickName = <Obj extends { name: Type }, Type = string>(obj: Obj): Type =>
	obj.name;

export default pickName;
