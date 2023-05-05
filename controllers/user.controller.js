const User = require('../models/user.model');

exports.findAll = async (req, res, next) =>{
    const users = await User.findAll({
      where: {
        status: 'available',
      },
      attributes: { exclude: ['password'] },
    });
  
    res.status(200).json({
      status: 'success',
      results: users.length,
      users: users,
    });
  };

exports.findOne = async (req, res) => {
    const { user } = req;

    res.status(200).json({
      status: 'success',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
    });
  };
exports.create = async(req,res) => {
    const { name, email, password, role } =
    req.body;

    const user = await User.create({
        name,
        email,
        password,
        role,
    });

    res.status(201).json({
        status: 'succes',
        user,
    });
};

exports.update = async (req, res) =>{
    return res.status(200).json ({
        status: 'success',
    });
};

exports.delete = async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
  
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found.',
      });
    }
  
    await user.update({
      status: 'disabled',
    });
  
    res.status(200).json({
      message: 'User has been deleted.',
    });
  };
