const { atom } = require("recoil");

const UserAtom = atom({
  key: 'UserAtom', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export default UserAtom