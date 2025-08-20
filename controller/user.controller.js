const MyUser = (req, res) => {
    res.send("Hello from user controller");
};
const product =[
  {
    'id': '1',
    'name': 'rice',
    'cat': 'food',
    'cost': 'N500',
  },
  {
    'id': '2',
    'name': 'cutlass',
    'cat': 'tools',
    'cost': 'N250',
  },
];

module.exports = { MyUser };