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
        { model: Event, as: 'eventsOwned' },
        { model: Event, as: 'eventsAttending' }
      ]
    });
    res.send(usersAndInfo);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    const user = await User.findOne({
      where: { id: userId }
    });
    res.send(user);
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
        { model: Event, as: 'eventsOwned' },
        { model: Event, as: 'eventsAttending' }
      ]
    });
    res.send(userAndInfo);
  } catch (error) {
    throw error;
  }
};

const UpdateUserDetails = async (req, res) => {
  try {
    let userId = parseInt(req.params.id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetAllUsersWithAllInfo,
  GetUserById,
  GetUserByIdWithAllInfo,
  UpdateUserDetails
};
