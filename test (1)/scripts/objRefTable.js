const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{test: 0},
	{Button: 0},
	{Keyboard: 0},
	{Touch: 0}
];

self.InstanceType = {
	test: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Keyboard: class extends self.IInstance {},
	Touch: class extends self.IInstance {}
}