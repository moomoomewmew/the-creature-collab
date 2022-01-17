const { User, Event } = require('../models');

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetAllUsersWithAllInfo = async (req, res) => {
  try {
    const usersAndInfo = await User.findAll({
      include: [
        { model: Event, as: 'owned' },
        { model: Event, as: 'events' }
      ]
    });
    res.send(usersAndInfo);
  } catch (error) {
    throw error;
  }
};

const GetUserByIdWithAllInfo = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    const userAndInfo = await User.findOne({
      where: { id: userId },
      include: [
        { model: Event, as: 'owned' },
        { model: Event, as: 'events' }
      ]
    });
    res.send(userAndInfo);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetAllUsersWithAllInfo,
  GetUserByIdWithAllInfo
};
